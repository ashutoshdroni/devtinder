const { MongoClient } = require('mongodb');
const url = "mongodb+srv://ashutoshdroni:C9Eg33gCM76fU6pz@cluster0.igcyffb.mongodb.net/";
const client = new MongoClient(url);


const dbName = 'hello';

async function main() {
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');
   
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  
  const data ={
    name:"Ashutosh",
    age:23,
    city:"Bangalore"
  };
  const insertResult = await collection.insertOne([data]);
  console.log('Inserted document =>', insertResult);    
  

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());