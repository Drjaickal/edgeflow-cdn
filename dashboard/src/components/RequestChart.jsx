import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    { time: "09:30", requests: 320 },
    { time: "09:35", requests: 410 },
    { time: "09:40", requests: 560 },
    { time: "09:45", requests: 540 },
    { time: "09:50", requests: 820 },
    { time: "09:55", requests: 910 },
    { time: "10:00", requests: 1250 },
    { time: "10:05", requests: 1320 },
    { time: "10:10", requests: 1180 },
    { time: "10:15", requests: 1420 },
    { time: "10:20", requests: 1710 },
    { time: "10:25", requests: 1600 },
    { time: "10:30", requests: 1780 },
];

function RequestChart() {
    return (
        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6 h-[420px]">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        CDN Traffic
                    </h2>

                    <p className="text-gray-400">
                        Requests over the last hour
                    </p>

                </div>

                <span className="px-3 py-1 rounded-lg bg-violet-600 text-white text-sm">
                    Last 1 Hour
                </span>

            </div>

            <ResponsiveContainer width="100%" height="72%">

                <AreaChart data={data}>

                    <defs>

                        <linearGradient
                            id="traffic"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#7C3AED"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="#7C3AED"
                                stopOpacity={0}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#1F2937"
                    />

                    <XAxis
                        dataKey="time"
                        stroke="#9CA3AF"
                    />

                    <YAxis
                        stroke="#9CA3AF"
                    />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="requests"
                        stroke="#8B5CF6"
                        strokeWidth={3}
                        fill="url(#traffic)"
                    />

                </AreaChart>

            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-5">

                <div>

                    <p className="text-gray-400 text-sm">
                        Peak Requests
                    </p>

                    <p className="text-white text-xl font-bold">
                        1,780 req/min
                    </p>

                </div>

                <div>

                    <p className="text-gray-400 text-sm">
                        Average
                    </p>

                    <p className="text-white text-xl font-bold">
                        1,058 req/min
                    </p>

                </div>

                <div>

                    <p className="text-gray-400 text-sm">
                        Trend
                    </p>

                    <p className="text-green-400 text-xl font-bold">
                        ▲ 12.8%
                    </p>

                </div>

            </div>

        </div>
    );
}

export default RequestChart;