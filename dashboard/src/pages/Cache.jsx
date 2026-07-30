/* =========================
   Imports
========================= */

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CacheChart from "../components/CacheChart";

import {
    Database,
    Trash2,
    HardDrive,
    FolderOpen,
    Activity,
} from "lucide-react";

/* =========================
   Sample Cache Data
========================= */

const cacheInfo = {
    hitRatio: "85.6%",
    cacheSize: "12.8 GB",
    cachedFiles: 245,
    misses: 1810,
    hits: 10732,
    status: "Healthy",
};

/* =========================
   Cache Page
========================= */

function Cache() {

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

                    title="Cache Management"

                    subtitle="Monitor cache performance and storage usage."

                    showRefresh={true}

                />

                {/* =========================
                    Statistics Cards
                ========================= */}

                <div className="grid grid-cols-4 gap-6 mb-8">

                    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

                        <Database className="text-green-400 mb-4" size={30} />

                        <p className="text-slate-400">
                            Cache Hit Ratio
                        </p>

                        <h2 className="text-white text-3xl font-bold mt-2">
                            {cacheInfo.hitRatio}
                        </h2>

                    </div>

                    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

                        <HardDrive className="text-cyan-400 mb-4" size={30} />

                        <p className="text-slate-400">
                            Cache Size
                        </p>

                        <h2 className="text-white text-3xl font-bold mt-2">
                            {cacheInfo.cacheSize}
                        </h2>

                    </div>

                    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

                        <FolderOpen className="text-yellow-400 mb-4" size={30} />

                        <p className="text-slate-400">
                            Cached Files
                        </p>

                        <h2 className="text-white text-3xl font-bold mt-2">
                            {cacheInfo.cachedFiles}
                        </h2>

                    </div>

                    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

                        <Activity className="text-violet-400 mb-4" size={30} />

                        <p className="text-slate-400">
                            Cache Status
                        </p>

                        <h2 className="text-green-400 text-3xl font-bold mt-2">
                            {cacheInfo.status}
                        </h2>

                    </div>

                </div>

                {/* =========================
                    Cache Chart
                ========================= */}

                <CacheChart />

                {/* =========================
                    Cache Summary
                ========================= */}

                <div className="grid grid-cols-2 gap-6 mt-8">

                    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

                        <h2 className="text-xl font-bold text-white mb-4">

                            Cache Statistics

                        </h2>

                        <div className="space-y-4">

                            <div className="flex justify-between">

                                <span className="text-slate-400">
                                    Total Hits
                                </span>

                                <span className="text-green-400 font-bold">
                                    {cacheInfo.hits.toLocaleString()}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span className="text-slate-400">
                                    Total Misses
                                </span>

                                <span className="text-red-400 font-bold">
                                    {cacheInfo.misses.toLocaleString()}
                                </span>

                            </div>

                        </div>

                    </div>

                    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

                        <h2 className="text-xl font-bold text-white mb-4">

                            Cache Actions

                        </h2>

                        <button className="flex items-center gap-3 bg-red-600 hover:bg-red-500 transition px-6 py-3 rounded-xl text-white">

                            <Trash2 size={18} />

                            Clear Cache

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Cache;