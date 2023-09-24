import ContactUs from '@/containers/ContactUs';
import Footer from '@/containers/Footer';
import JoinUs from '@/containers/JoinUs';
import WhyFluxity from '@/containers/WhyFluxity';

export default function Home() {
  return (
    <>
      <WhyFluxity />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  );
}
