import React, { useContext } from 'react'
import { setContext } from './Report'
import Trial from './Trial'

const Lift = (props) => {
    let { state } = useContext(setContext)
    console.log(state)
    return (
      <>
            <h1>{state}</h1>
        {/* <Trial username={props.username} /> */}
      </>
    );
}

export default Lift