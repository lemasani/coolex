import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/cta-background.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Import Quality Japanese Products?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Connect with us today and get started on bringing premium Japanese
            vehicles and appliances to Tanzania at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8"
            >
              Contact Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent hover:bg-primary text-primary hover:text-white px-8 hover:border-none"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
