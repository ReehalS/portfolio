import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            I am a Computer Science and Engineering student at UC Davis who is
            passionate about{" "}
            <span className="text-accent font-medium">
              Web Development and Machine Learning
            </span>
            . I am a quick learner and a team player who is always looking for
            new challenges and opportunities to grow.
          </p>

          <p className="text-lg text-white/80 leading-relaxed mt-6">
            I am fluent in languages like{" "}
            <span className="text-accent font-medium">
              C++, Java, Javascript, and Python
            </span>
            , and have worked extensively with frameworks like{" "}
            <span className="text-accent font-medium">
              React, Next.js, and Express.js
            </span>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
