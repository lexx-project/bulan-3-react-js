export default function UnoptimizedChild({ count }) {
  console.log("Unoptimized Child Rendered");

  return (
    <p className="text-lg mt-2 font-semibold">Count (Unoptimized) : {count}</p>
  );
}
