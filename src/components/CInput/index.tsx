import React from 'react';
import Image from 'next/image';

interface CInputProps {
  name: string;
  icon?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMsg?: string;
  border?: boolean;
  value?: string | number;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
}

const CInput = ({
  name,
  icon,
  placeholder,
  className,
  error,
  errorMsg,
  onChange,
  border,
  value,
  disabled,
  type = 'text',
}: CInputProps) => {
  return (
    <div className={className}>
      <div className="relative w-full">
        {icon && (
          <div className="absolute bottom-4 left-3.5">
            <Image src={icon} width={22} height={22} alt="" />
          </div>
        )}

        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          aria-invalid={error || undefined}
          className={`${icon ? 'px-12' : 'px-4'}
           self-stretch rounded-xl placeholder-mutedBlue text-midnightBlue text-[18px] sm:text-base sm:w-full w-[360px] sm:h-12 h-[76px] p-4 bg-neutral-100 justify-start items-center inline-flex outline-none border
           ${border ? 'focus:border-darkBlue' : 'border-transparent'}
           ${error ? 'border !border-error' : ''}
           ${disabled ? 'cursor-not-allowed !select-none text-mutedBlue' : ''}
          `}
        />

        <div className="h-[20px] absolute mt-[6px] ml-1">
          {error && errorMsg && <span className="text-error text-sm">{errorMsg}</span>}
        </div>
      </div>
    </div>
  );
};

export default CInput;
