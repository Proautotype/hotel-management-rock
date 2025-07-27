import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { appPaths } from '@/assets/paths'

const Navbar = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("auth") == null)
        {
            navigate(appPaths.auth.login)
        }
        else
            navigate(appPaths.dashboard.base)
    }, [])

    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default Navbar