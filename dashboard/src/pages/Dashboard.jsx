/* =========================
   Imports
========================= */

import { useEffect, useState } from "react";


import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Architecture from "../components/Architecture";
import GlobalEdge from "../components/GlobalEdge";
import RequestChart from "../components/RequestChart";
import CacheChart from "../components/CacheChart";
import TopFiles from "../components/TopFiles";
import RecentRequests from "../components/RecentRequests";
import Alerts from "../components/Alerts";

import {
    Activity,
    Database,
    PieChart,
    Clock3,
} from "lucide-react";

import { getDashboardData } from "../services/api";

/* =========================
   Dashboard Component
========================= */

function Dashboard() {

    /* =========================
       State
    ========================= */

    const [dashboard, setDashboard] = useState({
        edges: [],
        metrics: [],
    });

    /* =========================
       API Functions
    ========================= */

    const loadDashboard = async () => {

        try {

            const data = await getDashboardData();

            setDashboard(data);

        } catch (error) {

            console.error("Dashboard API Error:", error);

        }

    };

    /* =========================
       Auto Refresh
    ========================= */

    useEffect(() => {

        loadDashboard();

        const interval = setInterval(() => {

            loadDashboard();

        }, 10000);

        return () => clearInterval(interval);

    }, []);

    /* =========================
       Calculated Metrics
    ========================= */

    const totalRequests = dashboard.metrics.reduce(
        (sum, edge) => sum + (edge.total_requests || 0),
        0
    );

    const averageHitRatio =
        dashboard.metrics.length > 0
            ? (
                dashboard.metrics.reduce(
                    (sum, edge) => sum + (edge.cache_hit_ratio || 0),
                    0
                ) / dashboard.metrics.length
            ).toFixed(1)
            : 0;

    const averageLatency =
        dashboard.metrics.length > 0
            ? (
                dashboard.metrics.reduce(
                    (sum, edge) => sum + (edge.average_latency || 0),
                    0
                ) / dashboard.metrics.length
            ).toFixed(1)
            : 0;

    const totalData =
        dashboard.metrics.reduce(
            (sum, edge) => sum + (edge.bytes_served || 0),
            0
        ) /
        1024 /
        1024 /
        1024;

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex-1 flex flex-col overflow-auto bg-[#09111f]">

            <Navbar />

            <div className="p-8 space-y-6">

                <div className="grid grid-cols-4 gap-6">

                    <StatCard
                        title="Total Requests"
                        value={totalRequests}
                        subtitle="Live Data"
                        icon={Activity}
                        color="bg-violet-600"
                    />

                    <StatCard
                        title="Cache Hit Ratio"
                        value={`${averageHitRatio}%`}
                        subtitle="Live Data"
                        icon={PieChart}
                        color="bg-green-600"
                    />

                    <StatCard
                        title="Data Served"
                        value={`${totalData.toFixed(2)} GB`}
                        subtitle="Live Data"
                        icon={Database}
                        color="bg-blue-600"
                    />

                    <StatCard
                        title="Avg Latency"
                        value={`${averageLatency} ms`}
                        subtitle="Live Data"
                        icon={Clock3}
                        color="bg-yellow-500"
                    />

                </div>

                <div className="grid grid-cols-2 gap-6">

                    <Architecture />

                    <GlobalEdge
                        edges={dashboard.edges}
                        metrics={dashboard.metrics}
                    />

                </div>

                <div className="grid grid-cols-12 gap-6">

                    <div className="col-span-6">

                        <RequestChart />

                    </div>

                    <div className="col-span-3">

                        <CacheChart />

                    </div>

                    <div className="col-span-3">

                        <TopFiles />

                    </div>

                </div>

                <div className="grid grid-cols-12 gap-6">

                    <div className="col-span-8">

                        <RecentRequests />

                    </div>

                    <div className="col-span-4">

                        <Alerts />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;