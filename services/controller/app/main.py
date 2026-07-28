import time

import httpx
from fastapi import FastAPI

app = FastAPI(
    title="EdgeFlow Controller",
    version="2.0"
)

# -----------------------
# Registered Edge Servers
# -----------------------

EDGE_SERVERS = [
    {
        "id": 1,
        "city": "Delhi",
        "url": "http://127.0.0.1:8001"
    },
    {
        "id": 2,
        "city": "Mumbai",
        "url": "http://127.0.0.1:8002"
    },
    {
        "id": 3,
        "city": "Bangalore",
        "url": "http://127.0.0.1:8003"
    }
]


@app.get("/")
def home():
    return {
        "message": "EdgeFlow Controller Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# -----------------------
# Get Live Edge Status
# -----------------------

@app.get("/edges")
async def get_edges():

    result = []

    async with httpx.AsyncClient(timeout=2.0) as client:

        for edge in EDGE_SERVERS:

            start = time.perf_counter()

            try:

                response = await client.get(
                    f"{edge['url']}/health"
                )

                latency = round(
                    (time.perf_counter() - start) * 1000,
                    2
                )

                status = (
                    "healthy"
                    if response.status_code == 200
                    else "down"
                )

            except Exception:

                latency = None
                status = "down"

            result.append(
                {
                    "id": edge["id"],
                    "city": edge["city"],
                    "url": edge["url"],
                    "status": status,
                    "latency_ms": latency
                }
            )

    return result


# -----------------------
# Select Best Edge
# -----------------------

async def get_best_edge():

    healthy_edges = []

    async with httpx.AsyncClient(timeout=2.0) as client:

        for edge in EDGE_SERVERS:

            start = time.perf_counter()

            try:

                response = await client.get(
                    f"{edge['url']}/health"
                )

                latency = round(
                    (time.perf_counter() - start) * 1000,
                    2
                )

                if response.status_code == 200:

                    healthy_edges.append(
                        {
                            "id": edge["id"],
                            "city": edge["city"],
                            "url": edge["url"],
                            "latency_ms": latency
                        }
                    )

            except Exception:
                pass

    if not healthy_edges:
        return None

    return min(
        healthy_edges,
        key=lambda edge: edge["latency_ms"]
    )


# -----------------------
# Best Edge Endpoint
# -----------------------

@app.get("/route/{filename}")
async def route_file(filename: str):

    edge = await get_best_edge()

    if edge is None:
        return {
            "message": "No Edge Available"
        }

    return {
        "filename": filename,
        "edge_city": edge["city"],
        "edge_url": edge["url"],
        "download_url": f"{edge['url']}/files/{filename}"
    }