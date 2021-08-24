import './App.css';
import Home from './pages/home';
import Story from './pages/story';
import Navbar from './componets/navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story" component={Story} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
