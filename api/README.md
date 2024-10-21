# Vaccination Registration System Backend

Backend API service for the vaccination registration system built using Node.js and Express with TypeScript.

## 🚀 Features

- RESTful API endpoints for vaccination management
- Database integration with MongoDB
- Email notification system
- Daily invalid data Update
- Input validation and sanitization
- Error handling and logging

## 💻 Tech Stack

- [Node.js](https://nodejs.org/) - Runtime environment
- [Express.js](https://expressjs.com/) - Web application framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [Nodemailer](https://nodemailer.com/) - Email sending

## 🛠️ Prerequisites

- Node.js (v14.0.0 or higher)
- MongoDB (v4.0.0 or higher)
- npm or yarn package manager

## ⚡ Quick Start

1. Clone the repository:

```bash
git clone https://github.com/MiR-stack/JRP-vaccination.git
cd vaccination/api
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```env
DB_STRING = "mongodb://127.0.0.1:27017/vaccination"

API_KEY = "vaccination-api"

# Email Configuration
SMTP_USER= your email
SMTP_PASS= your password

# Server Configuration
SERVER_PORT=3001
```

4. Start the development server:

```bash
npm run dev
```

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api/v1
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

## 🔧 Available Scripts

```bash
# Development
npm run dev         # Start development server

# Building
npm start         # Start production server
```

## 📁 Project Structure

```
vaccination-backend/
├── controllers/       # Request handlers
├── middleware/        # Custom middleware
├── models/            # Database models
├── routes/            # API routes
├── services/          # Business logic
├── templates/         # email templates
├── utils/             # Utility functions
└── package.json
```

```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐞 Error Handling

The API uses the following error codes:

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## 📈 Monitoring

- Morgan for HTTP request logging

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [GitHub Profile](https://github.com/MiR-stack)

## 🙏 Acknowledgments

- Express.js community
- MongoDB community
- All contributors to this project

## 📞 Support

For support, email your-habibmir811@gmail.com or open an issue in the GitHub repository.
```
