import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg"; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Why Us", href: "#why-us" },
    // { name: 'Pricing', href: '#pricing' }, // Example for more links
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-primary-dark sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Advisorly Logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-primary-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center group"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-150" />
              </motion.button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:bg-primary-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-primary-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign In
          </a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(false)}
            className="w-full bg-primary-blue hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 mt-1"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
