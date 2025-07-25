import CustomeInput from '@/components/custome/CustomeInput'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { NavLink, useNavigate } from 'react-router'
import appIcon from "@/assets/appIcon.svg"
import { appPaths } from '@/assets/paths'

const Signup = () => {

    const navigate = useNavigate()

    const handLogin = () => {
        navigate(appPaths.auth.confirmOtp)
    }


    return (
        <>
            <CardHeader>
                <div className='flex justify-center items-center'> <img style={{ width: 50 }} src={appIcon} /> </div>
                <CardTitle>Create account</CardTitle>
                <CardDescription>Join Us, Provide the your details</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col justify-center items-center gap-5'>
                <CustomeInput title='Name' type='text' />
                <CustomeInput title='Email' type='email' />
                <CustomeInput title='Password' type='password' />
                <Button className='w-full' onClick={handLogin}>Sign in</Button>
                <Button className='w-full' variant={'outline'}>Sign up with Google</Button>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
                <div className='text-xs flex gap-1'>
                    <p className='inline'>Already have an account?</p>
                    <NavLink className={'text-blue-500 font-bold'} to={appPaths.auth.login} end>
                        Log in
                    </NavLink>
                </div>
            </CardFooter>
        </>
    )
}

export default Signup