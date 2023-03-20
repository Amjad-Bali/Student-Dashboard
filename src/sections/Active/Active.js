import { ActiveBoxs } from "../../components";
import activeData from "../../Data/ActiveData";
import "./Active.css";

const Active = () => {
  const Boxs = activeData.map((active) => {
    return <ActiveBoxs key={active.id} active={active} />;
  });
  return (
    <div className='activety f-column'>
      <h3>Active Programs</h3>
      {Boxs}
    </div>
  );
};

export default Active;
