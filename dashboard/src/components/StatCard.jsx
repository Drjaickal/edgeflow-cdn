import { TrendingUp } from "lucide-react";

function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
    color = "bg-violet-600",
}) {
    return (
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex justify-between items-center hover:border-violet-500 transition-all duration-300">

            <div>

                <h3 className="text-gray-400 text-sm">
                    {title}
                </h3>

                <h2 className="text-white text-4xl font-bold mt-3">
                    {value}
                </h2>

                <div className="flex items-center gap-2 mt-3">

                    <TrendingUp
                        size={16}
                        className="text-green-400"
                    />

                    <span className="text-green-400 text-sm">
                        {subtitle}
                    </span>

                </div>

            </div>

            <div
                className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center`}
            >
                <Icon
                    size={30}
                    className="text-white"
                />
            </div>

        </div>
    );
}

export default StatCard;