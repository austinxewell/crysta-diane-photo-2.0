# Crysta Diane Photography 2.0 - Frontend

![Nuxt 3](https://img.shields.io/badge/Nuxt%203-00C58E?style=flat&logo=nuxtdotjs&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue%203-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-00B5D9?style=flat&logo=pinia&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue%20Router-4FC08D?style=flat&logo=vue-router&logoColor=white)


![Crysta Diane Photography 2.0 Landing Page](https://i.postimg.cc/x18tRz5d/cdp-landing.png)

**Crysta Diane Photography 2.0** is a full-stack photography portfolio platform. The frontend leverages Nuxt 3, Vue 3, and TypeScript, creating a modern, responsive experience for visitors to explore photo galleries, services, reviews, and more. This version includes an admin dashboard for easy content management.

---

## 🔗 Live Demo

**[View the App on Netlify](https://crysta-diane-photo-2-0.netlify.app/)**

---

## 📦 About the Project

**Crysta Diane Photography 2.0** is a full-stack web application developed to serve a real-world photography business. Built with **Nuxt 3**, **TypeScript**, and **Tailwind CSS** on the frontend, and a custom-built **Express.js** backend API, the platform offers features such as:

- **Dynamic Image Galleries**: Showcase photos with zoom functionality.
- **Contact Form**: Collect messages from potential clients with client-side validation.
- **Admin Dashboard**: Secure content management with JWT authentication for admins.
- **Service Management**: Create, update, and delete service offerings with ease.
- **Customer Reviews**: Allow users to submit and view customer reviews.

On the technical side, the frontend utilizes **Nuxt 3** with **Pinia** for state management and **Axios** for API communication. **Tailwind CSS** is used for styling, and the backend is powered by **Node.js**, **Express.js**, and **MySQL2** for data persistence. The application also employs **JWT** authentication, **bcryptjs** for password encryption, and **dotenv** for environment variable management.

---

## 🛠 Tech Stack & Features

| **Technology / Feature**    | **Purpose / Description**                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------------|
| **Nuxt 3**                  | Full-stack framework for SSR, static site generation, and routing.                        |
| **TypeScript**              | Type safety and development clarity for frontend code.                                   |
| **Tailwind CSS**            | Utility-first styling framework for fast, responsive UI design.                           |
| **Pinia**                   | Lightweight state management for reactive data.                                          |
| **Vite**                    | Fast build tool and development server with hot module replacement.                      |
| **Axios**                   | Promise-based HTTP client for communication with RESTful API endpoints.                   |
| **Vue Router**              | Routing solution for navigating between different pages in the app.                      |
| **js-cookie**               | Client-side cookies management for storing session tokens.                               |
| **jwt-decode**              | Decodes JWT tokens for client-side validation.                                           |
| **Node.js**                 | Backend JavaScript runtime for server-side logic and API handling.                       |
| **Express.js**              | Minimal and flexible Node.js web application framework for building the backend API.      |
| **MySQL2**                  | Database management with MySQL for data persistence (users, photos, reviews, services).   |
| **jsonwebtoken (JWT)**      | Secure authentication system with token-based login.                                     |
| **bcryptjs**                | Password hashing library for secure user authentication.                                 |
| **cookie-parser**           | Middleware for parsing cookies and managing session.                                     |
| **CORS**                    | Middleware for handling Cross-Origin Resource Sharing, enabling access to the backend.   |
| **dotenv**                  | Environment variable management for secure credentials and settings.                      |
| **Prettier**                | Code formatting tool to enforce consistent code style.                                   |
| **ESLint**                  | Linting tool to maintain code quality and catch potential issues.                        |
| **Nodemon**                 | Development tool that automatically restarts the server on code changes.                 |

---

## 📸 Screenshots

| ![Landing](https://i.postimg.cc/x18tRz5d/cdp-landing.png) <br /> *Landing Page* | ![About](https://i.postimg.cc/QxX6FPW1/cdp-about.png) <br /> *About Section* |
|:--:|:--:|
| ![Reviews](https://i.postimg.cc/vH30fzWj/cdp-footer.png) <br /> *Customer Reviews* | ![Leave Review Modal](https://i.postimg.cc/tJbBtvv0/cdp-revie-modal.png) <br /> *Leave a Review Modal* |
| ![Gallery](https://i.postimg.cc/G3P7hr9b/cdp-gallery.png) <br /> *Gallery Overview* | ![Zoomed Gallery Photo](https://i.postimg.cc/j5P8fYXQ/cdp-zoomed-photo.png) <br /> *Zoomed-In Gallery Photo* |
| ![Services](https://i.postimg.cc/cJV96LQL/cdp-services.png) <br /> *Services Overview* | ![Service Nav](https://i.postimg.cc/gkpZmXT2/cdp-service-nav.png) <br /> *Service Navigation* |
| ![Contact](https://i.postimg.cc/q7tDk36F/cdp-contact.png) <br /> *Contact Information* | ![Contact Form](https://i.postimg.cc/9QgN5p0T/cdp-contact-form.png) <br /> *Contact Form* |
| ![Form Errors](https://i.postimg.cc/Jzzd2grM/cdp-contact-form-errors.png) <br /> *Contact Form with Errors* | ![Admin Login](https://i.postimg.cc/L5VNykGJ/cdp-admin-login.png) <br /> *Admin Login* |
| ![Admin View](https://i.postimg.cc/MT4Jtw2c/cdp-admin-view.png) <br /> *Admin Dashboard View* | ![Modify Data](https://i.postimg.cc/76byg6c8/cdp-modify-data.png) <br /> *Admin Modify Data Panel* |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://yarnpkg.com/) (optional but recommended)

### 🔧 Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/austinxewell/crysta-diane-photo-2.0.git
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Run the development server:
  ```bash
  npm dev
  ```

Visit `http://localhost:3000` to view the app in your browser.

---

## 👨‍💻 Author

**Austin Ewell**  
Front End Developer | Creator of **Crysta Diane Photography 2.0**  
🔗 [GitHub](https://github.com/austinxewell)

---

## Backend Repository

For information about the backend, please visit the [Backend GitHub Repository](https://github.com/austinxewell/CDPhoto-Backend).
