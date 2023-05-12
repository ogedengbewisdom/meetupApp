
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

export const getStaticProps = async () => {
    
    const url = `mongodb+srv://wisdom:Wisdom123456@meetupcluster.sv1bwgc.mongodb.net/?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetups = await meetupCollection.find().toArray();
    client.close()
    return {
        props: {
            meetups : meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage