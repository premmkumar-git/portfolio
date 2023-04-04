 import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import './styles.css';

 
 function Header({handleClickScroll , setValue}) {
  const download=()=>{
    window.location.href = "resume.pdf";
  }
   return (
     <div className='header f-r-jsb-a'>
      <iframe id="my_iframe" style={{display:"none"}}></iframe>

        <div onClick={()=>{setValue(1)}} className='subheader cursor-pointer hoverbutton-1'>
          Prem.dev
        </div>
        <div id ='hidenButton'>
        <a href="/resume.pdf" download >
        <Button type="primary" onClick={()=>{download()}} icon={<DownloadOutlined />} size={'large'}>
            Resume
          </Button>
          </a>

        </div>
        
        <div id="hide" className='f-r-jsb-a subheader-1' style={{width : "500px"}}>
        <div style={{display:"flex"}}>
        <a href="/resume.pdf" download >
        <Button type="primary" onClick={()=>{download()}} icon={<DownloadOutlined  />} size={'large'}>
            Resume
          </Button>
          </a>

        </div>
        <div onClick={()=>{setValue(1)}} className='cursor-pointer hoverbutton'>Home</div>
        <div onClick={()=>{setValue(2)}} className='cursor-pointer hoverbutton'>About</div>
        <div onClick={()=>{setValue(3)}} className='cursor-pointer hoverbutton'>Projects</div>
        <div onClick={()=>{setValue(4)}} className='cursor-pointer hoverbutton'>Contact</div>

        </div>
      
     </div>
   )
 }
 
 export default Header