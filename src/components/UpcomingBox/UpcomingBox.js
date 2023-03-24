import "./UpcomingBox.css";

const UpcomingBox = (props) => {
  return (
    <div className='box'>
      <div className='b-date'>
        <h3>{props.date[0]}</h3>
        <p>{props.date[1]}</p>
        <span>{props.date[2]}</span>
      </div>
      <div className='detailes'>
        <div className='d-box'>
          <h3>{props.class[0]}</h3>
          <p>{props.class[1]}</p>
        </div>
        <div className='d-date'>
          <h3>{props.time}</h3>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBox;
