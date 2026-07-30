import { Bell, RefreshCw, UserCircle2 } from "lucide-react";

function Navbar() {
    return (
        <div className="h-24 px-8 flex items-center justify-between border-b border-gray-800 bg-[#09111f]">

            {/* Left */}

            <div>

                <h1 className="text-4xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="text-gray-400 mt-2">
                    Overview of your CDN performance and services
                </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-8">

                <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">

                    <RefreshCw size={18} />

                    Auto Refresh

                </button>

                <Bell
                    className="text-gray-300 hover:text-white cursor-pointer"
                    size={22}
                />

                <div className="flex items-center gap-3">

                    <UserCircle2
                        className="text-violet-500"
                        size={42}
                    />

                    <div>

                        <h2 className="text-white font-semibold">
                            Admin
                        </h2>

                        <p className="text-gray-400 text-sm">
                            Super Admin
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Navbar;