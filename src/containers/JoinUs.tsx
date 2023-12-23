'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import toast from '../components/CToast';
import CInput from '../components/CInput';
import CButton from '../components/CButton';
import { ExternalPages } from '../constants/externalPages';
import { validateEmail } from '../utils/validateEmail';

import fetch from '../utils/request';

import joinDancing from 'public/images/joinDancing.png';

const JoinUs = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = event.target.input.value;

    if (!validateEmail(value)) {
      toast('error', 'Enter a valid email address');
      return;
    }

    fetch(ExternalPages.FLUXITY_API + '/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast('success', 'Subscription successful!');
      })
      .catch((error) => {
        if (error?.data?.message) {
          toast('error', error.data.message + '.');
          return;
        }
        toast('error', 'Error, try again later.');
      });
  };

  return (
    <div className="relative z-30 sm:px-6 flex xxl:justify-center justify-between sm:justify-center items-center xxl:gap-10 sm:gap-0 gap-1 w-full">
      <div className="pl-[160px] sm:pl-0 py-[180px] sm:py-[80px] z-20 w-full">
        <div className="text-MidnightBlue mb-10  w-full">
          <h3 className="font-medium xxl:text-[56px] text-[48px] sm:text-[45px] tracking-[0] leading-[73.4px] mb-6">
            Join Fluxity Today
          </h3>
          <p className="xxl:text-2xl text-xl xxl:w-[540px] w-1/2 sm:w-full md:w-full">
            Ready to step into the future of DeFi? Join Fluxity today and experience the power of
            real-time token streaming. Sign up now and transform the way you handle DeFi
            transactions!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex sm:flex-col gap-2 w-full">
          <CInput placeholder="Enter your email" name="input" type="email" />
          <CButton
            type="submit"
            color="RoyalPurple"
            className="sm:text-sm sm:px-0"
            content="Join Wait list"
          />
        </form>
      </div>
      <div className="w-[690px] h-[690px] z-10 sm:hidden">
        <Image
          src={joinDancing}
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
