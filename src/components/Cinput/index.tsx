import React from 'react';
import Image from 'next/image';

interface CInputProps {
  icon?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  details?: string;
  error?: boolean;
  errorMsg?: string;
  clearInput?: boolean;
  clearInputClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  paste?: boolean;
  clipboardText?: string;
  handlePaste?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
  border?: boolean;
  value?: string | number | any;
  disabled?: boolean;
}

const CInput = ({
  icon,
  placeholder,
  className,
  label,
  details,
  error,
  errorMsg,
  clearInput,
  clearInputClick,
  onChange,
  paste,
  border,
  handlePaste,
  value,
  disabled,
  ...props
}: CInputProps) => {
  return (
    <div className={className}>
      <div className="relative w-full">
        {icon && (
          <div className="absolute bottom-4 left-3.5">
            <Image src={icon} width={22} height={22} alt="inputIcon" />
          </div>
        )}

        <input
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`${icon ? 'px-12' : 'px-4'}
           self-stretch rounded-xl placeholder-mutedBlue text-midnightBlue text-base w-full xxl:h-14 h-12 p-4 bg-neutral-100 justify-start items-center inline-flex outline-none border
           ${border ? 'focus:border-darkBlue' : 'border-transparent'}  
           ${error && 'border !border-error'}
           ${disabled && 'cursor-not-allowed !select-none text-mutedBlue'}
          `}
          value={value}
          disabled={disabled}
          {...props}
        />

        <div className="h-[20px] absolute mt-[6px] ml-1">
          {error && errorMsg && <span className="text-error text-sm">{errorMsg}</span>}
        </div>
      </div>
    </div>
  );
};

export default CInput;
