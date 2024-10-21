# 💉 Vaccination Registration System

A comprehensive vaccination registration and management system built with React TypeScript (frontend) and Node.js (backend). This system allows users to register, schedule vaccination appointments, and helps administrators manage the vaccination process efficiently.

## 💻 Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- NodeMailer

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- MongoDB (v4.0.0 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/MiR/JRP-vaccination.git
cd vaccination
```

2. Install dependencies for both frontend and backend

```bash
# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables

Backend (.env):

```env
DB_STRING = "your database string"

API_KEY = "vaccination-api"

# Email Configuration
SMTP_USER= your email
SMTP_PASS= your password

# Server Configuration
SERVER_PORT=3001
```

Frontend (.env):

```env
VITE_API_URL=your_backend_api_url
```

4. Start the development servers

Backend:

```bash
cd api
npm run dev
```

Frontend:

```bash
cd client
npm run dev
```

## 📁 Project Structure

```
vaccination-system/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── api/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── router/
│   ├── services/
│   ├── utils/
│   ├── app.js/
│   ├── db.js/
│   ├── README.md/
│   └── package.json
│
└── README.md
```

## 📚 API Documentation

### Base URL

```
http://localhost:8080/api/v1
```

### User Endpoints

```
GET /users/registration - registration for vaccine
PUT /users/status - check user status
```

### Admin Endpoints

```
GET /appointments - Get all appointments
```

### Vaccine centers Endpoints

```
GET /centers - Get all available vaccine centers
```

## 📈 Monitoring and Logging

- Morgan for HTTP request logging
- React Error Boundary for frontend error handling

## 🔄 CI/CD Pipeline

- GitHub Actions for automated testing
- Automated deployment to staging/production
- Code quality checks
- Security scanning
- Performance monitoring

## 💪 Performance Optimization

### Frontend

- Code splitting
- Lazy loading
- Image optimization
- Caching strategies
- Minimized bundle size

### Backend

- Database indexing
- Query optimization
- Response caching
- Load balancing
- Rate limiting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- List any known issues or limitations
- Planned improvements
- Workarounds if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support:

- Email: habibmir811@gmail.com
- Issue Tracker: GitHub Issues

## 🙏 Acknowledgments

- React and Node.js communities
- All open-source libraries used
- Contributors and testers
- [List of contributors](https://github.com/MiR-stack/JRP-vaccination/contributors)
