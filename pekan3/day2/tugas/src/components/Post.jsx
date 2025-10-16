import useFetch from "../hooks/UseFetch";

export default function Post() {
  const { data, loading, error } = useFetch();

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="border border-gray-400 rounded-md p-10 shadow-sm">
      <h2 className="text-xl font-bold mb-3">Post Details</h2>
      {data && (
        <div>
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
