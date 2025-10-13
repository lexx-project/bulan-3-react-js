export default function TemperatureInput({
  temperature,
  onTemperatureChange,
  scale,
}) {
  const scaleNames = {
    c: "Celcius",
    f: "Fahrenheit",
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}
