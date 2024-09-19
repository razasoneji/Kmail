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
