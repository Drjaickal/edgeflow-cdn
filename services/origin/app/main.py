from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse

app = FastAPI(
    title="EdgeFlow Origin Server",
    version="1.1.0"
)

# Project root -> origin_server
BASE_DIR = Path(__file__).resolve().parent.parent

# Storage directory
STORAGE_DIR = BASE_DIR / "storage"


@app.get("/")
def home():
    return {
        "message": "EdgeFlow Origin Server is Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/files/{filename}")
def get_file(filename: str):
    file_path = STORAGE_DIR / filename

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="File not found"
        )

    return FileResponse(file_path)