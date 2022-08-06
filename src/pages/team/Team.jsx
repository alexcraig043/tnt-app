import "./team.scss";
import StandardPage from "../../components/standardPage/StandardPage";
import randall from "../../assets/images/randall.jpeg";
import jim from "../../assets/images/jim.jpeg";
import daniel from "../../assets/images/daniel.jpeg";
import leslie from "../../assets/images/leslie.jpeg";
import sam from "../../assets/images/sam.jpeg";
import maddie from "../../assets/images/maddie.jpeg";
import flowerpattern from "../../assets/images/flowerpattern.jpeg";




console.log(randall)
console.log(jim)
console.log(daniel)
console.log(leslie)
console.log(sam)
console.log(maddie)
console.log(flowerpattern)


const Team = () => {
  return (
    <div className="team">
      <StandardPage
        title="Tiborones n Tortugas"
        subTitle="Protecting Costa Rica's marine resources through research and conservation"
        pageCount={1.82}
        content={
          <div className="teamContainer">
            <div className="header">
              <h1>About Us</h1>
              <h2>Meet the Team</h2>
              
            </div>
            <div className="items">
              <div className="item">
                <div className="person">
                    <img className="profilePic"
                    src={randall}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Randall Arauz</div>
                      <div className="role">Founder, Lead Scientist</div>
                      <div className="info">
                        Randall is the founder of TnT and is a world-renowned biologist and conservationist from Costa Rica.                   
                      </div>
                    </div>
                </div>
                <div className="person">
                    <img className="profilePic"
                    src={randall}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Jacob Mcgrew</div>
                      <div className="role">Treasurer</div>
                      <div className="info">
                        Jake is the treasurer of TnT and runs fundraising efforts and behind-the-scenes management.              
                      </div>
                    </div>
                </div>
              </div>
              <div className="item">
                <div className="person">
                    <img className="profilePic"
                    src={jim}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Jim Porter</div>
                      <div className="role">Biologist</div>
                      <div className="info">
                      Jim is an ecologist at the University of Georgia.
                      </div>
                    </div>
                </div>
                <div className="person">
                    <img className="profilePic"
                    src={daniel}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Daniel Arauz</div>
                      <div className="role">Biologist</div>
                      <div className="longInfo">
                      Daniel Arauz is a field biologist and project coordinator for the Rescue Center for Endangered Marine Species (CREMA) in Costa Rica. As a biologist and professional diver, Daniel Arauz has been involved in marine conservation since a very young age. Since 2017 he has managed a sea turtle monitoring program in coastal communities where he promotes environmental education, science, and sustainable fisheries practices to protect the habitat of the critically endangered hawksbill sea turtle. In 2018 Daniel was selected as part of the first cohort of National Geographic Photo Ark EDGE fellows, which helps young conservationists in protecting evolutionarily distinct and globally endangered species.                      </div>
                    </div>
                </div>
              </div>
              <div className="item">
                <div className="person">
                    <img className="profilePic"
                    src={leslie}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Leslie Ruyle</div>
                      <div className="role">Biologist</div>
                      <div className="info">
                      Leslie is an ecologist at Texas A&M University.
                      </div>
                    </div>
                </div>
                <div className="person">
                    <img className="profilePic"
                    src={sam}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Sam Morton</div>
                      <div className="longRole">Student Board Member, Lead Web Developer</div>
                      <div className="info">
                      Sam is a CS and ENVS major at Dartmouth College.                      
                      </div>
                    </div>
                </div>
              </div>
              <div className="item">
                <div className="person">
                    <img className="profilePic"
                    src={maddie}
                    alt="..."
                    />
                    <div className="text">
                      <div className="name">Maddie Nobili</div>
                      <div className="role">Student Board Member</div>
                      <div className="info">
                      Maddie is a bio major at Dartmouth College.
                      </div>
                    </div>
                </div>
                <div className="person">

                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Team;
