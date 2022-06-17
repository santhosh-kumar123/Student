import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

const ReactToast = () => {
    const notify = () => toast("Wow so easy!");
  return (
    <div>
          <button onClick={notify}>Notify</button>
          <ToastContainer/>
    </div>
  );
}
export default ReactToast
