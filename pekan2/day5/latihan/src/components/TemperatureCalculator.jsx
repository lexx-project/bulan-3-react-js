import { useState } from "react";

import TemperatureInput from "./TemperatureInput.jsx";
import { toCelcius, toFahrenheit, tryConvert } from "../utils/converter.js";

export default function TemperatureCalculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (value) => {
    setScale("c");
    setTemperature(value);
  };

  const handleFahrenheitChange = (value) => {
    setScale("f");
    setTemperature(value);
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelcius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <main className="flex flex-col gap-6 p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-center">Kalkulator Suhu</h1>
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
    </main>
  );
}
