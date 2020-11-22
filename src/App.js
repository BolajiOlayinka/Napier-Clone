import React, { Component } from "react";
import Home from '././Components/Home';
// import Hook from "./Hook";
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hook /> */}
        <Home/>
      </div>
    );
  }
}

// render() {
//   return (
//     <div className="App">
//       <Header />
//       <button onClick={()=>{this.navigate()}}> Navigate</button>
//       <div className="container">

//       </div>
//     </div>
//   );
// }

export default App;
