import { useEffect, useState } from 'react'

const fmt = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Ho_Chi_Minh',
})

/** Current time in Ho Chi Minh City (HH:mm), refreshed every 30s. */
export function useLocalTime() {
  const [time, setTime] = useState(() => fmt.format(new Date()))
  useEffect(() => {
    const id = window.setInterval(() => setTime(fmt.format(new Date())), 30_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}
