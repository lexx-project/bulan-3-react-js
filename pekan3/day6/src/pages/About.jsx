import AboutHeader from "../components/about/AboutHeader";
import VisiMisi from "../components/about/VisiMisi";
import Team from "../components/about/Team";
import Navbar from "../components/Navbar";
import AboutStory from "../components/about/AboutStory";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <Team />
      <VisiMisi />
      <AboutStory />
      <Footer />
    </>
  );
}
