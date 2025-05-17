'use client'
import { ShieldCheck, Globe, Truck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Feature card animation
const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.2 },
  },
};

// Icon animation
const iconAnimation = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 },
  },
};

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
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Us?
          </h2>
          <motion.div
            className="w-24 h-1 bg-coolex-accent mx-auto mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
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
                className="flex justify-center mb-4"
                variants={iconAnimation}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-center text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
