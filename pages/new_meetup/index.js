import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const addMeetupHandler = (metaData) => {
        console.log(metaData)
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage