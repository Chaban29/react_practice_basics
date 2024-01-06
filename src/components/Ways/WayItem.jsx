import { Ways } from "../Ways/Ways";
import cl from "../../styles/main.module.scss";
import logo from "../../icons/physics.png";

export const WayItem = () => {
  return (
    <div>
      {Ways.map((way) => (
        <div key={way.id}>
          <ul>
            <li>
              <img src={logo} alt="react icon" className={cl.logo} />
              <strong>
                {way.id}. {way.title}
              </strong>
              <p>{way.body}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
