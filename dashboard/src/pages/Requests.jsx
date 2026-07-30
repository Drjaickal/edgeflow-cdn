/* =========================
   Imports
========================= */

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";

import {
    Search,
    Filter,
    Download,
    Clock3,
    Server,
    FileText,
} from "lucide-react";

/* =========================
   Sample Request Data
========================= */

const requests = [
    {
        id: 1,
        time: "10:42:15",
        edge: "Delhi",
        file: "hero-banner.jpg",
        status: "healthy",
        latency: "3 ms",
        size: "1.8 MB",
    },
    {
        id: 2,
        time: "10:41:58",
        edge: "Mumbai",
        file: "style.css",
        status: "healthy",
        latency: "5 ms",
        size: "48 KB",
    },
    {
        id: 3,
        time: "10:41:30",
        edge: "Bangalore",
        file: "product-demo.mp4",
        status: "warning",
        latency: "27 ms",
        size: "18 MB",
    },
    {
        id: 4,
        time: "10:40:52",
        edge: "Delhi",
        file: "app.js",
        status: "healthy",
        latency: "4 ms",
        size: "122 KB",
    },
    {
        id: 5,
        time: "10:40:11",
        edge: "Mumbai",
        file: "logo.png",
        status: "healthy",
        latency: "6 ms",
        size: "81 KB",
    },
];

/* =========================
   Requests Page
========================= */

function Requests() {

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
                    Page Header
                ========================= */}

                <PageHeader

                    title="Request Logs"

                    subtitle="View all incoming CDN requests."

                    showRefresh={true}

                />

                {/* =========================
                    Toolbar
                ========================= */}

                <div className="flex justify-between items-center mb-6">

                    <div className="flex gap-4">

                        <div className="flex items-center gap-2 bg-[#111827] border border-slate-700 rounded-lg px-4 py-2">

                            <Search size={18} className="text-slate-400" />

                            <input
                                type="text"
                                placeholder="Search file..."
                                className="bg-transparent outline-none text-white placeholder:text-slate-500"
                            />

                        </div>

                        <button className="flex items-center gap-2 bg-[#111827] border border-slate-700 px-4 rounded-lg text-white">

                            <Filter size={18} />

                            Filter

                        </button>

                    </div>

                    <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition px-5 py-3 rounded-xl text-white">

                        <Download size={18} />

                        Export Logs

                    </button>

                </div>

                {/* =========================
                    Request Table
                ========================= */}

                <div className="bg-[#111827] rounded-2xl border border-slate-800 overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-[#0f172a]">

                            <tr className="text-slate-400">

                                <th className="text-left p-4">Time</th>
                                <th className="text-left p-4">Edge</th>
                                <th className="text-left p-4">File</th>
                                <th className="text-left p-4">Status</th>
                                <th className="text-left p-4">Latency</th>
                                <th className="text-left p-4">Size</th>

                            </tr>

                        </thead>

                        <tbody>

                            {requests.map((request) => (

                                <tr
                                    key={request.id}
                                    className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                                >

                                    <td className="p-4 text-white">

                                        <div className="flex items-center gap-2">

                                            <Clock3 size={16} />

                                            {request.time}

                                        </div>

                                    </td>

                                    <td className="p-4 text-white">

                                        <div className="flex items-center gap-2">

                                            <Server size={16} />

                                            {request.edge}

                                        </div>

                                    </td>

                                    <td className="p-4 text-slate-300">

                                        <div className="flex items-center gap-2">

                                            <FileText size={16} />

                                            {request.file}

                                        </div>

                                    </td>

                                    <td className="p-4">

                                        <StatusBadge status={request.status} />

                                    </td>

                                    <td className="p-4 text-cyan-400">

                                        {request.latency}

                                    </td>

                                    <td className="p-4 text-slate-300">

                                        {request.size}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Requests;