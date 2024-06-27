
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import {Outlet} from "react-router-dom";


function App() {
  
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
