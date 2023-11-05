import React from 'react';

export type CButtonColorType = 'MidnightBlue' | 'RoyalPurple';

interface CButtonProps {
  color?: CButtonColorType;
  content: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const CButton = ({ color, content, onClick, type }: CButtonProps) => {
  return (
    <button
      type={type}
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
