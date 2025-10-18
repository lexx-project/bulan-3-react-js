import { useOutlet } from "react-router-dom";
import ProductCatalog from "./index";

export default function ProductLayout() {
  const outlet = useOutlet();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-24">
      {outlet ?? <ProductCatalog />}
    </section>
  );
}
