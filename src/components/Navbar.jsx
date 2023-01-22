import Information from "./Information";
import { useEffect } from "react";

function Navbar() {

  useEffect(() => {
    const mq = matchMedia("(max-width: 700px)");
    let input = document.querySelector(".texto");
  
    if (mq.matches == true) {
      input.placeholder = "Search for any IP address"
    } else {
      input.placeholder = "Search for any IP address or domain"
    }


    mq.addEventListener("change", (e) => {
      if (mq.matches == true) {
        input.placeholder = "Search for any IP address"
      } else {
        input.placeholder = "Search for any IP address or domain"
      }
    });
  });


  return (
    <div className="Navbar">
      <h1>IP Address Tracker</h1>
      <div className="Navbar__search">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="texto"
        />
        <button className="button">
          <img src="src\assets\icon-arrow.svg" alt="arros" />
        </button>
      </div>
      <div className="Navbar__information">
        <Information></Information>
      </div>
    </div>
  );
}

export default Navbar;
