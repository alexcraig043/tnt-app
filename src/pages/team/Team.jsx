import "./team.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const Team = () => {
  return (
    <div className="team">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={"TEAM"}
      />
    </div>
  );
};

export default Team;
