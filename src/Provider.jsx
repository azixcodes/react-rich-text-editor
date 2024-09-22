import React, { useEffect, useState } from 'react'

const Provider = ({children}) => {
    const [internet,setInternet] = useState(navigator.onLine);

    useEffect(()=>{
        const handleOffline = () =>{
            setInternet(false);
        }
        const handleOnline = () =>{
            setInternet(true);
        }
       window.addEventListener('offline',handleOffline)
       window.addEventListener('online',handleOnline)

       return()=>{
        window.removeEventListener('offline',handleOffline);
        window.removeEventListener('online',handleOnline);
       }
    },[])
 if(!internet){
    return <div>You are not connected, please try again.</div>
 }
  return (
    <div>
       
        {children}
    </div>
  )
}

export default Provider