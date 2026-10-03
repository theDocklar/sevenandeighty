import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function padNumber(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
