import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true
  })

  const db = client.db('moveit');

  cachedDb = db;

  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {

  const { email } = request.query;
  
  const db = await connectToDatabase(process.env.MONGO_URL);

  const result = await db.collection('users').findOne({ email });

  return response.json(result);
  
}