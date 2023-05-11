import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

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
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage