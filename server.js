import express from "express";
import dotenv from "dotenv";
import Sequelize from "sequelize";
import user_router from "./app/routers/users.routers.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(user_router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
