import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 rounded-md">
      <h2 className="font-bold">Q-Zone</h2>
      <div className="space-y-2">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
