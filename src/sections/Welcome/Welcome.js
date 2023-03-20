import "./Welcome.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Welcome = () => {
  return (
    <div className='welcome'>
      <h4>Hello,Mary!</h4>
      <span>
        <MdOutlineDashboardCustomize className='icon' />
        Customize
      </span>
    </div>
  );
};

export default Welcome;
