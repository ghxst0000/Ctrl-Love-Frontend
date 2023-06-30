import { FunctionComponent, memo } from "react";
import mock from "../assets/mockprofile.svg";
import "./MatchComponent.css";

interface MatchComponentProp {
  name: string;
  image: string;
  id: string;
  selected: boolean;
}

const MatchComponent = ({ name, image, id, selected }: MatchComponentProp) => {
  return (
    <div
      className="rectangle-parent2"
      style={{ borderColor: selected ? "#1EEBB1" : "#FDE8EE" }}
    >
      <img className="box2 mask-group-icon5" alt="" src={image} />
      <div>
        <b className="thybor1">{name}</b>
        {id && <div className="baj-van-sanyi5">{""}</div>}
        <div className="frame-child7" />
      </div>
    </div>
  );
};

export default MatchComponent;
