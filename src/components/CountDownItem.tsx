import React from 'react';

interface CountdownItemProps {
  value: number;
  label: string;
}

const CCountDownItem = ({ value, label }: CountdownItemProps) => (
  <div
    className="flex flex-col items-center xxl:w-[90px] xxl:h-[106px] w-[65px] h-[65px]
     border-MidnightBlue border-2 rounded-xl text-MidnightBlue"
  >
    <span className="xxl:text-[42px] text-[24px]">{value}</span>
    <span className="xxl:text-base text-[12px]">{label}</span>
  </div>
);

export default CCountDownItem;
