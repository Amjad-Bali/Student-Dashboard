import { Course, Welcome } from "../../sections";
import Active from "../../sections/Active/Active";
import "./Dashborad.css";

const Dashborad = () => {
  return (
    <div className='dashborad'>
      <Welcome />
      <div className='content'>
        <Active />
        <Course />
      </div>
    </div>
  );
};

export default Dashborad;
