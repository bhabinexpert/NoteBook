import express from 'express';
import cors from 'cors'
import notesRoutes from './routes/notesRoute.js'
import { connectDB } from './config/db.js';
import dotenv from'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080


//middleware
app.use(cors());
app.use(express.json());
// app.use(rateLimiter);
app.use("/api/notes", notesRoutes)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("Server started on PORT:", PORT);
})
})



