# MERN-Auth-App-Backend

### This is the backend API for a MERN (MongoDB, Express.js, React.js, Node.js) authentication app. It allows users to sign up, verify their email through a verification mail, login, and logout securely.

## Technologies Used

#### Express.js: Web application framework for Node.js used for building the API endpoints.
#### MongoDB: NoSQL database used for storing user data.
#### Mongoose: MongoDB object modeling for Node.js, used for database operations and schema validation.
#### JSON Web Token (JWT): Used for authentication and authorization by generating and verifying tokens.
#### Nodemailer: Node.js module for sending emails, used for sending verification emails.
#### bcrypt: Library used for hashing passwords before storing them in the database.
#### express-session: Middleware for managing user sessions.
#### Joi: Library for input validation, used for validating user input.
#### joi-password-complexity: Joi plugin for enforcing strong password complexity rules.
#### cookie-parser: Middleware for parsing cookies attached to the client request.
#### cors: Middleware for enabling Cross-Origin Resource Sharing.
#### dotenv: Module for loading environment variables from a .env file into process.env.
#### nodemon: Utility for automatically restarting the server when code changes are detected.
#### EJS: Embedded JavaScript templates used for rendering email templates.

## Installation

#### Clone this repository: git clone https://github.com/LORD-JINXXX/MERN-Auth-App-Backend.git
#### Navigate to the project directory: cd mern-auth-app-backend
#### Install dependencies: npm install

## Configuration

#### Create a .env file in the root directory based on the provided .env.example file.
#### Update the .env file with your MongoDB connection URI, JWT secret, email SMTP settings, and other configuration options.

## Usage

#### Start the development server: npm start
#### The server will run on port specified in the .env file (default is 5000).
#### Connect your frontend application to this backend API to enable authentication features.

## API Endpoints

#### POST /api/signup: Create a new user account.
#### GET /api/VerifyEmail: Verify user's email address.
#### POST /api/login: Log in an existing user.
#### POST /api/logout: Log out the currently logged-in user.

## Contributing

#### Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.
