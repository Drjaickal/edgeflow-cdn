/* =========================
   Imports
========================= */

import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import RequestChart from "../components/RequestChart";
import CacheChart from "../components/CacheChart";
import TopFiles from "../components/TopFiles";

/* =========================
   Analytics Page
========================= */

function Analytics() {

    /* =========================
       Render
    ========================= */

    return (

        <div className="flex-1 flex flex-col overflow-auto bg-[#09111f]">

            {/* =========================
                Navbar
            ========================= */}

            <Navbar />

            <div className="p-8">

                {/* =========================
                    Page Header
                ========================= */}

                <PageHeader

                    title="Analytics"

                    subtitle="Analyze CDN traffic, cache performance and file requests."

                    showRefresh={true}

                />

                {/* =========================
                    Charts Section
                ========================= */}

                <div className="grid grid-cols-12 gap-6">

                    <div className="col-span-8">

                        <RequestChart />

                    </div>

                    <div className="col-span-4">

                        <CacheChart />

                    </div>

                </div>

                {/* =========================
                    Top Files
                ========================= */}

                <div className="mt-6">

                    <TopFiles />

                </div>

            </div>

        </div>

    );

}

export default Analytics;