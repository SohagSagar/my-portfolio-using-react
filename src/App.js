
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
import Services from './Components/Services';
import Contact from './Components/Contact';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import ProjectOffer from './Components/ProjectOffer';


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
          <Services/>
          <Contact/>
          <Footer/>
          <ProjectOffer/>
        </>}></Route>
        
        <Route path='/details/:id' element={<ProjectDetails />}></Route>
      </Routes>
      <ToastContainer  autoClose={2000}/>

    </div>
  );
}

export default App;
