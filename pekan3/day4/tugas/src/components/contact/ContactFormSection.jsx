import ContactForm from "./ContactForm";
const ContactFormSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-10">
          <h2 className="text-center text-3xl font-semibold text-slate-900">
            Send Us a Message
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            We will get back to you within one business day.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
