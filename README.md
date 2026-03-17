# 🏢 Online Gatepass Management System (GPMS)

A full-stack web application designed to **digitize and streamline the gatepass process** within an organization. GPMS replaces traditional paper-based visitor entry systems with a centralized, role-aware digital platform — enabling real-time request management, approvals, and employee outing workflows.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Limitations](#-limitations)
- [Future Improvements](#-future-improvements)
- [What I Learned](#-what-i-learned)

---

## 📖 Overview

Managing visitor access manually — through registers, phone calls, and physical passes — is inefficient and error-prone. **GPMS** addresses this by providing:

- A **visitor-facing form** to submit visit requests digitally
- An **admin/employee dashboard** for centralized request management
- **Approve/Reject workflows** with persistent state stored in a relational database
- An **employee outing request** module for internal movement tracking

This project was developed as a practical demonstration of full-stack development principles, RESTful API design, and relational database management.

---

## ✨ Features

### 🔐 Authentication
- Secure user login and signup backed by PostgreSQL
- Session-based access control for protected routes

### 📋 Visitor Management
- Digital visitor request form submission
- Structured data capture (visitor details, purpose, host employee, etc.)
- Request listing with status tracking (Pending / Approved / Rejected)

### 🗂️ Admin / Employee Dashboard
- Centralized view of all incoming visitor requests
- One-click **Approve** or **Reject** actions
- Real-time status updates reflected across the system

### 🚶 Employee Outing Requests
- Employees can submit outing requests through the platform
- Requests are logged and manageable via the dashboard

### ⚙️ Backend API Layer
- RESTful APIs for all core operations (users, visitors, requests)
- Clean separation of concerns between routes, controllers, and database logic

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | React.js                |
| Backend     | Node.js, Express.js     |
| Database    | PostgreSQL              |
| API Style   | RESTful                 |
| Environment | dotenv (.env config)    |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Client (React.js)                 │
│   ┌──────────────┐  ┌───────────────┐  ┌──────────┐ │
│   │  Auth Pages  │  │ Visitor Form  │  │Dashboard │ │
│   └──────┬───────┘  └──────┬────────┘  └────┬─────┘ │
└──────────┼─────────────────┼────────────────┼────────┘
           │        HTTP / REST API            │
           ▼                 ▼                 ▼
┌─────────────────────────────────────────────────────┐
│               Server (Node.js + Express)             │
│   ┌──────────┐  ┌──────────────┐  ┌──────────────┐  │
│   │  /auth   │  │  /visitors   │  │  /requests   │  │
│   └──────────┘  └──────────────┘  └──────────────┘  │
│                  Middleware / Validation              │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                  PostgreSQL Database                 │
│     users | visitor_requests | employee_outings     │
└─────────────────────────────────────────────────────┘
```

The application follows a standard **3-tier architecture**:
- **Presentation Layer** — React.js handles all UI rendering and client-side routing
- **Application Layer** — Express.js processes business logic and exposes RESTful endpoints
- **Data Layer** — PostgreSQL stores all relational data with a structured schema design

---

## 📁 Project Structure

```
GPMS/
├── client/                   # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Route-level page components
│   │   └── App.js
│   ├── package.json
│   └── README.md
│
├── server/                   # Node.js + Express backend
│   ├── database.js           # PostgreSQL connection setup
│   ├── db.js                 # Query helpers / DB utilities
│   ├── server.js             # Entry point, route definitions
│   ├── .env                  # Environment variables (not committed)
│   └── package.json
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (v13+)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gpms.git
cd gpms
```

### 2. Configure the Database

Create a PostgreSQL database and update your credentials in `server/.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gpms_db
DB_USER=your_pg_username
DB_PASSWORD=your_pg_password
PORT=5000
```

Run the schema setup (if a SQL init file is provided):

```bash
psql -U your_pg_username -d gpms_db -f server/schema.sql
```

### 3. Install Dependencies & Start the Backend

```bash
cd server
npm install
node server.js
```

> The backend will start on `http://localhost:5000`

### 4. Install Dependencies & Start the Frontend

```bash
cd client
npm install
npm start
```

> The React app will start on `http://localhost:3000`

---

## 💻 Usage

| Role     | Actions Available                                              |
|----------|----------------------------------------------------------------|
| Visitor  | Submit a visit request via the public form                     |
| Employee | Log in, view incoming requests, approve/reject, submit outings |
| Admin    | Full dashboard access to manage all requests and users         |

1. Navigate to `http://localhost:3000`
2. Register or log in with valid credentials
3. Visitors can fill out the **Visitor Request Form**
4. Logged-in employees access the **Dashboard** to manage approvals
5. Employee outing requests are submitted and tracked separately

---

## ⚠️ Limitations

This project is a functional prototype with the following known limitations:

| Limitation | Details |
|------------|---------|
| **Single-tenant only** | The system is currently scoped for a single organization. Multi-tenant architecture has not been implemented. |
| **Basic authentication** | Auth is session-based with minimal security hardening. No JWT or OAuth integration. |
| **No advanced RBAC** | Role-based access control exists at a surface level but does not enforce granular permission boundaries. |
| **Linear approval flow** | The approval workflow supports a single level of decision-making. Hierarchical or multi-level approvals are not yet implemented. |
| **No email/SMS notifications** | Visitors and employees are not notified via external channels upon status changes. |

---

## 🔮 Future Improvements

- [ ] **Multi-tenant support** — Onboard multiple organizations with isolated data environments
- [ ] **JWT-based authentication** — Replace session auth with stateless, token-based security
- [ ] **Advanced RBAC** — Granular roles (Super Admin, Department Head, Security Staff, etc.)
- [ ] **Multi-level approval workflows** — Hierarchical approval chains with escalation logic
- [ ] **Email / SMS notifications** — Notify visitors and employees on request status updates
- [ ] **Audit logs** — Track all approval/rejection actions with timestamps and actor identity
- [ ] **Visitor badge generation** — Auto-generate printable passes upon approval
- [ ] **Analytics dashboard** — Visualize visitor trends, peak hours, and approval rates

---

## 📚 What I Learned

Working on GPMS provided hands-on experience across the full development lifecycle:

- **Full-stack integration** — Connecting a React frontend to an Express backend with clean API contracts
- **RESTful API design** — Structuring endpoints, handling HTTP methods, and managing responses effectively
- **Relational database design** — Designing normalized schemas and writing SQL queries for real-world use cases
- **Authentication fundamentals** — Implementing login/signup flows with server-side validation
- **Debugging & testing** — Identifying and resolving backend issues through systematic testing and logging
- **Project structuring** — Organizing a multi-folder monorepo for maintainability

---

## 📄 License

This project is open for educational and portfolio purposes.

---

<p align="center">Built with ❤️ as a full-stack learning project</p>
