import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
                 bg-white/70 backdrop-blur-lg shadow-lg
                 px-10 py-4 rounded-full flex gap-8 items-center"
    >
      <span className="font-bold text-[#001B48] text-lg">
        Bhuvaneshwari
      </span>

      {["About", "Projects", "Contact"].map(
        (item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#02457A] font-medium hover:text-[#018ABE] transition"
          >
            {item}
          </a>
        )
      )}
    </motion.nav>
  );
}
