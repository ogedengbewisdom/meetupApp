import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb"


const MeetupDetailPage = ({meetups}) => {
    return (
        <MeetupDetail meetups={meetups}
        />
    )
}

export const getStaticPaths = async () => {
    const url = `mongodb+srv://ogedengbewisdom1994:Test123456@cluster0.lqyedd0.mongodb.net/meetups?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetups = await meetupCollection.find({}, {_id: 1}).toArray()
    client.close()
    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
        
    }
}


export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId
    const url = `mongodb+srv://ogedengbewisdom1994:Test123456@cluster0.lqyedd0.mongodb.net/meetups?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const selectedMeetup = await meetupCollection.findOne({_id: ObjectId(meetupId)})
    client.close()
    console.log(meetupId);
    return {
        props: {
            meetups: {
                id: selectedMeetup.meetupId.toString(),
                title: selectedMeetup.title,
                address : selectedMeetup.address,
                image : selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}


export default MeetupDetailPage