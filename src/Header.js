 import React from 'react'
import './styles.css';

 
 function Header() {
   return (
     <div className='header f-r-jsb-a'>
        <div className='subheader cursor-pointer'>
          Prem.dev
        </div>
        <div className='f-r-jsb-a subheader-1' style={{width : "25%"}}>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>About</div>
        <div className='cursor-pointer'>Projects</div>
        <div className='cursor-pointer'>Contact</div>

        </div>
      
     </div>
   )
 }
 
 export default Header