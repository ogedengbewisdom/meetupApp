import classes from './MeetupDetail.module.css';

const MeetupDetail = ({meetups}) => {
  return (
    <section className={classes.detail}>
      <img
        src={meetups.image}
        alt={meetups.title}
      />
      <h1>{meetups.title}</h1>
      <address>{meetups.address}</address>
      <p>{meetups.description}</p>
    </section>
  );
}

export default MeetupDetail;