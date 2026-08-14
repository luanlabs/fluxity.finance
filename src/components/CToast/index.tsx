import Image from 'next/image';
import t from 'react-hot-toast';

import exitLight from 'public/images/exitLight.svg';
import successLogo from 'public/images/success.svg';
import errorLogo from 'public/images/error.svg';

const toastStyle = {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor: '#050142',
    width: 'auto',
    minWidth: '200px',
    maxWidth: '550px',
  },
  duration: 2000,
};

const toast = (variant: 'error' | 'success', message: string) => {
  t(
    (instance) => (
      <div className="flex items-center justify-between w-full">
        <div className="items-center">
          <Image
            src={variant === 'error' ? errorLogo : successLogo}
            width={35}
            height={35}
            alt={variant === 'error' ? 'Error' : 'Success'}
          />
        </div>
        <span className="w-full text-lg ml-3">{message}</span>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => t.dismiss(instance.id)}
        >
          <Image src={exitLight} width={14} height={14} alt="" />
        </button>
      </div>
    ),
    toastStyle,
  );
};

export default toast;
