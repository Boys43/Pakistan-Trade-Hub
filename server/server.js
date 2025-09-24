import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path'

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use(express.json())
app.use(cors());


app.get('/', (req, res)=>{
    res.send("I am Working Bitch!")
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})