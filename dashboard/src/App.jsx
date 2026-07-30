/* =========================
   Imports
========================= */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import EdgeServers from "./pages/EdgeServers";
import OriginServer from "./pages/OriginServer";
import Requests from "./pages/Requests";
import Cache from "./pages/Cache";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

/* =========================
   Dashboard Layout
========================= */

function DashboardLayout() {

    /* =========================
       Render
    ========================= */

    return (

        <div className="min-h-screen flex bg-[#09111f] text-white">

            {/* =========================
                Sidebar
            ========================= */}

            <Sidebar />

            {/* =========================
                Page Content
            ========================= */}

            <Routes>

                <Route

                    path="/"

                    element={<Dashboard />}

                />

                <Route

                    path="/analytics"

                    element={<Analytics />}

                />

                <Route

                    path="/edge-servers"

                    element={<EdgeServers />}

                />

                <Route

                    path="/origin-server"

                    element={<OriginServer />}

                />

                <Route

                    path="/requests"

                    element={<Requests />}

                />

                <Route

                    path="/cache"

                    element={<Cache />}

                />

                <Route

                    path="/settings"

                    element={<Settings />}

                />

                <Route

                    path="*"

                    element={<NotFound />}

                />

            </Routes>

        </div>

    );

}

/* =========================
   App
========================= */

function App() {

    /* =========================
       Render
    ========================= */

    return (

        <BrowserRouter>

            <DashboardLayout />

        </BrowserRouter>

    );

}

export default App;