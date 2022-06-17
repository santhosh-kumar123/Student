import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import Styles from "./model.module.css";
import { toast, ToastContainer } from "react-toastify";
const Model = ({ login, logout }) => {
  let [state,setState]=useState(false)
  let history=useNavigate()
    if (!login) {
        return null;
  }
  let handleclick = () => {
    setState(!state)
toast("login is successfull");
  }
  
    return ReactDOM.createPortal(
      <div className={Styles.modeldiv}>
        <Form.Group
          className="mb-3"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <h1 style={{ fontWeight: "500", fontSize: "38px" }}>Login Form</h1>
          <Form.Label style={{ fontWeight: "400" }}>Name :</Form.Label>
          <Form.Control required placeholder="Name" />
          <Form.Label style={{ fontWeight: "400" }}>Email :</Form.Label>
          <Form.Control required placeholder="Email" />
          <Form.Label style={{ fontWeight: "400" }}>Password :</Form.Label>
          <Form.Control required placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <div>
            <button
              variant="primary"
              type="submit"
              size="lg"
              style={{ backgroundColor: "rgb(206,219,233)", color: "orange" }}
              onClick={handleclick}
            >
              <h4>{state === true ? "Register" : "Login"}</h4>
            </button>
            <ToastContainer />
          </div>
        </Form.Group>
      </div>,
      document.getElementById("model")
    );
}

export default Model


