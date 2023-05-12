
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

export const getStaticProps = async () => {
    
    const url = `mongodb+srv://ogedengbewisdom1994:Test123456@cluster0.lqyedd0.mongodb.net/meetups?retryWrites=true&w=majority`;
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
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage