import Image from 'next/image';
import React from 'react';

import logo from '../../public/images/fluxityTypography.svg';

const ContactUs = () => {
  return (
    <div className="bg-WhiteSmoke pl-[153px] pr-[333px] pt-[38px] pb-[66px] gap-[190px] flex justify-center text-MidnightBlue font-medium">
      <div>
        <Image src={logo} alt="Fluxity" className="select-none" />
      </div>
      <div className="flex flex-row gap-10">
        <div>
          <span className="text-2xl">Contact Us</span>
          <p className="text-[18px]">
            Questions? Reach out to us at
            <br />
            <a href="mailto:support@fluxity.com">support@fluxity.com</a>
          </p>
        </div>
        <div>
          <span className="text-2xl">Social Media</span>
          <p className="w-[292px]">
            Follow us on social media to stay updated on our latest features and
            updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
