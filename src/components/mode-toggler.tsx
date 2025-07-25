import { Moon, Sun, PcCaseIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useTheme } from "@/components/theme-provider"
import TooltipControl from "./custome/TooltipControl"

export function ModeToggle() {

    const { setTheme } = useTheme()

    return (
        <TooltipControl title="Change Theme">
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'} size={'icon'} className="bg-background text-foreground border-0">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Change Theme</span>

                    </Button>


                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setTheme("light")}> <Sun /> Light </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}> <Moon /> Dark </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}> <PcCaseIcon /> System </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TooltipControl>

    )

}