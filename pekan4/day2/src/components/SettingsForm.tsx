import {
  type ChangeEvent,
  type FormEvent,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  defaultPreferences,
  type PreferencesState,
  usePreferences,
} from "../context/PreferencesContext";

type FormValues = PreferencesState & {
  fullName: string;
  email: string;
};

type FieldName = keyof FormValues;

type FormAction =
  | {
      type: "change";
      field: FieldName;
      value: FormValues[FieldName];
    }
  | { type: "reset"; payload: FormValues };

type FormErrors = Partial<Record<FieldName, string>>;

const themeLabels: Record<PreferencesState["theme"], string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const languageLabels: Record<PreferencesState["language"], string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

const isValidEmail = (value: string): boolean => {
  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(value);
};

const createInitialValues = (
  prefs: PreferencesState
): FormValues => ({
  fullName: "John Doe",
  email: "john.doe@example.com",
  ...prefs,
});

const formReducer = (
  state: FormValues,
  action: FormAction
): FormValues => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return action.payload;
    default:
      return state;
  }
};

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Nama lengkap wajib diisi.";
  }

  if (!isValidEmail(values.email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.language) {
    errors.language = "Pilih bahasa tampilan.";
  }

  return errors;
};

export default function SettingsForm() {
  const { state, updatePreferences, resetPreferences } = usePreferences();
  const [formState, dispatch] = useReducer(
    formReducer,
    state,
    createInitialValues
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState<string>("");

  const handleInputChange =
    (field: "fullName" | "email") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "change",
        field,
        value: event.target.value,
      });
    };

  const handleSelectChange =
    (field: "theme" | "language") =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch({
        type: "change",
        field,
        value: event.target.value as FormValues[typeof field],
      });
    };

  const handleToggleChange =
    (field: "emailUpdates" | "pushNotifications") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "change",
        field,
        value: event.target.checked,
      });
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(formState);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setMessage("");
      return;
    }

    const { theme, language, emailUpdates, pushNotifications } = formState;

    updatePreferences({
      theme,
      language,
      emailUpdates,
      pushNotifications,
    });

    setMessage("Preferensi berhasil diperbarui.");
  };

  const handleReset = () => {
    const initialValues = createInitialValues(defaultPreferences);
    dispatch({ type: "reset", payload: initialValues });
    resetPreferences();
    setErrors({});
    setMessage("Preferensi dikembalikan ke default.");
  };

  const preview = useMemo(
    () =>
      ({
        Tema: themeLabels[formState.theme],
        Bahasa: languageLabels[formState.language],
        "Email Updates": formState.emailUpdates ? "Aktif" : "Nonaktif",
        "Push Notifications": formState.pushNotifications ? "Aktif" : "Nonaktif",
      }) satisfies Record<string, string>,
    [formState]
  );

  return (
    <section className="mt-8 grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header>
        <h2 className="text-xl font-semibold text-slate-900">
          Tugas 4 (Context & Form Validation)
        </h2>
        <p className="text-sm text-slate-600">
          Menggunakan Context API dengan TypeScript dan form validasi bertipe.
        </p>
      </header>

      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-slate-700"
          >
            Nama Lengkap
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formState.fullName}
            onChange={handleInputChange("fullName")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            placeholder="Nama lengkap"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange("email")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            placeholder="nama@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Tema
            <select
              value={formState.theme}
              onChange={handleSelectChange("theme")}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            >
              {Object.entries(themeLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Bahasa
            <select
              value={formState.language}
              onChange={handleSelectChange("language")}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            >
              {Object.entries(languageLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.language && (
              <p className="mt-1 text-xs text-red-600">{errors.language}</p>
            )}
          </label>
        </div>

        <fieldset className="grid gap-3 rounded-md border border-slate-200 p-4">
          <legend className="text-sm font-semibold text-slate-700">
            Notifikasi
          </legend>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={formState.emailUpdates}
              onChange={handleToggleChange("emailUpdates")}
            />
            Kirim email update mingguan
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={formState.pushNotifications}
              onChange={handleToggleChange("pushNotifications")}
            />
            Aktifkan push notification
          </label>
        </fieldset>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Simpan Preferensi
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
          >
            Reset Default
          </button>
          {message && (
            <span className="text-sm text-green-600">{message}</span>
          )}
        </div>
      </form>

      <aside className="rounded-md border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-900">
        <h3 className="text-base font-semibold text-indigo-900">
          Preview Preferensi
        </h3>
        <p className="text-xs text-indigo-700">
          Preview menggunakan struktur <code>Record</code> agar konsisten.
        </p>
        <dl className="mt-3 grid gap-2">
          {Object.entries(preview).map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <dt className="font-medium">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
