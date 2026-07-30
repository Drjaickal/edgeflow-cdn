/* =========================
   Imports
========================= */

import {
    CheckCircle2,
    XCircle,
    Clock3,
    Server,
} from "lucide-react";

/* =========================
   Sample Data
========================= */

const requests = [
    {
        id: 1,
        time: "10:42:15",
        ip: "192.168.1.21",
        edge: "Delhi",
        file: "hero-banner.jpg",
        status: "HIT",
        latency: "3 ms",
        size: "1.8 MB",
    },
    {
        id: 2,
        time: "10:42:09",
        ip: "192.168.1.32",
        edge: "Mumbai",
        file: "style.css",
        status: "HIT",
        latency: "4 ms",
        size: "48 KB",
    },
    {
        id: 3,
        time: "10:41:58",
        ip: "192.168.1.41",
        edge: "Bangalore",
        file: "product-demo.mp4",
        status: "MISS",
        latency: "28 ms",
        size: "18 MB",
    },
    {
        id: 4,
        time: "10:41:31",
        ip: "192.168.1.17",
        edge: "Delhi",
        file: "app.js",
        status: "HIT",
        latency: "2 ms",
        size: "126 KB",
    },
    {
        id: 5,
        time: "10:41:05",
        ip: "192.168.1.90",
        edge: "Mumbai",
        file: "logo.png",
        status: "HIT",
        latency: "5 ms",
        size: "83 KB",
    },
];

/* =========================
   Recent Requests Component
========================= */

function RecentRequests() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

            {/* =========================
                Header
            ========================= */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        Recent Requests
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                        Latest CDN traffic activity
                    </p>

                </div>

                <button className="bg-violet-600 hover:bg-violet-500 transition px-4 py-2 rounded-lg text-white text-sm">
                    View All
                </button>

            </div>

            {/* =========================
                Table
            ========================= */}

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-slate-700 text-slate-400">

                            <th className="text-left py-3">Time</th>
                            <th className="text-left py-3">Client IP</th>
                            <th className="text-left py-3">Edge</th>
                            <th className="text-left py-3">File</th>
                            <th className="text-left py-3">Status</th>
                            <th className="text-left py-3">Latency</th>
                            <th className="text-left py-3">Size</th>

                        </tr>

                    </thead>

                    <tbody>

                        {requests.map((request) => (

                            <tr
                                key={request.id}
                                className="border-b border-slate-800 hover:bg-slate-800/50 transition"
                            >

                                <td className="py-4 text-slate-300">

                                    <div className="flex items-center gap-2">

                                        <Clock3 size={15} />

                                        {request.time}

                                    </div>

                                </td>

                                <td className="text-slate-300">
                                    {request.ip}
                                </td>

                                <td>

                                    <div className="flex items-center gap-2 text-white">

                                        <Server size={15} />

                                        {request.edge}

                                    </div>

                                </td>

                                <td className="text-slate-300">
                                    {request.file}
                                </td>

                                <td>

                                    {request.status === "HIT" ? (

                                        <span className="flex items-center gap-2 text-green-400 font-semibold">

                                            <CheckCircle2 size={16} />

                                            HIT

                                        </span>

                                    ) : (

                                        <span className="flex items-center gap-2 text-red-400 font-semibold">

                                            <XCircle size={16} />

                                            MISS

                                        </span>

                                    )}

                                </td>

                                <td className="text-cyan-400 font-medium">
                                    {request.latency}
                                </td>

                                <td className="text-slate-300">
                                    {request.size}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default RecentRequests;