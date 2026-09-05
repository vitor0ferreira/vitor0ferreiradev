import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCoordinate(lat: number, lng: number): string {
  const latStr = `${Math.abs(lat).toFixed(4)}° ${lat < 0 ? 'S' : 'N'}`;
  const lngStr = `${Math.abs(lng).toFixed(4)}° ${lng < 0 ? 'W' : 'E'}`;
  return `${latStr}, ${lngStr}`;
}
