import React from "react";

const ContactForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6 text-slate-700"
      autoComplete="off"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-slate-600"
        >
          Name
        </label>
        <input
          type="text"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-600"
        >
          Email address
        </label>
        <input
          type="email"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-semibold text-slate-600"
        >
          Subject
        </label>
        <input
          type="text"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          id="subject"
          name="subject"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-slate-600"
        >
          Message
        </label>
        <textarea
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          id="message"
          rows="5"
          name="message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
