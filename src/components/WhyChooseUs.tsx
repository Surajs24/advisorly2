import { motion } from "framer-motion";
import { UserCog, BarChartBig, Lightbulb } from "lucide-react"; // Added Zap for convenience

const benefits = [
  {
    icon: <UserCog className="h-10 w-10 text-accent-cyan" />,
    title: "Personalized Plans",
    description:
      "Our AI-driven platform offers customized investment strategies based on your unique profile and financial ambitions.",
  },
  {
    icon: <BarChartBig className="h-10 w-10 text-accent-cyan" />,
    title: "Expert Insights",
    description:
      "Gain access to data-driven advice and insights to make informed financial decisions with clarity.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent-cyan" />, // Changed icon to Lightbulb as in mockup
    title: "Simple & Convenient",
    description:
      "Easily manage your portfolio and track your goals all in one intuitive, user-friendly app.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose <span className="text-accent-cyan">Advisorly?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We're committed to making sophisticated investment strategies
            accessible and manageable for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-white/5 p-8 rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center text-center border border-white/10"
            >
              <div className="p-4 bg-accent-cyan/10 rounded-full mb-6 inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
