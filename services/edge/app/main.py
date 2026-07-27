from pathlib import Path

import httpx
from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI(
    title="EdgeFlow Edge Server",
    version="1.0"
)

CACHE_DIR = Path(__file__).resolve().parent.parent / "cache"

ORIGIN_URL = "http://127.0.0.1:8000"


@app.get("/")
def home():
    return {
        "message": "Edge Server Running"
    }


@app.get("/files/{filename}")
async def get_file(filename: str):

    print(f"\n📥 Incoming Request : {filename}")

    cache_file = CACHE_DIR / filename

    # -------------------
    # CACHE HIT
    # -------------------
    if cache_file.exists():

        print("✅ CACHE HIT")
        print("Serving file from Edge Cache\n")

        return FileResponse(cache_file)

    # -------------------
    # CACHE MISS
    # -------------------

    print("❌ CACHE MISS")
    print("Downloading from Origin Server...")

    async with httpx.AsyncClient() as client:

        response = await client.get(
            f"{ORIGIN_URL}/files/{filename}"
        )

        if response.status_code != 200:

            print("File not found on Origin\n")

            return {
                "error": "File not found in Origin"
            }

        cache_file.write_bytes(response.content)

        print("Saved into Cache")

    print("Serving downloaded file\n")

    return FileResponse(cache_file)