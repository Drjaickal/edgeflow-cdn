import {
    AlertTriangle,
    CheckCircle2,
    Info,
} from "lucide-react";

const alerts = [
    {
        id: 1,
        type: "success",
        title: "Delhi Edge Server Online",
        description: "All services are operating normally.",
        time: "2 min ago",
    },
    {
        id: 2,
        type: "warning",
        title: "High Latency Detected",
        description: "Mumbai edge latency exceeded 80 ms.",
        time: "8 min ago",
    },
    {
        id: 3,
        type: "info",
        title: "Cache Cleanup Completed",
        description: "Expired cache objects removed successfully.",
        time: "18 min ago",
    },
    {
        id: 4,
        type: "success",
        title: "Origin Server Connected",
        description: "Origin storage is healthy.",
        time: "25 min ago",
    },
];

function getIcon(type) {

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

}

function Alerts() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6 h-[420px]">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-white">

                    System Alerts

                </h2>

                <span className="text-green-400 text-sm">

                    Live

                </span>

            </div>

            <div className="space-y-4">

                {alerts.map((alert) => (

                    <div
                        key={alert.id}
                        className="bg-[#1A2332] rounded-xl p-4 border border-gray-700 hover:border-violet-500 transition-all"
                    >

                        <div className="flex gap-3">

                            {getIcon(alert.type)}

                            <div className="flex-1">

                                <h3 className="text-white font-semibold">

                                    {alert.title}

                                </h3>

                                <p className="text-gray-400 text-sm mt-1">

                                    {alert.description}

                                </p>

                                <span className="text-xs text-gray-500 mt-2 block">

                                    {alert.time}

                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Alerts;