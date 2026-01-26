import React from "react";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiNextdotjs,
  SiKotlin,
  SiAssemblyscript,
  SiTensorflow,
  SiOpencv,
  SiFirebase,
  SiPostman,
  SiSlack,
  SiFigma,
  SiTermius,
  SiGithub,
  SiGo,
  SiRust,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiDocker,
  SiAmazonwebservices,
  SiPrisma,
  SiGraphql,
  SiMediapipe,
} from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { VscVscode, VscAzure } from "react-icons/vsc";

const languages = [
  { icon: CgCPlusPlus, name: "C/C++" },
  { icon: DiJava, name: "Java" },
  { icon: DiJavascript1, name: "JavaScript" },
  { icon: DiPython, name: "Python" },
  { icon: TbSql, name: "SQL" },
  { icon: SiGo, name: "Go" },
  { icon: SiRust, name: "Rust" },
  { icon: SiKotlin, name: "Kotlin" },
  { icon: SiAssemblyscript, name: "RISC-V / x86" },
];

const frameworks = [
  { icon: DiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNode, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: TbBrandReactNative, name: "React Native" },
];

const libraries = [
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiOpencv, name: "OpenCV" },
  { icon: SiMediapipe, name: "MediaPipe" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiPandas, name: "Pandas" },
];

const databases = [
  { icon: DiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiGraphql, name: "GraphQL" },
];

const tools = [
  { icon: VscVscode, name: "VS Code" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiDocker, name: "Docker" },
  { icon: VscAzure, name: "Azure" },
  { icon: SiAmazonwebservices, name: "AWS" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiSlack, name: "Slack" },
  { icon: SiTermius, name: "Termius" },
];

function SkillIcon({ icon: Icon, name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-light border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
    >
      <Icon className="text-3xl text-white/80 group-hover:text-accent transition-colors duration-300" />
      <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors font-medium">
        {name}
      </span>
    </motion.div>
  );
}

function SkillGroup({ title, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="mb-10"
    >
      <h3 className="text-lg font-semibold text-white/90 mb-4">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {items.map((skill, i) => (
          <SkillIcon key={skill.name} {...skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
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
            Skills & Tools
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full mb-12" />
        </motion.div>

        <SkillGroup title="Languages" items={languages} delay={0} />
        <SkillGroup title="Frameworks" items={frameworks} delay={0.05} />
        <SkillGroup title="Libraries" items={libraries} delay={0.1} />
        <SkillGroup title="Databases" items={databases} delay={0.15} />
        <SkillGroup title="Tools" items={tools} delay={0.2} />
      </div>
    </div>
  );
}

export default Skills;
