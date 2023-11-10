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
    <div className="relative bg-WhiteSmoke pl-[153px] pr-[333px] pt-[38px] pb-[66px] gap-[620px] flex xxl:justify-center justify-between text-MidnightBlue font-medium">
      <div>
        <Image src={logo} alt="Fluxity" className="select-none max-w-[190px] max-h-10" />
      </div>
      <div>
        <span className="text-2xl whitespace-nowrap">Get in touch</span>
        <div className="flex flex-row gap-4 mt-8 ">
          <Link href={ExternalPages.GITHUB} target="blank">
            <Image src={github} alt="Fluxity" className="select-none cursor-pointer" />
          </Link>

          <Link href={ExternalPages.DISCORD} target="blank">
            <Image src={discord} alt="Fluxity" className="select-none cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
