'use client'
import { ShieldCheck, Globe, Truck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cardAnimation, fadeInUp, iconAnimation, staggerContainer } from "@/lib/AnimationVariants";
import BottomBorder from "@/components/bottomBorder";


const features = [
  {
    id: 1,
    icon: <ShieldCheck size={40} className="text-coolex-accent" />,
    title: "Trust & Quality",
    description:
      "Direct sourcing from Japan ensures authentic, top-quality products that meet international standards.",
  },
  {
    id: 2,
    icon: <Globe size={40} className="text-coolex-accent" />,
    title: "International Presence",
    description:
      "With offices in both Japan and Tanzania, we manage the entire process from sourcing to delivery.",
  },
  {
    id: 3,
    icon: <Truck size={40} className="text-coolex-accent" />,
    title: "Fast Shipping",
    description:
      "Efficient logistics network ensures your vehicles and appliances arrive quickly and safely.",
  },
  {
    id: 4,
    icon: <DollarSign size={40} className="text-coolex-accent" />,
    title: "Competitive Prices",
    description:
      "Direct relationships with manufacturers allow us to offer better prices without compromising quality.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-primary text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-justify mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Us?
          </h2>
          <BottomBorder width={96} />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm hover:bg-opacity-15 transition-all"
              variants={cardAnimation}
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className="flex justify-center mb-4 text-accent"
                variants={iconAnimation}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-center mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-center text-black">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;