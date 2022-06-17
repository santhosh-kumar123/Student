import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import Styles from "./model.module.css";

const Model1 = ({ login, logout }) => {
  let [state, setState] = useState(false);
  if (!login) {
    return null;
    
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
        <Form.Label style={{ fontWeight: "300" }}>Name :</Form.Label>
        <Form.Control placeholder="Name" />
        <Form.Label style={{ fontWeight: "300" }}>Email :</Form.Label>
        <Form.Control placeholder="Email" disabled />
        <Form.Label style={{ fontWeight: "300" }}>Password :</Form.Label>
        <Form.Control placeholder="Password" disabled />
      </Form.Group>

      <Form.Group className="mb-3">
        <button variant="primary" type="submit" size="lg" onClick={logout}>
          <h2>{login === true ? "Register" : "Login"}</h2>
        </button>
      </Form.Group>
    </div>,
    document.getElementById("model")
  );
};

export default Model1;
