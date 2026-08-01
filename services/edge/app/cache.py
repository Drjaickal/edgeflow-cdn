"""
============================================================
EdgeFlow CDN
Cache Manager
------------------------------------------------------------
Handles

• Cache Hit
• Cache Miss
• TTL
• LRU Eviction
• File Storage
============================================================
"""

from pathlib import Path
from time import time
import shutil

from shared.constants.config import (
    CACHE_DIRECTORY,
    CACHE_MAX_FILES,
    CACHE_EXPIRY_SECONDS,
)

# ============================================================
# Ensure Cache Directory Exists
# ============================================================

CACHE_DIRECTORY.mkdir(
    parents=True,
    exist_ok=True,
)

# ============================================================
# Cache Manager
# ============================================================

class CacheManager:

    def __init__(self):

        self.cache_dir = CACHE_DIRECTORY

        self.metadata = {}

    # ========================================================
    # Exists
    # ========================================================

    def exists(self, filename: str) -> bool:

        return (self.cache_dir / filename).exists()

    # ========================================================
    # Path
    # ========================================================

    def path(self, filename: str) -> Path:

        return self.cache_dir / filename

    # ========================================================
    # Save
    # ========================================================

    def save(self, filename: str, content: bytes):

        self.evict_if_needed()

        path = self.cache_dir / filename

        with open(path, "wb") as file:

            file.write(content)

        self.metadata[filename] = {

            "created": time(),

            "last_access": time(),

            "size": len(content),

        }

    # ========================================================
    # Touch
    # ========================================================

    def touch(self, filename: str):

        if filename in self.metadata:

            self.metadata[filename]["last_access"] = time()

    # ========================================================
    # Remove
    # ========================================================

    def remove(self, filename: str):

        path = self.cache_dir / filename

        if path.exists():

            path.unlink()

        self.metadata.pop(
            filename,
            None,
        )

    # ========================================================
    # Clear
    # ========================================================

    def clear(self):

        shutil.rmtree(
            self.cache_dir,
            ignore_errors=True,
        )

        self.cache_dir.mkdir(
            parents=True,
            exist_ok=True,
        )

        self.metadata.clear()

    # ========================================================
    # TTL Cleanup
    # ========================================================

    def cleanup(self):

        now = time()

        expired = []

        for filename, info in self.metadata.items():

            age = now - info["created"]

            if age > CACHE_EXPIRY_SECONDS:

                expired.append(filename)

        for filename in expired:

            self.remove(filename)

    # ========================================================
    # LRU Eviction
    # ========================================================

    def evict_if_needed(self):

        if len(self.metadata) < CACHE_MAX_FILES:

            return

        oldest = min(

            self.metadata,

            key=lambda name: self.metadata[name]["last_access"],

        )

        self.remove(oldest)

    # ========================================================
    # Statistics
    # ========================================================

    def stats(self):

        total_size = sum(

            info["size"]

            for info in self.metadata.values()

        )

        return {

            "cached_files": len(self.metadata),

            "cache_size_bytes": total_size,

        }


# ============================================================
# Singleton
# ============================================================

cache = CacheManager()