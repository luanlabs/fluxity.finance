import React from 'react';

export type CButtonColorType = 'MidnightBlue' | 'RoyalPurple';

interface CButtonProps {
  color?: CButtonColorType;
  content: string;
  onClick: () => void;
}

const CButton = ({ color, content, onClick }: CButtonProps) => {
  return (
    <button
      className={`${
        color === 'MidnightBlue' ? 'bg-MidnightBlue' : 'bg-RoyalPurple'
      } px-[26px] py-3 text-white text-xl rounded-xl`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default CButton;
