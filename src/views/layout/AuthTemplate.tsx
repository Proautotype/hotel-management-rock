import appIcon from '@/assets/appIcon.svg'
import { Card} from '@/components/ui/card'
import { Outlet } from 'react-router'

const AuthTemplate = () => {
    return (
        <div className='padding-1 bg-background text-foreground grid grid-cols-2 gap-2 h-full' style={{ height: "94vh" }}>
            <div className='flex flex-col justify-center items-center gap-2 font-semibold'>
                <img src={appIcon} />
                <p className='p-2 text-3xl pointer-events-none select-none'>KANBAN</p>
            </div>
            <div className='flex justify-start items-center mx-5' style={{ transition: 'ease-in'}}>
                <Card className='w-110'>
                    {/* put outlet yet */}
                    <Outlet />
                </Card>
            </div>
        </div>
    )
}

export default AuthTemplate