import  express  from "express";
import logger from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoute from "./routes/todoRoute";

dotenv.config();

const  app = express();
mongoose.connect(process.env.Database_Url!,() =>{
    console.log("Database connected");
})

app.use(express.json());
app.use(logger("dev"));
app.use('/todo', todoRoute)

const Port = 6000;

app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
})



