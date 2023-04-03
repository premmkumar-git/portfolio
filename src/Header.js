 import React from 'react'
import './styles.css';

 
 function Header({handleClickScroll , setValue}) {
   return (
     <div className='header f-r-jsb-a'>
        <div onClick={()=>{setValue(1)}} className='subheader cursor-pointer hoverbutton-1'>
          Prem.dev
        </div>
        <div id="hide" className='f-r-jsb-a subheader-1' style={{width : "300px"}}>
        <div onClick={()=>{setValue(1)}} className='cursor-pointer hoverbutton'>Home</div>
        <div onClick={()=>{setValue(2)}} className='cursor-pointer hoverbutton'>About</div>
        <div onClick={()=>{setValue(3)}} className='cursor-pointer hoverbutton'>Projects</div>
        <div onClick={()=>{setValue(4)}} className='cursor-pointer hoverbutton'>Contact</div>

        </div>
      
     </div>
   )
 }
 
 export default Header