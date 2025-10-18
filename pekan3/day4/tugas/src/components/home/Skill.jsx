const Offer = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700">
            Proficient in HTML, CSS, JavaScript, React, and Node.js. Experienced
            in building responsive and dynamic web applications.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-700">
            Skilled in creating intuitive and user-friendly interfaces using
            tools like Figma and Adobe XD. Focus on user experience and
            accessibility.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Database Management</h3>
          <p className="text-gray-700">
            Experience with relational databases such as PostgreSQL and MySQL,
            as well as NoSQL databases like MongoDB.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Version Control</h3>
          <p className="text-gray-700">
            Adept at using Git and GitHub for collaborative development, code
            management, and version control.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Cloud Platforms</h3>
          <p className="text-gray-700">
            Familiar with deploying applications on cloud platforms like Vercel
            and Netlify.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
          <p className="text-gray-700 ">
            Strong analytical and problem-solving skills, with a knack for
            debugging and optimizing code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
