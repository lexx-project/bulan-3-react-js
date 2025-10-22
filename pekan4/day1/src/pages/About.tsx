import AboutLexxStore from "@/components/about/AboutLexxStore";
import Team from "@/components/about/Team";
import Footer from "@/components/Footer";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";

export default function About() {
  return (
    <>
      <Navbar01 />
      <AboutLexxStore />
      <Team />
      <Footer />
    </>
  );
}
