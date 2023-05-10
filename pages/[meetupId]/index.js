import MeetupDetail from "../../components/meetups/MeetupDetail"


const MeetupDetailPage = ({meetups}) => {
    return (
        <MeetupDetail meetups={meetups}
        />
    )
}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "o3"
                }
            },
            {
                params: {
                    meetupId: "u3"
                }
            }
        ]
    }
}


export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId
    console.log(meetupId)
    return {
        props: {
            meetups: {
                id: meetupId,
                title: "TimeLess Concert",
                address : "TBS, Lagos, Nigeria",
                image : "https://cdn.punchng.com/wp-content/uploads/2023/03/22193431/Tafawa-square-entrance.jpg",
                description: "The best Place to be at"
            }
        }
    }
}


export default MeetupDetailPage