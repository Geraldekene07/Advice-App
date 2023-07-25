import React, { useState, useEffect } from "react";
import apibtn from "../images/icon-dice.jpg";
import divider from "../images/pattern-divider-desktop.jpg";
import dividermb from "../images/pattern-divider-mobile.jpg";

const Main = () => {
  const [data, setData] = useState({
    id: 0,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const [url, setUrl] = useState("https://api.adviceslip.com/advice");

  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData.slip);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {}, [url]);

  const submit = (e) => {
    e.preventDefault();
    handleFetch();
  };

  return (
    <div className="main">
      <div className="body">
        <h5 className="title">ADVICE #{data.id}</h5>
        <br />
        {data && (
          <>
            <p className="advice">"{data.advice}"</p> <br />
          </>
        )}
        <img className="divider" src={divider} alt="" /> <br />
        <img className="divider2 d-md-none" src={dividermb} alt="" /> <br />
      </div>
      <div className="body-ii">
        <form onClick={submit}>
          <button className="submit" type="submit">
            <img src={apibtn} alt="API button" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
