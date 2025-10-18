export default function JourneySection() {
  return (
    <div className="mt-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
      <div className="relative border-l-4 border-blue-500 ml-4 md:ml-12">
        <div className="mb-8 flex items-center w-full">
          <div className="z-10 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center -ml-4">
            <span className="text-white font-bold">1</span>
          </div>
          <div className="flex-1 ml-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Introduction to Programming (2025)
            </h3>
            <p className="text-gray-700 mt-2">
              My first encounter with programming was through basic programming
              concepts and logic. I was fascinated by how simple lines of code
              could solve complex problems. This sparked my curiosity and set me
              on the path to becoming a developer.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center w-full">
          <div className="z-10 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center -ml-4">
            <span className="text-white font-bold">2</span>
          </div>
          <div className="flex-1 ml-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Mastering Front-End Development
            </h3>
            <p className="text-gray-700 mt-2">
              I immersed myself in JavaScript, learning its fundamentals and
              eventually moving on to modern frameworks like React. Building
              interactive user interfaces was a game-changer, and I started
              contributing to open-source projects to hone my skills.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center w-full">
          <div className="z-10 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center -ml-4">
            <span className="text-white font-bold">2</span>
          </div>
          <div className="flex-1 ml-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Aspiring Fullstack Developer
            </h3>
            <p className="text-gray-700 mt-2">
              My journey continues as I delve into back-end technologies, aiming
              to become a well-rounded fullstack developer. I'm currently
              exploring Node.js, Express, and databases to build robust and
              scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
