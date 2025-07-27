import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface IProp{
    title: string,
    type: React.HTMLInputTypeAttribute,
    placeholder?: string,
    hideTitle?: boolean,
    defaultValue?: string,
    disable?: boolean
}

const CustomeInput = (props: IProp) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
     {!props.hideTitle && <Label htmlFor={props.title}>{props.title}</Label>}
      <Input id={props.title} type={props.type} placeholder={props.placeholder} 
        defaultValue={props.defaultValue} disabled={props.disable}
      />
    </div>
  )
}

export default CustomeInput
