import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { URL } from "./env"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getAssest(assest: string) {
    return `${URL}${assest}`
}
