import React from 'react';

export type CButtonColorType = 'MidnightBlue' | 'RoyalPurple';

interface CButtonProps {
  color?: CButtonColorType;
  content: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const CButton = ({
  color,
  content,
  onClick,
  type = 'button',
  className,
  disabled,
}: CButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${
        color === 'MidnightBlue'
          ? 'bg-MidnightBlue hover:bg-RoyalPurple sm:active:bg-RoyalPurple'
          : 'bg-RoyalPurple hover:bg-MidnightBlue sm:active:bg-MidnightBlue'
      } flex justify-center items-center h-auto sm:h-12 w-[168px] sm:w-full xxl:px-6 px-4 text-white xxl:text-xl text-base rounded-xl transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed ${
        className ?? ''
      }`}
    >
      {content}
    </button>
  );
};

export default CButton;
