import time
import asyncio
from contextlib import asynccontextmanager

import httpx
from fastapi import FastAPI
from pydantic import BaseModel

from services.controller.app.registry import (
    EDGE_SERVERS,
    update_heartbeat,
    cleanup_dead_edges
)


# -----------------------
# Background Cleanup Task
# -----------------------

async def cleanup_loop():

    while True:

        cleanup_dead_edges()

        await asyncio.sleep(5)


# -----------------------
# Lifespan
# -----------------------

@asynccontextmanager
async def lifespan(app: FastAPI):

    print("Controller Started")
    asyncio.create_task(cleanup_loop())

    yield


app = FastAPI(
    title="EdgeFlow Controller",
    version="4.0",
    lifespan=lifespan
)


# -----------------------
# Models
# -----------------------

class EdgeRegister(BaseModel):
    city: str
    url: str


class Heartbeat(BaseModel):
    url: str


# -----------------------
# Basic Routes
# -----------------------

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
# Register Edge
# -----------------------

@app.post("/register")
async def register_edge(edge: EdgeRegister):

    for server in EDGE_SERVERS:

        if server["url"] == edge.url:

            return {
                "message": "Edge already registered",
                "edge": server
            }

    new_edge = {
        "id": len(EDGE_SERVERS) + 1,
        "city": edge.city,
        "url": edge.url,
        "last_seen": time.time()
    }

    EDGE_SERVERS.append(new_edge)

    return {
        "message": "Edge Registered Successfully",
        "edge": new_edge
    }


# -----------------------
# Heartbeat
# -----------------------

@app.post("/heartbeat")
async def heartbeat(data: Heartbeat):

    updated = update_heartbeat(data.url)

    if updated:
        return {
            "message": "Heartbeat received"
        }

    return {
        "message": "Edge not registered"
    }


# -----------------------
# Registered Edges
# -----------------------

@app.get("/registered")
def registered_edges():
    return EDGE_SERVERS


# -----------------------
# Live Edge Status
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
# Best Edge
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
# Route File
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