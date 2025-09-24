import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import connectdb from './config/mongodb.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use(express.json())
app.use(cors());

connectdb();

app.get('/', (req, res)=>{
    res.send("I am Working Bitch!")
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})