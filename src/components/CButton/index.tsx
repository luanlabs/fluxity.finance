import React from 'react';

export type CButtonColorType = 'MidnightBlue' | 'RoyalPurple';

interface CButtonProps {
  color?: CButtonColorType;
  content: string;
  onClick?: (event: any) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

const CButton = ({ color, content, onClick, type, className }: CButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        color === 'MidnightBlue'
          ? 'bg-MidnightBlue hover:bg-RoyalPurple'
          : 'bg-RoyalPurple hover:bg-MidnightBlue'
      } flex justify-center items-center xxl:h-[54px] h-12 xxl:px-6 px-4 text-white xxl:text-xl text-base rounded-xl transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default CButton;
