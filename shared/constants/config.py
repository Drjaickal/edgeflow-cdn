"""
============================================================
EdgeFlow CDN
Global Configuration
------------------------------------------------------------
This file contains all global constants and configuration
used across Controller, Edge Servers and Origin Server.
============================================================
"""

from pathlib import Path

# ============================================================
# Project Directories
# ============================================================

BASE_DIR = Path(__file__).resolve().parents[3]

LOG_DIRECTORY = BASE_DIR / "logs"

CACHE_DIRECTORY = BASE_DIR / "services" / "edge" / "cache"

ORIGIN_STORAGE_DIRECTORY = (
    BASE_DIR
    / "services"
    / "origin"
    / "storage"
    / "files"
)

# ============================================================
# Server Configuration
# ============================================================

CONTROLLER_HOST = "127.0.0.1"
CONTROLLER_PORT = 8000

ORIGIN_HOST = "127.0.0.1"
ORIGIN_PORT = 9000

EDGE_SERVERS = {
    "Delhi": {
        "host": "127.0.0.1",
        "port": 8001,
    },
    "Mumbai": {
        "host": "127.0.0.1",
        "port": 8002,
    },
    "Bangalore": {
        "host": "127.0.0.1",
        "port": 8003,
    },
}

# ============================================================
# Cache Configuration
# ============================================================

CACHE_MAX_FILES = 100

CACHE_MAX_SIZE_MB = 512

CACHE_EXPIRY_SECONDS = 3600

# ============================================================
# Dashboard Configuration
# ============================================================

DASHBOARD_REFRESH_INTERVAL = 10

REQUEST_HISTORY_LIMIT = 1000

# ============================================================
# Logging
# ============================================================

LOG_LEVEL = "INFO"

# ============================================================
# Health Check
# ============================================================

HEALTH_CHECK_INTERVAL = 15

SERVER_TIMEOUT = 5