require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db(); // Defaults to database name in URI
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err.message);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };
