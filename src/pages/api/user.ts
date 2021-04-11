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
  if (request.method === 'POST') {
    const { email, challengesCompleted, currentExperience, level } = request.body;

    const db = await connectToDatabase(process.env.MONGO_URL);

    const result = await db.collection('users').updateOne({ email }, { $set: { level, challengesCompleted, currentExperience } });

    return response.json(result);
  }

  if (request.method === 'GET') {
    const db = await connectToDatabase(process.env.MONGO_URL);

    const result = await db.collection('users').find().toArray();

    return response.json(result);
  }
  
}