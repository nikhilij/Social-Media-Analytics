# Social Media Analytics Web Application

## Overview
This project is a *Social Media Analytics Web Application* built using *Vite + React* for the frontend. It is designed to provide real-time insights into user engagement on a social media platform. The backend microservice is built using a backend framework of choice, which processes and serves analytical data using APIs.

## Project File Architecture
```
creating multiple files at once :
for %i in (file1.txt file2.js .env config.json) do type nul > %i


📦 22054011
├── 📂 backend
│   ├── 📂 controllers
│   │   ├── userController.js
│   │   ├── postController.js
│   │   ├── commentController.js
│   ├── 📂 models
│   │   ├── userModel.js
│   │   ├── postModel.js
│   │   ├── commentModel.js
│   ├── 📂 routes
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   ├── commentRoutes.js
│   ├── 📂 services
│   │   ├── apiService.js
│   ├── 📂 config
│   │   ├── dbConfig.js
│   ├── 📂 middleware
│   │   ├── authMiddleware.js
│   ├── server.js
|   |──📜 package.json
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 assets
│   │   │   ├── logo.png
│   │   ├── 📂 components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── UserCard.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── CommentCard.jsx
│   │   ├── 📂 pages
│   │   │   ├── Home.jsx
│   │   │   ├── TopUsers.jsx
│   │   │   ├── TrendingPosts.jsx
│   │   │   ├── Feed.jsx
│   │   ├── 📂 services
│   │   │   ├── api.js
│   │   ├── 📂 context
│   │   │   ├── DataContext.js
│   │   ├── 📂 styles
│   │   │   ├── global.css
│   │   ├── main.jsx
│   │   ├── App.jsx
│   ├── 📂 public
│   │   ├── index.html
├── 📜 vite.config.js
├── 📜 README.md

```
## Features
1. *Top Users*
   - Displays the top five users with the highest number of posts.
   - Efficient retrieval and sorting of user post counts.

2. *Trending Posts*
   - Displays posts with the highest number of comments.
   - If multiple posts share the highest count, all are displayed.

3. *Feed (Latest Posts)*
   - Real-time feed that continuously updates to reflect new posts.
   - Posts appear in descending order (newest first).

4. *Responsive Design*
   - Ensures compatibility across desktop and mobile views.
   - UI built with *Tailwind CSS* for styling.

5. *API Integration*
   - Frontend communicates with the backend APIs developed in this project.
   - No direct calls to the test server from the frontend.

## Tech Stack
- *Frontend:* React (Vite), Tailwind CSS
- *Backend:* Node.js with Express / Flask / Django (Backend framework of choice)
- *API Testing:* Postman / Insomnia
- *Version Control:* GitHub

## Installation & Setup
### Prerequisites
- Node.js installed
- GitHub account

### Clone the Repository
sh
git clone https://github.com/YOUR_GITHUB_USERNAME/220532044.git
cd 220532044


### Setup Frontend
sh
cd frontend
npm install
npm run dev


### Setup Backend
sh
cd backend
npm install
npm start


## Component Breakdown

| Component | Description | Features |
|-----------|------------|----------|
| *Header* | Navigation bar at the top | Navigation between pages |
| *TopUsersPage* | Displays the top 5 users with the most posts | Fetch and display user post counts |
| *TrendingPostsPage* | Displays posts with the highest comments | Fetch and sort posts by comment count |
| *FeedPage* | Live updating feed of the latest posts | Fetch posts in real-time, append new posts dynamically |
| *PostCard* | Represents an individual post | Displays post content, comments count, and author |
| *UserCard* | Represents an individual user | Displays username and post count |
| *APIService* | Handles API calls | GET users, posts, and comments |

## API Endpoints Used
- *GET* /users → Fetch top users
- *GET* /posts?type=popular → Fetch trending posts
- *GET* /posts?type=latest → Fetch latest posts
- *GET* /users/:userid/posts → Fetch posts by a user
- *GET* /posts/:postid/comments → Fetch comments for a post

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch
3. Commit changes: git commit -m "Added new feature"
4. Push to the branch: git push origin feature-branch
5. Open a Pull Request.

## License
MIT License

---
This README serves as the base documentation for the project. Let me know if you need modifications or additional details.