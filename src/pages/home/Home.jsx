import "./home.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const Home = () => {
  return (
    <div className="home">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={
          <div className="homeContainer">
            <div className="header">
              <h1>We work in the field to preserve Costa Rica's biodiversity.</h1>
            </div>
            <div className="stats">
              <div className="item">
                <div className="stat">Scientists</div>
                <div className="number">10</div>
              </div>
              <div className="item">
                <div className="stat">Terrestrial acres</div>
                <div className="number">10,463</div>
              </div>
              <div className="item">
                <div className="stat">Marine Acres</div>
                <div className="number">87,345</div>
              </div>
            </div>
            <div className="footer">At Tiburones n Tortugas, we're a nonprofit in the business of protecting one of the most biodiverse places on Earth.</div>
          </div>



        }
      />
    </div>
  );
};

export default Home;
