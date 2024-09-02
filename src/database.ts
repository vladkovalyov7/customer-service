import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  throw new Error('DB_URI must be defined in the .env file');
}

export const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export function getCollection(name: string) {
  return client.db().collection(name);
}
