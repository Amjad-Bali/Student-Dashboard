import "./Course.css";
import { MdCheck, MdOutlineAccessTime } from "react-icons/md";
import UX from "../../assets/UX.svg";

const Course = () => {
  return (
    <div className='course'>
      <div className='container'>
        <img src={UX} alt='' />
        <span className='check'>
          <MdCheck className='check-icon' />
          Checked In
        </span>
        <div className='info'>
          <div className='title'>
            <div className='type'>
              <h3> UX Research - Week 3</h3>
              <span>CERTIFICATE UX/UI design</span>
            </div>
            <div className='date'>
              <h3> 08</h3>
              <span>APRIAL</span>
            </div>
          </div>
          <div className='tial'>
            <div>
              <MdOutlineAccessTime className='time-icon' />
              <span>In Progress</span>
            </div>
            <a href='#join'>Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
