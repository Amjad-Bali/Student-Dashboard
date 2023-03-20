import Progress from "../Progress/Progress";
import "./ActiveBoxs.css";

const ActiveBoxs = ({ active }) => {
  const degrees = active.tags.map((degree) => {
    return (
      <div className='degree' key={degree.id}>
        <h3>{degree.number}</h3>
        <p>{degree.text}</p>
      </div>
    );
  });
  return (
    <div className='active'>
      <div className='box'>
        <img src={active.image} alt='' />
        <div className='title'>
          <h3>{active.certificate}</h3>
          <p>{active.university}</p>
        </div>
      </div>
      {degrees}
      <Progress progress={active.progress} />
    </div>
  );
};

export default ActiveBoxs;
