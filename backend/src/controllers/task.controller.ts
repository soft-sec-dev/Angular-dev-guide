import { Request, Response } from "express"
import { MongoClient, ServerApiVersion } from "mongodb";
import { MongoConection } from "../db/dbconection";


const client = new MongoConection()

client.main()

export const getAllResources = (req: Request, res: Response) => {
  res.status(200).json({ msg: 'hola uweweqwstedes' })
}
export const createTask = async (req: Request, res: Response) => {
  const db = client.clientAdapter()
  const mydb = db.db('task')
  const collections = mydb.collection('prendas')
  const doc = { name: 'programmer', time: 12 }
  await collections.insertOne(doc)
  res.json({ msg: 'ok' })
}