import { useReducer, useState } from "react";
import { initialUser, userReducer, type UserProfile } from "./UserReducer";

const UserProfile: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleProfileUpdate = (
    field: keyof UserProfile["personalInfo"],
    value: string
  ): void => {
    dispatch({
      type: "UPDATE_PROFILE",
      payload: { [field]: value },
    });
  };

  return (
    <section className="max-w-xl mx-auto mt-12 rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-900">User Profile</h2>
        <p className="text-sm text-slate-500">
          Perbarui informasi pribadi dan preferensi penggunaan akun.
        </p>
      </div>

      <div className="space-y-8 px-6 py-6">
        <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">
              Personal Information
            </h3>
            <button
              className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? "Batal" : "Edit"}
            </button>
          </div>

          {isEditing ? (
            <form className="grid gap-3">
              <label className="text-sm font-medium text-slate-600">
                First Name
                <input
                  type="text"
                  value={user.personalInfo.firstName}
                  onChange={(e) =>
                    handleProfileUpdate("firstName", e.target.value)
                  }
                  placeholder="First Name"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </label>
              <label className="text-sm font-medium text-slate-600">
                Last Name
                <input
                  type="text"
                  value={user.personalInfo.lastName}
                  onChange={(e) =>
                    handleProfileUpdate("lastName", e.target.value)
                  }
                  placeholder="Last Name"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </label>
              <label className="text-sm font-medium text-slate-600">
                Email
                <input
                  type="email"
                  value={user.personalInfo.email}
                  onChange={(e) =>
                    handleProfileUpdate("email", e.target.value)
                  }
                  placeholder="Email"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </label>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                  onClick={() => setIsEditing(false)}
                >
                  Simpan
                </button>
              </div>
            </form>
          ) : (
            <dl className="grid gap-2 text-sm text-slate-700">
              <div>
                <dt className="font-medium text-slate-600">Nama Lengkap</dt>
                <dd>
                  {user.personalInfo.firstName} {user.personalInfo.lastName}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-600">Email</dt>
                <dd>{user.personalInfo.email}</dd>
              </div>
            </dl>
          )}
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4">
          <h3 className="mb-3 text-lg font-semibold text-slate-800">
            Preferences
          </h3>
          <dl className="grid gap-2 text-sm text-slate-700">
            <div className="flex justify-between">
              <dt className="font-medium text-slate-600">Theme</dt>
              <dd className="capitalize">{user.preferences.theme}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-slate-600">Notifications</dt>
              <dd>{user.preferences.notifications ? "Enabled" : "Disabled"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-slate-600">Language</dt>
              <dd className="uppercase">{user.preferences.language}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">Statistics</h3>
            <button
              className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
              onClick={() => dispatch({ type: "INCREMENT_LOGIN_COUNT" })}
            >
              Simulate Login
            </button>
          </div>
          <dl className="grid gap-2 text-sm text-slate-700">
            <div className="flex justify-between">
              <dt className="font-medium text-slate-600">Login Count</dt>
              <dd>{user.stats.loginCount}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-slate-600">Last Login</dt>
              <dd>{user.stats.lastLogin.toLocaleDateString()}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-slate-600">Member Since</dt>
              <dd>{user.stats.accountCreated.toLocaleDateString()}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
