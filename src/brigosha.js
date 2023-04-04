import { Modal } from 'antd'
import React from 'react'

function Brigosha({isModalOpen, setIsModalOpen}) {
    const handleOk=()=>{
        setIsModalOpen(false)
    }

  return (
    <div>
    <Modal footer={null}  open={isModalOpen} onCancel={()=>{handleOk()}} >
    <div>
        <div style={{width:"100%", textAlign:"center",marginBottom:"5px",fontWeight:"700",color:"#318CE7"}}>BRIGOSHA TECHNOLOGIES - July-2021 to July 2022</div>
        <ul style={{fontWeight:"600",marginTop:"20px"}}>
        <li>Worked as a front-end developer in an edtech product Aulas</li>
        <li>Built End-to-End user management for the entire product</li>
        <li>Built a support system for the same product that allows end users, and internal users to communicate their queries and concerns</li>
        <li>Build an End-to-End fee management solution for the same product. Features implemented on the same were Fee generation, cancellation, Refund Request, Settlement, Accounts.
        </li>
        </ul> 
        <div style={{width:"100%",marginLeft:"20px",marginTop:"20px",marginBottom:"5px",fontWeight:"700",color:"#318CE7"}}>Technologies</div>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        

    </div>
      </Modal>
    </div>
  )
}

export default Brigosha