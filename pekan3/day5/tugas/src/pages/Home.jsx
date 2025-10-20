import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
