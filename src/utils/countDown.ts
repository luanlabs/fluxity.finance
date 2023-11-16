const calculateTimeRemaining = (targetDate: string | number | Date) => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const targetTime = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(distance / day),
    hours: Math.floor((distance % day) / hour),
    minutes: Math.floor((distance % hour) / minute),
    seconds: Math.floor((distance % minute) / second),
  };
};

export default calculateTimeRemaining;
