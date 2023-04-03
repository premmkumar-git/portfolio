import { MailTwoTone } from '@ant-design/icons'
import React from 'react'

function ContactCard() {
  return (
    <div style={{
        height:"230px",
        paddingLeft:"15%",
        paddingTop:"50px",
        }}>
        <div style={{marginTop:"30px", fontWeight:"550",color:"#147efb"}}>CONTACT</div>
        <div style={{marginTop:"10px", fontWeight:"650",color:"black", fontSize:"20px"}}>Don't be shy! Hit me up!👇</div>
        <div style={{marginTop:"20px", display:"flex", alignItems:"center"}}>
            <div style={{
                display:'flex', 
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                width:"50px",
                height:"50px",
                borderRadius:"50%",
                boxShadow:"0 1px 10px grey"
                }}>
                <MailTwoTone style={{fontSize:"20px"}} />
            </div>
            <div style={{marginLeft:"20px"}}>
                <div style={{color:"#2d2e32"}}>Mail</div>
                <div style={{color:"##767676", overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"}}>banothpremkumar001@gmail.com</div>
            </div>

        </div>
    </div>
  )
}

export default ContactCard