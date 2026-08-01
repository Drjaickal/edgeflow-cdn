import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
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
    "#22C55E",
    "#DC2626",
];

function CacheChart() {

    const total = data.reduce(
        (sum, item) => sum + item.value,
        0
    );

    const hitRatio = (
        (data[0].value / total) * 100
    ).toFixed(1);

    return (

        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6 h-[420px]">

            {/* Header */}

            <h2 className="text-2xl font-bold text-white">
                CDN Cache Efficiency
            </h2>

            <p className="text-gray-400 mt-1">
                Cache efficiency overview
            </p>

            {/* Chart */}

            <div className="h-64 mt-4">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            innerRadius={70}
                            outerRadius={95}
                            dataKey="value"
                            paddingAngle={3}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            {/* Center Stats */}

            <div className="-mt-36 flex flex-col items-center">

                <span className="text-5xl font-bold text-white">

                    {hitRatio}%

                </span>

                <span className="text-gray-400">

                    Hit Ratio

                </span>

            </div>

            {/* Details */}

            <div className="mt-24 space-y-3">

                <div className="flex justify-between">

                    <div className="flex items-center gap-2">

                        <div className="w-3 h-3 rounded-full bg-green-500" />

                        <span className="text-gray-300">

                            Cache Hit

                        </span>

                    </div>

                    <span className="text-green-400 font-semibold">

                        {data[0].value.toLocaleString()}

                    </span>

                </div>

                <div className="flex justify-between">

                    <div className="flex items-center gap-2">

                        <div className="w-3 h-3 rounded-full bg-red-500" />

                        <span className="text-gray-300">

                            Cache Miss

                        </span>

                    </div>

                    <span className="text-red-400 font-semibold">

                        {data[1].value.toLocaleString()}

                    </span>

                </div>

                <div className="pt-2 border-t border-gray-700 flex justify-between">

                    <span className="text-gray-400">

                        Cache Efficiency

                    </span>

                    <span className="text-green-400 font-bold">

                        Excellent

                    </span>

                </div>

            </div>

        </div>

    );

}

export default CacheChart;