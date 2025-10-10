import { useEffect } from "react";

export default function SimpleUseEffect() {
  useEffect(() => {
    console.log("Components are rendered");
  });

  return (
    <>
      <h1 className="text-xl font-semibold">Simple Use Effect</h1>
      <p className="text-lg">Look At console</p>
    </>
  );
}
