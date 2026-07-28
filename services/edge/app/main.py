from pathlib import Path
import asyncio
from contextlib import asynccontextmanager

import httpx
from fastapi import FastAPI
from fastapi.responses import FileResponse

# -----------------------
# Configuration
# -----------------------

CACHE_DIR = Path(__file__).resolve().parent.parent / "cache"
CACHE_DIR.mkdir(exist_ok=True)

ORIGIN_URL = "http://127.0.0.1:8000"
CONTROLLER_URL = "http://127.0.0.1:9000"

EDGE_CITY = "Delhi"
EDGE_PORT = 8001


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

                print("Heartbeat sent")

        except Exception as e:

            print("Heartbeat failed:", e)

        await asyncio.sleep(10)


# -----------------------
# Startup
# -----------------------

@asynccontextmanager
async def lifespan(app: FastAPI):

    print("\nConnecting to Controller...")

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

    # Start heartbeat in background
    asyncio.create_task(heartbeat_loop())

    yield


app = FastAPI(
    title="EdgeFlow Edge Server",
    version="3.0",
    lifespan=lifespan
)


# -----------------------
# Routes
# -----------------------

@app.get("/")
def home():
    return {
        "message": "Edge Server Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/files/{filename}")
async def get_file(filename: str):

    print(f"\nIncoming Request : {filename}")

    cache_file = CACHE_DIR / filename

    if cache_file.exists():

        print("CACHE HIT")

        return FileResponse(cache_file)

    print("CACHE MISS")

    async with httpx.AsyncClient() as client:

        response = await client.get(
            f"{ORIGIN_URL}/files/{filename}"
        )

    if response.status_code != 200:

        return {
            "error": "File not found"
        }

    cache_file.write_bytes(response.content)

    print("Downloaded from Origin")

    return FileResponse(cache_file)