import {
    AlertTriangle,
    CheckCircle2,
    Info,
    Clock,
} from "lucide-react";

const alerts = [
    {
        id: 1,
        type: "warning",
        title: "High Latency",
        message: "Mumbai Edge latency increased to 68 ms.",
        time: "2 min ago",
    },
    {
        id: 2,
        type: "success",
        title: "Edge Server Healthy",
        message: "Delhi Edge is operating normally.",
        time: "5 min ago",
    },
    {
        id: 3,
        type: "info",
        title: "Cache Optimized",
        message: "Cache hit ratio improved to 85.6%.",
        time: "12 min ago",
    },
    {
        id: 4,
        type: "warning",
        title: "Cache Miss Spike",
        message: "Origin server received more requests than usual.",
        time: "18 min ago",
    },
];

const getIcon = (type) => {
    switch (type) {
        case "success":
            return (
                <CheckCircle2
                    className="text-green-500"
                    size={22}
                />
            );

        case "warning":
            return (
                <AlertTriangle
                    className="text-yellow-500"
                    size={22}
                />
            );

        default:
            return (
                <Info
                    className="text-blue-500"
                    size={22}
                />
            );
    }
};

function Alerts() {
    return (
        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
                System Alerts
            </h2>

            <div className="space-y-5">

                {alerts.map((alert) => (

                    <div
                        key={alert.id}
                        className="flex gap-4 p-4 rounded-xl bg-[#0f172a] border border-slate-700 hover:border-violet-600 transition"
                    >

                        <div>
                            {getIcon(alert.type)}
                        </div>

                        <div className="flex-1">

                            <h3 className="text-white font-semibold">
                                {alert.title}
                            </h3>

                            <p className="text-slate-400 text-sm mt-1">
                                {alert.message}
                            </p>

                            <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">

                                <Clock size={14} />

                                {alert.time}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Alerts;