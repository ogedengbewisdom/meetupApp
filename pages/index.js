import Head from "next/head"
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

const HomePage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>Meetup List</title>
                <meta name="description" content="Browse a highly important list of tech meetup" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
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