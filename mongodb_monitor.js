const { MongoClient } = require('mongodb');

// MongoDB Connect
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'your_database';
const username = 'admin';
const password = 'password';

// Connect to MongoDB and execute queries
async function checkMongoDBStatus() {
  let client;
  try {
    // Connect to MongoDB database
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: { user: username, password: password },
      authSource: 'admin'
    });

    // Select database
    const db = client.db(dbName);

    // Execute query
    const stats = await db.stats();

    // Check query results
    if (stats.ok === 1) {
      console.log('MongoDB is running smoothly.');
    } else {
      console.error('Error: MongoDB is not running properly. Please check the MongoDB status.');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    if (client) {
      client.close();
    }
  }
}

// Periodically execute a function that checks MongoDB status
async function monitorMongoDB() {
  // Execute a function to check the status of MongoDB every once in a while
  setInterval(checkMongoDBStatus, 60000);// Execute every 60 seconds (1 minute)
}

// Start monitor
monitorMongoDB();
