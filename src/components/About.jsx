import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const skills = [
  "Java",
  "Python",
  "React",
  "Node.js",
  "MySQL",
  "LLMs",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#EAF6FA]"   // ⬅️ Differentiated & matched palette
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Bhuvaneshwari"
            className="w-72 h-72 rounded-2xl object-cover 
                       border-4 border-[#018ABE] 
                       shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#001B48] mb-6">
            About Me
          </h2>

          <p className="text-[#02457A] text-[16px] leading-relaxed mb-5">
            I’m an Information Technology undergraduate who enjoys building systems
            that are not just functional, but meaningful in real-world contexts.
            My interests lie at the intersection of full-stack development,
            AI-driven systems, and human-centered design.
          </p>

          <p className="text-[#02457A] text-[16px] leading-relaxed mb-8">
            I enjoy crafting clean user interfaces, designing scalable backend logic,
            and experimenting with AI-powered features that make applications smarter
            and more intuitive. Through my projects, I’ve developed a strong curiosity
            about how technology influences people — how systems make decisions, how
            users interact with them, and how trust is built through thoughtful design.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 
                           bg-[#D6E8EE] 
                           text-[#001B48] 
                           rounded-full 
                           text-sm 
                           font-medium 
                           shadow-sm"
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
