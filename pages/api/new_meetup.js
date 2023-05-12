import { MongoClient } from "mongodb";

// api/new_meetup
// POST api/new_meetup

const handler = async (req, res) => {
    const url = `mongodb+srv://wisdom:Wisdom123456@meetupcluster.sv1bwgc.mongodb.net/?retryWrites=true&w=majority`
    
    if (req.method === "POST") {
        const data = req.body;
        const client = await MongoClient.connect(url);
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: "Meetup added Successfuly"})
    }
}

export default handler

