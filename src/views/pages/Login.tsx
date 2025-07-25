import '../../App.css'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import CustomeInput from '@/components/custome/CustomeInput'
import { Button } from '@/components/ui/button'
import { NavLink, useNavigate } from 'react-router'
import appIcon from "@/assets/appIcon.svg"
import { appPaths } from '@/assets/paths'
import { Loader } from 'lucide-react'
import { useState } from 'react'

function Login() {

  //replace this state later
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSignIn() {
    console.log("Login");
    
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem("auth", "auth-d0")
      navigate(appPaths.dashboard.base)
    }, 2000)
  }


  return (
    <>
      <CardHeader>
        <div className='flex justify-center items-center'> <img style={{ width: 50 }} src={appIcon} /> </div>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Welcome back! Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col justify-center items-center gap-5'>
        <CustomeInput title='Email' type='email' />
        <CustomeInput title='Password' type='password' />
        <Button className='w-full' onClick={handleSignIn}>
          {loading && <Loader className='animate-spin'/>} {!loading && <span aria-label='click to login'>Sign In</span>}
        </Button>
        <Button className='w-full' variant={'outline'} onClick={handleSignIn}>Sign in with Google</Button>
      </CardContent>
      <CardFooter className='flex justify-center items-center'>
        <div className='text-xs flex gap-1'>
          <p className='inline'>Don't have an account?</p>
          <NavLink className={'text-blue-500 font-bold'} to={appPaths.auth.signup} end>
            Sign Up
          </NavLink>
        </div>
      </CardFooter>
    </>
  )
}

export default Login
