import React, { useState, useEffect } from "react";
import apibtn from "../images/icon-dice.jpg";

const Main = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState("https://api.adviceslip.com/advice");

  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log("Data:", data["slip"]["advice"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {}, [url]);

  const submit = (e) => {
    handleFetch();
    e.preventDefault();
    setUrl("https://api.adviceslip.com/advice");
  };

  return (
    <div className="main">
      <h1>Hello</h1>
      {data && <p>{data["slip"]["advice"]}</p>}
      <form onClick={submit}>
        <button type="submit">
          <img src={apibtn} alt="API button" />
        </button>
      </form>
    </div>
  );
};

export default Main;
