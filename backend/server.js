import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();
const app = express();

const PORT = 5000;



app.use(cors());
app.use(express.json());

app.use('/contacts',contactRoutes);




mongoose.connect('mongodb+srv://antonikingstonroi_db:0i1Gs1TushuH4hFt@contact-management-syst.5rnqdv4.mongodb.net/?appName=Contact-Management-System')
.then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULLY");
    app.listen(5000,()=>console.log("Server running on port 5000"))    
})
.catch((error)=>console.log(error));