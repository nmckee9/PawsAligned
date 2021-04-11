import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../src/pages/Home/home";
import Sitting from "../src/pages/Sitting/sitting"
import Walking from "./pages/Walking/walking";
import About from "./pages/About/about";




const App = () => {

  return (
    <div>
      <Router >
        <Route exact path="/" component={Home} />
        <Route exact path="/sitting" component={Sitting} />
        <Route exact path="/walking" component={Walking} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );

}

export default App;