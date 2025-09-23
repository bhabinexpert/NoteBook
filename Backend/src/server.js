import express from 'express';
import notesRoutes from './routes/notesRoute.js'
import { connectDB } from '../config/db.js';
import dotenv from'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || PORT
connectDB();

app.use("/api/notes", notesRoutes)


app.listen(PORT, ()=>{
    console.log("Server started on PORT:", PORT);
});



//mongodb+srv://bhabindulal:bhabinhero@cluster0.qfxfhpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0