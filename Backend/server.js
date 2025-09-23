import express from 'express';


const app = express()

// app.get("api/notes",(req,res)=>{
//     res.send("You have 5 notes")
// })

app.listen(8500, ()=>{
    console.log("Server started on PORT: 8500");
});