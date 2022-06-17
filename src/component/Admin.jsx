import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Admin = () => {
  return (
    <div style={{ height: "60vh", width: "100%" }}>
          <Carousel showThumbs={false} showIndicators={false} showStatus={false} style={{ height: "90vh", width: "90%" }}>
        <div>
          <img
            style={{ height: "30rem", width: "80rem",borderBottom:"1px solid",borderRadius:"10px",boxShadow:"0px 0px 10px 0px" }}
            src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__340.jpg"
          />
         
        </div>
        <div>
          <img 
           style={{ height: "80vh", width: "95%",borderBottom:"1px solid",borderRadius:"10px",boxShadow:"0px 0px 10px 0px" }}
          src="https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505__340.jpg" />
          
        </div>
        <div>
          <img 
           style={{ height: "30rem", width: "80rem",borderBottom:"1px solid",borderRadius:"10px",boxShadow:"0px 0px 10px 0px" }}
          src="https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754__340.jpg" />
         
        </div>
        <div>
          <img 
           style={{ height: "30rem", width: "80rem",borderBottom:"1px solid",borderRadius:"10px",boxShadow:"0px 0px 10px 0px" }}
          src="https://cdn.pixabay.com/photo/2019/04/14/10/26/book-4126481_960_720.jpg" />
         
        </div>
        <div>
          <img 
           style={{ height: "30rem", width: "80rem",borderBottom:"1px solid",borderRadius:"10px",boxShadow:"0px 0px 10px 0px" }}
          src="https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400313__340.jpg" />
          
        </div>
        <div>
          <img 
           style={{ height: "30rem", width: "80rem",borderBottom:"1px solid",borderRadius:"10px",boxShadow:"0px 0px 10px 0px" }}
          src="https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168__340.png" />
          
        </div>
      </Carousel>
    </div>
  );
}

export default Admin