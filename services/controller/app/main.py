"""
============================================================
EdgeFlow CDN
Controller Server
------------------------------------------------------------
The Controller manages all Edge Servers and provides
a single dashboard API for the frontend.

Responsibilities

• Health Monitoring
• Metrics Aggregation
• Dashboard API
============================================================
"""

# ============================================================
# Imports
# ============================================================

import requests

from fastapi import FastAPI

from shared.constants.config import (
    EDGE_SERVERS,
)

# ============================================================
# FastAPI
# ============================================================

app = FastAPI(
    title="EdgeFlow Controller",
    version="1.0.0",
)

# ============================================================
# Root
# ============================================================

@app.get("/")
def root():

    return {

        "service": "Controller",

        "status": "running",

        "edges": len(EDGE_SERVERS),

    }

# ============================================================
# Health
# ============================================================

@app.get("/health")
def health():

    return {

        "status": "healthy"

    }

# ============================================================
# Edge Discovery
# ============================================================

@app.get("/edges")
def edges():

    result = []

    for name, edge in EDGE_SERVERS.items():

        url = f"http://{edge['host']}:{edge['port']}/health"

        try:

            response = requests.get(
                url,
                timeout=2,
            )

            online = response.status_code == 200

        except Exception:

            online = False

        result.append({

            "name": name,

            "host": edge["host"],

            "port": edge["port"],

            "online": online,

        })

    return result

# ============================================================
# Metrics
# ============================================================

@app.get("/metrics")
def metrics():

    metrics = []

    for name, edge in EDGE_SERVERS.items():

        url = f"http://{edge['host']}:{edge['port']}/metrics"

        try:

            response = requests.get(
                url,
                timeout=2,
            )

            data = response.json()

            data["edge"] = name

            metrics.append(data)

        except Exception:

            metrics.append({

                "edge": name,

                "status": "offline",

                "total_requests": 0,

                "cache_hit_ratio": 0,

                "average_latency": 0,

                "bytes_served": 0,

            })

    return metrics

# ============================================================
# Dashboard
# ============================================================

@app.get("/dashboard")
def dashboard():

    edge_status = edges()

    edge_metrics = metrics()

    return {

        "edges": edge_status,

        "metrics": edge_metrics,

    }