import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const trainername = useSelector((store)=>store.trainerName)
    if(trainername){
        return <Outlet/>

    }else{
        return <Navigate to="/" />
    }
  return (
    <div>PrivateRoutes</div>
  )
}

export default PrivateRoutes