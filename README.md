🎬 Movie Database App | React.js + OMDB API

A beginner-friendly movie search application built using React.js, Vite, Axios, and the OMDB API.
Users can search for movies and view full details (poster, title, year, rating, plot) in a popup modal.

This project was created as part of my learning journey while exploring React.js and understanding the fundamentals of state management and API handling.

🚀 Live Demo

🔗 https://moviedbms.netlify.app/

📦 Features

🔍 Search any movie using the OMDB API

🎭 Display movie results with posters & titles

📄 Popup modal showing full movie details

⚛️ Built with React functional components

📡 API requests handled using Axios

🎨 Clean beginner-friendly UI

🛠️ Tech Stack

React.js (Vite)

Axios

OMDB API

CSS

Netlify (Hosting)

📁 Project Structure
src/
│── components/
│     ├── Search.jsx
│     ├── Results.jsx
│     ├── Result.jsx
│     └── Popup.jsx
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation & Local Setup
1️⃣ Clone the repository
git clone https://github.com/AshenRandira/my_first-movie-databse_app.git

2️⃣ Go into the project folder
cd my_first-movie-databse_app

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev


App will run locally at:

http://localhost:5173/

🌐 API Usage

This app uses the OMDB API.

Get your own API key at:
https://www.omdbapi.com/apikey.aspx

API used in the project:

const apiurl = "https://www.omdbapi.com/?apikey=YOUR_API_KEY";

🧠 What I Learned

React component structure

Using useState for state management

Fetching data from APIs with Axios

Passing data & functions as props

Conditional rendering (showing/hiding popup)

Deploying React apps using Netlify

🚧 Future Improvements

Improve the UI with modern styling

Add loading indicators

Add error handling (no results, empty search)

Add favorites using localStorage

Pagination for large result lists

📌 Author

Ashen Randira
GitHub: https://github.com/AshenRandira

Live Demo: https://moviedbms.netlify.app/
