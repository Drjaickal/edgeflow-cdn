/* =========================
   Imports
========================= */

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";

import {
    Server,
    HardDrive,
    Database,
    Activity,
    Clock3,
    Globe,
} from "lucide-react";

/* =========================
   Sample Data
========================= */

const originServer = {
    name: "Origin Server",
    url: "http://127.0.0.1:9000",
    status: "healthy",
    totalFiles: 245,
    storageUsed: "12.8 GB",
    bandwidth: "48.7 GB",
    uptime: "99.98%",
    lastSync: "30 Seconds Ago",
};

/* =========================
   Origin Server Page
========================= */

function OriginServer() {

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

                    title="Origin Server"

                    subtitle="Monitor the primary content server powering the CDN."

                    showRefresh={true}

                />

                {/* =========================
                    Origin Server Card
                ========================= */}

                <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8">

                    {/* =========================
                        Header
                    ========================= */}

                    <div className="flex justify-between items-center">

                        <div className="flex items-center gap-4">

                            <Server
                                size={40}
                                className="text-violet-400"
                            />

                            <div>

                                <h2 className="text-3xl font-bold text-white">

                                    {originServer.name}

                                </h2>

                                <p className="text-slate-400 mt-1">

                                    Primary Content Source

                                </p>

                            </div>

                        </div>

                        <StatusBadge status={originServer.status} />

                    </div>

                    {/* =========================
                        URL
                    ========================= */}

                    <div className="flex items-center gap-3 mt-8">

                        <Globe
                            className="text-cyan-400"
                            size={20}
                        />

                        <span className="text-slate-300">

                            {originServer.url}

                        </span>

                    </div>

                    {/* =========================
                        Statistics
                    ========================= */}

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                        <div className="bg-[#0f172a] rounded-xl p-5">

                            <HardDrive
                                className="text-violet-400"
                                size={24}
                            />

                            <p className="text-slate-400 mt-3">

                                Storage Used

                            </p>

                            <h3 className="text-white text-2xl font-bold mt-2">

                                {originServer.storageUsed}

                            </h3>

                        </div>

                        <div className="bg-[#0f172a] rounded-xl p-5">

                            <Database
                                className="text-green-400"
                                size={24}
                            />

                            <p className="text-slate-400 mt-3">

                                Total Files

                            </p>

                            <h3 className="text-white text-2xl font-bold mt-2">

                                {originServer.totalFiles}

                            </h3>

                        </div>

                        <div className="bg-[#0f172a] rounded-xl p-5">

                            <Activity
                                className="text-cyan-400"
                                size={24}
                            />

                            <p className="text-slate-400 mt-3">

                                Bandwidth

                            </p>

                            <h3 className="text-white text-2xl font-bold mt-2">

                                {originServer.bandwidth}

                            </h3>

                        </div>

                        <div className="bg-[#0f172a] rounded-xl p-5">

                            <Clock3
                                className="text-yellow-400"
                                size={24}
                            />

                            <p className="text-slate-400 mt-3">

                                Last Sync

                            </p>

                            <h3 className="text-white text-xl font-bold mt-2">

                                {originServer.lastSync}

                            </h3>

                        </div>

                    </div>

                    {/* =========================
                        Footer
                    ========================= */}

                    <div className="border-t border-slate-700 mt-10 pt-6 flex justify-between">

                        <span className="text-slate-400">

                            Server Uptime

                        </span>

                        <span className="text-green-400 font-bold">

                            {originServer.uptime}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default OriginServer;