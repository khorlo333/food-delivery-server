import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function addBeverages() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("food-delivery");
    const collection = database.collection("beverages");

    // const movies = await collection.find().limit(10).toArray();
    const foods = await collection.insertMany([
      {
        name: "Fanta",
        price: 2.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Drink",
      },
      {
        name: "Vodka",
        price: 15.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Alcohol",
      },
      {
        name: "Water",
        price: 7.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Soft drink",
      },
    ]);
    return foods;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
