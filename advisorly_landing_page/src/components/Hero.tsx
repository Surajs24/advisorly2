import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MobileAppPreview from "./MobileAppPreview";
// Replace these with your actual image paths
import phoneProfileImg from "../assets/phone-profile.png";
import phoneDashboardImg from "../assets/phone-dashboard.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-primary-dark text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="md:pr-8 text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Empowering Users to Achieve{" "}
              <span className="text-accent-cyan">Financial Goals</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed"
            >
              A comprehensive app that simplifies the investment process through
              personalized assessments, goal-setting tools, and intelligent
              portfolio recommendations.
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(34, 211, 238, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 ease-in-out flex items-center group mx-auto md:mx-0"
            >
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>

          {/* Phone Mockups */}
          <motion.div
            className="relative h-[600px] md:h-auto flex justify-center items-center md:mt-0 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MobileAppPreview
              imageSrc={phoneProfileImg} // Use your actual path
              altText="Advisorly App Profile Screen"
              className="z-10 transform md:rotate-[-10deg] md:translate-x-[-20%] md:scale-90"
              delay={0.6}
            />
            <MobileAppPreview
              imageSrc={phoneDashboardImg} // Use your actual path
              altText="Advisorly App Dashboard Screen"
              className="absolute z-20 transform md:rotate-[5deg] md:translate-x-[20%] md:scale-100"
              delay={0.8}
            />
            {/* Decorative Blobs - optional */}
            <motion.div
              className="absolute -top-10 -left-10 w-72 h-72 bg-accent-cyan/10 rounded-full filter blur-2xl opacity-70"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary-blue/20 rounded-full filter blur-3xl opacity-60"
              animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
