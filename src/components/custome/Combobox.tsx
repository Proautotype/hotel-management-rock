import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { useState } from 'react'
import { Button } from '../ui/button'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Command, CommandEmpty } from '../ui/command'
import { CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk'
import { cn } from '@/lib/utils'

interface ComboboxDataFormat {
    value: string,
    label: string
}

interface IProps {
    placeHolder: string,
    data: ComboboxDataFormat[]
}

const Combobox = (props: IProps) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover>
            <PopoverTrigger asChild className='w-full'>
                <Button variant={'outline'}
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between w-96"
                >
                    {value
                        ? props.data.find((framework) => framework.value === value)?.label
                        : props.placeHolder}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-95'>
                <Command>
                    <CommandInput placeholder={props.placeHolder} />
                    <CommandList>
                        <CommandEmpty>Not Found</CommandEmpty>
                        <CommandGroup>
                            {props.data.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className='flex items-center p-1'
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default Combobox