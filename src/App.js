import './App.css';
import Home from './pages/home';
import Story from './pages/story';
import Servantclasses from './pages/servantclasses';
import Rollsimulator from './pages/rollsimulator';
import Masterchat from './pages/masterchat';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story" component={Story} />
            <Route exact path="/servantclasses" component={Servantclasses} />
            <Route exact path="/rollsimulator" component={Rollsimulator} />
            <Route exact path="/masterchat" component={Masterchat} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
