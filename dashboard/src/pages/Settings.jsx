/* =========================
   Imports
========================= */

import { useState } from "react";

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

import {
    Save,
    RefreshCw,
    Bell,
    Moon,
    Globe,
    Server,
} from "lucide-react";

/* =========================
   Settings Page
========================= */

function Settings() {

    /* =========================
       State
    ========================= */

    const [settings, setSettings] = useState({

        controllerUrl: "http://127.0.0.1:8000",

        refreshInterval: 10,

        theme: "Dark",

        notifications: true,

        autoRefresh: true,

    });

    /* =========================
       Handlers
    ========================= */

    const handleChange = (field, value) => {

        setSettings((prev) => ({

            ...prev,

            [field]: value,

        }));

    };

    const handleSave = () => {

        alert("Settings saved successfully!");

    };

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

                    title="Settings"

                    subtitle="Configure your CDN Controller dashboard."

                />

                {/* =========================
                    Settings Form
                ========================= */}

                <div className="space-y-6">

                    {/* =========================
                        Controller URL
                    ========================= */}

                    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">

                        <div className="flex items-center gap-3 mb-4">

                            <Server
                                size={22}
                                className="text-violet-400"
                            />

                            <h2 className="text-xl font-semibold text-white">

                                Controller Configuration

                            </h2>

                        </div>

                        <label className="block text-slate-400 mb-2">

                            Controller URL

                        </label>

                        <input

                            type="text"

                            value={settings.controllerUrl}

                            onChange={(e) =>
                                handleChange("controllerUrl", e.target.value)
                            }

                            className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white outline-none"

                        />

                    </div>

                    {/* =========================
                        Auto Refresh
                    ========================= */}

                    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">

                        <div className="flex items-center gap-3 mb-4">

                            <RefreshCw
                                size={22}
                                className="text-cyan-400"
                            />

                            <h2 className="text-xl font-semibold text-white">

                                Auto Refresh

                            </h2>

                        </div>

                        <label className="block text-slate-400 mb-2">

                            Refresh Interval (Seconds)

                        </label>

                        <input

                            type="number"

                            min="5"

                            max="300"

                            value={settings.refreshInterval}

                            onChange={(e) =>
                                handleChange(
                                    "refreshInterval",
                                    Number(e.target.value)
                                )
                            }

                            className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white outline-none"

                        />

                        <div className="flex items-center justify-between mt-6">

                            <span className="text-slate-300">

                                Enable Auto Refresh

                            </span>

                            <input

                                type="checkbox"

                                checked={settings.autoRefresh}

                                onChange={(e) =>
                                    handleChange(
                                        "autoRefresh",
                                        e.target.checked
                                    )
                                }

                            />

                        </div>

                    </div>

                    {/* =========================
                        Appearance
                    ========================= */}

                    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">

                        <div className="flex items-center gap-3 mb-4">

                            <Moon
                                size={22}
                                className="text-yellow-400"
                            />

                            <h2 className="text-xl font-semibold text-white">

                                Appearance

                            </h2>

                        </div>

                        <select

                            value={settings.theme}

                            onChange={(e) =>
                                handleChange("theme", e.target.value)
                            }

                            className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white"

                        >

                            <option>Dark</option>

                            <option>Light</option>

                            <option>System</option>

                        </select>

                    </div>

                    {/* =========================
                        Notifications
                    ========================= */}

                    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">

                        <div className="flex items-center gap-3 mb-4">

                            <Bell
                                size={22}
                                className="text-green-400"
                            />

                            <h2 className="text-xl font-semibold text-white">

                                Notifications

                            </h2>

                        </div>

                        <div className="flex justify-between items-center">

                            <span className="text-slate-300">

                                Enable Notifications

                            </span>

                            <input

                                type="checkbox"

                                checked={settings.notifications}

                                onChange={(e) =>
                                    handleChange(
                                        "notifications",
                                        e.target.checked
                                    )
                                }

                            />

                        </div>

                    </div>

                    {/* =========================
                        Region
                    ========================= */}

                    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">

                        <div className="flex items-center gap-3 mb-4">

                            <Globe
                                size={22}
                                className="text-blue-400"
                            />

                            <h2 className="text-xl font-semibold text-white">

                                Default Region

                            </h2>

                        </div>

                        <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white">

                            <option>Asia</option>

                            <option>Europe</option>

                            <option>North America</option>

                            <option>South America</option>

                        </select>

                    </div>

                    {/* =========================
                        Save Button
                    ========================= */}

                    <div className="flex justify-end">

                        <button

                            onClick={handleSave}

                            className="flex items-center gap-3 bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl text-white font-medium"

                        >

                            <Save size={18} />

                            Save Settings

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Settings;