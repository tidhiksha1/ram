import "./App.css";
import Middle from "./Components/Middle";

import NavBar from "./Components/NavBar";


import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-2">
            <Middle />
            
        
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
