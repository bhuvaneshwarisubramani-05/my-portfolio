import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#D6E8EE] flex items-center px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-[#018ABE] mb-3">
            CRAFTING TECHNOLOGY WITH PURPOSE ✨
          </p>

          <h1 className="text-5xl font-bold text-[#001B48] leading-tight">
            Hi, I’m <br />
            <span className="text-[#018ABE]">Bhuvaneshwari</span>
          </h1>

          <p className="mt-6 text-[#02457A] text-lg max-w-lg">
            An Information Technology undergraduate exploring full-stack development and intelligent systems to design scalable, meaningful, and user-focused solutions.
          </p>

          {/* BUTTONS */}
<div className="mt-8 flex gap-4">
  <button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
    className="px-7 py-3 bg-[#018ABE] text-white rounded-xl shadow-lg hover:scale-105 transition"
  >
    My Projects
  </button>

  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    className="px-7 py-3 border border-[#018ABE] text-[#018ABE] rounded-xl hover:bg-[#018ABE]/10 transition"
  >
    Contact Me
  </button>
</div>


          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-5 text-xl text-[#02457A]">
            <a href="https://linkedin.com/in/bhuvaneshwari-subramani" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/bhuvaneshwarisubramani-05" target="_blank"><FaGithub /></a>
            <a href="mailto:bhuvaneshwarisubramani58@gmail.com"><FaEnvelope /></a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="p-2 rounded-full bg-gradient-to-br from-[#018ABE] to-[#02457A]">
            <img
              src={profile}
              alt="Bhuvaneshwari"
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
