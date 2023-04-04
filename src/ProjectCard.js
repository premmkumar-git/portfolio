import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import React from 'react'
import bitcoinImg from '../src/shared/bitcoin.jpg'

function ProjectCard({index}) {
  return (
    <div style={{
      backgroundColor:"white",
      padding:"20px", 
      boxShadow:"10 10 10 black", 
      width:"80%",
      borderRadius:"20px",
      marginTop:"40px",
      display:"flex",
      justifyContent:"space-between",
      marginBottom:"70px",
      cursor:"not-allowed"
      
      }}>
        {/* {index%2==0? <div id="projectPage" style={{ backgroundColor:"grey", width:"50%",height:"350px",borderRadius:"20px"}}></div> : null} */}
        {index%2==0? <img id='projectPage' style={{width:"50%",height:"350px",borderRadius:"20px"}} src={bitcoinImg}/>:null}

        {index%2==1?
        <div style={{width:"50%",height:"350px", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
            <div className='subheader' style={{fontSize:"17px",marginTop:"50px"}}>COINCRUX 🪙</div>
            <div className='subheader' style={{fontSize:"1.2rem",color:"grey",width:"80%",textAlign:"center",marginTop:"-20px", fontWeight:"500"}}>Coincrux is a crypto app that allows users to search for information about various cryptocurrencies in real-time .</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"150px",marginTop:"-30px"}}>
                    <div className='techCard'>React</div>
                    <div className='techCard'>Css</div>

                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"220px",marginBottom:"50px"}}>
                    <div className='subheader-2' >Code <GithubOutlined style={{fontSize:"25px",marginRight:"10px"}}/></div>
                    <div className='subheader-2'>Live Demo <LinkOutlined style={{fontSize:"25px"}} /></div>

                </div>

        </div>:null
        }

      {/* {index%2==1? <div id="projectPage" style={{ backgroundColor:"grey", width:"50%",height:"350px",borderRadius:"20px"}}></div> : null} */}
      {index%2==1? <img id='projectPage' style={{width:"50%",height:"350px",borderRadius:"20px"}} src={bitcoinImg}/>:null}

      {index%2==0?
      <div id='projectDiscId' className='projectDisc' style={{height:"350px", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
          <span className='Live' style={{ fontWeight:"600",color:"red",width:"80%",textAlign:"center"}}>In-progress</span>
          <div className='subheader' style={{fontSize:"17px",textAlign:"center",marginBottom:"10px"}}>COINCRUX 🪙  </div>
          <div className='subheader' style={{fontSize:"1.2rem",color:"grey",width:"80%",textAlign:"center",marginTop:"-20px",fontWeight:"500",overflow:"scroll"}}>Coincrux is a crypto app that allows users to search for information about various cryptocurrencies in real-time .</div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"150px"}}>
                  <div className='techCard'>React</div>
                  <div className='techCard'>Css</div>

              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"220px",marginBottom:"50px"}}>
                  <div className='subheader-2' >Code <GithubOutlined style={{fontSize:"25px",marginRight:"10px"}}/></div>
                  <div className='subheader-2'>Live Demo <LinkOutlined style={{fontSize:"25px"}} /></div>

              </div>

      </div>:null
      }
    </div>
  )
}

export default ProjectCard