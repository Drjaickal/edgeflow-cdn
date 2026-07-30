/* =========================
   Imports
========================= */

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
} from "recharts";

/* =========================
   Sample Data
========================= */

const cacheData = [
    {
        name: "Cache Hit",
        value: 10732,
    },
    {
        name: "Cache Miss",
        value: 1810,
    },
];

const COLORS = [
    "#22c55e",
    "#ef4444",
];

/* =========================
   Cache Chart Component
========================= */

function CacheChart() {

    /* =========================
       Calculations
    ========================= */

    const total = cacheData.reduce(
        (sum, item) => sum + item.value,
        0
    );

    const hitRatio = (
        (cacheData[0].value / total) * 100
    ).toFixed(1);

    /* =========================
       Render
    ========================= */

    return (

        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6 h-[420px]">

            {/* =========================
                Header
            ========================= */}

            <div className="mb-5">

                <h2 className="text-2xl font-bold text-white">
                    Cache Performance
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                    CDN cache efficiency overview
                </p>

            </div>

            {/* =========================
                Donut Chart
            ========================= */}

            <div className="relative h-52">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={cacheData}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={85}
                            paddingAngle={5}
                            stroke="none"
                        >

                            {cacheData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))}

                        </Pie>

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "10px",
                            }}
                        />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

                {/* =========================
                    Center Text
                ========================= */}

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

                    <h2 className="text-4xl font-bold text-white">
                        {hitRatio}%
                    </h2>

                    <p className="text-slate-400 text-sm">
                        Hit Ratio
                    </p>

                </div>

            </div>

            {/* =========================
                Statistics
            ========================= */}

            <div className="space-y-4 mt-4">

                <div className="flex justify-between">

                    <span className="text-green-400">
                        ● Cache Hit
                    </span>

                    <span className="text-white font-semibold">
                        {cacheData[0].value.toLocaleString()}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-red-400">
                        ● Cache Miss
                    </span>

                    <span className="text-white font-semibold">
                        {cacheData[1].value.toLocaleString()}
                    </span>

                </div>

                <div className="border-t border-slate-700 pt-4 mt-4">

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            Cache Efficiency
                        </span>

                        <span className="text-green-400 font-bold">
                            Excellent
                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CacheChart;