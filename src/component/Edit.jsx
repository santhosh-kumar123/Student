import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./Array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  let [Roll, setRoll] = useState("");
  let [Courses, setCourses] = useState("");
  let [Branch, setBranch] = useState("");
  let [Fee, setFee] = useState("");
  const [id, setid] = useState("");

  let history = useNavigate();

  var index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  
  const handelSubmit = e => {
    e.preventDefault();

    let a = array[index];
    a.Name = Name;
    a.Roll = Roll;
    a.Courses = Courses;
    a.Branch = Branch;
    a.Age = Age;
    a.Fee = Fee;
    history("/Admin");
  };
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setRoll(localStorage.getItem("Roll"));
    setCourses(localStorage.getItem("Courses"));
     setBranch(localStorage.getItem("Branch"));
    setAge(localStorage.getItem("Age"));
    setid(localStorage.getItem("id"));
  }, []);

  return (
    <div
      style={{
        // float: "right",
        width: "490px",
        height: "80vh",
        textAlign: "center",
        backgroundColor: "lightgray",
        marginLeft: "600px",
        marginTop: "20px",
        border: "2px solid white",
        borderRadius: "20px",
        boxShadow: "0px 0px 5px 0px",
        paddingTop: "30px",
      }}
    >
      <h1
        style={{
         fontWeight: "400",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        Update Details
      </h1>
      <Form
        className="d-grid gap-2"
        style={{ margin: "2rem", textAlign: "center" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={Name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={Roll}
            onChange={e => setRoll(e.target.value)}
            type="text"
            placeholder="Register no"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={Courses}
            onChange={e => setCourses(e.target.value)}
            type="text"
            placeholder="Courses"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={Branch}
            onChange={e => setBranch(e.target.value)}
            type="text"
            placeholder="Branch"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={Age}
            onChange={e => setAge(e.target.value)}
            type="text"
            placeholder="Age"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={Fee}
            onChange={e => setFee(e.target.value)}
            type="text"
            placeholder="Fee"
          />
        </Form.Group>

        <Button
          onClick={e => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
          style={{ width: "200px", textAlign: "center", marginLeft: "100px" }}
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;



