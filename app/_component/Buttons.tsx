import { Button } from "@/components/ui/button"
import React, { MouseEventHandler, ReactNode } from "react"

const OutlinedButton = ({ children, className, handleOnclick }: { children: React.ReactNode[], className?: string, handleOnclick?: MouseEventHandler }): React.ReactNode => {
    return (
        <Button
            type="button"
            variant="outline"
            onClick={handleOnclick}
            size={"lg"}
            className={`flex items-center gap-2 relative bg-transparent ease-linear hover:bg-whitehover:scale-105 active:scale-95 p-3 ${className}`}
        >
            {children}
        </Button>
    )
}

export { OutlinedButton }