/* ==========================================================
   Imports
========================================================== */

import {
    Server,
    CheckCircle,
    XCircle,
} from "lucide-react";

/* ==========================================================
   Component
========================================================== */

function GlobalEdge({

    edges = [],

    metrics = [],

}) {

    return (

        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6">

            {/* ==================================================
                Header
            =================================================== */}

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-3xl font-bold text-white">

                    Global Edge Network

                </h2>

                <span className="text-green-400 font-medium">

                    ● Live

                </span>

            </div>

            {/* ==================================================
                World Map Placeholder
            =================================================== */}

            <div className="h-52 rounded-xl border border-gray-700 flex items-center justify-center text-gray-500 mb-6">

                🌍 World Map (Coming Soon)

            </div>

            {/* ==================================================
                Edge Cards
            =================================================== */}

            <div className="space-y-4">

                {edges.map((edge) => {

                    const metric = metrics.find(

                        (m) => m.edge === edge.name

                    );

                    return (

                        <div
                            key={edge.name}
                            className="border border-violet-700 rounded-xl p-5 bg-[#0F172A]"
                        >

                            {/* ==============================
                                Header
                            =============================== */}

                            <div className="flex justify-between items-center">

                                <div className="flex gap-3 items-center">

                                    <Server
                                        size={22}
                                        className="text-violet-400"
                                    />

                                    <div>

                                        <h3 className="text-xl text-white font-semibold">

                                            {edge.name}

                                        </h3>

                                        <p className="text-gray-400 text-sm">

                                            http://{edge.host}:{edge.port}

                                        </p>

                                    </div>

                                </div>

                                {edge.online ? (

                                    <CheckCircle
                                        className="text-green-400"
                                    />

                                ) : (

                                    <XCircle
                                        className="text-red-500"
                                    />

                                )}

                            </div>

                            {/* ==============================
                                Metrics
                            =============================== */}

                            <div className="grid grid-cols-3 gap-4 mt-5">

                                <div>

                                    <p className="text-gray-400 text-sm">

                                        Requests

                                    </p>

                                    <h4 className="text-cyan-400 text-lg font-bold">

                                        {metric?.total_requests ?? "--"}

                                    </h4>

                                </div>

                                <div>

                                    <p className="text-gray-400 text-sm">

                                        Cache Hit

                                    </p>

                                    <h4 className="text-green-400 text-lg font-bold">

                                        {metric?.cache_hit_ratio ?? "--"}%

                                    </h4>

                                </div>

                                <div>

                                    <p className="text-gray-400 text-sm">

                                        Latency

                                    </p>

                                    <h4 className="text-sky-400 text-lg font-bold">

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