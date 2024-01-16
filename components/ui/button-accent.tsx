import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
    children: React.ReactNode
}

function AccentButton({ children, className }: Props) {
    return (
        <button className={cn("flex bg-gradient-to-r from-purple-400 to-pink-600 text-white px-16 py-6 rounded-full text-md font-semibold w-fit", className)}>{children}</button>
    )
}

export default AccentButton
