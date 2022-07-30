import { Link } from "react-router-dom";
import "./navbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="title">Tiburones n Tortugas</div>
        </Link>
        <div className="items">
          <div className="item">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div className="button outlined" variant="outlined">
                About Us
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to="/team" style={{ textDecoration: "none" }}>
              <div className="button outlined" variant="outlined">
                Meet Our Team
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to="/research" style={{ textDecoration: "none" }}>
              <div className="button outlined" variant="outlined">
                Get Involved
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to="/donate" style={{ textDecoration: "none" }}>
              <div className="button contained" variant="contained">
                Donate
              </div>
            </Link>
          </div>
          <div className="item">
            <div className="socials">
              <a
                href="https://www.instagram.com/tiburonesntortugas/"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="socials-button" variant="text">
                  <InstagramIcon className="icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
