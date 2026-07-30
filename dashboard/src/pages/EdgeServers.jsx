/* =========================
   Imports
========================= */

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";

import {
    Server,
    Globe,
    Activity,
    Clock3,
    Database,
} from "lucide-react";

/* =========================
   Sample Data
========================= */

const edgeServers = [
    {
        id: 1,
        city: "Delhi",
        url: "http://127.0.0.1:8001",
        requests: 4821,
        cacheHit: 91.5,
        latency: 12,
        status: "healthy",
    },
    {
        id: 2,
        city: "Mumbai",
        url: "http://127.0.0.1:8002",
        requests: 3710,
        cacheHit: 87.3,
        latency: 18,
        status: "healthy",
    },
    {
        id: 3,
        city: "Bangalore",
        url: "http://127.0.0.1:8003",
        requests: 2948,
        cacheHit: 84.8,
        latency: 25,
        status: "warning",
    },
];

/* =========================
   Edge Servers Page
========================= */

function EdgeServers() {

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex-1 flex flex-col overflow-auto bg-[#09111f]">

            {/* =========================
                Navbar
            ========================= */}

            <Navbar />

            <div className="p-8">

                {/* =========================
                    Header
                ========================= */}

                <PageHeader

                    title="Edge Servers"

                    subtitle="Monitor all registered CDN edge servers."

                    showRefresh={true}

                />

                {/* =========================
                    Edge Server Cards
                ========================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

                    {edgeServers.map((edge) => (

                        <div
                            key={edge.id}
                            className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-violet-600 transition-all"
                        >

                            {/* =========================
                                Card Header
                            ========================= */}

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">

                                    <Server
                                        className="text-violet-400"
                                        size={26}
                                    />

                                    <div>

                                        <h2 className="text-white text-xl font-semibold">
                                            {edge.city}
                                        </h2>

                                        <p className="text-slate-400 text-sm">
                                            Edge Node
                                        </p>

                                    </div>

                                </div>

                                <StatusBadge status={edge.status} />

                            </div>

                            {/* =========================
                                URL
                            ========================= */}

                            <div className="flex items-center gap-3 mt-6">

                                <Globe
                                    className="text-cyan-400"
                                    size={18}
                                />

                                <span className="text-slate-300 text-sm break-all">
                                    {edge.url}
                                </span>

                            </div>

                            {/* =========================
                                Statistics
                            ========================= */}

                            <div className="grid grid-cols-2 gap-5 mt-8">

                                <div>

                                    <div className="flex items-center gap-2 text-slate-400">

                                        <Activity size={16} />

                                        Requests

                                    </div>

                                    <h3 className="text-white text-xl font-bold mt-2">
                                        {edge.requests.toLocaleString()}
                                    </h3>

                                </div>

                                <div>

                                    <div className="flex items-center gap-2 text-slate-400">

                                        <Database size={16} />

                                        Cache Hit

                                    </div>

                                    <h3 className="text-green-400 text-xl font-bold mt-2">
                                        {edge.cacheHit}%
                                    </h3>

                                </div>

                                <div>

                                    <div className="flex items-center gap-2 text-slate-400">

                                        <Clock3 size={16} />

                                        Latency

                                    </div>

                                    <h3 className="text-cyan-400 text-xl font-bold mt-2">
                                        {edge.latency} ms
                                    </h3>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default EdgeServers;