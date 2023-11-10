'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import CInput from '../components/Cinput';
import CButton from '../components/Cbutton';
import { ExternalPages } from '../constants/externalPages';

import fetch from '../utils/request';

import JoinDancing from 'public/images/joinDancing.png';

const JoinUs = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(ExternalPages.FLUXITY_API + '/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className="relative z-30 flex xxl:justify-center justify-between items-center xxl:gap-10 gap-1 w-full">
      <div className="pl-[160px] py-[180px] z-20">
        <div className="text-MidnightBlue mb-10">
          <h3 className="font-medium xxl:text-[56px] text-[48px] tracking-[0] leading-[73.4px] mb-6">
            Join Fluxity Today
          </h3>
          <p className="xxl:text-2xl text-xl xxl:w-[540px] w-1/2">
            Ready to step into the future of DeFi? Join Fluxity today and experience the power of
            real-time token streaming. Sign up now and transform the way you handle DeFi
            transactions!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="inline-flex gap-2 w-full">
          <CInput placeholder="Enter your email" onChange={onChange} />
          <CButton
            type="submit"
            color="RoyalPurple"
            content="Join Wait list"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="w-[690px] h-[690px] z-10">
        <Image
          src={JoinDancing}
          alt="icon"
          className="select-none"
          fill
          objectFit="contain"
          objectPosition="right"
        />
      </div>
    </div>
  );
};

export default JoinUs;
