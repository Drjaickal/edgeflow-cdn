# 🚀 EdgeFlow CDN

> A modern, distributed Content Delivery Network (CDN) built from scratch using **FastAPI**, **React**, and **Python**, featuring multiple Edge Servers, a Central Controller, an Origin Server, and a real-time Monitoring Dashboard.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.11+-yellow.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-green.svg)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

---

# 📖 Overview

EdgeFlow CDN is an educational yet production-inspired Content Delivery Network that demonstrates how modern CDNs like **Cloudflare**, **Akamai**, and **Amazon CloudFront** deliver content with low latency.

Instead of serving every request directly from the origin server, EdgeFlow introduces geographically distributed **Edge Servers** that cache content closer to users.

The project includes a modern monitoring dashboard that visualizes traffic, cache statistics, edge health, latency, request metrics, and system performance in real time.

---

# ✨ Features

- 🌍 Multiple Edge Servers
- 🏢 Dedicated Origin Server
- 🧠 Intelligent Controller
- 📦 Edge Caching
- ⚡ Cache Hit & Cache Miss Handling
- 📊 Real-Time Dashboard
- 📈 Analytics
- 📂 Request Logs
- 🖥 Edge Monitoring
- ❤️ Health Checks
- 📉 Cache Statistics
- 🔄 Auto Refresh Dashboard
- 🎨 Modern Responsive React UI

---

# 🏗 System Architecture

```
                    Client
                       │
                       ▼
          React Monitoring Dashboard
                       │
                 REST API Requests
                       │
                       ▼
              Controller Server
                       │
      ┌────────────────┼────────────────┐
      ▼                ▼                ▼
 Edge Delhi       Edge Mumbai     Edge Bangalore
   Cache             Cache            Cache
      │                │                │
      └────────────────┼────────────────┘
                       │
                       ▼
                Origin Server
```

---

# 🧩 Components

## 🏢 Origin Server

The Origin Server stores all original files.

Responsibilities

- Original content storage
- File serving
- Source of truth
- Content synchronization

---

## 🌍 Edge Servers

Each edge server caches requested files.

Responsibilities

- Cache requested files
- Serve cached content
- Reduce latency
- Reduce origin traffic
- Collect performance metrics

---

## 🧠 Controller

The controller acts as the brain of the CDN.

Responsibilities

- Register Edge Servers
- Health Monitoring
- Route Requests
- Aggregate Metrics
- Dashboard APIs

---

## 📊 Dashboard

The React dashboard provides complete visibility into the CDN.

Pages include

- Dashboard
- Analytics
- Edge Servers
- Origin Server
- Requests
- Cache
- Settings

---

# ⚙ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Recharts
- Axios
- Lucide React

## Backend

- Python
- FastAPI
- Uvicorn
- AsyncIO
- HTTPX

---

# 📁 Project Structure

```
EdgeFlow-CDN/

frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
backend/
│
├── controller/
├── edge_server/
├── origin/
└── common/

README.md
```

---

# 📊 Dashboard Preview

The dashboard includes:

- Total Requests
- Cache Hit Ratio
- Data Served
- Average Latency
- Global Edge Status
- Cache Analytics
- Request Analytics
- File Statistics
- Edge Monitoring

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/EdgeFlow-CDN.git
```

Go inside project

```bash
cd EdgeFlow-CDN
```

Install frontend dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Backend setup documentation will be available soon.

---

# 📌 Current Progress

- [x] React Dashboard
- [x] Dashboard Pages
- [x] Sidebar Navigation
- [x] Charts
- [x] Monitoring Components
- [x] Routing
- [ ] Origin Server
- [ ] Edge Servers
- [ ] Controller
- [ ] Cache Engine
- [ ] Deployment

---

# 🚧 Roadmap

### Phase 1

- React Dashboard

### Phase 2

- Origin Server

### Phase 3

- Multiple Edge Servers

### Phase 4

- Controller Server

### Phase 5

- Intelligent Routing

### Phase 6

- Docker Deployment

### Phase 7

- Kubernetes Support

---

# 🎯 Future Improvements

- Redis Cache
- Geo Routing
- AI Based Routing
- Docker Compose
- Kubernetes
- TLS Support
- JWT Authentication
- CDN Compression
- Rate Limiting
- Monitoring Dashboard
- Prometheus Integration
- Grafana

---

# 🤝 Contributing

Contributions are welcome.

Feel free to open issues or submit pull requests.

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Avijit Acharya**

Computer Science Engineering Student

Built with ❤️ using React, FastAPI and Python.

---

⭐ If you found this project useful, consider giving it a star.
