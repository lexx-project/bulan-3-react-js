import ContactFormSection from "../components/contact/ContactFormSection";
import ContactInfoSection from "../components/contact/ContactInfoSection";

export default function Contact() {
  return (
    <div className="mt-10">
      <ContactInfoSection />
      <ContactFormSection />
    </div>
  );
}
