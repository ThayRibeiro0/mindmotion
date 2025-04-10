# 🧘‍♀️ MindMotion

MindMotion is a full-stack web application designed to help users track their moods and emotions, promoting mental well-being through insights, analysis, and a polished, responsive user experience.

## 🌟 Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Build the Project](#build-the-project)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🧠 Description

MindMotion allows users to:

- Register and log in securely using JWT-based authentication
- Track daily moods and emotions through a clean and intuitive interface
- Receive visual insights and wellness suggestions based on tracked data
- Interact with external APIs for potential mental health resources
- Enjoy a responsive layout across all screen sizes
- Customize visual themes and layouts (future enhancement)
- Navigate an accessible and user-friendly experience

## 📥 Installation

### Clone the Repository

```bash
git clone https://github.com/thaysmoiaribeiro/mindmotion.git
```

### Navigate to Project

```
cd mindmotion
```

### Install Dependencies

```
npm install
```

### Create .env File

In the root directory, create a .env file and include the following environment variables:

.env server

```bash
PORT=PORT
DB_HOST=DB_HOST
DB_PORT=DB_PORT
DB_NAME=DB_NAME
DB_USER=DB_USER
DB_PASS=DB_PASS
JWT_SECRET=JWT_SECRET
EXTERNAL_API_KEY=EXTERNAL_API_KEY
```

.env client
```bash
API_KEY=API_KEY 
VITE_API_URL=VITE_API_URL
```

⚠*️ Never commit .env files to version control.*

## 🚀 Usage

### Run the App Locally
To start the development server for both client and server, run:

Start postgres database and one terminal:

MAC:
```
brew install postgresql
brew services start postgresql
psql -U postgres
\password postgres
\q
```

And the other terminal run:
```
npm run start:dev
```

### 📦 Build the Project
To create an optimized production build for the front-end, run:

```
bash
npm run build
```

## ⚙️ Deployment
MindMotion is fully deployed and live: https://mindmotion.onrender.com

- Frontend (React): Hosted on Render
- Backend (Node/Express + PostgreSQL): Hosted on Render

### To deploy your own version

- Push to GitHub
- Connect the repo to Render
- Set build/start commands appropriately for both front-end and back-end

### 💻 Technologies Used

- Frontend: React.js, CSS (custom), React Router
- Backend: Node.js, Express.js
- Database: PostgreSQL with Sequelize ORM
- Authentication: JSON Web Token (JWT)
- APIs: Internal + external APIs for future integrations
- Deployment: Render
- Tooling: Vite, nodemon, concurrently, dotenv

### 📸 Screenshots

<div>
  <img src="./client/src/screenshots/MindMotionHomePage.png" alt="MindMotion_Home_Page" width="600" height="300">
</div>


## 🤝 Contributing
Contributions are welcome!
If you find a bug or have a feature suggestion, feel free to open an issue or submit a pull request.

## 📜 License
This project is licensed under the MIT License.
See the LICENSE file for more details.

✨ Made with mindfulness by @johnwgomez and @thaysmoiaribeiro
