import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, ShieldCheck, Users } from "lucide-react";

const problems = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-accent-cyan" />,
    text: "Difficulty in assessing risk tolerance accurately.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent-cyan" />,
    text: "Inadequate tools for tracking progress and making informed adjustments.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent-cyan" />,
    text: "Lack of personalized guidance for unique financial situations.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent-cyan" />,
    text: "Overwhelm from complex investment choices and market volatility.",
  },
];

const ProblemStatement = () => {
  return (
    <section className="py-16 sm:py-24 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6"
        >
          Navigating Financial Challenges?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-medium-gray mb-12 max-w-3xl mx-auto"
        >
          Individuals face numerous challenges in achieving their financial
          goals. We understand these hurdles and have built Advisorly to provide
          clear solutions.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 mt-1">{problem.icon}</div>
              <p className="text-md text-dark-gray text-left">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
