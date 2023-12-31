'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import line1 from 'public/images/line1.png';
import line2 from 'public/images/line2.png';
import line3 from 'public/images/line3.png';
import line4 from 'public/images/line4.png';

import CCountDown from '../components/CCountDown';
import Link from 'next/link';
import { ExternalPages } from '@/constants/externalPages';
import CButton from '@/components/CButton';

const Welcome = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(ExternalPages.DASHBOARD);
  };
  // const targetDate = new Date('12/20/2023').getTime();

  return (
    <div className="flex flex-col justify-center items-center bg-BabyBlue text-MidnightBlue h-[90vh] w-full">
      <p className="text-[28px] sm:text-[25px] font-medium xxl:mb-4">Welcome to Fluxity</p>
      <p className="xxl:text-[72px] sm:px-6 sm:text-[48px] text-[56px] font-medium text-center max-w-[860px] xxl:leading-[73px] leading-[50px] xxl:mb-8 mb-4">
        Unlock Financial Horizons with Token Streaming
      </p>
      {/* <CCountDown targetDate={targetDate} /> */}

      <div className="flex justify-center items-center gap-6 sm:gap-4 xl:hidden xxl:hidden lg:hidden mt-4">
        <Link
          href={ExternalPages.WHITE_PAPER}
          target="blank"
          className="text-[18px] md:text-xl sm:text-base hover:text-MidnightBlue"
        >
          Whitepaper
        </Link>
        <CButton
          color="RoyalPurple"
          content="Launch App"
          className="sm:!h-12 sm:px-5 sm:text-xs md:text-xl !h-[60px]"
          onClick={handleRedirect}
        />
      </div>
      <picture className="xxl:space-y-12 space-y-8 xxl:mt-14 mt-6 overflow-hidden w-full">
        <Image src={line1} alt="moving lines" className="animate-movingLine" />
        <Image src={line2} alt="moving lines" className="animate-movingLineDelay1" />
        <Image src={line3} alt="moving lines" className="animate-movingLineDelay2" />
        <Image src={line4} alt="moving lines" className="animate-movingLineDelay3" />
      </picture>
    </div>
  );
};

export default Welcome;
