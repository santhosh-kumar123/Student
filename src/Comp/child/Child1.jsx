import React, { useContext } from "react"
import { setContext } from "../Report"
const Child1 = () => {
    let{username}=useContext(setContext)
    return (
        <h1>C{username}</h1>
    )
}
export default Child1