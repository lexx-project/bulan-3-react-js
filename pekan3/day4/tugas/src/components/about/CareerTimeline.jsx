import React from "react";

const events = [
  {
    year: "2026",
    title: "Graduated High School",
    description:
      "Completed high school with a focus on science and mathematics, developing a strong foundation in problem-solving and analytical thinking.",
  },
  {
    year: "2026",
    title: "Started University - Computer Science",
    description:
      "Began my Bachelor's degree in Computer Science, diving into data structures, algorithms, and object-oriented programming.",
  },
  {
    year: "2027",
    title: "First Internship - Back-End Development",
    description:
      "Gained practical experience in back-end development, working with Node.js, Express.js, and databases to build and maintain server-side applications.",
  },
  {
    year: "2027",
    title: "Focused on Back-End Frameworks",
    description:
      "Dedicated time to mastering modern Back-end frameworks like Node.js and Express.js, building several personal projects and contributing to open source.",
  },
  {
    year: "",
    title: "Dream: Launched My Own Fullstack Application",
    description:
      "Successfully designed, developed, and deployed a fullstack web application, showcasing my end-to-end development capabilities and problem-solving skills.",
  },
];

export default function CareerTimeline() {
  return (
    <section className="mt-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Career Timeline</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-blue-500 h-full border"
          style={{ left: "50%" }}
        ></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0
                ? "flex-row-reverse left-timeline"
                : "right-timeline"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-blue-500">{event.year}</p>
              <h4 className="mb-3 font-bold text-lg md:text-2xl">
                {event.title}
              </h4>
              <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
