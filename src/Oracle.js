import { Modal } from 'antd'
import React from 'react'

function Oracle({isModalOpen, setIsModalOpen}) {
    const handleOk=()=>{
        setIsModalOpen(false)
    }

  return (
    <div>
    <Modal footer={null}  open={isModalOpen} onCancel={()=>{handleOk()}} >
    <div>
        <div style={{width:"100%", textAlign:"center",marginBottom:"5px",fontWeight:"700",color:"red"}}>ORACLE INDIA - July-2022 to present</div>
        <ul style={{fontWeight:"600",marginTop:"20px"}}>
        <li>Working as a backend developer in a team where we build robust backend services using Microservice architecture.</li>
        </ul> 
        <div style={{width:"100%",marginLeft:"20px",marginTop:"20px",marginBottom:"5px",fontWeight:"700",color:"red"}}>Technologies</div>
        <ul>
          <li>Java</li>
          <li>Springboot</li>
          <li>SQL</li>
        </ul>

    </div>
      </Modal>
    </div>
  )
}

export default Oracle