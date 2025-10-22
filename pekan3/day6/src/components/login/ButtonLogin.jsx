export default function ButtonLogin({
  children,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`mt-5 w-full cursor-pointer tracking-wide font-semibold bg-indigo-500 text-white py-3.5 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-50 disabled:cursor-not-allowed disabled:bg-indigo-300 ${className}`}
        {...props}
      >
        <svg
          className="w-6 h-6 -ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
        <span className="ml-2">{children}</span>
      </button>
    </>
  );
}
