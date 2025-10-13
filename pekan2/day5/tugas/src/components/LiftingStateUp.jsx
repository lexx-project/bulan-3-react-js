import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function TemperatureInput({ temperature, onTemperatureChange, scale }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const fieldsetClass = isLight
    ? "border border-gray-300 bg-white text-gray-800"
    : "border border-gray-600 bg-gray-800 text-gray-100";
  const legendClass = isLight ? "text-gray-800" : "text-gray-100";
  const inputClass = isLight
    ? "border-gray-300 bg-white text-gray-900"
    : "border-gray-500 bg-gray-700 text-gray-100 placeholder-gray-300";

  const handleChange = (e) => {
    onTemperatureChange(e.target.value, scale);
  };

  return (
    <fieldset
      className={`${fieldsetClass} p-4 rounded-md mb-4 transition-colors duration-300`}
    >
      <legend className={`text-lg font-semibold mb-2 ${legendClass}`}>
        Enter temperature in {scale === "c" ? "Celsius" : "Fahrenheit"}:
      </legend>
      <input
        className={`border p-2 rounded-md w-full transition-colors duration-300 ${inputClass}`}
        value={temperature}
        onChange={handleChange}
        type="number"
      />
    </fieldset>
  );
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function LiftingStateUp() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div
      className={`max-w-md mx-auto p-6 rounded-lg transition-colors duration-300 ${
        isLight
          ? "bg-white text-gray-900 shadow-md"
          : "bg-gray-800 text-gray-100 shadow-lg border border-gray-700"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 text-center ${
          isLight ? "text-gray-900" : "text-gray-100"
        }`}
      >
        Temperature Converter
      </h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default LiftingStateUp;
