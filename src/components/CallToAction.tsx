import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Ready to Transform Your Financial Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-blue-100 mb-10 max-w-xl mx-auto"
        >
          Take the first step towards smarter investing and achieving your
          long-term goals with Advisorly.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 150,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ffffff",
            color: "#2563EB",
            boxShadow: "0px 0px 20px rgba(255,255,255,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-primary-blue font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 ease-in-out flex items-center group mx-auto"
        >
          Get Started Now
          <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;
