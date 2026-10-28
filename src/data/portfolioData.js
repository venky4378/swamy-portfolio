export const personalInfo = {
  name: "Venkayya Swamy Chamanthi",
  displayName: "Venkayya Swamy Chamanthi",
  title: "Java Backend & Full Stack Engineer",
  location: "Hyderabad, India",
  phone: "+91 6309736330",
  email: "venkyswamy437@gmail.com",
  github: "https://github.com/venky4378",
  linkedin: "https://www.linkedin.com/in/swamy-ch",
  bio: "Java Backend Developer and 2026 Computer Science (Data Science) graduate with hands-on internship experience in Java Full Stack development. Experienced in building high-throughput microservices with Kafka, RESTful APIs, Spring Security RBAC, and AI-powered document retrieval using Spring AI & PGVector.",
  status: "Available for Software Engineering Opportunities"
};

export const skillsData = {
  backend: [
    { name: "Java (Core, 8, 17, 21)", level: "Advanced" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "Spring MVC & Servlets", level: "Advanced" },
    { name: "Spring Data JPA & Hibernate", level: "Advanced" },
    { name: "Spring Cloud (Eureka, Gateway)", level: "Proficient" },
    { name: "Spring AI", level: "Proficient" },
    { name: "RESTful API Design & DTOs", level: "Advanced" }
  ],
  distributed: [
    { name: "Apache Kafka", level: "Proficient" },
    { name: "OpenFeign RPC", level: "Advanced" },
    { name: "Event-Driven Architecture", level: "Proficient" },
    { name: "Circuit Breaker & Fallback", level: "Proficient" },
    { name: "Microservices Architecture", level: "Advanced" }
  ],
  aiAndRAG: [
    { name: "Spring AI RAG Pipeline", level: "Proficient" },
    { name: "Google Gemini Embeddings", level: "Proficient" },
    { name: "PostgreSQL with PGVector", level: "Proficient" },
    { name: "Groq LLM Integration", level: "Proficient" },
    { name: "Local Ollama LLM WebApps", level: "Proficient" },
    { name: "Apache PDFBox Text Extraction", level: "Advanced" }
  ],
  securityAndDatabases: [
    { name: "Spring Security", level: "Advanced" },
    { name: "JWT Authentication", level: "Advanced" },
    { name: "Role-Based Access Control (RBAC)", level: "Advanced" },
    { name: "PostgreSQL & PGVector", level: "Proficient" },
    { name: "MySQL (Schema & Data Modeling)", level: "Advanced" }
  ],
  coreCsAndTools: [
    { name: "Data Structures & Algorithms", level: "Proficient" },
    { name: "OOPs & Design Patterns", level: "Advanced" },
    { name: "Aspect-Oriented Programming (AOP)", level: "Proficient" },
    { name: "Git, GitHub & Maven", level: "Advanced" },
    { name: "Postman & Swagger UI", level: "Advanced" },
    { name: "React.js, HTML5, CSS3", level: "Proficient" }
  ]
};

