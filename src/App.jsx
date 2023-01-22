import Navbar from "./components/Navbar";
import Map from "./components/Map";
import { useEffect ,useState } from "react";

var latOttenuto = 37.38605,
  lngOttenuto = -122.08385;

function App() {
  /*
  useEffect(() => {
    var risultato;
    let input = document.querySelector(".texto");
    input.addEventListener("change", (e) => {
      risultato = e.target.value;
    });

    let button = document.querySelector(".button");
    button.addEventListener("click", () => {
      axios
        .get(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_RxSh018daWhsnlYC4NNMVwmhaVHdq&ipAddress=" +
            risultato
        )
        .then((res) => {
          latOttenuto = res.data.location.lat;
          lngOttenuto = res.data.location.lng;
          console.log(latOttenuto);
          console.log(lngOttenuto);
          console.log("soy la app");
        });
    });
  }, []);
  */

  const [Lat, setLat] = useState(latOttenuto);
  const [Lng, setLng] = useState(lngOttenuto)



  useEffect(() => {
    var risultato;

    /*EVENTO DEL INPUT DI TESTO*/
    let input = document.querySelector(".texto");
    input.addEventListener("change", (e) => {
      console.log(e.target.value);
      risultato = e.target.value;
    });

    /*PRENDO I COMPONENTI*/
    let ip = document.querySelector(".ip");
    let location = document.querySelector(".location");
    let timezone = document.querySelector(".timezone");
    let ips = document.querySelector(".ips");

    /*EVENTO DI INPUT BUTTON*/
    let button = document.querySelector(".button");
    button.addEventListener("click", () => {
      axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_RxSh018daWhsnlYC4NNMVwmhaVHdq&ipAddress=" + risultato).then((res)=>{
        console.log(res.data);

        ip.innerHTML = res.data.ip;
        location.innerHTML = res.data.location.country + ", " + res.data.location.region;
        timezone.innerHTML = "UTC" + res.data.location.timezone;
        ips.innerHTML = res.data.isp;
        latOttenuto = res.data.location.lat;
        lngOttenuto = res.data.location.lng;
        
        setLat(latOttenuto);
        setLng(lngOttenuto);


      })
      .catch((err)=>{
        alert("non trovato: " + err);
      })
    });

  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Map lat={Lat} lng={Lng}></Map>
    </div>
  );
}

export default App;
