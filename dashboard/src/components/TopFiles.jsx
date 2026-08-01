const files = [
    {
        name: "hero-banner.jpg",
        requests: 1245,
        hitRatio: 95,
        type: "image",
    },
    {
        name: "product-demo.mp4",
        requests: 987,
        hitRatio: 82,
        type: "video",
    },
    {
        name: "style.css",
        requests: 856,
        hitRatio: 70,
        type: "css",
    },
    {
        name: "app.js",
        requests: 654,
        hitRatio: 58,
        type: "javascript",
    },
    {
        name: "README.md",
        requests: 430,
        hitRatio: 42,
        type: "document",
    },
];

const colors = {
    image: "🖼️",
    video: "🎥",
    css: "🟢",
    javascript: "🟡",
    document: "📄",
};

function TopFiles() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6 h-[420px]">

            <h2 className="text-2xl font-bold text-white">
                Most Requested Content
            </h2>

            <p className="text-gray-400 mt-1 mb-6">
                Top cached assets
            </p>

            <div className="space-y-5">

                {files.map((file) => (

                    <div
                        key={file.name}
                        className="space-y-2"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-white font-medium">

                                    {colors[file.type]} {file.name}

                                </p>

                                <p className="text-gray-400 text-sm">

                                    {file.requests.toLocaleString()} Requests

                                </p>

                            </div>

                            <span className="text-violet-400 font-bold">

                                {file.hitRatio}%

                            </span>

                        </div>

                        <div className="w-full bg-[#1F2937] rounded-full h-2">

                            <div
                                className="bg-violet-500 h-2 rounded-full"
                                style={{
                                    width: `${file.hitRatio}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default TopFiles;