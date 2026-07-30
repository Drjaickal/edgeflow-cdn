import {
    Users,
    Server,
    Database,
    Globe,
} from "lucide-react";

function Node({ icon: Icon, title, subtitle, color }) {
    return (
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 w-52 hover:border-violet-500 transition-all duration-300">

            <div
                className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}
            >
                <Icon className="text-white" size={24} />
            </div>

            <h3 className="text-white font-semibold text-lg">
                {title}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
                {subtitle}
            </p>

        </div>
    );
}

function Architecture() {
    return (
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 h-full">

            <h2 className="text-white text-2xl font-bold mb-8">
                CDN Architecture
            </h2>

            <div className="flex items-center justify-between">

                {/* Users */}

                <Node
                    icon={Users}
                    title="Users"
                    subtitle="Global Clients"
                    color="bg-slate-700"
                />

                <div className="text-violet-500 text-4xl">
                    →
                </div>

                {/* Controller */}

                <Node
                    icon={Globe}
                    title="Controller"
                    subtitle="Smart Routing"
                    color="bg-violet-600"
                />

                <div className="text-violet-500 text-4xl">
                    →
                </div>

                {/* Edge Servers */}

                <div className="flex flex-col gap-5">

                    <Node
                        icon={Server}
                        title="Delhi"
                        subtitle="18 ms • Healthy"
                        color="bg-green-600"
                    />

                    <Node
                        icon={Server}
                        title="Mumbai"
                        subtitle="42 ms • Healthy"
                        color="bg-blue-600"
                    />

                    <Node
                        icon={Server}
                        title="Bangalore"
                        subtitle="61 ms • Healthy"
                        color="bg-orange-500"
                    />

                </div>

                <div className="text-violet-500 text-4xl">
                    →
                </div>

                {/* Origin */}

                <Node
                    icon={Database}
                    title="Origin Server"
                    subtitle="Source of Truth"
                    color="bg-yellow-500"
                />

            </div>

        </div>
    );
}

export default Architecture;