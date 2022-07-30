import "./textBox.scss";

const TextBox = ({ content }) => {
  return (
    <div className="textBox">
      <div className="container">{content}</div>
    </div>
  );
};

export default TextBox;
