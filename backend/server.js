import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import path from "path";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

app.use('/contacts',contactRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULLY");
    app.listen(5000,()=>console.log("Server running on port 5000"))    
})
.catch((error)=>console.log(error));