import { motion } from "framer-motion";

const projects = [
  {
    title: "Waste Management Solution",
    desc: "Smart platform for efficient waste tracking and community-driven cleanliness.",
    github: "https://github.com/yourrepo",
  },
  {
    title: "AgentLend – AI Loan Processing",
    desc: "Agentic AI system for automated loan verification and approvals.",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Enliven – Personalized Learning",
    desc: "Adaptive learning platform focused on personalized education paths.",
    github: "https://github.com/yourrepo",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-[#D6E8EE] to-[#97CADB]"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#001B48] mb-4"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#02457A] mb-14 max-w-2xl"
        >
          A selection of projects that reflect my interest in impactful technology
          and intelligent systems.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold text-[#001B48]">
                {p.title}
              </h3>

              <p className="mt-3 text-[#02457A] text-sm leading-relaxed">
                {p.desc}
              </p>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-[#018ABE] font-semibold hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
