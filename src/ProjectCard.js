import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import React from 'react'

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
      marginBottom:"70px"
      }}>
        {index%2==0? <div style={{ backgroundColor:"grey", width:"50%",height:"350px",borderRadius:"20px"}}></div> : null}

        {index%2==1?
        <div style={{width:"50%",height:"350px", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
            <div className='subheader' style={{fontSize:"17px",marginTop:"50px"}}>COINDOM 🪙</div>
            <div className='subheader' style={{fontSize:"17px",color:"grey",width:"80%",textAlign:"center",marginTop:"-20px"}}>Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time .</div>
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

      {index%2==1? <div style={{ backgroundColor:"grey", width:"50%",height:"350px",borderRadius:"20px"}}></div> : null}

      {index%2==0?
      <div style={{width:"50%",height:"350px", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
          <div className='subheader' style={{fontSize:"17px",marginTop:"50px"}}>COINDOM 🪙</div>
          <div className='subheader' style={{fontSize:"17px",color:"grey",width:"80%",textAlign:"center",marginTop:"-20px"}}>Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time .</div>
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
    </div>
  )
}

export default ProjectCard