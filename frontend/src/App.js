import React from "react" 
import './App.css';
import Routes from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <div className="head">
        <img src="https://cdn2.iconfinder.com/data/icons/professionals-3/128/employee_manager_professional-512.png" width="150"/>
        <h1>Employee details page</h1>
      </div>
      <Routes />
    </div>
  );
}

export default App;
