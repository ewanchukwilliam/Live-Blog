# blogAI

A blog platform about AI - being rewritten from Django to Spring Boot + Vue.js.

---

## Stack Migration Checklist

### Phase 1: Project Setup & Infrastructure

- [ ] **Docker Environment**
  - [ ] Create `Dockerfile` for Spring Boot backend
  - [ ] Create `Dockerfile` for Vue.js frontend
  - [ ] Update `docker-compose.yml` with all services (backend, frontend, database)
  - [ ] Configure Docker networking between services
  - [ ] Set up environment variable management (`.env` files)

- [ ] **Database Setup**
  - [ ] Set up MongoDB Docker container
  - [ ] Create database Docker container configuration
  - [ ] Design data migration strategy from existing data

### Phase 2: Spring Boot Backend

- [ ] **Project Initialization**
  - [ ] Initialize Spring Boot project (Spring Initializr)
  - [ ] Add dependencies: Spring Web, Spring Data MongoDB, Spring Security, Lombok, etc.
  - [ ] Configure `application.yml` / `application.properties`
  - [ ] Set up project package structure

- [ ] **Database Layer**
  - [ ] Create MongoDB document models (User, Article, Tutorial, Project, etc.)
  - [ ] Create repositories for each document
  - [ ] Configure MongoDB connection settings
  - [ ] Set up Mongock for database migrations (optional)

- [ ] **Authentication & Security**
  - [ ] Implement JWT authentication
  - [ ] Configure Spring Security
  - [ ] Create user registration endpoint
  - [ ] Create login/logout endpoints
  - [ ] Set up password encryption (BCrypt)
  - [ ] Configure CORS for Vue.js frontend

- [ ] **API Endpoints**
  - [ ] Create REST controllers for articles
  - [ ] Create REST controllers for tutorials
  - [ ] Create REST controllers for projects
  - [ ] Create REST controllers for user management
  - [ ] Implement DTOs for request/response
  - [ ] Add input validation
  - [ ] Implement error handling (global exception handler)

- [ ] **Additional Features**
  - [ ] Add pagination support
  - [ ] Implement search functionality
  - [ ] Add file upload support (images, etc.)
  - [ ] Set up logging
  - [ ] Write unit tests
  - [ ] Write integration tests

### Phase 3: Vue.js Frontend

- [ ] **Project Initialization**
  - [ ] Create Vue 3 project (Vite recommended)
  - [ ] Set up TypeScript (optional but recommended)
  - [ ] Install and configure Vue Router
  - [ ] Install and configure Pinia (state management)
  - [ ] Install Axios for API calls
  - [ ] Set up Tailwind CSS or preferred styling solution

- [ ] **Core Components**
  - [ ] Create layout components (Header, Footer, Sidebar, Navigation)
  - [ ] Create reusable UI components (Button, Card, Modal, Form inputs)
  - [ ] Set up responsive design

- [ ] **Authentication UI**
  - [ ] Create login page
  - [ ] Create registration page
  - [ ] Implement auth state management
  - [ ] Add route guards for protected pages
  - [ ] Handle token storage and refresh

- [ ] **Content Pages**
  - [ ] Create home page
  - [ ] Create articles list page
  - [ ] Create article detail page
  - [ ] Create tutorials list page
  - [ ] Create tutorial detail page
  - [ ] Create projects list page
  - [ ] Create project detail page

- [ ] **Admin/Content Management**
  - [ ] Create article editor (Markdown support)
  - [ ] Create tutorial editor
  - [ ] Create project editor
  - [ ] Implement image upload
  - [ ] Create dashboard page

- [ ] **Additional Features**
  - [ ] Add loading states
  - [ ] Implement error handling/display
  - [ ] Add search functionality
  - [ ] Implement pagination UI
  - [ ] Write component tests

### Phase 4: Integration & Deployment

- [ ] **Integration**
  - [ ] Connect frontend to backend APIs
  - [ ] Test all API integrations
  - [ ] Handle API error responses in frontend
  - [ ] Test authentication flow end-to-end

- [ ] **Docker Finalization**
  - [ ] Optimize Dockerfiles for production (multi-stage builds)
  - [ ] Configure production environment variables
  - [ ] Set up Docker volumes for persistent data
  - [ ] Test full stack with `docker-compose up`

- [ ] **Documentation**
  - [ ] Document API endpoints (Swagger/OpenAPI)
  - [ ] Update README with new setup instructions
  - [ ] Document environment variables
  - [ ] Create contributing guidelines

### Phase 5: Cleanup

- [ ] Remove old Django files
- [ ] Remove old Python dependencies
- [ ] Archive or backup old codebase
- [ ] Final testing
- [ ] Deploy to production

---

## New Project Structure (Target)

```
blog/
├── backend/                    # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── Dockerfile
│   └── pom.xml (or build.gradle)
│
├── frontend/                   # Vue.js application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   ├── stores/
│   │   └── api/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Quick Start (After Migration)

```bash
# Clone the repository
git clone <repo-url>
cd blog

# Copy environment file
cp .env.example .env

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8080
```

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Backend | Spring Boot 3.x (Java 17+) |
| Frontend | Vue.js 3 + Vite |
| Database | PostgreSQL |
| Auth | JWT + Spring Security |
| Containerization | Docker + Docker Compose |
| Styling | Tailwind CSS |

---

## Original Project

This project was originally built with:
- Python/Django
- SQLite/PostgreSQL
- Tailwind CSS
