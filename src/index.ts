import express from "express";
import { getMovies } from "./data-base/mongodb";
import { configDotenv } from "dotenv";
import { addFoods } from "./data-base/food-delivery";
import { addBeverages } from "./data-base/beverages";

configDotenv();

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("food");
});
// app.get("/movies", async (req, res) => {
//   try {
//     const { year, imdb } = await req.query;
//     const movies = await getMovies(Number(year), Number(imdb));
//     res.status(200).json({ message: "success", movies: movies });
//   } catch (error) {
//     res.status(500).json({ message: "error", error });
//   }
// });
app.post("/foods", async (req, res) => {
  try {
    const foods = await addFoods();
    res.status(201).json({ message: "success", data: foods });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});
app.post("/beverages", async (req, res) => {
  try {
    const beverages = await addBeverages();
    res.status(201).json({ message: "success", data: beverages });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`new server starts at: ${port}`);
});
