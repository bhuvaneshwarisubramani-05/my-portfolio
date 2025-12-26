import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const skills = [
  "Java", "Python", "C", "React", "Node.js",
  "MongoDB", "MySQL", "LLMs"
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Bhuvaneshwari"
            className="w-72 h-72 rounded-3xl object-cover border-4 border-[#018ABE] shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#001B48] mb-6">
            About Me
          </h2>

          <p className="text-[#02457A] leading-relaxed mb-4">
            I am an Information Technology undergraduate with strong interests in
            full-stack development, AI-driven systems, and human-centered design.
          </p>

          <p className="text-[#02457A] leading-relaxed mb-8">
            My work focuses on combining clean user interfaces with scalable backend
            systems and intelligent models to deliver meaningful, practical solutions.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#D6E8EE] text-[#001B48] rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
