import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI; // Use the environment variable for security

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let client;
let clientPromise;

// Use global variable in development to prevent new connections on every request
if (process.env.NODE_ENV === "development") {
    console.log("Connected to MongoDB in development mode");
  // This allows the MongoDB client to be shared across requests during development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's safe to create a new connection for each request
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export default clientPromise;
