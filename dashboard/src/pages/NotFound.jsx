/* =========================
   Imports
========================= */

import { Link } from "react-router-dom";

import {
    AlertTriangle,
    Home,
    ArrowLeft,
} from "lucide-react";

/* =========================
   Not Found Page
========================= */

function NotFound() {

    /* =========================
       Render
    ========================= */

    return (

        <div className="min-h-screen bg-[#09111f] flex items-center justify-center px-6">

            {/* =========================
                Content
            ========================= */}

            <div className="max-w-xl w-full text-center">

                {/* =========================
                    Icon
                ========================= */}

                <div className="flex justify-center">

                    <div className="h-24 w-24 rounded-full bg-red-500/10 flex items-center justify-center">

                        <AlertTriangle

                            size={48}

                            className="text-red-400"

                        />

                    </div>

                </div>

                {/* =========================
                    Heading
                ========================= */}

                <h1 className="text-7xl font-bold text-white mt-8">

                    404

                </h1>

                <h2 className="text-3xl font-semibold text-white mt-4">

                    Page Not Found

                </h2>

                <p className="text-slate-400 mt-4 leading-7">

                    The page you are looking for does not exist or has
                    been moved. Please check the URL or return to the
                    dashboard.

                </p>

                {/* =========================
                    Actions
                ========================= */}

                <div className="flex justify-center gap-4 mt-10">

                    <Link

                        to="/"

                        className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl text-white"

                    >

                        <Home size={18} />

                        Dashboard

                    </Link>

                    <button

                        onClick={() => window.history.back()}

                        className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 transition px-6 py-3 rounded-xl text-white"

                    >

                        <ArrowLeft size={18} />

                        Go Back

                    </button>

                </div>

                {/* =========================
                    Footer
                ========================= */}

                <p className="text-slate-500 text-sm mt-12">

                    EdgeFlow CDN Dashboard © 2026

                </p>

            </div>

        </div>

    );

}

export default NotFound;