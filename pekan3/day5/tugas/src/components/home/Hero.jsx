export default function Hero() {
  return (
    <section className="mt-4">
      <div className="relative overflow-hidden rounded-3xl shadow-lg">
        <img
          src="https://upload.lexxganz.my.id/uploads/Gemini_Generated_Image_4a15mj4a15mj4a151%20(1).png"
          alt="Shopping cart illustration"
          className="h-[390px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-indigo-950/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-14">
          <div className="max-w-md text-left text-white">
            <h1 className="text-3xl font-bold md:text-4xl">Lexx Store</h1>
            <p className="mt-3 text-base md:text-lg leading-relaxed">
              Your one-stop shop for all your needs. We offer a wide variety of
              products, from electronics to clothing, at competitive prices.
              Explore our collection and find the perfect item for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
