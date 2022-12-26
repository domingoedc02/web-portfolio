import AppNavbar from "./Components/AppNavbar";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";
import Routes from "./Components/Routes";

function App() {
  return (
    <>
      <Routes/>
      {/* <AppNavbar/>
      <div className="App">
        <header className="App-header">
          <Home/>
          <Contact/>
          <AboutMe/>
        </header>
      </div>
      <Footer/> */}
    </>
    
  );
}

export default App;
