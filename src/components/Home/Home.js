import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3.5 + 1,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * -15,
      driftX: (Math.random() - 0.5) * 80,
      driftY: (Math.random() - 0.5) * 80,
      opacity: Math.random() * 0.2 + 0.05,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.id % 3 === 0 ? "#47b7ff" : "#1c5d8e",
          }}
          animate={{
            x: [0, p.driftX, -p.driftX * 0.6, p.driftX * 0.3, 0],
            y: [0, p.driftY * 0.4, -p.driftY, p.driftY * 0.6, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity * 0.5, p.opacity * 1.8, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-dark">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-dark/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl"
          animate={{
            x: ["-50%", "-40%", "-60%", "-50%"],
            y: ["-50%", "-60%", "-40%", "-50%"],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-sm text-white/40 font-medium tracking-wide">
              Software Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Sandeep Reehal
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 h-10"
          >
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Full Stack Developer",
                  "Mobile Developer",
                  "Open Source Contributor",
                  "Problem Solver",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl"
          >
            Passionate about creating innovative solutions and building amazing
            user experiences. Let's turn ideas into reality through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">25+</div>
              <div className="text-sm text-white/60 mt-1">Projects Built</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">UC Davis</div>
              <div className="text-sm text-white/60 mt-1">Computer Science & Engineering</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="px-6 py-3 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("about");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="px-6 py-3 border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
