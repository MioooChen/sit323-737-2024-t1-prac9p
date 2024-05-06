const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://admin:password@localhost:32000/mydatabase?authSource=admin';
const client = new MongoClient(url);

async function run() {
    try {
        // Connected
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db('mydatabase');
        const collection = db.collection('documents');

        // Insert
        await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        console.log('Documents inserted');

        // Read
        const docs = await collection.find({}).toArray();
        console.log('Found documents:', docs);

        // Update
        const updateResult = await collection.updateOne({ a: 2 }, { $set: { b: 1 } });
        console.log('Updated documents:', updateResult.modifiedCount);

        // Delete
        const deleteResult = await collection.deleteOne({ a: 1 });
        console.log('Deleted documents:', deleteResult.deletedCount);

    } catch (err) {
        // error handle
        console.error('An error occurred:', err);
    } finally {
        // close DB
        await client.close();
    }
}

run().catch(console.error);

