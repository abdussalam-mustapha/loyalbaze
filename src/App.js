import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch >
           <Route path="/" exact>
              <Home />
           </Route>
           <Route path="/About" exact>
              <About />
           </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
