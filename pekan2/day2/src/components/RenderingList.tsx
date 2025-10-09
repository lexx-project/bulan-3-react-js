export default function RenderingList() {
  const users = [
    { id: 1, name: "Budi", age: 30 },
    { id: 2, name: "Dono", age: 24 },
    { id: 3, name: "Jeki", age: 19 },
    { id: 4, name: "Doni", age: 28 },
  ];

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">Daftar Pengguna:</h3>
      <ul className="list-disc list-inside">
        {users.map((user) => (
          <li key={user.id} className="text-gray-700">
            {user.name} (Usia: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
