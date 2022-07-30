import "./title.scss";

const Title = ({ main, sub }) => {
  return (
    <div className="title">
      <div className="main">{main}</div>
      <div className="sub">{sub}</div>
    </div>
  );
};

export default Title;
