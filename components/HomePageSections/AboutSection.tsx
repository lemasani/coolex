'use client'
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Reusable animation variants - these can be easily modified
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const AboutSection = () => {
  // References for scroll-triggered animations
  const sectionRef = useRef(null);
  const missionRef = useRef(null);

  // Check if elements are in view to trigger animations
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-coolex-blue mb-4">
              About Coolex Links Limited
            </h2>
            <motion.div
              className="w-20 h-1 bg-coolex-accent mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                Coolex Links Limited is your trusted bridge between Japan and
                Tanzania for premium quality vehicles and household appliances.
                With offices in both countries, we ensure direct sourcing,
                quality assurance, and competitive pricing.
              </p>

              {/* Animated image placeholder */}
              <motion.div
                className="overflow-hidden rounded-lg shadow-md border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4">
                  <span className="text-gray-500 font-medium text-sm">
                    Company Image
                  </span>
                </div>
              </motion.div>

              {/* Animated office locations */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="text-coolex-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coolex-blue">
                      Tanzania Office
                    </h3>
                    <p className="text-gray-700">Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-coolex-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coolex-blue">
                      Japan Office
                    </h3>
                    <p className="text-gray-700">Tokyo, Japan</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Animated Promise Card with staggered list items */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="font-semibold text-xl text-coolex-blue mb-4 flex items-center">
                <span className="w-2 h-6 bg-coolex-accent mr-2 rounded-sm"></span>
                Our Promise
              </h3>

              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* List items with staggered animation */}
                {[
                  "Direct sourcing from trusted Japanese suppliers",
                  "Thorough quality inspection before shipping",
                  "Transparent pricing with no hidden fees",
                  "Professional after-sales support",
                  "Fast and reliable shipping to Tanzania",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    variants={fadeIn}
                  >
                    <div className="h-3 w-3 bg-coolex-accent rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-6 pt-4 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <p className="text-sm text-gray-600 italic">
                  &ldquo;We bridge continents to bring quality products to your
                  doorstep.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Mission/Vision section */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
            ref={missionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission animation */}
              <motion.div
                className="text-center space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMissionInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-coolex-blue">
                  Our Mission
                </h3>
                <motion.div
                  className="w-16 h-1 bg-coolex-accent mx-auto"
                  initial={{ width: 0 }}
                  animate={isMissionInView ? { width: 64 } : { width: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                ></motion.div>
                <p className="text-gray-700">
                  To provide high-quality Japanese vehicles and home appliances
                  to Tanzanian consumers at affordable prices with exceptional
                  service.
                </p>
              </motion.div>

              {/* Vision animation */}
              <motion.div
                className="text-center space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-coolex-blue">
                  Our Vision
                </h3>
                <motion.div
                  className="w-16 h-1 bg-coolex-accent mx-auto"
                  initial={{ width: 0 }}
                  animate={isMissionInView ? { width: 64 } : { width: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                ></motion.div>
                <p className="text-gray-700">
                  To become Tanzania&apos;s most trusted supplier of imported
                  vehicles and home appliances, known for quality, reliability
                  and customer satisfaction.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
