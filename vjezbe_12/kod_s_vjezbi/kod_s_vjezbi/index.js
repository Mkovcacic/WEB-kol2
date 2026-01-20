const { MongoClient, ObjectId } = require('mongodb');

const fs = require("fs/promises");

async function connect_to_db() {

    // Connection URL
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    // Database Name
    const dbName = 'wp_12';    

    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
  
    return db;
}

(async () => {
    const db = await connect_to_db();


    const inventory = db.collection("inventory");

    // const res = await inventory.insertOne({ item: "canvas", qty: 100, tags: ["cotton"] });
    
    // primjeri čitanja podataka
    const data = JSON.parse(await fs.readFile("./data1.json"));
    await inventory.drop();
    await inventory.insertMany(data);

    const cursor = inventory.find({});

    // hasNext & next
    /*
    while (await cursor.hasNext()) {
        const datum = await cursor.next();
        // console.log(datum);
    }*/

    // toArray
    const items = await cursor.toArray();
    // console.log(items);

    // operatori
    // comparison: $eq, $lt, $lte...
    // logic: $and, $or, $not, $nor
    const items_not_A = await inventory.find({ status: { $ne: "A" } }).toArray();
    // console.log(items_not_A);

    // console.log(await inventory.find({ status: { $ne: "A" }, qty: { $gt: 75 } }).toArray());

    // koliko preskaćemo & koliko uzimamo
    const page_2 = await inventory.find({}).sort({ qty: -1 }).skip(2).limit(3).toArray();

    const len = await inventory.countDocuments();

    // console.log(page_2);
    // console.log(len);


    // fetchanje dokumenata s obzirom na ugnježđene atribute
    const items_2 = await inventory.find({ "size.uom": "cm" }).toArray();
    // console.log(items_2);

   
    // brisanje s obzirom na id
    const id_from_client = items[0]._id.toString();
    const _id = ObjectId.createFromHexString(id_from_client);
    const res_2 = await inventory.deleteOne({ _id });

    console.log(res_2);
})();