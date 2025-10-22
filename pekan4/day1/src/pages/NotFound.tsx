import { Button } from "@/components/ui/button";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar01 />
      <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-xl">Oops! Page not found.</p>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
