import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { Tooltip } from 'antd';
import React, { useState } from 'react'
import photo from '../src/shared/photo.jpeg'
import Brigosha from './brigosha';
import Oracle from './Oracle';
import './styles.css';


function Mainpage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isOrclModalOpen, setIsOrclModalOpen] = useState(false)

  return ( 
    <div style={{width:"100%",marginTop:"5px", backgroundColor:"#F8F8F8",minHeight:"90vh",fontFamily:"sans-serif"}}> 
    
        <div 
        id = 'maincard'
         className='mainCardCss'
         >
            
             <div id='topPhotoHide' className='topPhoto'>
                <img 
                    className={"photo"}
                    src={photo} alt="" />
            </div>
            <div className='subMain' id='subMainHide' >
                <div style={{ fontWeight:"bold", fontSize:"50px", color:"black"}}>Front-End React Developer 👋</div>
                <div style={{ fontWeight:"100px", fontSize:"20px", color:"grey", marginTop:"20px",fontFamily:"sans-serif"}}>Hi, I'm Prem Kumar. A passionate Front-end React Developer based in Hyderabad, Hitech-city.📍</div>
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
            <div style={{display:"flex", flexDirection:"row", marginTop:"20px", color:"black", fontWeight:"500",fontFamily:"sans-serif" }}>
                <div id='techStack' style={{borderRight:"2px solid black", paddingRight:"20px", width:"22%", marginRight:"10px"}}>Tech Stack</div>
                <div style={{display:"flex", justifyContent:"space-between", width:"80%"}}>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>REACT</div>
                    <div>JAVASCIPT</div>
                </div>
            </div>
              

            </div>
            <div id='hidephotoId' className='hidephoto' >
                <img 
                    className={"photo"}
                    src={photo} alt="" />
            </div>
        </div>
        <div className='subheader' style={{marginLeft:"15%",padding:"10px",color:"grey",fontSize:"18px",paddingLeft:"0px"}}>Work Experience :</div>
        <div style={{color:"black",padding:"10px",display:"flex",paddingLeft:"0px",alignItems:"center",width:"80%",marginLeft:"15%",marginRight:"15%"}}>
                    <div onClick={()=>{setIsModalOpen(true)}} className='subheader' style={{color:"#318CE7",fontSize:"15px",cursor:"pointer"}} >Brigosha Technologies</div>
              
                    <div style={{backgroundColor:"grey",width:"5%",height:"2px",marginLeft:"1%"}}></div>
                     <div onClick={()=>{setIsOrclModalOpen(true)}} className='subheader' style={{marginLeft:"1%",color:"red",fontSize:"15px",cursor:"pointer"}}>Oracle India</div>
                 </div>
                 <div style={{marginLeft:"15%",color:"#B8B8B8"}}>Note: Please click on the company name for more information!</div>
       <Brigosha isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
       <Oracle isModalOpen={isOrclModalOpen} setIsModalOpen={setIsOrclModalOpen} />

    </div>
  )
}

export default Mainpage