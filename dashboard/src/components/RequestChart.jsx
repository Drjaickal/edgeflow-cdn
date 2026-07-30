/* =========================
   Imports
========================= */

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

/* =========================
   Sample Data
========================= */

const requestData = [
    { time: "09:30", requests: 320 },
    { time: "09:35", requests: 450 },
    { time: "09:40", requests: 610 },
    { time: "09:45", requests: 590 },
    { time: "09:50", requests: 820 },
    { time: "09:55", requests: 910 },
    { time: "10:00", requests: 1250 },
    { time: "10:05", requests: 1320 },
    { time: "10:10", requests: 1180 },
    { time: "10:15", requests: 1410 },
    { time: "10:20", requests: 1650 },
    { time: "10:25", requests: 1530 },
    { time: "10:30", requests: 1725 },
];

/* =========================
   Request Chart Component
========================= */

function RequestChart() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6 h-[420px]">

            {/* =========================
                Header
            ========================= */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        Requests Over Time
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                        CDN traffic over the last hour
                    </p>

                </div>

                <select className="bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white">

                    <option>Last 1 Hour</option>
                    <option>Last 24 Hours</option>
                    <option>Last 7 Days</option>

                </select>

            </div>

            {/* =========================
                Chart
            ========================= */}

            <ResponsiveContainer width="100%" height="78%">

                <AreaChart data={requestData}>

                    <defs>

                        <linearGradient
                            id="requestGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#8b5cf6"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="#8b5cf6"
                                stopOpacity={0.05}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        stroke="#1f2937"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="time"
                        stroke="#94a3b8"
                    />

                    <YAxis
                        stroke="#94a3b8"
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #334155",
                            borderRadius: "10px",
                            color: "#fff",
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="requests"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        fill="url(#requestGradient)"
                    />

                </AreaChart>

            </ResponsiveContainer>

            {/* =========================
                Footer Stats
            ========================= */}

            <div className="grid grid-cols-3 gap-4 mt-4">

                <div>

                    <p className="text-slate-400 text-xs">
                        Peak Requests
                    </p>

                    <h3 className="text-white font-semibold">
                        1,725 req/min
                    </h3>

                </div>

                <div>

                    <p className="text-slate-400 text-xs">
                        Average
                    </p>

                    <h3 className="text-white font-semibold">
                        1,058 req/min
                    </h3>

                </div>

                <div>

                    <p className="text-slate-400 text-xs">
                        Trend
                    </p>

                    <h3 className="text-green-400 font-semibold">
                        ▲ +12.8%
                    </h3>

                </div>

            </div>

        </div>

    );

}

export default RequestChart;