import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDB from "./config/db.js";
import subjectRouter from "./routes/subject.routes.js";
// !Start
await connectToDB();
const app = express();
// !Variables
const port = process.env.PORT || 3001;
// !Middlewares
app.use(express.json());
app.use(cors());
// !Routes
app.get("/", (_, res) => {
  res.send("API is LIVE | College");
});
app.use('/api/subjects',subjectRouter)
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
