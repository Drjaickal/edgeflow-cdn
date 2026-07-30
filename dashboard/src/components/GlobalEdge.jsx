/* =========================
   Imports
========================= */

import { Server, Circle } from "lucide-react";

/* =========================
   Fallback Data
========================= */

const defaultEdges = [
    {
        city: "Delhi",
        url: "http://127.0.0.1:8001",
    },
    {
        city: "Mumbai",
        url: "http://127.0.0.1:8002",
    },
    {
        city: "Bangalore",
        url: "http://127.0.0.1:8003",
    },
];

/* =========================
   Global Edge Component
========================= */

function GlobalEdge({ edges = [], metrics = [] }) {

    /* =========================
       Select Data Source
    ========================= */

    const edgeList = edges.length ? edges : defaultEdges;

    /* =========================
       Render
    ========================= */

    return (

        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

            {/* =========================
                Header
            ========================= */}

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-white">
                    Global Edge Network
                </h2>

                <span className="text-green-400 text-sm">
                    ● Live
                </span>

            </div>

            {/* =========================
                World Map Placeholder
            ========================= */}

            <div className="h-48 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center mb-6">

                <h2 className="text-slate-500 text-lg">
                    🌍 World Map (Coming Soon)
                </h2>

            </div>

            {/* =========================
                Edge Servers
            ========================= */}

            <div className="space-y-4">

                {edgeList.map((edge, index) => {

                    const metric = metrics.find(
                        (m) => m.city === edge.city
                    );

                    return (

                        <div
                            key={index}
                            className="bg-[#0f172a] border border-slate-700 rounded-xl p-4 hover:border-violet-600 transition-all"
                        >

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">

                                    <Server
                                        className="text-violet-400"
                                        size={22}
                                    />

                                    <div>

                                        <h3 className="text-white font-semibold">
                                            {edge.city}
                                        </h3>

                                        <p className="text-slate-400 text-sm">
                                            {edge.url}
                                        </p>

                                    </div>

                                </div>

                                <Circle
                                    size={12}
                                    className="fill-green-500 text-green-500"
                                />

                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-5">

                                <div>

                                    <p className="text-slate-400 text-xs">
                                        Requests
                                    </p>

                                    <h4 className="text-white font-semibold mt-1">
                                        {metric?.total_requests ?? "--"}
                                    </h4>

                                </div>

                                <div>

                                    <p className="text-slate-400 text-xs">
                                        Cache Hit
                                    </p>

                                    <h4 className="text-green-400 font-semibold mt-1">
                                        {metric?.cache_hit_ratio ?? "--"}%
                                    </h4>

                                </div>

                                <div>

                                    <p className="text-slate-400 text-xs">
                                        Latency
                                    </p>

                                    <h4 className="text-cyan-400 font-semibold mt-1">
                                        {metric?.average_latency ?? "--"} ms
                                    </h4>

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}

export default GlobalEdge;