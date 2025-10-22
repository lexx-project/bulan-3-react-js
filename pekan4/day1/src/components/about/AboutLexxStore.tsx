import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutLexxStore() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About LexxStore
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                LexxStore is your one-stop shop for all your needs. We offer a
                wide range of high-quality products at competitive prices,
                backed by excellent customer service.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/products">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="https://upload.lexxganz.my.id/uploads/Gemini_Generated_Image_1pbhs81pbhs81pbh%20(1).png"
            width="600"
            height="400"
            alt="About LexxStore"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
