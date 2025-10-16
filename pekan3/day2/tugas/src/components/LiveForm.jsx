import useForm from "../hooks/useForm";

export default function LiveForm() {
  const { values, handleChange, reset } = useForm();
  const { name, email } = values;

  return (
    <div className="flex flex-col gap-6 items-center">
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Masukkan nama"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Masukkan email"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="button"
          onClick={reset}
          className="self-start px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Reset
        </button>
      </form>

      <div className="w-full max-w-sm border border-dashed border-gray-300 rounded-md p-4 bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-600">Preview</h3>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-medium">Nama:</span> {name || "-"}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Email:</span> {email || "-"}
        </p>
      </div>
    </div>
  );
}
