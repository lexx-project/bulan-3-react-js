import useAnimeQuote from "../hooks/useAnimeQuote";

export default function AnimeQuote() {
  const { data, loading, error, fetchNewQuote } = useAnimeQuote();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No quote available.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <img
          src={data.data[0].gambar}
          alt={data.data[0].karakter}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-purple-500"
        />
        <p className="text-purple-400 text-lg font-semibold mb-2">
          Anime: {data.data[0].anime}
        </p>
        <p className="text-gray-300 text-md mb-2">
          Episode : {data.data[0].episode}
        </p>
        <p className="text-gray-300 text-md mb-2">
          Character: {data.data[0].karakter}
        </p>
        <p className="text-white text-xl italic mb-6">
          "{data.data[0].quotes}"
        </p>
        <button
          onClick={fetchNewQuote}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}
