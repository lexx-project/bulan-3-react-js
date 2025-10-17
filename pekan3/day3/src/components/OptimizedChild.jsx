import { memo } from "react";

const OptimizedChild = memo(function OptimizedChild({ count }) {
  console.log("OptimizedChild di-render");
  return (
    <p className="text-lg mt-2 font-semibold">Count (Optimized): {count}</p>
  );
});

export default OptimizedChild;
