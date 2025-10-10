import { useEffect, useState } from "react";

export default function UseEffectWithDependencyArray({
  userId,
}: {
  userId: number;
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userId]);

  if (loading) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          UseEffect With Dependency Array
        </h1>
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          UseEffect With Dependency Array
        </h1>
        {user ? (
          <div className="p-4 border border-gray-300 rounded-lg shadow-md inline-block text-left mt-4 md:w-96 w-full">
            <h3 className="text-xl font-semibold">User : {user.name}</h3>
            <p className="text-lg">Nama : {user.name}</p>
            <p className="text-lg">Email : {user.email}</p>
          </div>
        ) : (
          <h1 className="text-xl font-semibold">No user found.</h1>
        )}
      </div>
    </>
  );
}
