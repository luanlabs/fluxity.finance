import Header from '@/containers/Header';
import Welcome from '@/containers/Welcome';
import JoinUs from '@/containers/JoinUs';
import Footer from '@/containers/Footer';
import ContactUs from '@/containers/ContactUs';
// import WhyFluxity from '@/containers/WhyFluxity';

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      {/* <WhyFluxity /> */}
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  );
}
