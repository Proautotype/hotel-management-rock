import appIcon  from '@/assets/appIcon.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const AppLogoWithText = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-2'>
            <Avatar>
                <AvatarImage src={appIcon} width={30} />
                <AvatarFallback>KB</AvatarFallback>
            </Avatar>
            <p>Kanban</p>
        </div>
    )
}

export default AppLogoWithText