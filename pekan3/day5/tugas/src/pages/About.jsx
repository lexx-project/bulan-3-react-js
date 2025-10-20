import Navbar from "../components/Navbar";
import PageHeader from "../components/about/PageHeader";
import OurStory from "../components/about/OurStory";
import MeetTheTeam from "../components/about/MeetTheTeam";

export default function About() {
  return (
    <>
      <Navbar />
      <PageHeader />
      <OurStory />
      <MeetTheTeam />
    </>
  );
}