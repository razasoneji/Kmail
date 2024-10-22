# Gmail Clone - MERN Stack

## Project Overview

This project is a **Gmail clone** built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It mimics the core functionalities of Gmail, such as sending and receiving emails, organizing emails into folders, and providing an intuitive user interface.

## Features

- **User Authentication**: Sign up, login, and logout with JWT-based authentication.
- **Compose Emails**: Users can send emails to other registered users.
- **Inbox and Folders**: View incoming emails in the inbox and manage email folders (e.g., Drafts, Sent, Trash).
- **Email Search**: Search for specific emails by subject or sender.
- **Responsive UI**: The interface is fully responsive and user-friendly, inspired by the Gmail design.
- **Email Status**: Mark emails as read or unread, and delete or archive emails.
  
## Tech Stack

- **Frontend**: React.js, Redux (state management), Tailwind CSS (styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or remote)
- Git

# Project Folder Structure

```plain text
backend/
│   .env
│   bcryptptest.js
│   index.js
│   package-lock.json
│   package.json
├── controllers/
├── db/
├── middleware/
├── migrations/
├── models/
├── node_modules/
└── routes/

frontend/
│   .gitignore
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│   vite.config.js
├── node_modules/
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── hooks/
    ├── redux/
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx

```
### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gmail-clone.git
   cd gmail-clone
2. **Install dependencies:**
- For the backend
   ```bash
   cd backend
   npm install
- For the frontend
   ```bash
   cd ../frontend
   npm install
3. **Start the application:**
- Run the backend
   ```bash
   cd backend
   npm run dev
- Run the frontend
   ```bash
   cd ../frontend
   npm run dev
# API Endpoints

## User Authentication
1. **Register User**
   - `POST /api/users/register`

2. **Login User**
   - `POST /api/users/login`

3. **Logout User**
   - `POST /api/users/logout`

4. **Get User Details**
   - `GET /api/users/:id`

5. **Update User**
   - `PUT /api/users/update`

## Email Management
6. **Create Email**
   - `POST /api/emails`

7. **Delete Email**
   - `DELETE /api/emails/:id`

8. **Get Received Emails**
   - `GET /api/emails/received`

9. **Get Sent Emails**
   - `GET /api/emails/sent`

10. **Get All Emails by User ID**
    - `GET /api/emails/user/:id`
   
# Component Documentation

## 1. Body
- **Description**: Manages the main layout of the application, checking user authentication and rendering the sidebar and outlet for nested routes.

## 2. Email
- **Description**: Displays individual email details, including subject, message, and time since creation, and navigates to the mail view when clicked.

## 3. Emails
- **Description**: Fetches and filters the list of emails based on search input, rendering a list of `Email` components.

## 4. Inbox
- **Description**: Displays the inbox layout with mail categories and integrates the `Emails` component for showing filtered emails.

## 5. Login
- **Description**: Provides a login form for user authentication, managing input state and handling the submission to log users in.

## 6. Mail
- **Description**: Displays the details of a selected email, allowing users to perform actions like deleting the email and providing navigation back to the inbox.

## 7. Navbar
- **Description**: Contains the application logo, search bar for email queries, and user settings options, including a logout feature, which updates the application state accordingly.

## 8. SendMail
- **Description**: Renders a form for composing a new email, managing input state and handling submission to send the email, while updating the email list in the Redux store.

## 9. Sidebar
- **Description**: Displays a navigation sidebar with options for different email categories and a button to compose new emails, enhancing user interaction and navigation within the application.

## 10. Signup
- **Description**: Provides a registration form for new users, managing input state and handling form submission to register the user, followed by navigation to the login page upon successful registration.




## Class Diagram
![class_diagram](https://github.com/user-attachments/assets/fc2f39ef-af42-46d8-868d-2e0e084b467e)


## SCREENSHOTS
![login](https://github.com/user-attachments/assets/94c50543-5126-40a5-92cd-a90f28c86c4a)



![signup](https://github.com/user-attachments/assets/a4b33073-fe22-4bb9-aba4-57b67b9161f3)


![view-email](https://github.com/user-attachments/assets/75a3e316-8e30-45db-8382-0ca4b792bd82)


![Compose-email](https://github.com/user-attachments/assets/a7f5d96e-59a3-4d8e-92a0-c69560c3ecd2)



![view-all-email](https://github.com/user-attachments/assets/2c98cd07-e6f2-41e1-90f6-0de4e113b945)


![email-views](https://github.com/user-attachments/assets/25930e7b-a90b-418b-acb1-0239c15199b6)


