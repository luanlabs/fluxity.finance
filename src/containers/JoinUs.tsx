'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

import toast from '@/components/CToast';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';
import { validateEmail } from '@/utils/validateEmail';
import request, { RequestError } from '@/utils/request';
import { FLUXITY_API_URL } from '@/constants/env';

import joinDancing from 'public/images/joinDancing.png';

const JoinUs = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const trimmedEmail = email.trim();
    if (!validateEmail(trimmedEmail)) {
      toast('error', 'Enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      await request(`${FLUXITY_API_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
      });
      toast('success', 'Subscription successful!');
      setEmail('');
    } catch (error) {
      let message = 'Error, try again later.';
      if (error instanceof RequestError) {
        const body = error.data as { message?: string } | null;
        if (body?.message) {
          message = `${body.message}.`;
        }
      }
      toast('error', message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-30 flex justify-center h-[700px] items-center gap-10 sm:gap-0 w-full px-7">
      <div className="relative flex justify-between sm:justify-center items-center h-[700px] gap-[600px] lg:gap-[300px] md:gap-0 sm:gap-0 sm:w-full">
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
          <form onSubmit={handleSubmit} className="flex sm:flex-col gap-2 w-full" noValidate>
            <CInput
              placeholder="Enter your email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isSubmitting}
            />
            <CButton
              type="submit"
              color="RoyalPurple"
              className="sm:text-sm sm:px-0 h-[76px]"
              content={isSubmitting ? 'Joining…' : 'Join Wait list'}
              disabled={isSubmitting}
            />
          </form>
        </div>
        <div className="z-10 sm:hidden bg-[#909000] h-[700px] md:h-[500px] lg:h-[300px] flex items-center ">
          <Image
            src={joinDancing}
            alt="Person dancing"
            className="select-none object-contain object-right"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
