'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import logo from 'public/images/fluxityTypography.svg';
import Link from 'next/link';
import CButton from '@/components/CButton';
import { ExternalPages } from '@/constants/externalPages';

const Header = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(ExternalPages.DASHBOARD);
  };

  return (
    <header className="flex xxl:justify-center xxl:gap-[650px] justify-between items-center bg-BabyBlue px-[150px] sm:px-2 py-[27px]">
      <div>
        <Image src={logo} alt="Fluxity" className="select-none max-w-[190px] max-h-10 sm:max-h-8" />
      </div>
      <div className="flex justify-center items-center gap-6 sm:gap-4">
        <Link
          href={ExternalPages.WHITE_PAPER}
          target="blank"
          className="text-[18px] sm:text-base hover:text-MidnightBlue"
        >
          Whitepaper
        </Link>
        <CButton
          color="RoyalPurple"
          content="Launch App"
          className="sm:h-10 sm:px-3 sm:text-xs"
          onClick={handleRedirect}
        />
      </div>
    </header>
  );
};

export default Header;
