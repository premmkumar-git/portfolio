import React from 'react'
import { GithubFilled, LinkedinFilled } from '@ant-design/icons'


function Footer() {
  return (
    <div style={{backgroundColor: "#2d2e32", height:"100px", display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <div style={{color:"white",fontWeight:"100px",paddingLeft:"5%"}}>Copyright © 2023. All rights are reserved</div>
        <div  style={{marginTop:"10px", paddingRight:"5%"}}>
                    <a style={{color: "white",marginRight:"10px"}} href="https://www.linkedin.com/in/prem-kumar-a1162917a">
                        <LinkedinFilled className='iconstyle' />
                    </a>
                    <a style={{color: "white"}} href="https://github.com/premmkumar-git">
                    <GithubFilled className='iconstyle' style={{marginLeft: "10px"}} />
                    </a>
        </div>
         
    </div>
  )
}

export default Footer