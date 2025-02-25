import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function addFoods() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("food-delivery");
    const collection = database.collection("foods");

    // const movies = await collection.find().limit(10).toArray();
    const foods = await collection.insertMany([
      {
        name: "Pasta",
        price: 12.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Main course",
      },
      {
        name: "Grilled chicken",
        price: 15.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Main dishes",
      },
      {
        name: "Finger food",
        price: 7.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Side dish",
      },
      {
        name: "French fries",
        price: 8.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Side dish",
      },
      {
        name: "Sunshine stackers",
        price: 12.99,
        ingredients:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae qui inventore nam laborum assumenda eos nulla, possimus officia debitis.",
        catergory: "Breakfast",
      },
    ]);
    return foods;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
