## Contact Form API (Node.js + Express)
This is a simple backend API that handles contact form submissions. When a user submits their name, email, and message, the API validates the request, applies spam protection via rate limiting, and sends an email using Gmail SMTP.

## Features
- POST /contact to send user messages
- Email delivery via Gmail using Nodemailer
- Input validation with express-validator
- Rate limiting (5 requests per hour per IP)
- .env configuration for secure credentials

## Tech Stack
- Node.js
- Express.js
- Nodemailer
- express-validator
- express-rate-limit
- dotenv

## Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/contact-form-api.git
cd contact-form-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create .env File
```env
PORT=3005
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_generated_app_password
```

#### You must use an App Password if you have 2-Step Verification on your Gmail account.
Generate it from: https://myaccount.google.com/apppasswords

### 4. Start the Server
```bash

Development
npm run dev

Production
npm start
```

## API Endpoint
### POST /contact
Submit a contact form.

Request Body (JSON)
```json
{
"name": "John Doe",
"email": "john@example.com",
"message": "Hey, this is a test message!"
}
```

Response
```json
{
"message": "Message sent successfully"
}
```

### Validation Errors
If fields are missing or incorrect:

```json
{
"errors": [
{
"msg": "Valid email is required",
"param": "email",
"location": "body"
}
]
}
```

### Rate Limiting
Max: 5 requests per hour per IP<br>

Exceeding this will return:

```json
{
"error": "Too many contact form submissions. Try again later."
}
```

### File Structure
```
contact-form-api/
│
├── index.js
├── .env
├── .gitignore
├── package.json
│
├── routes/
│ └── contactRoutes.js
│
└── controllers/
└── contactController.js
```

### Postman Testing
You can test this API using Postman:

Method: POST

URL: http://localhost:3005/contact

Body: raw → JSON

Headers: Content-Type: application/json

### Notes
.env is ignored from Git with .gitignore

For production apps, consider switching to a mail delivery service like SendGrid or Mailgun

This API can be used with any frontend: React, Vue, static site, etc.

