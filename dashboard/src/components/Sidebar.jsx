/* =========================
   Imports
========================= */

import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    BarChart3,
    Server,
    Database,
    FileText,
    HardDrive,
    Settings,
    Cloud,
} from "lucide-react";

/* =========================
   Menu Items
========================= */

const menuItems = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        path: "/",
    },
    {
        icon: BarChart3,
        label: "Analytics",
        path: "/analytics",
    },
    {
        icon: Server,
        label: "Edge Servers",
        path: "/edge-servers",
    },
    {
        icon: Database,
        label: "Origin Server",
        path: "/origin-server",
    },
    {
        icon: FileText,
        label: "Requests",
        path: "/requests",
    },
    {
        icon: HardDrive,
        label: "Cache",
        path: "/cache",
    },
    {
        icon: Settings,
        label: "Settings",
        path: "/settings",
    },
];

/* =========================
   Sidebar
========================= */

function Sidebar() {

    return (

        <aside className="w-72 h-screen bg-[#0B1220] border-r border-gray-800 flex flex-col">

            {/* =========================
                Logo
            ========================= */}

            <div className="p-8 border-b border-gray-800">

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">

                        <Cloud
                            className="text-white"
                            size={26}
                        />

                    </div>

                    <div>

                        <h1 className="text-white text-2xl font-bold">

                            EdgeFlow CDN

                        </h1>

                        <p className="text-gray-400 text-sm">

                            Distribute. Cache. Deliver.

                        </p>

                    </div>

                </div>

            </div>

            {/* =========================
                Navigation
            ========================= */}

            <div className="flex-1 p-5">

                <nav className="space-y-2">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink

                                key={item.label}

                                to={item.path}

                                end={item.path === "/"}

                                className={({ isActive }) =>

                                    `w-full flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${isActive

                                        ? "bg-violet-600 text-white shadow-lg"

                                        : "text-gray-400 hover:bg-[#141E30] hover:text-white"

                                    }`

                                }

                            >

                                <Icon size={20} />

                                <span className="font-medium">

                                    {item.label}

                                </span>

                            </NavLink>

                        );

                    })}

                </nav>

            </div>

            {/* =========================
                Footer
            ========================= */}

            <div className="m-5 rounded-xl bg-[#141E30] p-5">

                <div className="flex items-center gap-2">

                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

                    <span className="text-green-400 font-medium">

                        System Operational

                    </span>

                </div>

                <p className="mt-3 text-sm text-gray-400">

                    Version 1.0.0

                </p>

            </div>

        </aside>

    );

}

export default Sidebar;