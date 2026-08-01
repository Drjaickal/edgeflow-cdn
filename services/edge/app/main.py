"""
============================================================
EdgeFlow CDN
Edge Server
------------------------------------------------------------
Edge Server Responsibilities

• Serve cached files
• Fetch files from Origin
• Maintain cache
• Collect metrics
• Report health
============================================================
"""

# ============================================================
# Imports
# ============================================================

import shutil
import time

from fastapi import FastAPI
from fastapi.responses import FileResponse

from shared.constants.config import CACHE_DIRECTORY

from .cache import cache
from .fetcher import fetch_file
from .metrics import metrics

# ============================================================
# FastAPI
# ============================================================

app = FastAPI(
    title="EdgeFlow Edge Server",
    version="2.0.0",
)

# ============================================================
# Initialize Cache Folder
# ============================================================

CACHE_DIRECTORY.mkdir(
    parents=True,
    exist_ok=True,
)

# ============================================================
# Root Endpoint
# ============================================================

@app.get("/")
def root():

    return {

        "service": "Edge Server",

        "status": "running",

        "version": "2.0.0",

    }

# ============================================================
# Health Endpoint
# ============================================================

@app.get("/health")
def health():

    stats = cache.stats()

    return {

        "status": "healthy",

        "cache_directory": str(
            CACHE_DIRECTORY
        ),

        "cached_files": stats["cached_files"],

        "cache_size": stats[
            "cache_size_bytes"
        ],

    }

# ============================================================
# Metrics Endpoint
# ============================================================

@app.get("/metrics")
def get_metrics():

    return metrics.to_dict()
# ============================================================
# Serve File
# ============================================================

@app.get("/file/{filename}")
def serve_file(filename: str):

    start_time = time.time()

    # --------------------------------------------------------
    # Remove Expired Cache
    # --------------------------------------------------------

    cache.cleanup()

    # --------------------------------------------------------
    # Cache Hit
    # --------------------------------------------------------

    if cache.exists(filename):

        cache.touch(filename)

        file_path = cache.path(filename)

        latency = (
            time.time() - start_time
        ) * 1000

        metrics.record_hit(

            latency=latency,

            size=file_path.stat().st_size,

        )

        return FileResponse(file_path)

    # --------------------------------------------------------
    # Cache Miss
    # --------------------------------------------------------

    content = fetch_file(filename)

    if content is None:

        return {

            "status": "error",

            "message": "Requested file not found on Origin Server.",

        }

    cache.save(

        filename,

        content,

    )

    file_path = cache.path(filename)

    latency = (
        time.time() - start_time
    ) * 1000

    metrics.record_miss(

        latency=latency,

        size=file_path.stat().st_size,

    )

    return FileResponse(file_path)

# ============================================================
# Cache Statistics
# ============================================================

@app.get("/cache")
def cache_information():

    return cache.stats()

# ============================================================
# Clear Cache
# ============================================================

@app.post("/cache/clear")
def clear_cache():

    cache.clear()

    return {

        "status": "success",

        "message": "Edge cache cleared successfully."

    }