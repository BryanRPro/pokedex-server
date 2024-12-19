const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const pokemonRouter = require("./routes/pokemonRoutes")
const app = express();
const PORT = 3000;

app.set("port",PORT);
//Midelwares
app.use(express.json());

//Routes
app.use("/api/pokemon",pokemonRouter)
//DB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connect to DB"))
.catch((err)=>console.error(err));

//Port listening
app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`);
})