import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import React from 'react'
import photo from '../src/shared/photo.jpeg'
import './styles.css';


function Mainpage() {
   
      
  return ( 
    <div style={{width:"100%",marginTop:"5px"}}> 
        <div style={{width:"100%", 
        display:"flex", 
        flexDirection:"row",
        alignItems:"center", 
        backgroundColor:"#F8F8F8", 
        height: "90vh"}}>
            <div style={{width:"30%", marginLeft:"15%", color:"white"}}>
                <div style={{ fontWeight:"bold", fontSize:"50px", color:"black"}}>Front-End React Developer</div>
                <div style={{ fontWeight:"100px", fontSize:"20px", color:"grey", marginTop:"20px"}}>Hi, I'm Prem Kumar. A passionate Front-end React Developer based in Hyderabad, Hitech-city.📍</div>
                <div  style={{marginTop:"10px"}}>
                    <a style={{color: "black"}} href="https://www.linkedin.com/in/prem-kumar-a1162917a">
                        <LinkedinFilled className='iconstyle' />
                    </a>
                    <a style={{color: "black"}} href="https://github.com/premmkumar-git">
                    <GithubFilled className='iconstyle' style={{marginLeft: "10px"}} />
                    </a>
                </div>
                <div style={{color:"white"}}>
                </div>
            <div style={{display:"flex", flexDirection:"row", marginTop:"20px", color:"black", fontWeight:"500" }}>
                <div style={{borderRight:"2px solid black", paddingRight:"20px", width:"22%", marginRight:"10px"}}>Tech Stack</div>
                <div style={{display:"flex", justifyContent:"space-between", width:"80%"}}>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>REACT</div>
                    <div>JAVASCIPT</div>
                </div>
            </div>

            </div>
            <div style={{width:"50%", alignItems:"center",justifyContent:"center",display:"flex"}}>
                <img 
                    className={"photo"}
                    src={photo} alt="" />
            </div>
        </div>

       
    </div>
  )
}

export default Mainpage