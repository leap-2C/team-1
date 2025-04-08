import express from "express"
import cors from "cors";
import dotenv from "dotenv";

const app = express()
app.use(cors());
app.use(express.json());
const port = 3001;
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
  console.log("database connection established");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
