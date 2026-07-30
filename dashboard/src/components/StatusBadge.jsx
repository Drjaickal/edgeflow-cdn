/* =========================
   Imports
========================= */

import {
    CheckCircle2,
    AlertTriangle,
    XCircle,
    Clock3,
} from "lucide-react";

/* =========================
   Status Badge Component
========================= */

function StatusBadge({

    status = "healthy",

}) {

    /* =========================
       Status Configuration
    ========================= */

    const config = {

        healthy: {
            label: "Healthy",
            icon: CheckCircle2,
            className:
                "bg-green-500/10 text-green-400 border border-green-500/30",
        },

        warning: {
            label: "Warning",
            icon: AlertTriangle,
            className:
                "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",
        },

        offline: {
            label: "Offline",
            icon: XCircle,
            className:
                "bg-red-500/10 text-red-400 border border-red-500/30",
        },

        syncing: {
            label: "Syncing",
            icon: Clock3,
            className:
                "bg-blue-500/10 text-blue-400 border border-blue-500/30",
        },

    };

    const current = config[status] || config.healthy;

    const Icon = current.icon;

    /* =========================
       Render
    ========================= */

    return (

        <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${current.className}`}
        >

            <Icon size={16} />

            {current.label}

        </span>

    );

}

export default StatusBadge;