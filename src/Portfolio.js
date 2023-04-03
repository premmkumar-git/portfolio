import React from 'react'
import ProjectCard from './ProjectCard'

function Portfolio() {
  return (
    <div style={{
        marginTop:"30px",
        backgroundColor:"#F8F8F8",
        paddingTop:"23px",
        paddingBottom:"23px",
        borderRadius:"10px",
        paddingLeft:"15%"
        }}>
        <div style={{fontWeight:"550",color:"#147efb"}}>Portfolio</div>
        <div style={{marginTop:"10px", fontWeight:"650",color:"black", fontSize:"20px"}} >This project is a unique piece of development </div>
        <div>
          {[1,1].map((item,index)=>
            <ProjectCard index={index} />
          )}
        </div>
        
    </div>
  )
}

export default Portfolio