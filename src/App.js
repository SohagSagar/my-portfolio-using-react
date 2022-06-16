
import AboutMe from './Components/AboutMe';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Summary from './Components/Summary';
import WorkFlow from './Components/WorkFlow';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './Components/ProjectDetails';
import Test from './Components/Test';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path='/' element={<>
          <Home />
          <AboutMe />
          <Summary />
          <Skills />
          <WorkFlow />
          <Portfolio />
        </>}></Route>
        
        <Route path='/details/:id' element={<ProjectDetails />}></Route>
      </Routes>


    </div>
  );
}

export default App;
