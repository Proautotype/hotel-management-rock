import type { RouteObject } from "react-router";
import Login from "../views/pages/Login";
import Signup from "../views/pages/Signup";
import Navbar from "@/components/custome/Navbar";
import AuthTemplate from "@/views/layout/AuthTemplate";
import Otp from "@/views/pages/OTP";
import Dashboard from "@/views/layout/DashboardTemplate";
import ManageRoom from "@/views/pages/rooms/ManageRoom";
import RoomStatus from "@/views/pages/rooms/RoomStatus";
import { appPaths } from "@/assets/paths";
import DashboardTemplate from "@/views/layout/DashboardTemplate";
import DashboardMain from "@/views/pages/DashboardMain";


export const appRoutes: RouteObject[] = [
    {
        path: "/",
        Component: Navbar,
        children: [
            {
                path: appPaths.auth.base,
                Component: AuthTemplate,
                children: [
                    {
                        path: appPaths.auth.login,
                        Component: Login
                    },
                    {
                        path: appPaths.auth.signup,
                        Component: Signup
                    },
                    {
                        path: appPaths.auth.confirmOtp,
                        Component: Otp
                    }
                ]
            },
            {
                path: appPaths.dashboard.base,
                Component: DashboardTemplate,
                children: [
                    {
                        path: appPaths.dashboard.base+"/",
                        Component: DashboardMain
                    }
                    ,
                    {
                        path: appPaths.dashboard.room.manage,
                        Component: ManageRoom
                    },
                    {
                        path: appPaths.dashboard.room.roomStatus,
                        Component: RoomStatus
                    }
                ]
            }
        ]

    }
]