export const projects = [
  {
    id: "pg-finder",
    category: "microservices",
    title: "PG Finder – Microservices Hostel Booking System",
    subtitle: "Distributed Bed-Level Inventory & Reservation Platform",
    badge: "Microservices + Kafka",
    featured: true,
    github: "https://github.com/venky4378/pg-finder-microservices",
    tech: ["Java", "Spring Boot", "Spring Cloud (Eureka, Gateway)", "Apache Kafka", "OpenFeign", "JWT", "MySQL", "React.js"],
    summary: "Engineered a microservices-based accommodation platform supporting hostel discovery, bed availability management, and reservation workflows for residents and property owners.",
    highlights: [
      "Developed independent User, Hostel, Booking, and Notification services using Spring Boot with dedicated MySQL schemas for service-level data management.",
      "Integrated Spring Cloud Gateway, Eureka Server, and OpenFeign for centralized request routing, service discovery, and synchronous inter-service communication.",
      "Implemented JWT authentication, role-based access control (RBAC), and Apache Kafka for secure API access and asynchronous processing of booking-related notifications.",
      "Designed date-conflict reservation queries to eliminate double-booking and ensure strict multi-tenant data consistency."
    ]
  },
  {
    id: "cognify-ai",
    category: "ai",
    title: "CognifyAI — AI-Powered Document Intelligence Platform",
    subtitle: "Semantic Retrieval & Context-Grounded Question Answering",
    badge: "Spring AI + PGVector",
    featured: true,
    github: "https://github.com/venky4378/cognifyai-document-intelligence",
    tech: ["Java", "Spring Boot", "Spring AI", "Spring Security", "JWT", "PostgreSQL", "PGVector", "Apache PDFBox", "Google Gemini Embeddings", "Groq API"],
    summary: "Developed an AI-powered document intelligence platform enabling users to upload PDF documents and retrieve context-aware answers through natural-language queries.",
    highlights: [
      "Implemented document ingestion and text extraction using Apache PDFBox, followed by semantic chunking and embedding generation to prepare documents for retrieval.",
      "Integrated Google Gemini embedding models with PostgreSQL and PGVector to perform vector similarity searches and retrieve relevant document passages.",
      "Leveraged Spring AI and Groq-hosted language models to generate context-grounded responses with page-level citations.",
      "Incorporated Spring Security and JWT authentication to enforce strict per-user document access controls and multi-tenant isolation."
    ]
  },
  {
    id: "foodflow",
    category: "microservices",
    title: "FoodFlow — Microservices Restaurant Order Management",
    subtitle: "Distributed Food Ordering, Kitchen & Delivery Pipeline",
    badge: "Microservices",
    featured: true,
    github: "https://github.com/venky4378/FoodFlow-Microservices-Restaurant-Order-Management-System",
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "Spring Data JPA", "MySQL", "Service Discovery"],
    summary: "A distributed restaurant ordering and inventory management platform coordinating menus, real-time customer orders, kitchen workflows, and delivery status tracking.",
    highlights: [
      "Decomposed workflows into dedicated customer order, restaurant catalog, and delivery fulfillment services.",
      "Engineered decoupled RESTful endpoints with structured DTO contracts and transactional consistency across database layers.",
      "Optimized query performance for multi-item menus and concurrent dining reservations."
    ]
  },
  {
    id: "medicore",
    category: "fullstack",
    title: "Medicore — Full-Stack Hospital Management System",
    subtitle: "Healthcare Administration & Patient Workflow Portal",
    badge: "Spring Boot + React",
    featured: true,
    github: "https://github.com/venky4378/Medicore",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "React.js", "AOP", "REST APIs"],
    summary: "Developed a full-stack hospital management application to manage patient records and streamline hospital-related operations through a React-based UI and Spring Boot backend.",
    highlights: [
      "Designed RESTful APIs using Spring Boot, Spring Data JPA, and Hibernate to handle patient data management and database interactions.",
      "Implemented centralized exception handling and Aspect-Oriented Programming (AOP) for consistent error responses and application-level logging.",
      "Integrated the React frontend with backend REST APIs using Axios and configured cross-origin resource sharing (CORS) for seamless communication."
    ]
  },
  {
    id: "ollama-chat",
    category: "ai",
    title: "Ollama AI Chat WebApp",
    subtitle: "Local Generative AI & Private LLM Interface",
    badge: "Local AI & LLM",
    featured: false,
    github: "https://github.com/venky4378/Ollama-AI-Chat-WebApp",
    tech: ["Java / Python", "Ollama", "Local LLM", "REST API", "Streaming Responses", "Web Interface"],
    summary: "A private, on-premise generative AI chat application communicating with locally hosted LLMs via Ollama, enabling zero-data-leak intelligent conversations.",
    highlights: [
      "Integrated local Ollama inference server for private, air-gapped conversational AI without external cloud API dependencies.",
      "Implemented streaming responses for real-time token rendering and smooth interactive conversational UI.",
      "Configured temperature and system prompt controls for domain-specific assistant personas."
    ]
  },
  {
    id: "employee-address",
    category: "microservices",
    title: "Employee & Address Microservices",
    subtitle: "Inter-Service Communication & Cloud Architecture",
    badge: "Microservices POC",
    featured: false,
    github: "https://github.com/venky4378/Employee-Address-Microservices",
    tech: ["Java", "Spring Boot", "OpenFeign / WebClient", "Spring Data JPA", "MySQL", "Eureka"],
    summary: "A clean microservices implementation modeling employee enterprise records and distributed location profiles connected via service discovery.",
    highlights: [
      "Demonstrated declarative inter-service RPC communication using OpenFeign with load balancing.",
      "Enforced separation of concerns with isolated databases for employee profiles and physical address records."
    ]
  },
  {
    id: "atm-web",
    category: "fullstack",
    title: "Web-Based ATM Banking System",
    subtitle: "Secure Transactional Banking Simulator",
    badge: "Java Web",
    featured: false,
    github: "https://github.com/venky4378/Atm-Web-based-Project",
    tech: ["Java", "Servlets & JSP", "JDBC", "MySQL", "Transaction Management"],
    summary: "A secure web-based ATM simulator handling PIN authentication, deposit, withdrawal, balance inquiry, and mini-statement transaction logs with ACID guarantees.",
    highlights: [
      "Implemented strict database transaction rollbacks upon balance deficits or mid-transaction failures.",
      "Built clean session management and input validations to prevent unauthorized account access."
    ]
  },
  {
    id: "toycraft-tales",
    category: "analytics",
    title: "ToyCraft Tales – Manufacturer Data Analytics",
    subtitle: "Business Intelligence & Manufacturing Dashboard",
    badge: "Data & Tableau",
    featured: false,
    github: "https://github.com/venky4378/ToyCraft-Tales-Tableau-s-Vision-into-Toy-Manufacturer-Data-1",
    tech: ["Python", "Tableau", "Data Analytics", "SQL", "Data Modeling"],
    summary: "An analytical business intelligence platform delivering actionable insights into toy manufacturing workflows, sales volume patterns, and revenue forecasting.",
    highlights: [
      "Engineered automated data cleaning and aggregation pipelines for multi-dimensional manufacturing datasets.",
      "Constructed interactive executive KPI dashboards analyzing regional market penetration and production margins."
    ]
  }
];

