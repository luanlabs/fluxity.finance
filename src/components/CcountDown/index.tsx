'use client';

import React, { useState, useEffect } from 'react';
import calculateTimeRemaining from '../../utils/countDown';

interface CountdownItemProps {
  value: number;
  label: string;
}
interface CcountDownProps {
  targetDate: string | number | Date;
}

const CcountDown: React.FC<CcountDownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const newTimeRemaining = calculateTimeRemaining(targetDate);
    setTimeRemaining(newTimeRemaining);
  }, [targetDate]);

  const CountdownItem = ({ value, label }: CountdownItemProps) => (
    <div className="flex flex-col items-center w-[90px] xxl:h-[106px] h-[90px] border-black border rounded-xl text-MidnightBlue">
      <span className="xxl:text-[42px] text-[36px]">{value}</span>
      <span className="xxl:text-base text-[14px]">{label}</span>
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

export default CcountDown;
