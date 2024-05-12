import {React,useState} from "react";
import "./home.css";
import Delivery from "../imgs/delivery.png";
import Popular from "./Category/Popular";
import Navbar from './Navbar'

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  document.title = "Amazon"

  const handleScroll = () => {
    window.scrollTo({
      top: scrollPosition + 750, 
      behavior: "smooth" 
    });
    setScrollPosition(scrollPosition + 750);
    setTimeout(() => {
    setScrollPosition(0); 
      
    }, 100); 
  };

  return (
    <>
    <Navbar/>
        <div className="content">
          <div className="poster-area">
            <div className="poster-data">
              <p className="poster-head">Top Quality Products!</p>
              <p className="poster-desc">
                Don't miss it out! Get products direct from{" "}
                <b style={{ fontSize: "22px" }}>Export Houses</b>.
              </p>
            </div>
            <button onClick={handleScroll} className="browse-btn">Browse products</button>
          </div>
          <img src={Delivery} className="delivery" />
          <Popular />
        </div>
    </>
  );
}

export default Home;
