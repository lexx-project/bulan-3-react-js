import { useMemo } from "react";
import useFetch from "../hooks/useFetch";

interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type UserPreview = Pick<ApiUser, "id" | "name" | "email">;
type UserSummary = UserPreview & {
  city: ApiUser["address"]["city"];
  company: ApiUser["company"]["name"];
};

export default function InfoUser() {
  const { data, loading, error } = useFetch<ApiUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = useMemo<UserSummary[]>(() => {
    if (!data) {
      return [];
    }

    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
      company: user.company.name,
    }));
  }, [data]);

  if (loading) {
    return (
      <section className="mt-8 rounded-md border border-slate-200 bg-white p-4 text-center text-sm text-slate-600">
        Loading user data…
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-8 rounded-md border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
        Unable to load user data: {error}
      </section>
    );
  }

  if (!users.length) {
    return null;
  }

  return (
    <section className="mt-8 w-full max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">
          User Directory (Pick Example)
        </h2>
        <p className="text-sm text-slate-500">
          Data diringkas memakai <code>Pick</code> untuk memilih properti
          penting dari response API.
        </p>
      </header>

      <ul className="grid gap-4 md:grid-cols-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="rounded-md border border-slate-200 p-4 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-800">{user.name}</h3>
            <p className="text-sm text-slate-500">{user.email}</p>
            <dl className="mt-3 space-y-1 text-sm text-slate-600">
              <div className="flex justify-between">
                <dt className="font-medium text-slate-500">Kota</dt>
                <dd>{user.city}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-slate-500">Perusahaan</dt>
                <dd>{user.company}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}
