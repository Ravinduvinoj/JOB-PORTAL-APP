import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import routes from './routes/routes.js';
// import userRouts from "./routes/userRouts.js";
// import footerRouts from "./routes/footerRouts.js";
// import productRouts from "./routes/productRouts.js";
// import orderRouts from "./routes/orderRouts.js";
import { handleError, notFound } from "./middleware/errorHandler.js";
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.use(cookieParser());
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// database connection
connectDB();

// app.use("/uploads", e.static(path.join(__dirname, "uploads")));
app.use(express.json())
// api endpoints
 app.get("/", (req, res) => res.send("hello welcome"));
app.use("/api", routes);

app.use(notFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});