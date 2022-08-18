import "./about.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const About = () => {
  return (
    <div className="about">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={
          <div className="aboutContainer">
            <div className="header">Conservation, Education, Connection.</div>
            <div className="info">Tiburones n Tortugas (TnT) is a nonprofit based out of San Jose, Costa Rica associated with an America-based 501c3 nonprofit. We strive to help protect Costa Rica's marine treasures, with a particular emphasis on turtles and sharks, which are particularly at risk for poaching in this part of the world. We were founded by world-renowned conservationist Randall Arauz with the simple mission to protect these great species while increasing student involvement with the natural world. We offer student opportunities to come down to our research station near Monteverde, Costa Rica to perform field research, write theses, and assist with conservation work.</div>
          </div>
        }
      />
    </div>
  );
};

export default About;
