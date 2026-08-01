"""
============================================================
EdgeFlow CDN
Origin Server
------------------------------------------------------------
The Origin Server stores the original content that Edge
Servers fetch whenever a cache miss occurs.

Responsibilities:
    • Serve original files
    • Return server health
    • Provide server metrics
    • List available files
============================================================
"""

# ============================================================
# Imports
# ============================================================

from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse

from shared.constants.config import (
    ORIGIN_STORAGE_DIRECTORY,
)

# ============================================================
# FastAPI Application
# ============================================================

app = FastAPI(
    title="EdgeFlow Origin Server",
    version="1.0.0",
)

# ============================================================
# Create Storage Folder Automatically
# ============================================================

ORIGIN_STORAGE_DIRECTORY.mkdir(
    parents=True,
    exist_ok=True,
)

# ============================================================
# Root Endpoint
# ============================================================

@app.get("/")
def root():
    """
    Origin Server Home
    """

    return {
        "service": "Origin Server",
        "status": "running",
        "version": "1.0.0",
    }


# ============================================================
# Health Endpoint
# ============================================================

@app.get("/health")
def health():

    return {
        "status": "healthy",
        "storage": str(ORIGIN_STORAGE_DIRECTORY),
    }


# ============================================================
# Metrics Endpoint
# ============================================================

@app.get("/metrics")
def metrics():

    total_files = len(list(ORIGIN_STORAGE_DIRECTORY.glob("*")))

    return {
        "files": total_files,
        "storage_path": str(ORIGIN_STORAGE_DIRECTORY),
    }


# ============================================================
# List Files
# ============================================================

@app.get("/files")
def list_files():

    files = []

    for file in ORIGIN_STORAGE_DIRECTORY.iterdir():

        if file.is_file():

            files.append(file.name)

    return {
        "count": len(files),
        "files": files,
    }


# ============================================================
# Download File
# ============================================================

@app.get("/file/{filename}")
def download_file(filename: str):

    file_path = ORIGIN_STORAGE_DIRECTORY / filename

    if not file_path.exists():

        return {
            "error": "File not found"
        }

    return FileResponse(file_path)