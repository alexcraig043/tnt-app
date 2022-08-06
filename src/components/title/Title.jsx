import "./title.scss";
import finalFlower from "../../assets/images/finalFlower.jpeg";

const Title = ({ main, sub }) => {
  return (
    <div className="title">
      <div className="main">{main}</div>
      <div className="sub">{sub}</div>
    </div>
  );
};

export default Title;
