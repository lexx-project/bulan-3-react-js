export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Tim Hebat di Balik Layar
        </h2>
        <p className="mt-4 text-gray-600">
          Kami adalah sekelompok individu yang bersemangat dan berdedikasi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <img
              src="https://upload.lexxganz.my.id/uploads/my.png"
              alt="Lexx"
              className="w-32 h-32 rounded-full mx-auto shadow-md object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Lexx</h3>
            <p className="text-indigo-600">Founder & CEO</p>
          </div>

          <div className="text-center">
            <img
              src="https://upload.lexxganz.my.id/uploads/Avatar.png"
              alt="Ganz"
              className="w-32 h-32 rounded-full mx-auto shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Evan</h3>
            <p className="text-indigo-600">Head of Marketing</p>
          </div>

          <div className="text-center">
            <img
              src="https://upload.lexxganz.my.id/uploads/Avatar.png"
              alt="Bot"
              className="w-32 h-32 rounded-full mx-auto shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Andra</h3>
            <p className="text-indigo-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
