import { useCallback, useMemo, useState } from "react";
import { useAsync } from "../hooks/useAsync";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

type UserPreview = Pick<ApiUser, "id" | "name" | "email">;
type UserWithoutSensitive = Omit<ApiUser, "phone" | "website">;
type UserDraft = Partial<UserPreview> & {
  address?: Partial<Pick<Address, "city">>;
  company?: Partial<Pick<Company, "name">>;
};
type DisplayUser = {
  id: number;
  name: string;
  email: string;
  city: string;
  company: string;
};

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const isAddress = (value: unknown): value is Address => {
  if (!isObject(value)) {
    return false;
  }
  return (
    typeof value.street === "string" &&
    typeof value.suite === "string" &&
    typeof value.city === "string" &&
    typeof value.zipcode === "string"
  );
};

const isCompany = (value: unknown): value is Company => {
  if (!isObject(value)) {
    return false;
  }
  return (
    typeof value.name === "string" &&
    typeof value.catchPhrase === "string" &&
    typeof value.bs === "string"
  );
};

const isApiUser = (value: unknown): value is ApiUser => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.username === "string" &&
    typeof value.email === "string" &&
    typeof value.phone === "string" &&
    typeof value.website === "string" &&
    isAddress(value.address) &&
    isCompany(value.company)
  );
};

const assertUsers = (value: unknown): ApiUser[] => {
  if (!Array.isArray(value) || !value.every(isApiUser)) {
    throw new Error("Response data does not match expected user schema.");
  }

  return value;
};

const sanitizeUser = (user: ApiUser): UserWithoutSensitive => {
  const { phone: _phone, website: _website, ...rest } = user;
  return rest;
};

export default function UserAsyncList() {
  const [favoriteUsers, setFavoriteUsers] = useState<Record<number, boolean>>(
    {}
  );
  const [selectedUser, setSelectedUser] = useState<UserDraft | null>(null);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(USERS_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = await response.json();
    const users = assertUsers(payload).map(sanitizeUser);
    return users;
  }, []);

  const { data, status, error, execute } =
    useAsync<UserWithoutSensitive[]>(fetchUsers);

  const previews = useMemo<UserPreview[]>(() => {
    if (!data) {
      return [];
    }

    return data.map(({ id, name, email }) => ({
      id,
      name,
      email,
    }));
  }, [data]);

  const displayUsers = useMemo<DisplayUser[]>(() => {
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

  const toggleFavorite = (id: number) => {
    setFavoriteUsers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelect = (id: number) => {
    const user = data?.find((item) => item.id === id);
    if (!user) {
      setSelectedUser(null);
      return;
    }

    const draft: UserDraft = {
      id: user.id,
      name: user.name,
      email: user.email,
      address: { city: user.address.city },
      company: { name: user.company.name },
    };

    setSelectedUser(draft);
  };

  const renderStatus = () => {
    if (status === "pending") {
      return <p className="text-sm text-slate-500">Loading users…</p>;
    }

    if (status === "error" && error) {
      return (
        <p className="text-sm text-red-600">
          Unable to load users: {error.message}
        </p>
      );
    }

    return null;
  };

  return (
    <section className="mt-12 w-full max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Async User Directory
          </h2>
          <p className="text-sm text-slate-500">
            Data fetched dengan custom hook generik & utilitas TypeScript.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
            onClick={() => execute()}
          >
            Refresh
          </button>
        </div>
      </div>

      {renderStatus()}

      <div className="grid gap-4 md:grid-cols-2">
        {displayUsers.map((user) => (
          <article
            key={user.id}
            className="rounded-md border border-slate-200 p-4 transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {user.name}
                </h3>
                <p className="text-sm text-slate-500">{user.email}</p>
              </div>
              <button
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  favoriteUsers[user.id]
                    ? "bg-indigo-500 text-white"
                    : "border border-slate-300 text-slate-600 hover:bg-slate-200"
                }`}
                onClick={() => toggleFavorite(user.id)}
              >
                {favoriteUsers[user.id] ? "Favorit" : "Jadikan Favorit"}
              </button>
            </div>
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
            <button
              className="mt-4 text-sm font-medium text-indigo-600 hover:underline"
              onClick={() => handleSelect(user.id)}
            >
              {selectedUser?.id === user.id
                ? "Sembunyikan Detail"
                : "Lihat Detail"}
            </button>
          </article>
        ))}
      </div>

      {selectedUser && (
        <aside className="mt-6 rounded-md border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-900">
          <h3 className="mb-2 text-base font-semibold text-indigo-900">
            Ringkasan Seleksi
          </h3>
          <p>
            Menggunakan <code>Partial</code>, data yang ditampilkan dapat berupa
            subset dari struktur pengguna lengkap.
          </p>
          <dl className="mt-3 space-y-1">
            {previews
              .filter((user) => user.id === selectedUser.id)
              .map((preview) => (
                <div key={preview.id}>
                  <dt className="font-medium">Nama</dt>
                  <dd>{preview.name}</dd>
                </div>
              ))}
            {selectedUser.email && (
              <div>
                <dt className="font-medium">Email</dt>
                <dd>{selectedUser.email}</dd>
              </div>
            )}
            {selectedUser.address?.city && (
              <div>
                <dt className="font-medium">Kota</dt>
                <dd>{selectedUser.address.city}</dd>
              </div>
            )}
          </dl>
        </aside>
      )}
    </section>
  );
}
