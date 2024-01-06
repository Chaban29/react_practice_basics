import React from "react";
import cl from "../../styles/main.module.scss";
import reactLogo from "../../icons/physics.png";

export const Header = ({ title, time }) => {
  const date = new Date().toLocaleTimeString();
  const logoName = "React Logo Icon";
  return (
    <header className={cl.header}>
      <div className={cl.flex}>
        <img src={reactLogo} alt={logoName} className={cl.logo} />
        <h3>{title}</h3>
      </div>
      <span>
        {time}
        {date}
      </span>
    </header>
  );
};
