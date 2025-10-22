import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-[url('/image/hero-section.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white dark:bg-black/70 " />
      <div className="container relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold text-black dark:text-white">
            Welcome to Our Store
          </h1>
          <p className="mb-8 text-lg text-black dark:text-white">
            Discover amazing products and deals!
          </p>
          <Button asChild>
            <Link to={"/products"}>Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
