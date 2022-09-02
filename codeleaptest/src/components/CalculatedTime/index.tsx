type CalculatedTimeProps = {
  time: Date
}

export const CalculatedTime = ({ time }: CalculatedTimeProps) => {
  const itemDate = new Date(time)
  const todayDate = new Date()

  const diffInSeconds = todayDate.getTime() - itemDate.getTime()
  const seconds = Math.trunc(Math.abs(diffInSeconds) / 1000)

  if (seconds < 15) {
    return <span>Just now</span>

    //seconds
  } else if (seconds < 60) {
    return <span>{seconds} Seconds Ago</span>

    //minutes
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    return <span>{minutes} Minutes Ago</span>

    //hours
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600)
    return <span>{hours} Hours Ago</span>

    //days
  } else if (seconds < 2678400) {
    const days = Math.floor(seconds / 86400)

    if (days === 1) {
      return <span>{days} day Ago</span>
    }

    return <span>{days} Days Ago</span>

    //,months
  } else {
    const months = Math.floor(seconds / 2678400)

    if (months === 1) {
      return <span>{months} Month Ago</span>
    }

    return <span>{months} Months Ago</span>
  }
}
