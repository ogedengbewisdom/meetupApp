import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head"
import { Fragment } from "react";

const NewMeetupPage = () => {
    const router = useRouter();
    const addMeetupHandler = async (metaData) => {
        const response = await fetch("/api/new_meetup", {
            method: "POST",
            body: JSON.stringify(metaData),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await response.json();
        console.log(data);
        router.push("/")
    }
    return (
        <Fragment>
            <Head>
                <title>Add new meetup</title>
                <meta name="description" content="Adding a new meetup to the list of important tech meetup" />
            </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage