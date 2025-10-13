import { useTheme } from "../context/ThemeContext";

function GrandchildComponent({ message }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerClass = isLight
    ? "border border-blue-300 bg-blue-50 text-blue-800"
    : "border border-blue-500 bg-blue-900/40 text-blue-100";
  const textClass = isLight ? "text-blue-700" : "text-blue-200";

  return (
    <div
      className={`p-4 rounded-md transition-colors duration-300 ${containerClass}`}
    >
      <h4 className="text-lg font-semibold">Grandchild Component</h4>
      <p className={textClass}>
        Message from above: <span className="font-medium">{message}</span>
      </p>
    </div>
  );
}

function ChildComponent({ message }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerClass = isLight
    ? "border border-green-400 bg-green-50 text-green-800"
    : "border border-green-500 bg-green-900/40 text-green-100";
  const textClass = isLight ? "text-green-700" : "text-green-200";

  return (
    <div
      className={`p-6 rounded-md mt-4 transition-colors duration-300 ${containerClass}`}
    >
      <h3 className="text-xl font-bold">Child Component</h3>
      <p className={`${textClass} mb-4`}>
        Passing: <span className="font-medium">{message}</span>
      </p>
      <GrandchildComponent message={message} />
    </div>
  );
}

function PropDrilling() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const dataFromTop = "Hello World";
  const containerClass = isLight
    ? "bg-white text-gray-800 shadow-lg"
    : "bg-gray-800 text-gray-100 shadow-lg border border-gray-700";
  const innerContainerClass = isLight
    ? "border border-purple-500 bg-purple-50 text-purple-800"
    : "border border-purple-400 bg-purple-900/40 text-purple-100";
  const paragraphClass = isLight ? "text-purple-700" : "text-purple-200";
  const headingClass = isLight ? "text-gray-800" : "text-gray-100";

  return (
    <div
      className={`max-w-md mx-auto p-8 rounded-lg transition-colors duration-300 ${containerClass}`}
    >
      <h2
        className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${headingClass}`}
      >
        Contoh Prop Drilling
      </h2>
      <div
        className={`p-6 rounded-md transition-colors duration-300 ${innerContainerClass}`}
      >
        <h3 className="text-xl font-bold">Parent Component</h3>
        <p className={`${paragraphClass} mb-4`}>
          Data to be passed: <span className="font-medium">{dataFromTop}</span>
        </p>
        <ChildComponent message={dataFromTop} />
      </div>
    </div>
  );
}

export default PropDrilling;
