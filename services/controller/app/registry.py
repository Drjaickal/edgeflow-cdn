import time
from typing import List

EDGE_SERVERS: List[dict] = []


def update_heartbeat(url: str):

    for edge in EDGE_SERVERS:

        if edge["url"] == url:

            edge["last_seen"] = time.time()

            return True

    return False


def cleanup_dead_edges(timeout: int = 30):

    current = time.time()

    EDGE_SERVERS[:] = [

        edge

        for edge in EDGE_SERVERS

        if current - edge["last_seen"] <= timeout
    ]