
import AboutMe from './Components/AboutMe';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Summary from './Components/Summary';
import WorkFlow from './Components/WorkFlow';

function App() {
  return (
    <div >
      <Navbar/>
      <Home></Home>
      <AboutMe/>
      <Summary/>
      <Skills/>
      <WorkFlow/>
    </div>
  );
}

export default App;
