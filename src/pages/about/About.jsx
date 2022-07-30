import "./about.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const About = () => {
  return (
    <div className="about">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={"ABOUT"}
      />
    </div>
  );
};

export default About;
