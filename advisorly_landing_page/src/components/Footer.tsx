import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Advisorly Logo"
              className="h-10 mb-4 filter brightness-0 invert"
            />
            <p className="text-sm text-center md:text-left">
              Empowering your financial journey with intelligent advice.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h5 className="font-semibold text-white mb-3">Connect With Us</h5>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Advisorly. All rights reserved.
          <p className="mt-1">
            This is a fictional website for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
