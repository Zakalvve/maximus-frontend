import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ISOString } from "../types/api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDevelopment(){
  return process.env.NODE_ENV === "development"
}

export function toIsoString(date: Date): ISOString {
  return date.toISOString() as ISOString
}