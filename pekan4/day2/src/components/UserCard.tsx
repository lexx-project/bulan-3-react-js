interface UserCardProps {
  name: string;
  age: number;
  hobby: string;
  isMarried: boolean;
}

export default function UserCard({
  name,
  age,
  hobby,
  isMarried,
}: UserCardProps) {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            User Profile
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {name}
          </h2>
          <p className="mt-2 text-gray-500">
            Age: <span className="font-medium text-gray-700">{age}</span>
          </p>
          <p className="mt-2 text-gray-500">
            Hobby: <span className="font-medium text-gray-700">{hobby}</span>
          </p>
          <p className="mt-2 text-gray-500">
            Married:{" "}
            <span className="font-medium text-gray-700">
              {isMarried ? "Yes" : "No"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
