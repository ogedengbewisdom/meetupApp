import { MongoClient } from "mongodb";

// api/new_meetup
// POST api/new_meetup

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        const client = await MongoClient.connect("mongodb+srv://wisdom:strongPassword12?@cluster0.pmy6q3x.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: "Meetup added Successfuly"})
    }
}

export default handler

