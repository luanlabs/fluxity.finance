'use client';

import { useEffect, useState } from 'react';
import calculateTimeRemaining from '../../utils/countDown';
import CCountDownItem from './CCountDownItem';

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
      <CCountDownItem value={timeRemaining.days} label="DAYS" />
      <CCountDownItem value={timeRemaining.hours} label="HOURS" />
      <CCountDownItem value={timeRemaining.minutes} label="MINUTES" />
      <CCountDownItem value={timeRemaining.seconds} label="SECONDS" />
    </div>
  );
};

export default CCountDown;
