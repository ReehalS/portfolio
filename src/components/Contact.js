import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  {
    name: 'Email',
    icon: HiOutlineMail,
    href: 'mailto:sandeep.reehal@outlook.com',
  },
  {
    name: 'GitHub',
    icon: AiFillGithub,
    href: 'https://github.com/reehals',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/sandeep-reehal/',
  },
  {
    name: 'Devpost',
    icon: SiDevpost,
    href: 'https://devpost.com/sreehal',
  },
];

function Contact() {
  return (
    <div className="py-24 bg-dark-light">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full mx-auto mb-6" />
          <p className="text-white/60 max-w-lg mx-auto mb-10">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out through any of the platforms below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-5"
        >
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
              }
              className="group flex flex-col items-center gap-2 p-5 rounded-xl bg-dark border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 min-w-[100px]"
            >
              <Icon className="text-2xl text-white/60 group-hover:text-accent transition-colors" />
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">
                {name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
