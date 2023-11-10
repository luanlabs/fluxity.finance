import React from 'react';
import Image from 'next/image';

import line1 from 'public/images/line1.png';
import line2 from 'public/images/line2.png';
import line3 from 'public/images/line3.png';
import line4 from 'public/images/line4.png';
import CcountDown from '@/components/CcountDown';

const Welcome = () => {
  const targetDate = new Date('12/20/2023').getTime();

  return (
    <div className="flex flex-col justify-center items-center bg-BabyBlue text-MidnightBlue pt-12 pb-12 w-full">
      <p className="text-[28px] font-medium mb-4">Welcome to Fluxity</p>
      <p className="xxl:text-[72px] text-[56px] font-medium text-center max-w-[860px] leading-[73px] mb-8">
        Unlock Financial Horizons with Token Streaming
      </p>
      <CcountDown targetDate={targetDate} />
      <div className="w-full xxl:space-y-14  space-y-8 mt-14">
        <Image src={line1} alt="moving lines" className="animate-movingLine " />
        <Image src={line2} alt="moving lines" className="animate-movingLineDelay1" />
        <Image src={line3} alt="moving lines" className="animate-movingLineDelay2" />
        <Image src={line4} alt="moving lines" className="animate-movingLineDelay3" />
      </div>
    </div>
  );
};

export default Welcome;
