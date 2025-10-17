import { useMemo } from "react";

export default function ProductList({ list, searchTerm, useMemoHook }) {
  const filteredList = useMemoHook
    ? useMemo(() => {
        console.log("Filtering products with useMemo...");
        return list.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }, [list, searchTerm])
    : list.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div>
      {filteredList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
