import os
from pathlib import Path

from dotenv import load_dotenv

# ---------------------------------------
# Project Root
# ---------------------------------------

PROJECT_ROOT = Path(__file__).resolve().parents[3]

# ---------------------------------------
# Config File
# ---------------------------------------

config_name = os.getenv("EDGE_ENV", ".env")

config_path = PROJECT_ROOT / config_name

print(f"\nLoading config : {config_path}")

if not config_path.exists():
    print("Config file not found.")
    print("Falling back to .env")
    config_path = PROJECT_ROOT / ".env"

load_dotenv(
    dotenv_path=config_path,
    override=True
)

# ---------------------------------------
# Environment Variables
# ---------------------------------------

EDGE_CITY = os.getenv(
    "EDGE_CITY",
    "Delhi"
)

EDGE_PORT = int(
    os.getenv(
        "EDGE_PORT",
        "8001"
    )
)

ORIGIN_URL = os.getenv(
    "ORIGIN_URL",
    "http://127.0.0.1:8000"
)

CONTROLLER_URL = os.getenv(
    "CONTROLLER_URL",
    "http://127.0.0.1:9000"
)

CACHE_FOLDER = os.getenv(
    "CACHE_FOLDER",
    f"cache/{EDGE_CITY.lower()}"
)

# ---------------------------------------
# Cache Directory
# ---------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

CACHE_DIR = BASE_DIR / CACHE_FOLDER

CACHE_DIR.mkdir(
    parents=True,
    exist_ok=True
)

# ---------------------------------------
# Debug Output
# ---------------------------------------

print("-----------------------------------")
print("Edge Configuration Loaded")
print("-----------------------------------")
print(f"City       : {EDGE_CITY}")
print(f"Port       : {EDGE_PORT}")
print(f"Origin     : {ORIGIN_URL}")
print(f"Controller : {CONTROLLER_URL}")
print(f"Cache      : {CACHE_DIR}")
print("-----------------------------------")