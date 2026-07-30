import axios from "axios";

/*
|--------------------------------------------------------------------------
| Base URL
|--------------------------------------------------------------------------
|
| Change this if your Controller runs on another host/port.
|
*/

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 5000,
});

/*
|--------------------------------------------------------------------------
| Controller APIs
|--------------------------------------------------------------------------
*/

export const getEdges = async () => {
    const response = await API.get("/edges");
    return response.data;
};

export const getRegisteredEdges = async () => {
    const response = await API.get("/registered");
    return response.data;
};

export const getRoute = async (filename) => {
    const response = await API.get(`/route/${filename}`);
    return response.data;
};

/*
|--------------------------------------------------------------------------
| Edge Metrics
|--------------------------------------------------------------------------
*/

export const getEdgeMetrics = async (port) => {
    const response = await axios.get(
        `http://127.0.0.1:${port}/metrics`
    );

    return response.data;
};

/*
|--------------------------------------------------------------------------
| Health Checks
|--------------------------------------------------------------------------
*/

export const getControllerHealth = async () => {
    const response = await API.get("/health");
    return response.data;
};

export const getEdgeHealth = async (port) => {
    const response = await axios.get(
        `http://127.0.0.1:${port}/health`
    );

    return response.data;
};

/*
|--------------------------------------------------------------------------
| Aggregate Dashboard Data
|--------------------------------------------------------------------------
*/

export const getDashboardData = async () => {

    try {

        const edges = await getRegisteredEdges();

        const metrics = await Promise.all(

            edges.map(async (edge) => {

                try {

                    const data = await getEdgeMetrics(
                        new URL(edge.url).port
                    );

                    return {

                        city: edge.city,
                        url: edge.url,
                        ...data,

                    };

                } catch {

                    return {

                        city: edge.city,
                        url: edge.url,
                        status: "offline",

                    };

                }

            })

        );

        return {

            edges,
            metrics,

        };

    } catch (error) {

        console.error("Dashboard API Error:", error);

        return {

            edges: [],
            metrics: [],

        };

    }

};

export default API;