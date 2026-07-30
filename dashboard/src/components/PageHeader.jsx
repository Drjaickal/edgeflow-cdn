/* =========================
   Imports
========================= */

import { RefreshCw } from "lucide-react";

/* =========================
   Page Header Component
========================= */

function PageHeader({

    title,
    subtitle,
    showRefresh = false,
    onRefresh = null,

}) {

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex items-center justify-between mb-8">

            {/* =========================
                Left Section
            ========================= */}

            <div>

                <h1 className="text-3xl font-bold text-white">

                    {title}

                </h1>

                <p className="text-slate-400 mt-2">

                    {subtitle}

                </p>

            </div>

            {/* =========================
                Right Section
            ========================= */}

            {showRefresh && (

                <button

                    onClick={onRefresh}

                    className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition px-5 py-3 rounded-xl text-white"

                >

                    <RefreshCw size={18} />

                    Refresh

                </button>

            )}

        </div>

    );

}

export default PageHeader;