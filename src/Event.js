import { Link } from "react-router-dom";
import "./Event.css";

function Event() {
  return (
    <div id="event" className="event">
      <h1 className="event-head">On Going Events</h1>
      <div className="card">
        <div className="sect">
          <div className="sect1">
            <img src="./event_img.png" alt="Event Img" />
          </div>
          <div className="sect2">
            <h1>WEB CRAFT</h1>
            <h2>Date:- 20th July 2024</h2>
            <p>
              Participants will be tasked with coding the provided UI/UX design
              within a given time frame using HTML and CSS. You are allowed to
              use AI tools and reference websites. This competition aims to
              enhance your knowledge and experience in front-end designing.
            </p>
            <h2>Registration Charge:- 30/- </h2>
            <p>All Participants will recive certificate for participation.</p>

            <Link to={"registeration"}>
              <a href="#">
                <button>Register Now</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
