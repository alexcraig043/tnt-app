import "./standardPage.scss";

import Navbar from "../../components/navbar/Navbar";
import TextBox from "../../components/textBox/TextBox";
import Title from "../../components/title/Title";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import turtle0 from "../../assets/images/turtle0.jpg";
import turtle1 from "../../assets/images/turtle1.jpeg";
import turtle2 from "../../assets/images/turtle2.jpeg";
import flowerpattern from "../../assets/images/flowerpattern.jpeg";

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
        <ParallaxLayer offset={0.75} speed={1}
          style={{backgroundColor: "rgba(41,41,88,255)"}}>
        </ParallaxLayer>
        <ParallaxLayer offset={.77} speed={1} factor={2.5}
        style={{
            backgroundImage: `url(${flowerpattern})`,
            backgroundRepeat: "repeat",
          }}>
          <TextBox content={content} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default StandardPage;
