import React, { createContext, useState } from 'react'
import Child1 from './child/Child1';
import Lift from './Lift'
import Trial from './Trial';
export let setContext = createContext("stranger");
const Report = () => {
    let [state,setState]=useState("prashanth")
    return (
      <>
        <setContext.Provider value={{username:"santhosh", state }}>
                <Lift />
                <Trial />
                <Child1/>
        </setContext.Provider>
        {/* <Lift username="santhosh" /> */}
      </>
    );
}

export default Report