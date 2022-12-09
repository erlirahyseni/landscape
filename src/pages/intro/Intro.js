import "./Intro.css";
import { FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa";

const Intro = () => {
  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "may",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <div className="intro-page">
      <div className="intro-content">
        <div className="social-icons">
          <div className="line"></div>
          <li>
            <FaDribbble />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </div>
        <div className="text-content">
          <div className="title">
            <div className="first-section">
              <div className="line"></div>
              <h1>ADVENTURE</h1>
            </div>
            <h1>
              WINTER <br /> WONDERLAND{" "}
            </h1>
            <div className="numbers">
              <h1 id="one">01</h1>
              <h2>/02</h2>
            </div>
          </div>
          <div className="cards-section">
            <h1>PLAN YOUR EXPERIENCE</h1>
            <div className="line"></div>
            <div className="cards">
              <div className="card-desc">
                <h1>SNOWBOARDING</h1>
                <p>
                  Fresh powder, clear skies. What better way to hit the
                  mountains.
                </p>
                <button>FAVORITES</button>
              </div>
              <div className="card-desc">
                <h1>FISHING</h1>
                <p>
                  Fresh powder, clear skies. What better way to hit the
                  mountains.
                </p>
                <button id="added">FAVORITES</button>
              </div>
              <div className="card-desc">
                <h1>SKING</h1>
                <p>
                  Fresh powder, clear skies. What better way to hit the
                  mountains.
                </p>
                <button>FAVORITES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title-content">
        <h1>ENJOY WONDERFUL</h1>
        <div className="title-text">
          <h1>EXPERIENCE .</h1>
          <p>
            Find popular destination and
            <br /> staycation around the world.
          </p>
        </div>
      </div>
      <div className="last_section">
        <h1>
          A Place Where <br /> Winter Fairytale Lives
        </h1>
        <div className="date-section">
          <h2 id="date">{date}</h2>
          <h2 id="date">{month}</h2>
          <h2 id="date">{year}</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
