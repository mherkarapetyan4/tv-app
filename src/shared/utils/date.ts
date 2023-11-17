export function secondsToHoursMinutes(seconds: number = 0): { hours: number; minutes: number } {
  const hours: number = Math.floor(seconds / 3600)
  const minutes: number = Math.floor((seconds % 3600) / 60)

  return {
    hours,
    minutes,
  }
}
