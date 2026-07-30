/* =========================
   Imports
========================= */

import { Loader2 } from "lucide-react";

/* =========================
   Loading Spinner Component
========================= */

function LoadingSpinner({

    title = "Loading Dashboard...",
    subtitle = "Fetching latest CDN metrics..."

}) {

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex flex-col items-center justify-center h-[70vh] w-full">

            {/* =========================
                Spinner
            ========================= */}

            <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800 shadow-lg">

                <div className="flex flex-col items-center">

                    <Loader2
                        size={64}
                        className="text-violet-500 animate-spin"
                    />

                    <h2 className="text-white text-2xl font-bold mt-6">
                        {title}
                    </h2>

                    <p className="text-slate-400 mt-2 text-center">
                        {subtitle}
                    </p>

                </div>

            </div>

        </div>

    );

}

export default LoadingSpinner;