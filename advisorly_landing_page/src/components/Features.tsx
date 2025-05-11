import { motion } from "framer-motion";
import { Target, BrainCircuit, BarChart3, CheckCircle } from "lucide-react"; // Added CheckCircle

const featuresData = [
  {
    icon: <Target className="h-10 w-10 text-primary-blue" />,
    title: "Set Goals",
    description:
      "Define your financial objectives and timelines with our intuitive goal-setting tools.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary-blue" />,
    title: "Get AI Advice",
    description:
      "Receive expert portfolio recommendations tailored to your unique risk profile and goals.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary-blue" />,
    title: "Track Progress",
    description:
      "Monitor your investments and stay on top of your targets with clear, actionable insights.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            Welcome to <span className="text-primary-blue">Advisorly</span>
          </h2>
          <p className="mt-4 text-lg text-medium-gray max-w-2xl mx-auto">
            Advisorly leverages cutting-edge AI to help you to achieve your
            financial goals, so you can take control of your financial future
            with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-light-gray p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-primary-blue/10 rounded-full mb-6 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                {feature.description}
              </p>
              <CheckCircle className="h-6 w-6 text-green-500 mt-auto pt-2 self-start hidden sm:block" />{" "}
              {/* Visual cue from mockup */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
