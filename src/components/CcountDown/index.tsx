'use client';

import { useEffect, useState } from 'react';
import calculateTimeRemaining from '../../utils/countDown';

import CountDownItem from './CountDownItem';

type CCountDownProps = {
  targetDate: string | number | Date;
};

const CCountDown = ({ targetDate }: CCountDownProps) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
  useEffect(() => {
    setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);
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
