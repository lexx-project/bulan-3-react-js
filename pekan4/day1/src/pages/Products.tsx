import Footer from "@/components/Footer";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";

export default function Products() {
  return (
    <>
      <Navbar01 />
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
      </div>
      <Footer />
    </>
  );
}
