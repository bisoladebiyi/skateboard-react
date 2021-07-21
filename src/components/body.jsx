import React from "react";
import andy from "../images/andy.png";
import andy2 from "../images/andy2.svg";
import thomas from "../images/thomas.svg";
import johny from "../images/johny.png";
import johny2 from "../images/johny2.svg";
import tony from "../images/tony.svg";
import hakim from "../images/hakim.png";
import hakim2 from "../images/hakim2.svg";
import abadi from "../images/abadi.png";
import abadi2 from "../images/abadi2.svg";
import online from "../icons/online.svg";
import offline from "../icons/offline.svg";

const Body = () => {
  return (
    <div>
      
      <h1 className="discover-heading">Discover</h1>
      <div className="discover-cards">
        <div className="discover-card1">
          <div className="discover-card1-info">
            <h2>How to do Basic Jumping and how to landing safely</h2>
            <div className="thomas-info">
              <img src={thomas} alt="" className="discover-img" />
              <div>
                <p>Thomas Hope</p>
                <p>53K views • 2 weeks ago</p>
              </div>
            </div>
            <div className="time-badge">7 min</div>
          </div>
        </div>

        <div className="discover-card2">
          <div className="discover-card2-info">
            <h2>Skateboard Tips You need to know</h2>
            <div className="tony-info">
              <p>Tony Andrew</p>
              <p>53K views • 2 weeks ago</p>
            </div>

            <img src={tony} alt="" className="discover-img" />

            <div className="time-badge">10 min</div>
          </div>
        </div>
      </div>
      <h2 className="most-watched-heading">Most Watched</h2>
      <div className="most-watched">
        {data.map(({ name, views, text, image, image2, status }, index) => (
          <div className="most-watched-cards">
            <img src={image} alt="" className="most-watched-image" />
            
            <div className="most-watched-info">
              <p className="name">{name}</p>
              <p className="description">{text}</p>
              <p className="views">{views}</p>
            </div>

            <img src={image2} alt="" className="avatar" />
            <div className="time-badge most-watched-time">7 min</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    name: "Andy William",
    views: "53K views  •  2 weeks ago",
    text: "Basic how to ride your skateboard comfortly",
    status: online,
    image: andy,
    image2: andy2,
  },
  {
    name: "Johny Wise",
    views: "53K views  •  2 weeks ago",
    text: "Prepare for your first skateboard jump",
    status: offline,
    image: johny,
    image2: johny2,
  },
  {
    name: "Budi Hakim",
    views: "53K views  •  2 weeks ago",
    text: "Tips to playing skateboard on the ramp",
    status: offline,
    image: hakim,
    image2: hakim2,
  },
  {
    name: "Wijaya Abadi",
    views: "53K views  •  2 weeks ago",
    text: "Basic Equipment to play skateboard safely",
    status: online,
    image: abadi,
    image2: abadi2,
  },
];
export default Body;
