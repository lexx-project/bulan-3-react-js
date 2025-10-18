export default function Hero() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
        alt=""
        className="w-full h-100 object-cover pt-16"
      />
      <div className="absolute top-45 left-100   text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl">
          Discover amazing things and explore new horizons.
        </p>
      </div>
    </div>
  );
}
