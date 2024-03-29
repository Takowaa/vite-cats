import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.jsx";

const App = () => {

  return (
    <div>

      <RouterProvider router={router} />
    </div>
  );
};

export default App;