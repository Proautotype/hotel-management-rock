import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import React from 'react'

type IProps = {
    title: string,
    children: React.ReactNode
}
const TooltipControl = (props: IProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {props.children}
                </TooltipTrigger>
                <TooltipContent className=''>
                    <p className='text-gray-500 text-xs border rounded-sm p-1'>{props.title}</p>
                    <TooltipArrow className='fill-current'/>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default TooltipControl