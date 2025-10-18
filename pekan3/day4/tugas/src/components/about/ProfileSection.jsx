export default function ProfileSection() {
  return (
    <div className="mt-25 flex flex-col items-center">
      <img
        src="https://upload.lexxganz.my.id/uploads/my.png"
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover shadow-lg"
      />
      <h1 className="text-4xl font-extrabold mt-7">About Me</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
        Hello! I'm Lexx, a passionate web developer with a strong focus on
        creating engaging and user-friendly web experiences. I love bringing
        ideas to life through code and constantly learning new technologies. My
        journey in web development started with a curiosity for how websites
        work, and it quickly grew into a passion for building them. I specialize
        in front-end development, with a solid understanding of back-end
        principles. When I'm not coding, you can find me exploring new design
        trends, contributing to open-source projects, or enjoying a good book.
      </p>
    </div>
  );
}
