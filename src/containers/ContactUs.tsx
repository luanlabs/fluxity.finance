'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import github from 'public/images/github.svg';
import discord from 'public/images/discord.svg';
import logo from 'public/images/fluxityTypography.svg';
import { ExternalPages } from '@/constants/externalPages';

const ContactUs = () => {
  return (
    <div className="relative bg-WhiteSmoke md:flex-col pl-[280px] lg:pl-[100px] sm:pl-8 pr-[333px] sm:pr-0 pt-[38px] pb-[66px] gap-[380px] md:gap-8 lg:gap-[200px] sm:gap-5 flex sm:flex-col xxl:justify-center justify-between text-MidnightBlue font-medium">
      <div>
        <Image src={logo} alt="Fluxity" className="select-none max-w-[190px] max-h-10" />
      </div>

      <div className="flex md:mt-8 gap-12 sm:flex-col sm:mt-8">
        <div className="w-full whitespace-nowrap">
          <span className="text-2xl whitespace-nowrap ">Contact Us</span>
          <div className="flex gap-4 mt-8">
            <p>
              Questions? Reach out to us at
              <Link href="support@fluxity.finance" target="blank" className="underline">
                <br />
                support@fluxity.finance
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full">
          <span className="text-2xl whitespace-nowrap">Social Media</span>
          <div className="flex flex-col gap-4 mt-8 w-[257px]">
            <p>Follow us on social media to stay updated on our latest updates and developments.</p>
            <div className="flex gap-4 mt-8">
              <Link href={ExternalPages.GITHUB} target="blank">
                <Image src={github} alt="Fluxity" className="select-none" />
              </Link>

              <Link href={ExternalPages.DISCORD} target="blank">
                <Image src={discord} alt="Fluxity" className="select-none" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
