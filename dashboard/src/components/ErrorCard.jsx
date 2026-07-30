/* =========================
   Imports
========================= */

import {
    AlertTriangle,
    RefreshCw,
} from "lucide-react";

/* =========================
   Error Card Component
========================= */

function ErrorCard({

    title = "Unable to Load Dashboard",

    message = "Something went wrong while fetching data from the CDN Controller.",

    onRetry = null,

}) {

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex justify-center items-center h-[70vh]">

            <div className="bg-[#111827] border border-red-500/40 rounded-2xl p-10 w-full max-w-xl text-center shadow-xl">

                {/* =========================
                    Error Icon
                ========================= */}

                <div className="flex justify-center">

                    <div className="bg-red-500/10 p-5 rounded-full">

                        <AlertTriangle
                            size={60}
                            className="text-red-500"
                        />

                    </div>

                </div>

                {/* =========================
                    Title
                ========================= */}

                <h2 className="text-white text-3xl font-bold mt-6">

                    {title}

                </h2>

                {/* =========================
                    Message
                ========================= */}

                <p className="text-slate-400 mt-4 leading-7">

                    {message}

                </p>

                {/* =========================
                    Retry Button
                ========================= */}

                {onRetry && (

                    <button

                        onClick={onRetry}

                        className="mt-8 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl text-white font-semibold"

                    >

                        <RefreshCw size={18} />

                        Retry

                    </button>

                )}

            </div>

        </div>

    );

}

export default ErrorCard;