import React, { useEffect } from 'react'
import { ModeToggle } from '../mode-toggler'
import { Outlet, useNavigate } from 'react-router'
import { Bell } from 'lucide-react'
import { Button } from '../ui/button'
import TooltipControl from './TooltipControl'
import CustomeInput from './CustomeInput'
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