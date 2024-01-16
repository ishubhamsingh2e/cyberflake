import { cn } from '@/lib/utils'
import React from 'react'

function IconButton({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <button className={cn('rounded-md p-1 border border-slate-50 hover:shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-slate-300', className)}>{children}</button>
    )
}

export default IconButton
