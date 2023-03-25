import { Course, Messageing, Upcoming, Welcome } from "../../sections";
import Active from "../../sections/Active/Active";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Welcome />
      <div className='content'>
        <Active />
        <Messageing />
        <Course />
        <Upcoming />
      </div>
    </div>
  );
};

export default Dashboard;
