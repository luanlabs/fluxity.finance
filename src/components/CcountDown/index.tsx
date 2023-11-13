'use client';

import { useEffect, useState } from 'react';
import calculateTimeRemaining from '../../utils/countDown';

interface CountdownItemProps {
  value: number;
  label: string;
}
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

  const CountdownItem = ({ value, label }: CountdownItemProps) => (
    <div
      className="flex flex-col items-center xxl:w-[90px] xxl:h-[106px] w-[65px] h-[65px]
     border-MidnightBlue border-2 rounded-xl text-MidnightBlue"
    >
      <span className="xxl:text-[42px] text-[24px]">{value}</span>
      <span className="xxl:text-base text-[12px]">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-2">
      <CountdownItem value={timeRemaining.days} label="DAYS" />
      <CountdownItem value={timeRemaining.hours} label="HOURS" />
      <CountdownItem value={timeRemaining.minutes} label="MINUTES" />
      <CountdownItem value={timeRemaining.seconds} label="SECONDS" />
    </div>
  );
};

export default CCountDown;
