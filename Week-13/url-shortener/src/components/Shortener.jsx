import { useState } from "react";
import workstation from "../styles/workstation.png";
import "../styles/Shortener.css";

const Shortener = () => {
  const [data, setData] = useState();
  const [btnName, setBtnName] = useState("Copy");

  function handleBtn() {
    const apiUrl = "https://api.shrtco.de/v2/shorten?url=";
    let inputUrl = document.getElementById("txtInputurl").value;
    if (inputUrl.length > 0) {
      fetch(apiUrl + inputUrl)
        .then((response) => response.json())
        .then((resp) => setData(resp["result"]["full_short_link"]))
        .catch((err) => alert(err));
      document.getElementById("txtInputurl").value = "";
      console.log("Button name change to Copy");
      setBtnName("Copy");
    } else {
      console.error("Please type valid URL.");
    }
    //fetch("https://api.shrtco.de/v2/shorten?url=www.google.com")
  }

  const copied = () => {
    navigator.clipboard.writeText(data);
    console.log("Button name change to Copied");
    setBtnName("Copied");
  };

  return (
    <>
      <div className="container-shortener">
        <img src={workstation} className="logo-react" alt="loading" />
        <div>
          <input
            type="text"
            id="txtInputurl"
            maxLength={100}
            placeholder="Please type website url you want to short"
          ></input>
          <p></p>
          <button id="btnShorten" onClick={handleBtn}>
            Shorten it!
          </button>
          <br></br>
          <div>
            <p className="shortened-url">{data}</p>
            <button onClick={copied} className="btnName">{btnName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shortener;
