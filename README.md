# Crysta Diane Photography 2.0 - Frontend

**Project Overview**  
Crysta Diane Photography 2.0 is a full-stack photography portfolio platform. The frontend leverages **Nuxt 3**, **Vue 3**, and **TypeScript**, creating a modern, responsive experience for visitors to explore photo galleries, services, reviews, and more. This version includes an **admin dashboard** for easy content management.

**Live Demo**  
- [Crysta Diane Photography 2.0 - Frontend (Live)](https://crysta-diane-photo-2-0.netlify.app/)  

---

## Features

- **Dynamic image gallery** with zoom functionality
- **Contact form** with client-side validation and admin notifications
- **Admin dashboard** for managing site content (galleries, reviews, services)
- **Token-based authentication** for secure admin login (JWT)
- **CRUD operations** for site content via REST API integration
- **Modern UI** with reusable components (carousels, modals)

---

## Technologies Used

- **Frontend:**
  - **Nuxt 3** (Vue 3 framework)
  - **Vue Router** (for routing)
  - **Pinia** (state management)
  - **TypeScript**
  - **Tailwind CSS** (for styling)
  - **Axios** (for API communication)
  - **js-cookie** (session management)
  - **jwt-decode** (JWT token decoding)
  - **Vite** (development server)
  - **Prettier** and **ESLint** (for code quality)

- **Key Libraries and Tools:**
  - **Vue3 Carousel** (image carousel)
  - **FontAwesome** (icons)
  
---

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://yarnpkg.com/) (optional but recommended)

### Installation

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

## Environment Variables

No environment variables are required for the frontend.

---

## Contributing

If you would like to contribute to the project, feel free to fork the repository, submit issues, and make pull requests.

---

## Backend Repository

For information about the backend, please visit the [Backend GitHub Repository](https://github.com/austinxewell/CDPhoto-Backend/tree/dev).
