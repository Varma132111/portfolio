'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaJava, FaReact, FaAws } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Typing animation hook
function useTyping(text, speed = 50) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const projects = [
  {
    title: 'AI Fraud Detection Platform',
    description: '92% accuracy fraud detection system using Kafka + ML models.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Python'],
  },
  {
    title: 'Healthcare Microservices',
    description: 'Handled 50K+ appointments/day with sub-100ms response.',
    tech: ['Spring Boot', 'Angular', 'Azure'],
  },
  {
    title: 'E-commerce System',
    description: 'Scaled to 10K orders/hour with optimized DB queries.',
    tech: ['Java', 'React', 'MongoDB'],
  },
];

export default function Home() {
  const typingText = useTyping('I build scalable systems with Java, Spring Boot, and AWS 🚀');

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 p-4 flex justify-between z-50">
        <h1 className="text-xl font-bold">Vikas R</h1>
        <div className="space-x-6 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold">
          Hi, I'm Vikas R
        </motion.h1>

        <p className="mt-4 text-lg text-gray-300">Java Full Stack Developer</p>

        <p className="mt-2 text-gray-400 italic">{typingText}</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-white text-black rounded-lg hover:scale-105 transition">
            View Projects
          </a>
          <a href="/resume.pdf" download className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-300">
          Java Full Stack Developer with 5+ years experience building microservices, AI integrations, and cloud-native applications across banking and healthcare.
        </p>
      </section>

      {/* Skills */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex justify-center gap-8 text-4xl">
          <FaJava />
          <FaReact />
          <FaAws />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.description}</p>
              <div className="mt-3 text-sm text-gray-400">{p.tech.join(', ')}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            'Capital One – Java Developer (2025–Present)',
            'Northside Hospital – Developer (2023–2025)',
            'Reliance Retail – Developer (2022–2023)',
            'HDFC Ergo – Developer (2020–2022)',
          ].map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="p-4 border-l-2 border-white/20">
              {exp}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <FaGithub size={28} />
          <FaLinkedin size={28} />
        </div>
        <p className="mt-4 text-gray-400">varmar2113@gmail.com</p>
      </section>

      <footer className="text-center p-6 text-gray-500 text-sm">
        © 2026 Vikas R
      </footer>
    </div>
  );
}