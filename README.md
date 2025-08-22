# 📰 TIME Stories Scraper

A simple **Node.js + HTML/CSS** project that fetches the latest stories from [Time.com](https://time.com) RSS feed and displays them on a styled webpage.

## 📌 Features
- Node.js backend scrapes **Time.com RSS feed**.
- Exposes an API endpoint:  
http://localhost:3000/getTimeStories

which returns the latest 6 stories in JSON format.
- Frontend (HTML + CSS + JavaScript) dynamically fetches and displays the stories under a **"Latest Stories"** section.
- CORS enabled so frontend can fetch data when served from Live Server or any other static server.


## 📂 Project Structure
project/
│
├── server.js # Node.js backend server
├── index.html # Frontend HTML file
└── README.md # Project documentation


## ⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/yourusername/time-stories-scraper.git

2️⃣ Install Node.js (if not already installed)
Download from Node.js official website or install via package manager.

3️⃣ Run the backend server
node server.js
The server will start on:
http://localhost:3000/getTimeStories

4️⃣ Open the frontend
Open index.html in your browser directly, or

Use VS Code Live Server extension to run on http://127.0.0.1:5500.

📡 API Endpoint
GET /getTimeStories
Returns a JSON array of latest stories:

[
  {
    "title": "Do Hangover Prevention Supplements Really Work?",
    "link": "https://time.com/7311397/do-hangover-prevention-supplements-work-probiotics/"
  },
  {
    "title": "The Thursday Murder Club Offers Slender But Sturdy Pleasures",
    "link": "https://time.com/7311543/the-thursday-murder-club-review-netflix/"
  }
]

🛠️ Technologies Used
Node.js (HTTP & HTTPS modules)

HTML5 / CSS3

Vanilla JavaScript (fetch API)

RSS Parsing with Regex

🚀 Future Improvements
Add story publish dates.

Improve error handling if RSS feed structure changes.

Paginate more than 6 stories.

Deploy backend & frontend together for easier hosting.

👨‍💻 Author
Developed by Aditya Gaur Cse-A 03320802722 BPIT ✨
