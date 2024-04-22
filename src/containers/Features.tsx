'use client';

import CBox from '@/components/CBox/CBox';

const uniqueDesignTitle = (
  <p>
    Unique <br /> Design
  </p>
);

const Features = () => {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center pb-[89px] pt-[72px] md:w-full">
      <div className="flex flex-col m-auto pr-[280px] lg:pr-[220px] md:pr-0 sm:pr-0 sm:text-2xl text-[44px] landing-[49px] text-left items-center">
        <p className="w-[900px] sm:w-full md:w-full lg:w-full md:px-7 sm:px-7 lg:px-12">
          Transforming <span className="text-RoyalPurple">payment possibilities</span> with{' '}
          <span className="text-RoyalPurple">token streaming.</span>
        </p>
        <p className="mt-10 w-[900px] sm:w-full sm:px-7 md:w-full lg:w-full md:px-7 lg:px-12 ">
          New <span className="text-RoyalPurple">business models</span>, higher{' '}
          <span className="text-RoyalPurple">funds control</span>, and wider{' '}
          <span className="text-RoyalPurple">monetization possibilities</span> with token streaming
          on Fluxity.
        </p>
      </div>

      <section className="mt-[96px] sm:mt-10 pl-[313px] xxl:pl-[313px] xl:pl-[100px] lg:pl-12 md:pl-0 md: sm:pl-0 m-auto flex flex-col items-center justify-center md:flex-col">
        <div className="flex sm:flex-col sm:items-center sm:mr-0 gap-4 mr-[762px] md:mr-0 md:px-8">
          <CBox
            bg="#FCFF56"
            title="Custom Payments"
            content="Send and receive tokens the way you need"
          />

          <CBox
            bg="#FCFF56"
            title="Safe and Secure"
            content="Security at its best to protect your assets and transactions"
          />
        </div>

        <div className="flex gap-4 mt-[18px] sm:items-center justify-start sm:flex-col sm:mr-0 md:px-8">
          <CBox
            bg="#75EEFF"
            title="Smooth User Experience"
            content="Intuitive and easy-to-navigate user interface"
          />

          <CBox
            bg="#75EEFF"
            title={uniqueDesignTitle}
            content="Offering functionalities at their best with careful designs"
          />
        </div>
      </section>
    </div>
  );
};

export default Features;