export const experience = [
  {
    role: "Backend Java Developer Intern",
    company: "V S IT Solutions",
    location: "Hyderabad, India",
    period: "March 2026 – August 2026 (6 Months)",
    type: "Enterprise Student Portal & Learning Management System",
    details: [
      "Designed and developed Spring Boot REST APIs for student onboarding, batch management, attendance, assignments, assessments, and project-progress tracking, enabling role-based dashboards for students and administrators.",
      "Contributed to a modular microservices backend by separating student, attendance, assessment, and reporting workflows into independently maintainable services; applied circuit breaker and fallback mechanisms to prevent cascading failures and provide graceful degradation.",
      "Designed normalised JPA/SQL data models with optimised entity relationships and pagination, reducing redundant data and improving performance for large student and dashboard datasets.",
      "Strengthened backend quality by implementing DTO-based API contracts, request validation, centralised exception handling, role-based access control, logging, and unit/API testing, ensuring secure, maintainable, and reliable services."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    institution: "Aditya College of Engineering and Technology",
    period: "2023 – 2026",
    score: "CGPA: 7.55 / 10"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Aditya Engineering College",
    period: "2023 – 2026",
    score: "CGPA: 8.31 / 10"
  },
  {
    degree: "SSC 10th",
    institution: "Zilla Parishath HighSchool, Thetagunta",
    period: "2019 – 2020",
    score: "CGPA: 9.8 / 10"
  }
];

export const achievements = [
  { title: "Java Full Stack Development", detail: "Certified by V.S. IT Solutions" },
  { title: "HackerRank Java (4-Star)", detail: "Solved 100+ coding challenges on HackerRank" },
  { title: "HackerRank SQL (Basic)", detail: "Certified in SQL and relational database queries" },
  { title: "Veda Fest 2024 Technical Quiz", detail: "Secured 2nd Place in College Technical Quiz" },
  { title: "College Major Project Lead", detail: "Led team coordinating task allocation, implementation, and delivery" }
];