import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./config/db.js";
dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
dbConnection();

app.get("/", (req, res) => {
    res.send("SERVER UP")

})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));