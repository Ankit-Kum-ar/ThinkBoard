# ThinkBoard 🧠

ThinkBoard is a modern, full-stack note-taking application built with **React**, **Vite**, **Zustand**, **Tailwind CSS**, and a **Node.js/Express/MongoDB** backend. It features a clean UI, fast performance, and robust rate-limiting to keep your notes safe and your experience smooth.

---

## ✨ Features

- 📝 **Create, Read, Update, Delete Notes**  
  Effortlessly manage your notes with a beautiful and intuitive interface.

- ⚡ **Rate Limiting**  
  Prevents abuse and ensures fair usage for all users.

- 🌙 **Dark Theme**  
  Uses [daisyUI](https://daisyui.com/) for a modern, accessible dark theme.

- 🚀 **Fast & Reactive**  
  Built with Vite and Zustand for instant feedback and state management.

- 🔒 **MongoDB Data Storage**  
  All notes are securely stored in MongoDB.

---

## 📦 Tech Stack

**Frontend:**
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Axios](https://axios-http.com/)

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Upstash Rate Limiting](https://upstash.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ankit-Kum-ar/thinkboard.git
cd thinkboard
```

### 2. Setup the Backend

```bash
cd server
npm install
```

- Create a `.env` file in `/server` (see `.env` example below).
- Start the backend server:
  ```bash
  npm run dev
  ```
  The server runs on [http://localhost:5500](http://localhost:5500).

#### Example `.env` for Backend

```
MONGODB_URI="your-mongodb-uri"
PORT="5500"
UPSTASH_REDIS_REST_URL="your-upstash-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"
```

### 3. Setup the Frontend

```bash
cd ../client
npm install
```

- Start the frontend dev server:
  ```bash
  npm run dev
  ```
  The app runs on [http://localhost:5173](http://localhost:5173).

---

## 🗂️ Project Structure

```
ThinkBoard/
│
├── client/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── store/
│   └── ...
│
├── server/         # Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── ...
│
└── readme.md
```

---

## 🛡️ API Endpoints

### Notes

- `GET    /api/notes`         — Get all notes
- `GET    /api/notes/:id`     — Get a single note
- `POST   /api/notes`         — Create a new note
- `PUT    /api/notes/:id`     — Update a note
- `DELETE /api/notes/:id`     — Delete a note

All endpoints are rate-limited for fair use.

---

## 🧑‍💻 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Upstash](https://upstash.com/)

---

> Made with ❤️ by Ankit Kumar