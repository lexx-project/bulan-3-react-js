type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-muted bg-card flex h-full w-80 flex-col gap-3 overflow-hidden rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-center bg-muted/40 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-32 w-32 object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold line-clamp-2">
          {product.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3 text-xs">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-muted-foreground text-xs uppercase">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}
