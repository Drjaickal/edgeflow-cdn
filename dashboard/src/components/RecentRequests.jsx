const requests = [
    {
        id: 1,
        file: "hero-banner.jpg",
        edge: "Delhi",
        status: "Cache Hit",
        latency: "18 ms",
        size: "1.8 MB",
        time: "10:31:15",
    },
    {
        id: 2,
        file: "style.css",
        edge: "Mumbai",
        status: "Cache Hit",
        latency: "23 ms",
        size: "58 KB",
        time: "10:31:08",
    },
    {
        id: 3,
        file: "product-demo.mp4",
        edge: "Delhi",
        status: "Cache Miss",
        latency: "104 ms",
        size: "82 MB",
        time: "10:30:56",
    },
    {
        id: 4,
        file: "app.js",
        edge: "Bangalore",
        status: "Cache Hit",
        latency: "27 ms",
        size: "320 KB",
        time: "10:30:42",
    },
    {
        id: 5,
        file: "README.md",
        edge: "Mumbai",
        status: "Cache Hit",
        latency: "15 ms",
        size: "12 KB",
        time: "10:30:30",
    },
];

function RecentRequests() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6 h-[420px]">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-white">
                    Recent Requests
                </h2>

                <span className="text-sm text-green-400">
                    Live Traffic
                </span>

            </div>

            <div className="overflow-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-gray-700 text-gray-400">

                            <th className="text-left py-3">File</th>
                            <th className="text-left py-3">Edge</th>
                            <th className="text-left py-3">Status</th>
                            <th className="text-left py-3">Latency</th>
                            <th className="text-left py-3">Size</th>
                            <th className="text-left py-3">Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {requests.map((request) => (

                            <tr
                                key={request.id}
                                className="border-b border-gray-800 hover:bg-[#1A2332] transition-colors"
                            >

                                <td className="py-4 text-white">
                                    {request.file}
                                </td>

                                <td className="py-4 text-gray-300">
                                    {request.edge}
                                </td>

                                <td className="py-4">

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${request.status === "Cache Hit"
                                                ? "bg-green-600/20 text-green-400"
                                                : "bg-red-600/20 text-red-400"
                                            }`}
                                    >
                                        {request.status}
                                    </span>

                                </td>

                                <td className="py-4 text-cyan-400">
                                    {request.latency}
                                </td>

                                <td className="py-4 text-gray-300">
                                    {request.size}
                                </td>

                                <td className="py-4 text-gray-400">
                                    {request.time}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default RecentRequests;