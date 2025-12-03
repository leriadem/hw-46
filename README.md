# 📘 HW - 46 Redux Toolkit + createAsyncThunk + Vite

Цей проєкт демонструє використання Redux Toolkit, асинхронних дій (createAsyncThunk) та React у додатку, створеному за допомогою Vite.
У проєкті реалізовано завантаження даних з API, обробку станів loading, succeeded, failed та відображення отриманих даних у UI.


## 🚀 Демо-версія

Доступно за посиланням:
(встав свій лінк на Vercel або Netlify)


## 📦 Використані технології

Vite

React

Redux Toolkit

createAsyncThunk (Redux Thunk)

React-Redux

Fetch API


## 📁 Структура проєкту

```
my-redux-app/
├── src/
│ ├── redux/
│ │ ├── store.js
│ │ ├── slices/
│ │ │ └── postsSlice.js
│ │ └── asyncActions/
│ │ └── fetchPosts.js
│ ├── components/
│ │ └── PostsList.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
└── README.md
```


## 🌐 Деплоймент
Vercel:


## 🔄 Опис роботи проєкту
📌 1. Асинхронний запит

Для завантаження даних використано createAsyncThunk:

pending — початок запиту

fulfilled — дані успішно отримані

rejected — сталася помилка

📌 2. Слайс стану

У postsSlice.js обробляються всі три стани запиту, включаючи помилки та зміну статусу.

📌 3. Компонент PostsList

Компонент:

відправляє запит при завантаженні

показує "Завантаження…"

показує помилку (якщо сталася)

виводить список отриманих постів


## 🧪 Як перевірити роботу асинхронних дій

Відкрийте Redux DevTools → вкладку Actions

Перезавантажте сторінку

Має з’явитися послідовність:

posts/fetchPosts/pending

posts/fetchPosts/fulfilled

Щоб перевірити помилку, тимчасово змініть URL у fetchPosts.js на неправильний.
Тоді побачите:

posts/fetchPosts/rejected

На екрані з'явиться повідомлення про помилку.
