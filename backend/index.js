import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config({
    path:".env"
});

const app= express();
app.use(express.json());
app.use(cors({
    origin:[
        "http://localhost:3000",
        "http://13.126.132.242"  //production address
    ],
    credentials:true
}));


const port = process.env.PORT || 4500

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello from the deployment learning"});
})

app.listen(port,'0.0.0.0',()=>{
    console.log(`server is listening on ${port}`);
})


