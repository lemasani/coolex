'use client'
import { Phone, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fromLeft, fromRight, staggerItems } from "@/lib/AnimationVariants";
import BottomBorder from "../bottomBorder";
import { openWhatsAppChat } from "@/lib/whatsapp";


const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-coolex-light" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-coolex-blue mb-4">
            Contact Us
          </h2>
          <BottomBorder width={96} />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fromLeft}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 className="text-2xl font-semibold text-coolex-blue mb-6">
              Get In Touch
            </h3>

            <motion.div className="space-y-6" variants={staggerItems}>
              <motion.div
                className="flex items-start space-x-4"
                variants={fadeUp}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone size={24} className="text-accent mt-1" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">Tanzania: +255 123 456 789</p>
                  <p className="text-gray-600">Japan: +81-80‑4807‑9472</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={fadeUp}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail size={24} className="text-accent mt-1" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">info@coolexlinks.com</p>
                  <p className="text-gray-600">sales@coolexlinks.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-green-600 p-8 rounded-lg shadow-md text-white"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fromRight}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <MessageSquare size={48} />
            </motion.div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Join Our WhatsApp Group
            </h3>
            <p className="text-center mb-6">
              Get instant updates about new arrivals, special offers, and ask
              any questions directly to our team.
            </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="bg-white text-green-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  onClick={() =>
                    openWhatsAppChat("Join WhatsApp Group")
                  }
                >
                  <MessageSquare size={20} />
                  <span className="ml-2">Join WhatsApp Group</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;