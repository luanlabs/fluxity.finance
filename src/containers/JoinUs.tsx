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
    <div className="z-30 flex justify-center h-[700px] items-center gap-10 sm:gap-0 w-full px-7">
      <div className="relative flex justify-between sm:justify-center items-center h-[700px] gap-[750px] lg:gap-[300px] md:gap-0 sm:gap-0 sm:w-full">
        <div className="sm:pl-0 sm:py-[80px] z-20">
          <div className="text-MidnightBlue mb-10">
            <h3 className="font-medium xxl:text-[56px] text-[48px] sm:text-[45px] tracking-[0] leading-[73.4px] mb-6">
              Join Fluxity Today
            </h3>
            <p className="xxl:text-2xl text-xl w-[550px] sm:w-full md:w-full">
              Ready to explore new financial horizons? Join our waitlist to be the first to know
              about our news and updates and experience the next generation of payment possibilities
              with Fluxity!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex sm:flex-col gap-2 w-full">
            <CInput placeholder="Enter your email" name="input" type="email" />
            <CButton
              type="submit"
              color="RoyalPurple"
              className="sm:text-sm sm:px-0 h-[76px]"
              content="Join Wait list"
            />
          </form>
        </div>
        <div className="z-10 sm:hidden bg-[#909000] h-[700px] md:h-[500px] lg:h-[300px] flex items-center ">
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
    </div>
  );
};

export default JoinUs;
