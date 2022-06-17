import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './component/Create'
import Edit from './component/Edit'
import Home from './component/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from './component/NavScrollExample'
import Portal from './Model/Portal'
import Styles from "./Model/model.module.css";
import Admin from './component/Admin'
import Model1 from './Model/Model1'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
// import ReactToast from './Model/ReactToast'
const App = () => {
  return (
    <div className={Styles.Appdiv}>
      {/* <Portal/> */}
      {/* <ReactToast/> */}
      <BrowserRouter>
        <NavScrollExample />
        <ToastContainer theme="dark" pauseOnHover />
        <Routes>
          <Route path="/Admin" element={<Home />} />
          <Route path="/" element={<Admin />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit" element={<Edit />} />
          {/* <Route path='/Model1'element={<Model1/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
