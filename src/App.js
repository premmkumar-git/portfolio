import './App.css';
import Header from './Header';
import Mainpage from './mainpage';
import Footer from './footer';
import ContactCard from './contactCard';
import Portfolio from './Portfolio';
import AboutMe from './aboutMe';
import { useEffect, useState } from 'react';
import Notification from './shared/notification';


function App() {
   const [value, setValue] = useState(1)
    useEffect(() => {
      let details = navigator.userAgent;
  
      /* Creating a regular expression 
      containing some mobile devices keywords 
      to search it in details string*/
      let regexp = /android|iphone|kindle|ipad/i;
        
      /* Using test() method to search regexp in details
      it returns boolean value*/
      let isMobileDevice = regexp.test(details);
        
      if (isMobileDevice) {
          console.log("You are using a Mobile Device");
      } else {
          console.log("You are using Desktop");
      }
    }, [])
    

   useEffect(() => {
    handleClickScroll();

   }, [value])
   
  const handleClickScroll = () => {
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <Notification />
       <Header handleClickScroll={handleClickScroll} setValue={setValue}/>
       <div style={{overflowY:"auto",height:"90vh"}}>
          <div id="1">
            <Mainpage/>
          </div>
          <div id="2">
            <AboutMe/>
          </div>
          <div id="3">
            <Portfolio/>
          </div>
          <div >
            <ContactCard/>
          </div>
          <div id="4">
            <Footer/>
          </div>
       </div>
       
    </div>
  );
}

export default App;
