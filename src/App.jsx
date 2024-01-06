import React, { useState } from "react";
import cl from "./styles/main.module.scss";
import { Header } from "./components/Header/Header";
import { WayItem } from "./components/Ways/WayItem";
import Button from "./components/Button/Button";

export const App = () => {
  const [content, setContent] = useState("Click into the Button");

  // let content = "Click to the button";
  const handleClick = (type) => {
    console.log("Open App", type);
    setContent("Button is Active");
  };
  const handleClickUpdate = (type) => {
    console.log("Update App", type);
    setContent("Button is Update");
  };
  const handleClickClosed = (type) => {
    console.log("Closed App", type);
    setContent('Button is Closed');
  };

  return (
    <div className={cl.app}>
      <Header title="React JS" time="Time now: " />
      <main className={cl.main}>
        <section className={cl.section}>
          <WayItem />
        </section>
        <section>
          <h3>New React JS Learn Course</h3>
          <Button onClick={() => handleClick("way")} type="button">
            Open App
          </Button>
          <Button onClick={() => handleClickUpdate("easy")} otype="button">
            Update App
          </Button>
          <Button onClick={() => handleClickClosed("programm")} type="button">
            Closed App
          </Button>
          <p>{content}</p>
        </section>
      </main>
    </div>
  );
};
