import React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Notification() {
  return (
    NotificationManager.warning('Warning message', 'Close after 3000ms', 300)
    )
}

export default Notification