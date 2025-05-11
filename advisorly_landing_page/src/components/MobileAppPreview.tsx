import { motion } from "framer-motion";

interface MobileAppPreviewProps {
  imageSrc: string;
  altText: string;
  className?: string;
  delay?: number;
}

const MobileAppPreview: React.FC<MobileAppPreviewProps> = ({
  imageSrc,
  altText,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl ${className}`}
    >
      <div className="w-[100px] h-[12px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[36px] w-[3px] bg-gray-800 absolute -left-[13px] top-[60px] rounded-l-lg"></div>
      <div className="h-[36px] w-[3px] bg-gray-800 absolute -left-[13px] top-[110px] rounded-l-lg"></div>
      <div className="h-[50px] w-[3px] bg-gray-800 absolute -right-[13px] top-[80px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        <img
          src={imageSrc}
          className="dark:hidden w-full h-full object-cover object-top"
          alt={altText}
        />
        {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-full h-full" alt={altText} /> */}
      </div>
    </motion.div>
  );
};

export default MobileAppPreview;
