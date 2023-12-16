import Header from '@/containers/Header';
import Welcome from '@/containers/Welcome';
import JoinUs from '@/containers/JoinUs';
import Footer from '@/containers/Footer';
import ContactUs from '@/containers/ContactUs';
import Features from '@/containers/Features';
import WhyFluxity from '@/containers/WhyFluxity';

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Features />
      <WhyFluxity />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  );
}
