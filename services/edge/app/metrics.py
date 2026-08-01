"""
============================================================
EdgeFlow CDN
Metrics Manager
------------------------------------------------------------
Tracks all runtime statistics for an Edge Server.
============================================================
"""

from dataclasses import dataclass


@dataclass
class EdgeMetrics:

    total_requests: int = 0

    cache_hits: int = 0

    cache_misses: int = 0

    bytes_served: int = 0

    total_latency: float = 0.0

    # ========================================================
    # Record Cache Hit
    # ========================================================

    def record_hit(
        self,
        latency: float,
        size: int,
    ):

        self.total_requests += 1

        self.cache_hits += 1

        self.total_latency += latency

        self.bytes_served += size

    # ========================================================
    # Record Cache Miss
    # ========================================================

    def record_miss(
        self,
        latency: float,
        size: int,
    ):

        self.total_requests += 1

        self.cache_misses += 1

        self.total_latency += latency

        self.bytes_served += size

    # ========================================================
    # Average Latency
    # ========================================================

    @property
    def average_latency(self):

        if self.total_requests == 0:

            return 0

        return round(

            self.total_latency
            / self.total_requests,

            2,

        )

    # ========================================================
    # Cache Hit Ratio
    # ========================================================

    @property
    def cache_hit_ratio(self):

        if self.total_requests == 0:

            return 0

        return round(

            self.cache_hits
            / self.total_requests
            * 100,

            2,

        )

    # ========================================================
    # Export
    # ========================================================

    def to_dict(self):

        return {

            "total_requests": self.total_requests,

            "cache_hits": self.cache_hits,

            "cache_misses": self.cache_misses,

            "cache_hit_ratio": self.cache_hit_ratio,

            "average_latency": self.average_latency,

            "bytes_served": self.bytes_served,

        }


# ============================================================
# Singleton
# ============================================================

metrics = EdgeMetrics()