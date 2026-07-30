/* =========================
   Imports
========================= */

import {
    FileImage,
    FileVideo,
    FileCode,
    FileText,
} from "lucide-react";

/* =========================
   Sample Data
========================= */

const files = [
    {
        name: "hero-banner.jpg",
        type: "image",
        requests: 1245,
        percentage: 95,
    },
    {
        name: "product-demo.mp4",
        type: "video",
        requests: 987,
        percentage: 82,
    },
    {
        name: "style.css",
        type: "code",
        requests: 856,
        percentage: 70,
    },
    {
        name: "app.js",
        type: "code",
        requests: 654,
        percentage: 58,
    },
    {
        name: "README.md",
        type: "text",
        requests: 430,
        percentage: 42,
    },
];

/* =========================
   Helper Functions
========================= */

const getIcon = (type) => {

    switch (type) {

        case "image":
            return <FileImage className="text-blue-400" size={20} />;

        case "video":
            return <FileVideo className="text-red-400" size={20} />;

        case "code":
            return <FileCode className="text-green-400" size={20} />;

        default:
            return <FileText className="text-yellow-400" size={20} />;

    }

};

/* =========================
   Top Files Component
========================= */

function TopFiles() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6 h-[420px]">

            {/* =========================
                Header
            ========================= */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        Top Files
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                        Most requested content
                    </p>

                </div>

                <span className="bg-violet-600 text-white text-xs px-3 py-1 rounded-full">
                    Live
                </span>

            </div>

            {/* =========================
                File List
            ========================= */}

            <div className="space-y-5">

                {files.map((file, index) => (

                    <div key={index}>

                        <div className="flex justify-between items-center mb-2">

                            <div className="flex items-center gap-3">

                                {getIcon(file.type)}

                                <div>

                                    <p className="text-white text-sm font-medium">
                                        {file.name}
                                    </p>

                                    <p className="text-slate-400 text-xs">
                                        {file.requests.toLocaleString()} Requests
                                    </p>

                                </div>

                            </div>

                            <span className="text-violet-400 font-semibold">
                                {file.percentage}%
                            </span>

                        </div>

                        <div className="w-full bg-slate-700 rounded-full h-2">

                            <div
                                className="bg-violet-500 h-2 rounded-full transition-all duration-700"
                                style={{
                                    width: `${file.percentage}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

            {/* =========================
                Footer
            ========================= */}

            <div className="border-t border-slate-700 mt-6 pt-4">

                <div className="flex justify-between">

                    <span className="text-slate-400">
                        Total Files
                    </span>

                    <span className="text-white font-semibold">
                        {files.length}
                    </span>

                </div>

            </div>

        </div>

    );

}

export default TopFiles;