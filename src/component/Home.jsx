import React from "react";
import { Button, Table } from "react-bootstrap";
import array from "./Array";
import { Link, useNavigate } from "react-router-dom";
                                 
function Home() {
  let history = useNavigate();
  function setID(id, name,Roll,Courses,Branch, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Roll", Roll);
    localStorage.setItem("Courses", Courses);
    localStorage.setItem("Branch", Branch);
    localStorage.setItem("Age", age);
  }
  function deleted(id) {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    array.splice(index, 1);
    history("/");
  }

  return (
    <div
      className="Homediv"
      // style={{ border: "1px solid", borderRadius: "20px" }}
    >
      <div
        style={{
          margin: "5rem",
          borderTop: "1px solid white",
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 2px 0px",
        }}
      >
        {" "}
       
        <caption
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "30px",
            width: "1500px",
          }}
        >
          Student Details
        </caption>
        <Table
          striped
          bordered
          hover
          size="lg"
          style={
            {
              // border: "0px solid",
              // borderRadius: "20px",
            }
          }
        >
          <thead>
            <tr>
              <th style={{ color: "Orange", textAlign: "center" }}>Name</th>
              <th style={{ color: "Orange", textAlign: "center" }}>
                Register no
              </th>
              <th style={{ color: "Orange", textAlign: "center" }}>Courses</th>
              <th style={{ color: "Orange", textAlign: "center" }}>Branch</th>
              <th style={{ color: "Orange", textAlign: "center" }}>Age</th>
              <th style={{ color: "Orange", textAlign: "center" }}>
                Fee Status
              </th>
            </tr>
          </thead>
          <tbody>
            {array.map(item => {
              return (
                <tr>
                  <td style={{ color: "Black", textAlign: "center" }}>
                    {item.Name}
                  </td>
                  <td style={{ color: "Black", textAlign: "center" }}>
                    {item.Roll}
                  </td>
                  <td style={{ color: "Black", textAlign: "center" }}>
                    {item.Courses}
                  </td>
                  <td style={{ color: "Black", textAlign: "center" }}>
                    {item.Branch}
                  </td>
                  <td style={{ color: "Black", textAlign: "center" }}>
                    {item.Age}
                  </td>
                  <td style={{ color: "Black", textAlign: "center" }}>
                    {item.Fee}
                  </td>
                  <td>
                    <Link to={`/edit`}>
                      <Button
                        onClick={e =>
                          setID(
                            item.id,
                            item.Name,
                            item.Roll,
                            item.Branch,
                            item.Courses,
                            item.Age,
                            item.Fee
                          )
                        }
                        variant="info"
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button onClick={e => deleted(item.id)} variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Link className="d-grid gap-2" to="/create">
          {" "}
          <Button
            variant="warning"
            size="lg"
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <h5
              style={{
                fontFamily: "sans-serif",
                color: "blueviolet",
                fontSize: "28px",
              }}
            >
              Create
            </h5>{" "}
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;


