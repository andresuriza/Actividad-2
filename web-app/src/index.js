import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import express from "express";
import cors from "cors";

const root = ReactDOM.createRoot(document.getElementById('root'));
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.get('/', (req, res) => {
res.send('Hello World!');
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

root.render(
<React.StrictMode>
 <App />
</React.StrictMode>
);