import React, { useState } from "react";
import Model from "./Model";
import Styles from "./model.module.css"
const Portal = () => {
  let [login, setLogin] = useState(false);
  return (
    <div>
      <button className={Styles.Portalbutton}
        onClick={() => {
          setLogin(true);
        }}
      >
        SignIn
      </button>
      <Model
        login={login}
        logout={() => {
          setLogin(false);
        }}
      >
      </Model>
     
    </div>
  );
};

export default Portal;
