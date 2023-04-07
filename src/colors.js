import {db} from "./dbConnect.js"

// const coll = db.collection("colors");


export async function addNewColor(req, res) {
  const newColor = req.body;
  await db.collection("colors")
  res.status(201).send({ message: "Color successfully added."})
}