'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/fluxityTypography.svg';
import CButton from '@/components/CButton';
import { ExternalPages } from '@/constants/externalPages';

const Header = () => {
  const handleRedirect = () => {
    window.location.href = ExternalPages.DASHBOARD;
  };

  return (
    <header className="flex xxl:justify-center xxl:gap-[650px] justify-between items-center bg-BabyBlue px-[150px] md:px-10 sm:px-2 py-[27px]">
      <div>
        <Link href={ExternalPages.WEBSITE}>
          <Image
            src={logo}
            alt="Fluxity"
            className="select-none max-w-[190px] max-h-10 sm:ml-8 md:ml-2 mobile:w-[120px]"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-6 sm:gap-4 sm:hidden md:hidden">
        <Link
          title="Whitepaper"
          href={ExternalPages.WHITE_PAPER}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] sm:text-base hover:text-MidnightBlue"
        >
          Whitepaper
        </Link>
        <Link
          title="Documentation"
          href={ExternalPages.DOCUMENTATION}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] sm:text-base hover:text-MidnightBlue"
        >
          Documentation
        </Link>
        <Link
          title="Dashboard"
          href={ExternalPages.DASHBOARD}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden"
        />
        <CButton
          color="RoyalPurple"
          content="Launch App"
          className="sm:h-10 sm:px-3 sm:text-xs !h-12"
          onClick={handleRedirect}
        />
      </div>
    </header>
  );
};

export default Header;
