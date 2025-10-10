import { useEffect, useState } from "react";

export default function DataFetchSimulationwithuseEffect() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData("Data fetched successfully!");
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold">
        Data Fetch Simulation with useEffect
      </h1>
      {loading ? (
        <p className="text-lg">Loading data...</p>
      ) : (
        <p className="text-lg">{data}</p>
      )}
    </>
  );
}
