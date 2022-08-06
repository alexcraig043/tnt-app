import "./research.scss";
import StandardPage from "../../components/standardPage/StandardPage";

const Resarch = () => {
  return (
    <div className="research">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.5}
        content={
          <div className="researchContainer">
            <div className="header">
              <h1>Get Involved</h1>
              <h2>Show Your Support for TnT</h2>
            </div>
            <div className="items">
              <div className="item">
                <div className="header">Internships</div>
                <div className="text">
                  Are you a advanced student or recently graduated in a
                  conservation career, and need field experience? You can come
                  to one of our community based sea turtle conservation projects
                  and serve as either a Research Coordinator (RC) or a Research
                  Assistant. 3 to 6 month commitment required. More information
                  with our partner cremacr.org.
                </div>
              </div>
              <div className="item">
                <div className="header">MS Projects</div>
                <div className="text">
                  Need to secure the field work necessary for your MSc thesis?
                  We offer opportunities in the fields of sea turtle nesting
                  biology and sustainable fisheries. Must be part of an academic
                  program. Cremacr.org.
                </div>
              </div>
              <div className="item">
                <div className="header">Turtle Vacations</div>
                <div className="text">
                  Want to spend two weeks volunteering and patrolling secluded
                  sea turtle nesting beaches while assisting biologists in
                  research and conservation activities? All work is held in
                  collaboration with coastal community members. We might even
                  need your help to plant trees! Great for family vacations too!
                  More information with our partner Turtle-trax.com.
                </div>
              </div>
              <div className="item">
                <div className="header">Academic Courses</div>
                <div className="text">
                  Want to organize a class in tropical coastal ecology and
                  conservation? Sustainable fisheries, sea turtle nesting
                  beaches, mangrove swamps, estuaries, wetlands, rocky reefs,
                  snorkeling. We can arrange a two week class where students are
                  exposed to current issues in marine conservation directly in
                  the field. Cremacr.org
                </div>
              </div>
              <div className="item">
                <div className="header">Dive Vacations</div>
                <div className="text">
                  How about diving the coastal waters of Costa Rica on board the
                  M/Y SharkWater, a 40 m yacht specially adapted as a dive
                  platform for marine research? 10 day expeditions with 3 dives
                  a day, assisting local scientists perform shark and turtle
                  in-water research. Contact finsattached.org.
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Resarch;
