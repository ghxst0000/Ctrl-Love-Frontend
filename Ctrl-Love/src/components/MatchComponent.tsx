import "./MatchComponent.css";

interface MatchComponentProp {
  name: string;
  image: string;
  id: string;
  selected: boolean;
  joined: (name: string, room: string) => void;
}

const MatchComponent = ({
  name,
  image,
  id,
  selected,
  joined,
}: MatchComponentProp) => {
  return (
    <div
      className="rectangle-parent2"
      style={{ borderColor: selected ? "#1EEBB1" : "#FDE8EE" }}
    >
      <img className="box2 mask-group-icon5" alt="" src={image} />
      <div
        onClick={() => {
          joined(name, id);
        }}
      >
        <b className="thybor1">{name}</b>
        {id && <div className="baj-van-sanyi5">{""}</div>}
        <div className="frame-child7" />
      </div>
    </div>
  );
};

export default MatchComponent;
