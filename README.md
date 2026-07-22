# 🌐 Personal Portfolio — Tharindu Supasan Aththanayaka

> A modern, interactive personal portfolio website showcasing my journey as an IT undergraduate, developer, university rugby player, and creative content creator.

---

## 👋 About This Project

This is my personal portfolio website, designed to represent more than just my technical skills.

It brings together my different interests and experiences in one interactive digital space — from technology and software development to university rugby, creative content, design, photography, and personal projects.

The website focuses on a modern, responsive, and interactive user experience while maintaining a clean and professional visual identity.

---

## ✨ Key Features

- 🎨 Modern and responsive portfolio design
- 🌙 Dark mode and light mode support
- 🧭 Multi-page navigation with React Router
- 🧑‍💻 Interactive personality-based hero section
- 💼 Dynamic projects showcase
- 📸 Dynamic gallery system
- 📬 Functional contact form with EmailJS
- 📄 Downloadable CV
- 🔗 Social media and professional profile links
- 🔐 Admin authentication system
- 🛠️ Admin dashboard for managing content
- 🖼️ Project and gallery management
- 📱 Responsive design for desktop, tablet, and mobile devices
- ⚡ Fast development and optimized production build

---

## 🧩 Website Sections

### 🏠 Home

The home page introduces different sides of my personality and interests:

- 💻 IT & Technology
- 🏉 University Rugby
- 🎥 Creative Content
- ✨ Personal Exploration

The interactive hero section dynamically changes its content and visual identity based on the selected personality.

---

### 👨‍💻 IT & Technology

A section dedicated to my journey as a BSc. Information Technology undergraduate.

It showcases my technical interests, development journey, programming skills, and personal projects.

---

### 🏉 Sports

A section representing my experience as a university rugby player.

It highlights:

- Teamwork
- Discipline
- Leadership
- Resilience
- Sports experiences

---

### 🎨 Creator

A section focused on my creative interests, including:

- 🎥 Content creation
- 🎨 Digital design
- 🖼️ Poster and thumbnail design
- 💡 Creative ideas
- 🧠 Technology and geek culture

---

### 📸 More

A personal section featuring interests such as:

- Photography
- Exploring new experiences
- Creativity
- Personal interests
- Discovering new ideas

---

### 💼 Projects

A dedicated project showcase section displaying my development work and projects.

Each project can include:

- Project title
- Description
- Technologies used
- Project image
- GitHub repository
- Live project link

Project data is managed dynamically using Supabase.

---

### 📬 Contact

The contact page allows visitors to get in touch with me through:

- 📧 Email
- 📱 Phone
- 💬 WhatsApp
- 📍 Location
- 🔗 Social media profiles
- 📨 Contact form

The contact form uses EmailJS to deliver messages directly to my email.

---

## 🔐 Admin System

The portfolio includes an admin system for managing dynamic content.

### Admin Features

- 🔑 Admin login
- 🖼️ Gallery management
- 💼 Project management
- ➕ Add new projects
- ✏️ Update project information
- 🗑️ Delete projects
- 📸 Upload and manage gallery images

The admin system is connected with Supabase for authentication, database operations, and storage management.

---

## 🛠️ Technologies Used

### ⚛️ Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM
- React Icons

### 🗄️ Backend & Cloud Services

- Supabase
  - PostgreSQL Database
  - Authentication
  - Storage

- EmailJS
  - Contact form email delivery
  - Email notifications

### ⚡ Development Tools

- Vite
- Git
- GitHub
- Visual Studio Code

### 🚀 Deployment

- Vercel

---

## 🏗️ Project Structure

```text
src/
│
├── assets/
│   ├── images/
│   └── cv/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Contact.jsx
│   ├── AdminLogin.jsx
│   ├── Admin.jsx
│   ├── AdminGallery.jsx
│   └── AdminProjects.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── IT.jsx
│   ├── Sports.jsx
│   ├── Creator.jsx
│   ├── More.jsx
│   └── Projects.jsx
│
├── App.jsx
├── index.css
└── main.jsx
