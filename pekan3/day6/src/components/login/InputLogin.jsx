export default function InputLogin({ type, placeholder, className = "", ...props }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`w-full px-5 py-3 rounded-xl border border-transparent bg-white/90 text-gray-700 placeholder:text-gray-400 text-sm font-medium shadow-lg shadow-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:bg-white transition-all duration-200 ease-in-out ${className}`}
      />
    </>
  );
}
