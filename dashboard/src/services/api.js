/*
============================================================
EdgeFlow CDN
API Service
------------------------------------------------------------
This file contains all API calls used by the React Dashboard.
============================================================
*/

import axios from "axios";

/* ==========================================================
   Base URL
========================================================== */

const API = axios.create({

    baseURL: "http://127.0.0.1:8000",

    timeout: 5000,

});

/* ==========================================================
   Dashboard API
========================================================== */

export const getDashboardData = async () => {

    try {

        const response = await API.get("/dashboard");

        return response.data;

    } catch (error) {

        console.error(
            "Dashboard API Error:",
            error
        );

        return {

            edges: [],

            metrics: [],

        };

    }

};

/* ==========================================================
   Edge List
========================================================== */

export const getEdges = async () => {

    try {

        const response = await API.get("/edges");

        return response.data;

    } catch (error) {

        console.error(
            "Edge API Error:",
            error
        );

        return [];

    }

};

/* ==========================================================
   Metrics
========================================================== */

export const getMetrics = async () => {

    try {

        const response = await API.get("/metrics");

        return response.data;

    } catch (error) {

        console.error(
            "Metrics API Error:",
            error
        );

        return [];

    }

};

/* ==========================================================
   Health
========================================================== */

export const getHealth = async () => {

    try {

        const response = await API.get("/health");

        return response.data;

    } catch (error) {

        console.error(
            "Health API Error:",
            error
        );

        return {

            status: "offline",

        };

    }

};

export default API;