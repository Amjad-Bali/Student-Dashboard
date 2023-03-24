import UpcomingBox from "../../components/UpcomingBox/UpcomingBox";
import upcomingData from "../../Data/UpcomingData";
import "./Upcoming.css";

const Upcoming = () => {
  const Boxs = upcomingData.map((box) => {
    return <UpcomingBox key={box.id} date={box.date} class={box.class} time={box.time} />;
  });
  return (
    <div className='upcoming'>
      <div className='title'>
        <h3>Upcoming Sessions</h3>
      </div>
      <div className='classife'>
        <h3>Date</h3>
        <h3>Class</h3>
        <h3>Time</h3>
      </div>
      {Boxs}
      <span className='more'>See all Sessions</span>
    </div>
  );
};

export default Upcoming;
