import "./donate.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const Donate = () => {
  return (
    <div className="donate">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={"DONATE"}
      />
    </div>
  );
};

export default Donate;
