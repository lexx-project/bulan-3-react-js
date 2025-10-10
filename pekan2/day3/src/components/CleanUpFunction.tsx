import { useEffect, useState } from "react";

export default function CleanUpFunction() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <h1 className="text-xl font-semibold">Clean Up Function</h1>
      <p className="text-lg">Width: {windowSize.width}</p>
      <p className="text-lg">Height: {windowSize.height}</p>
    </>
  );
}
