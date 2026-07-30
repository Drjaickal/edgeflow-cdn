import asyncio
from contextlib import asynccontextmanager

import httpx
from fastapi import FastAPI
from fastapi.responses import FileResponse

from services.edge.app.config import (
    CACHE_DIR,
    CONTROLLER_URL,
    EDGE_CITY,
    EDGE_PORT,
    ORIGIN_URL,
)

# =====================================================
# Edge Metrics
# =====================================================

TOTAL_REQUESTS = 0
CACHE_HITS = 0
CACHE_MISSES = 0


def get_hit_ratio():

    if TOTAL_REQUESTS == 0:
        return 0.0

    return round((CACHE_HITS / TOTAL_REQUESTS) * 100, 2)


# -----------------------
# Heartbeat Loop
# -----------------------

async def heartbeat_loop():

    while True:

        try:

            async with httpx.AsyncClient() as client:

                await client.post(
                    f"{CONTROLLER_URL}/heartbeat",
                    json={
                        "url": f"http://127.0.0.1:{EDGE_PORT}"
                    }
                )

                print(f"[{EDGE_CITY}] ❤️ Heartbeat sent")

        except Exception as e:

            print(f"[{EDGE_CITY}] ❌ Heartbeat failed:", e)

        await asyncio.sleep(10)


# -----------------------
# Startup
# -----------------------

@asynccontextmanager
async def lifespan(app: FastAPI):

    print("\n===================================")
    print("Starting EdgeFlow Edge Server")
    print("===================================")
    print(f"City        : {EDGE_CITY}")
    print(f"Port        : {EDGE_PORT}")
    print(f"Origin      : {ORIGIN_URL}")
    print(f"Controller  : {CONTROLLER_URL}")
    print(f"Cache       : {CACHE_DIR}")
    print("===================================\n")

    try:

        async with httpx.AsyncClient() as client:

            response = await client.post(
                f"{CONTROLLER_URL}/register",
                json={
                    "city": EDGE_CITY,
                    "url": f"http://127.0.0.1:{EDGE_PORT}"
                }
            )

            print(response.json())

    except Exception as e:

        print("Controller not reachable.")
        print(e)

    asyncio.create_task(heartbeat_loop())

    yield


app = FastAPI(
    title="EdgeFlow Edge Server",
    version="6.0",
    lifespan=lifespan
)


# -----------------------
# Routes
# -----------------------

@app.get("/")
def home():

    return {
        "message": f"{EDGE_CITY} Edge Running"
    }


@app.get("/health")
def health():

    return {
        "status": "healthy",
        "city": EDGE_CITY
    }


# =====================================================
# Metrics Endpoint
# =====================================================

@app.get("/metrics")
def metrics():

    return {

        "city": EDGE_CITY,

        "total_requests": TOTAL_REQUESTS,

        "cache_hits": CACHE_HITS,

        "cache_misses": CACHE_MISSES,

        "cache_hit_ratio": get_hit_ratio()
    }


# =====================================================
# File Endpoint
# =====================================================

@app.get("/files/{filename}")
async def get_file(filename: str):

    global TOTAL_REQUESTS
    global CACHE_HITS
    global CACHE_MISSES

    TOTAL_REQUESTS += 1

    print(f"\n[{EDGE_CITY}] Incoming Request : {filename}")

    cache_file = CACHE_DIR / filename

    # -----------------------
    # Cache Hit
    # -----------------------

    if cache_file.exists():

        CACHE_HITS += 1

        print(f"[{EDGE_CITY}] ✅ CACHE HIT")

        print(
            f"[{EDGE_CITY}] Stats -> "
            f"Requests={TOTAL_REQUESTS} | "
            f"Hits={CACHE_HITS} | "
            f"Misses={CACHE_MISSES} | "
            f"Ratio={get_hit_ratio()}%"
        )

        return FileResponse(cache_file)

    # -----------------------
    # Cache Miss
    # -----------------------

        CACHE_MISSES += 1

    print(f"[{EDGE_CITY}] ❌ CACHE MISS")

    url = f"{ORIGIN_URL}/files/{filename}"
    print("REQUEST URL =", url)

    try:

        async with httpx.AsyncClient(timeout=5.0) as client:

            response = await client.get(url)

        print("STATUS =", response.status_code)

    except Exception as e:

        print("ERROR =", repr(e))
        raise

    if response.status_code != 200:

        return {
            "error": "File not found"
        }

    cache_file.write_bytes(response.content)

    print(f"[{EDGE_CITY}] Downloaded from Origin")

    print(
        f"[{EDGE_CITY}] Stats -> "
        f"Requests={TOTAL_REQUESTS} | "
        f"Hits={CACHE_HITS} | "
        f"Misses={CACHE_MISSES} | "
        f"Ratio={get_hit_ratio()}%"
    )

    return FileResponse(cache_file)