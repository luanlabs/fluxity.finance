'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import CButton from '@/components/Cbutton';

import JoinDancing from '../../public/images/joinDancing.svg';
import { ExternalPages } from '@/constants/externalPages';

const JoinUs = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center gap-10">
      <div className=" pl-[151px] py-[180px]">
        <div className="text-MidnightBlue mb-10">
          <h3 className="font-medium text-[56px] tracking-[0] leading-[73.4px] mb-6">
            Join Fluxity Today
          </h3>
          <p className="text-2xl xxl:w-[550px]">
            Ready to step into the future of DeFi? Join Fluxity today and
            experience the power of real-time token streaming. Sign up now and
            transform the way you handle DeFi transactions!
          </p>
        </div>
        <CButton
          color="RoyalPurple"
          content="Launch app"
          onClick={() => {
            router.push(ExternalPages.DASHBOARD);
          }}
        />
      </div>
      <div>
        <Image src={JoinDancing} alt="icon" className="w-[698px] h-[697px]" />
      </div>
    </div>
  );
};

export default JoinUs;
