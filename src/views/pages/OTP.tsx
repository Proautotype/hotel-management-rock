import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import appIcon from "@/assets/appIcon.svg"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { useNavigate } from 'react-router'
import { appPaths } from '@/assets/paths'

const Otp = () => {

    const navigate = useNavigate()

    const handleConfirm = () =>{
        navigate(appPaths.dashboard.base)
    }

    return (
        <>
            <CardHeader>
                <div className='flex justify-center items-center'> <img style={{ width: 50 }} src={appIcon} /> </div>
                <CardTitle>Confirm Code</CardTitle>
                <CardDescription>Check your email or phone to get OTP</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col justify-center items-center gap-5'>
                <InputOTP maxLength={8}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                        <InputOTPSlot index={6} />
                        <InputOTPSlot index={7} />
                    </InputOTPGroup>
                </InputOTP>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
                <Button className='w-50' onClick={handleConfirm}>Confirm</Button>
            </CardFooter>
        </>
    )
}

export default Otp