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
    version="5.0",
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


@app.get("/files/{filename}")
async def get_file(filename: str):

    print(f"\n[{EDGE_CITY}] Incoming Request : {filename}")

    cache_file = CACHE_DIR / filename

    if cache_file.exists():

        print(f"[{EDGE_CITY}] ✅ CACHE HIT")

        return FileResponse(cache_file)

    print(f"[{EDGE_CITY}] ❌ CACHE MISS")

    async with httpx.AsyncClient() as client:

        response = await client.get(
            f"{ORIGIN_URL}/files/{filename}"
        )

    if response.status_code != 200:

        return {
            "error": "File not found"
        }

    cache_file.write_bytes(response.content)

    print(f"[{EDGE_CITY}] Downloaded from Origin")

    return FileResponse(cache_file)