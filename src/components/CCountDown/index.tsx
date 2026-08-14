'use client';

import { useEffect, useState } from 'react';
import calculateTimeRemaining, { type TimeRemaining } from '@/utils/countDown';

import CountDownItem from './CountDownItem';

type CCountDownProps = {
  targetDate: string | number | Date;
};

const ZERO: TimeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const CCountDown = ({ targetDate }: CCountDownProps) => {
  // Start from a stable value so the server-prerendered HTML and the first
  // client render match (no hydration mismatch), then tick once per second on
  // the client. The interval is always cleared on unmount (the original code
  // leaked it).
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(ZERO);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center gap-2">
      <CountDownItem value={timeRemaining.days} label="DAYS" />
      <CountDownItem value={timeRemaining.hours} label="HOURS" />
      <CountDownItem value={timeRemaining.minutes} label="MINUTES" />
      <CountDownItem value={timeRemaining.seconds} label="SECONDS" />
    </div>
  );
};

export default CCountDown;
