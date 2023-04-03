import React from 'react'
import image from './shared/MacBook-Back-Table.jpg'

function AboutMe() {
  return (
    <div 
    id = "aboutMeMain"
    style = {{
        backgroundColor:"white",
        boxShadow:"10 10 10 black", 
        // width:"73%", 
        borderRadius:"20px",
        marginTop:"40px",
        display:"flex",
        justifyContent:"space-between",
        marginLeft:"15%",
        marginTop:"80px",
        marginBottom:"80px",
        fontFamily:"Mulish,sans-serif"
    }}
    >
            <img id='aboutImg' style={{width:"40%",height:"350px",borderRadius:"20px"}} src={image}/>

      <div className='aboutMe' id='aboutMeId'>
        <div id='aboutMeText' style={{marginTop:"22px", fontWeight:"750",color:"#147efb",width:"80%"}}>ABOUT ME</div>
          
          <div className='subheader' style={{fontSize:"17px",marginTop:"40px",textAlign:"left",width:"80%"}}>Hi, I'm Prem Kumar. A passionate Front-end React Developer based in Hyderabad, Hitech-city.📍</div>
          <p className='subheader' style={{fontSize:"1.1rem",color:"grey",width:"80%",textAlign:"left",marginTop:"20px",fontWeight:"500",overflow:"scroll"}}>
          As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>
             
            

      </div>
    </div>
  )
}

export default AboutMe