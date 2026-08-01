/* ==========================================================
   Imports
========================================================== */

import {

    Users,

    Globe,

    Server,

    Database,

    ArrowRight,

} from "lucide-react";

/* ==========================================================
   Architecture Component
========================================================== */

function Architecture() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6">

            {/* ==================================================
                Header
            =================================================== */}

            <h2 className="text-3xl font-bold text-white mb-8">

                CDN Architecture

            </h2>

            {/* ==================================================
                Architecture Flow
            =================================================== */}

            <div className="flex justify-center items-center gap-4 flex-wrap">

                {/* Users */}

                <div className="w-36 h-36 rounded-2xl bg-[#0F172A] border border-gray-700 flex flex-col items-center justify-center">

                    <Users
                        size={34}
                        className="text-gray-300"
                    />

                    <h3 className="text-white font-semibold mt-4">

                        Users

                    </h3>

                    <p className="text-gray-400 text-sm">

                        Global Clients

                    </p>

                </div>

                <ArrowRight className="text-violet-500" size={32} />

                {/* Controller */}

                <div className="w-36 h-36 rounded-2xl bg-[#0F172A] border border-gray-700 flex flex-col items-center justify-center">

                    <Globe
                        size={34}
                        className="text-violet-400"
                    />

                    <h3 className="text-white font-semibold mt-4">

                        Controller

                    </h3>

                    <p className="text-gray-400 text-sm">

                        Smart Routing

                    </p>

                </div>

                <ArrowRight className="text-violet-500" size={32} />

                {/* Edge Servers */}

                <div className="flex flex-col gap-4">

                    <div className="w-40 h-24 rounded-xl bg-[#0F172A] border border-green-700 flex flex-col justify-center items-center">

                        <Server
                            className="text-green-400"
                        />

                        <span className="text-white font-medium">

                            Delhi

                        </span>

                    </div>

                    <div className="w-40 h-24 rounded-xl bg-[#0F172A] border border-blue-700 flex flex-col justify-center items-center">

                        <Server
                            className="text-blue-400"
                        />

                        <span className="text-white font-medium">

                            Mumbai

                        </span>

                    </div>

                    <div className="w-40 h-24 rounded-xl bg-[#0F172A] border border-orange-700 flex flex-col justify-center items-center">

                        <Server
                            className="text-orange-400"
                        />

                        <span className="text-white font-medium">

                            Bangalore

                        </span>

                    </div>

                </div>

                <ArrowRight className="text-violet-500" size={32} />

                {/* Origin */}

                <div className="w-36 h-36 rounded-2xl bg-[#0F172A] border border-gray-700 flex flex-col items-center justify-center">

                    <Database
                        size={34}
                        className="text-yellow-400"
                    />

                    <h3 className="text-white font-semibold mt-4">

                        Origin

                    </h3>

                    <p className="text-gray-400 text-sm">

                        Source of Truth

                    </p>

                </div>

            </div>

            {/* ==================================================
                Footer
            =================================================== */}

            <div className="mt-8 rounded-xl bg-[#0F172A] p-4 border border-gray-700">

                <p className="text-gray-300 leading-7">

                    Client requests are routed through the Controller.
                    The Controller selects the best Edge Server.
                    If the requested file exists in cache it is served
                    immediately. Otherwise the Edge Server fetches the
                    file from the Origin Server, stores it locally,
                    and serves future requests directly from cache.

                </p>

            </div>

        </div>

    );

}

export default Architecture;