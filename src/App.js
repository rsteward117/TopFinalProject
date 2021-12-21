import './App.css';
import Home from './pages/home';
import Story from './pages/story';
import Servantclasses from './pages/servantclasses';
import Gamemachanics from './pages/gamemachanics';
import Masterchat from './pages/masterchat';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/story" element={<Story />} />
            <Route  path="/servantclasses/*" element={<Servantclasses />} />
            <Route  path="/gamemachanics" element={<Gamemachanics />} />
            <Route  path="/masterchat" element={<Masterchat />} />
          </Routes>
    </>
  );
}

export default App;
