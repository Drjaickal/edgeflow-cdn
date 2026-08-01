"""
============================================================
EdgeFlow CDN
Origin Fetcher
------------------------------------------------------------
Responsible for downloading files from the Origin Server
when a Cache Miss occurs.
============================================================
"""

# ============================================================
# Imports
# ============================================================

import requests

from shared.constants.config import (
    ORIGIN_HOST,
    ORIGIN_PORT,
)

# ============================================================
# Origin URL
# ============================================================

ORIGIN_BASE_URL = (
    f"http://{ORIGIN_HOST}:{ORIGIN_PORT}"
)

# ============================================================
# Fetch File
# ============================================================

def fetch_file(filename: str):

    """
    Download a file from Origin Server.
    """

    url = f"{ORIGIN_BASE_URL}/file/{filename}"

    try:

        response = requests.get(
            url,
            timeout=5,
        )

        if response.status_code != 200:

            return None

        return response.content

    except requests.RequestException:

        return None

# ============================================================
# Origin Health
# ============================================================

def origin_health():

    """
    Check whether Origin Server is online.
    """

    try:

        response = requests.get(
            f"{ORIGIN_BASE_URL}/health",
            timeout=2,
        )

        return response.status_code == 200

    except requests.RequestException:

        return False

# ============================================================
# Origin Metrics
# ============================================================

def origin_metrics():

    """
    Get Origin metrics.
    """

    try:

        response = requests.get(
            f"{ORIGIN_BASE_URL}/metrics",
            timeout=2,
        )

        return response.json()

    except requests.RequestException:

        return {}