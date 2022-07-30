import "./standardPage.scss";

import Navbar from "../../components/navbar/Navbar";
import TextBox from "../../components/textBox/TextBox";
import Title from "../../components/title/Title";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import turtle0 from "../../assets/images/turtle0.jpg";
import turtle1 from "../../assets/images/turtle1.jpeg";
import turtle2 from "../../assets/images/turtle2.jpeg";

const StandardPage = ({ title, subTitle, content, pageCount }) => {
  const images = [turtle0, turtle1, turtle2];

  const backgroundImg = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="standardPage">
      <Parallax pages={pageCount}>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
          }}
        >
          <Navbar />
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} speed={4}>
          <Title main={title} sub={subTitle} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={1}>
          <TextBox content={content} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default StandardPage;
