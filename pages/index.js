
import MeetupList from "../components/meetups/MeetupList"

const Dummy = [
    {
        id: "o3",
        image: "https://cdn.punchng.com/wp-content/uploads/2023/03/22193431/Tafawa-square-entrance.jpg",
        title: "TimeLess Concert",
        address: "Lagos, Nigeria"
    },
    {
        id: "u3",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/O2_Arena.jpg",
        title: "Raver concert",
        address: "UK"
    }
]


const HomePage = ({meetups}) => {

    return (
        <MeetupList meetups={meetups} />
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            meetups : Dummy
        },
        revalidate: 1
    }
}

export default HomePage