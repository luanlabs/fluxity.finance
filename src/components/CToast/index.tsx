import Image from 'next/image';
import t from 'react-hot-toast';

import exitLight from '/public/images/exitLight.svg';
import successLogo from '/public/images/success.svg';
import errorLogo from '/public/images/error.svg';

const toastStyle = {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor: '#050142',
    width: 'auto',
    minWidth: '550px',
  },
  duration: 2000,
};

const toast = (variant: 'error' | 'success', message: string) => {
  t(
    <div className="flex items-center justify-between w-full">
      <div className="items-center">
        <Image
          src={variant === 'error' ? errorLogo : successLogo}
          width={35}
          height={35}
          alt="tostIcon"
        />
      </div>
      <span className="w-full text-lg ml-3">{message}</span>
      <button onClick={() => t.dismiss()}>
        <Image src={exitLight} width={0} height={0} alt="error" />
      </button>
    </div>,
    toastStyle,
  );
};

export default toast;
