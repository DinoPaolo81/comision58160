import { useState, createContext, useContext } from "react";

const Notification = ({ notificationData }) => {
    const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 50,
      backgroundColor: notificationData.type === 'success' ? 'green' : 'blue',
      color: 'white',
      padding: '10px 20px 10px 20px',
      borderRadius: 100
    }
  
    return (
      <article style={notificationStyle}>
        <h4>Notificación</h4>
        <p>{notificationData.text}</p>
      </article>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        text: '',
        type: 'success'
    })

    const setNotification = (type, text) => {
        setNotificationData({
            text, type
        })

        setTimeout(() => {
            setNotificationData({
                text: '',
                type: 'success'
            })
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification notificationData={notificationData}/>}
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)