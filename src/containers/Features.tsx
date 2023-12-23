'use client';

import CBox from '@/components/CBox/CBox';

const Features = () => {
  const supportTitle = (
    <p>
      24/7 <br /> Support
    </p>
  );

  return (
    <div className="w-full m-auto flex flex-col justify-center items-center pb-[89px] pt-[72px] md:w-full">
      <div className="flex flex-col m-auto pr-[280px] md:pr-0 sm:pr-0 sm:text-2xl text-[44px] landing-[49px]  text-left items-center">
        <p className="text-left w-[900px] sm:w-full md:w-full md:px-7 sm:px-7">
          We're reinventing the DeFi ecosystem by providing an innovative real-time{` `}
          <span className="text-RoyalPurple">token streaming service.</span>
        </p>
        <p className="mt-10 xxl:w-[900px] sm:w-full sm:px-7 md:w-full md:px-7">
          Our platform bridges the gap between token senders and receivers, making transactions
          seamless, instant, and efficient. With Fluxity, you'll experience:
        </p>
      </div>

      <section className="mt-[96px] sm:mt-10 pl-[313px] md:pl-0 md: sm:pl-0 m-auto flex flex-col items-center justify-center md:flex-col">
        <div className="flex sm:flex-col sm:items-center sm:mr-0 gap-4 mr-[750px] md:mr-0 md:px-8">
          <CBox
            bg="#FCFF56"
            title="Instant Streaming"
            content="Fluxity streams tokens every second, eliminating long wait times."
          />

          <CBox
            bg="#FCFF56"
            title="Safe and Secure"
            content="We use state-of-the-art technology to ensure the protection of your transactions."
          />
        </div>

        <div className="flex gap-4 mt-[18px] sm:items-center justify-start sm:flex-col sm:mr-0 md:px-8">
          <CBox
            bg="#75EEFF"
            title="User-Friendly Interface"
            content="Our platform is intuitive and easy to navigate for all users."
          />

          <CBox
            bg="#75EEFF"
            title={supportTitle}
            content="We have a dedicated team of customer support specialists always ready to assist you."
          />
        </div>
      </section>
    </div>
  );
};

export default Features;
