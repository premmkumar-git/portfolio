import './App.css';
import Header from './Header';
import Mainpage from './mainpage';
import Footer from './footer';
import ContactCard from './contactCard';
import Portfolio from './Portfolio';
import AboutMe from './aboutMe';

function App() {
  return (
    <div className="App">
       <Header/>
       <div style={{overflowY:"auto",height:"90vh"}}>
          <div>
            <Mainpage/>
          </div>
          <div>
            <AboutMe/>
          </div>
          <div>
            <Portfolio/>
          </div>
          <div>
            <ContactCard/>
          </div>
          <div>
            <Footer/>
          </div>
       </div>
       
    </div>
  );
}

export default App;
