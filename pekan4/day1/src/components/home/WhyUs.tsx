import Icon1 from "../../assets/Icon.png";
import Icon2 from "../../assets/Icon-1.png";
import Icon3 from "../../assets/Icon-2.png";

const features = [
  {
    icon: Icon1,
    title: "Fast & Free Shipping",
    description: "Enjoy swift and complimentary delivery on all orders.",
  },
  {
    icon: Icon2,
    title: "Secure Payment",
    description:
      "Shop with confidence using our secure and encrypted payment gateway.",
  },
  {
    icon: Icon3,
    title: "Money Back Guarantee",
    description: "Not satisfied? We offer a hassle-free money-back guarantee.",
  },
];

function WhyUs() {
  return (
    <section className="bg-[#F8F8F8] dark:bg-black/70 pb-20 w-full ml-[-40px]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          Experience the best in online shopping with our exceptional services.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex h-full flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-colors hover:border-primary/50"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-4 h-14 w-14 object-contain"
              />
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
