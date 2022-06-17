import React, { useContext } from 'react'
import { setContext } from './Report'

const Trial = (props) => {
    let{state}=useContext(setContext)
    return (
      <>
            {/* <div>{props.username}</div> */}
            <h1>Trial{state}</h1>
      </>
    );
}

export default Trial