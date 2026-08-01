"""
============================================================
EdgeFlow CDN
Edge Registry
------------------------------------------------------------
Maintains all registered Edge Servers.
The Controller uses this registry to monitor
and route requests.
============================================================
"""

from dataclasses import dataclass
from typing import Dict


# ============================================================
# Edge Model
# ============================================================

@dataclass
class EdgeServer:

    name: str

    host: str

    port: int

    online: bool = False

    requests: int = 0

    cache_hit_ratio: float = 0.0

    average_latency: float = 0.0

    bytes_served: int = 0


# ============================================================
# Registry
# ============================================================

class EdgeRegistry:

    def __init__(self):

        self.edges: Dict[str, EdgeServer] = {}

    # ========================================================
    # Register
    # ========================================================

    def register(

        self,

        name,

        host,

        port,

    ):

        self.edges[name] = EdgeServer(

            name=name,

            host=host,

            port=port,

        )

    # ========================================================
    # Update
    # ========================================================

    def update(

        self,

        name,

        online,

        metrics,

    ):

        if name not in self.edges:

            return

        edge = self.edges[name]

        edge.online = online

        edge.requests = metrics.get(

            "total_requests",

            0,

        )

        edge.cache_hit_ratio = metrics.get(

            "cache_hit_ratio",

            0,

        )

        edge.average_latency = metrics.get(

            "average_latency",

            0,

        )

        edge.bytes_served = metrics.get(

            "bytes_served",

            0,

        )

    # ========================================================
    # Export
    # ========================================================

    def dashboard(self):

        return [

            {

                "name": edge.name,

                "host": edge.host,

                "port": edge.port,

                "online": edge.online,

                "requests": edge.requests,

                "cache_hit_ratio": edge.cache_hit_ratio,

                "average_latency": edge.average_latency,

                "bytes_served": edge.bytes_served,

            }

            for edge in self.edges.values()

        ]


# ============================================================
# Singleton
# ============================================================

registry = EdgeRegistry()