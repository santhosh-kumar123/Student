import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./Array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";


function Create() {
  
  const [Name, setName] = useState("");
  const [Roll, setRoll] = useState("");
  const [Courses, setCourses] = useState("");
  const [Branch, setBranch] = useState("");
  const [Age, setAge] = useState("");
  const [Fee, setFee] = useState("");
  
  let history = useNavigate();
  const handelSubmit = e => {
    e.preventDefault(); 
    const ids = uuid();
    console.log(ids);
    let uni = ids.slice(0, 8); 
    let a = Name,
      b = Roll,
      c = Courses,
      d = Branch,
      f = Age,
      g = Fee;
    array.push({ id: uni, Name: a,Roll: b,Courses: c,Branch: d,Age: f ,Fee:g});
    history("/Admin");
  };

  return (
    <div
      style={{
        width: "490px",
        height: "80vh",
        textAlign: "center",
        marginLeft: "600px",
        backgroundColor: "white",
        marginTop: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px 0px",
        paddingTop: "30px",
      }}
    >
      <h1
        style={{
        
          fontWeight: "400",
          fontSize: "35px",
          
        }}
      >
        Student Details
      </h1>
      <Form
        className="d-grid gap-2"
        style={{ marginLeft: "2.3rem", width: "400px", textAlign: "center" }}
      >
        <Form.Group className="mb-3" controlId="formBasicName" style={{}}>
          <Form.Control
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
            style={{ color: "purple", textAlign: "center" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRoll">
          <Form.Control
            onChange={e => setRoll(e.target.value)}
            type="text"
            placeholder="Roll No"
            required
            style={{ color: "purple", textAlign: "center" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCourses">
          <Form.Control
            onChange={e => setCourses(e.target.value)}
            type="text"
            placeholder="Courses"
            required
            style={{ color: "purple", textAlign: "center" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBranch">
          <Form.Control
            onChange={e => setBranch(e.target.value)}
            type="text"
            placeholder="Branch"
            required
            style={{ color: "purple", textAlign: "center" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={e => setAge(e.target.value)}
            type="text"
            placeholder="Age"
            required
            style={{ color: "purple", textAlign: "center" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={e => setFee(e.target.value)}
            type="text"
            placeholder="Fee"
            required
            style={{ color: "purple", textAlign: "center" }}
          />
        </Form.Group>

        <Button
          onClick={e => handelSubmit(e)}
          variant="danger"
          type="submit"
          size="lg"
          style={{ width: "200px", marginLeft: "100px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;

