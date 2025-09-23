import express from 'express';
import { createNotes, deleteNotes, getAllNotes, getNotesById, updateNotes } from '../controllers/noteControllers.js';

const router = express.Router() 

router.get("/",getAllNotes )

router.get("/:id",getNotesById)

router.post("/", createNotes)

router.put("/:id",updateNotes)

router.delete("/:id",deleteNotes)




export default router;

// app.get("api/notes",(req,res)=>{
//     res.send("You have 5 notes")
// })

// app.post("/api/notes", (req, res)=>{
//     res.status(201).json({message: "Notes created Successfully!"})
// })

// app.put("/api/notes/:id", (req, res)=>{
//     res.status(201).json({message: "Notes updated Successfully!"})
// })

// app.delete("/api/notes/:id", (req, res)=>{
//     res.status(201).json({message: "Notes deleted Successfully!"})
// })
