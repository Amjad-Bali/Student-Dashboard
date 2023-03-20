import "./Progress.css";

const Progress = ({ progress }) => {
  return (
    <div className='container'>
      <div className='progress' data-value={progress.number}>
        <span className='value'></span>
      </div>
      <span className='text'>{progress.text}</span>
    </div>
  );
};

export default Progress;
