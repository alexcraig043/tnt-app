import "./home.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const Home = () => {
  return (
    <div className="home">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={"HOME"}
      />
    </div>
  );
};

export default Home;
