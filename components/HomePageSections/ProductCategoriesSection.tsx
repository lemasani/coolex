'use client'
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/HomePageSections/CategoryCard";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/AnimationVariants";
import useSectionInView from "@/hooks/useSectionInView"; // Import the hook
import BottomBorder from "@/components/bottomBorder";

const ProductCategoriesSection = () => {
  // ACTION REQUIRED: Replace with your actual WhatsApp number
  const WHATSAPP_NUMBER = "255XXXXXXXXX";
  const { sectionRef, isInView } = useSectionInView({ margin: "-100px" });

  const handleCategoryInquiry = (categoryName: string) => {
    const message = encodeURIComponent(
      `Hello Coolex-Links! I'm interested in learning more about your ${categoryName} products.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Product Categories
          </h2>
          <BottomBorder />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of quality products sourced from trusted
            suppliers worldwide. From vehicles to home appliances, we&apos;ve got you
            covered.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeIn}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard
                name={category.name}
                description={category.description}
                icon={category.icon}
                imageUrl={category.imageUrl}
                badgeText={category.badgeText}
                path={category.path}
                onInquire={() => handleCategoryInquiry(category.name)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg flex items-center space-x-2 mx-auto"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello Coolex-Links! I'm interested in your products and would like to know more about what you offer."
                );
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
                  "_blank"
                );
              }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
              >
                <MessageSquare size={20} className="mr-2" />
              </motion.div>
              <span>Inquire About All Products</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;