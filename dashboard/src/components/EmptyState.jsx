/* =========================
   Imports
========================= */

import {
    Database,
    Server,
    RefreshCw,
} from "lucide-react";

/* =========================
   Empty State Component
========================= */

function EmptyState({

    title = "No Data Available",

    message = "No Edge Servers are currently registered with the Controller.",

    buttonText = "Refresh",

    onRefresh = null,

}) {

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex items-center justify-center h-[70vh]">

            <div className="bg-[#111827] border border-slate-800 rounded-2xl shadow-xl p-10 w-full max-w-xl">

                {/* =========================
                    Icon
                ========================= */}

                <div className="flex justify-center">

                    <div className="bg-violet-500/10 p-5 rounded-full">

                        <Database
                            size={60}
                            className="text-violet-500"
                        />

                    </div>

                </div>

                {/* =========================
                    Heading
                ========================= */}

                <h2 className="text-white text-3xl font-bold text-center mt-6">

                    {title}

                </h2>

                {/* =========================
                    Description
                ========================= */}

                <p className="text-slate-400 text-center mt-4 leading-7">

                    {message}

                </p>

                {/* =========================
                    Information Card
                ========================= */}

                <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-5 mt-8">

                    <div className="flex items-center gap-3">

                        <Server
                            className="text-cyan-400"
                            size={22}
                        />

                        <div>

                            <h3 className="text-white font-semibold">

                                Waiting for Edge Servers

                            </h3>

                            <p className="text-slate-400 text-sm mt-1">

                                Start your Edge Server instances and they will
                                automatically register with the Controller.

                            </p>

                        </div>

                    </div>

                </div>

                {/* =========================
                    Refresh Button
                ========================= */}

                {onRefresh && (

                    <div className="flex justify-center mt-8">

                        <button

                            onClick={onRefresh}

                            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl text-white font-semibold"

                        >

                            <RefreshCw size={18} />

                            {buttonText}

                        </button>

                    </div>

                )}

            </div>

        </div>

    );

}

export default EmptyState;