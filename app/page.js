'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
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

const experiences = [
  {
    company: 'Capital One',
    position: 'Java Full Stack Developer',
    location: 'Plano, United States',
    duration: 'Jun 2025 — Present',
    highlights: [
      'Developed 15+ Spring Boot microservices using Spring Cloud (Eureka, Gateway, Config Server) for real-time banking features, reducing API latency 28%',
      'Built AI-powered fraud detection platform integrating Python ML models (XGBoost, BERT) with Java services via Kafka streams; scored 92% fraud detection accuracy',
      'Engineered React 18 dashboards with real-time WebSocket updates and LLM chat interfaces for risk analysts',
      'Containerized services with Docker, deployed to AWS EKS with blue-green deployments via Jenkins/GitHub Actions; achieved 99.95% uptime',
    ],
    tech: ['Java 17', 'Spring Boot 3.x', 'React 18', 'AWS EKS', 'Kafka', 'Docker', 'Jenkins'],
  },
  {
    company: 'Northside Hospital',
    position: 'Java Full Stack Developer',
    location: 'Atlanta, United States',
    duration: 'Oct 2023 — May 2025',
    highlights: [
      'Architected patient management microservices using Spring Boot + Azure AKS; processed 50K+ daily appointments with sub-100ms response times',
      'Integrated Apache Kafka for real-time lab results and notifications; implemented event sourcing pattern, cutting data sync delays 60%',
      'Developed Angular 16 SPAs with RxJS for clinician dashboards; added AI anomaly detection for vital signs, flagging 87% of critical events early',
      'Enhanced observability with Prometheus/Grafana + custom Spring Boot Actuator endpoints; reduced P99 latency outliers 32%',
    ],
    tech: ['Java 17', 'Spring Boot 3.x', 'Angular 16', 'Azure AKS', 'Kafka', 'Terraform', 'PostgreSQL'],
  },
  {
    company: 'Reliance Retail',
    position: 'Java Full Stack Developer',
    location: 'Hyderabad, India',
    duration: 'Feb 2022 — Jun 2023',
    highlights: [
      'Built e-commerce platform with Spring Boot REST APIs + React 17 serving 2M+ SKUs; optimized MongoDB indexes, cutting catalog queries 25%',
      'Implemented domain-driven microservices for order/inventory; used Kafka for async order processing, handling 10K orders/hour peak load',
      'Refactored legacy SQL stored procedures to JPA repositories + caching; reduced database load 40%, enabling 3x concurrent users',
      'Led CI/CD transformation with Jenkins + Maven; automated 90% of deployments, cutting release cycles from 2 weeks to 2 days',
    ],
    tech: ['Java 11', 'Spring Boot 2.x', 'React 17', 'MongoDB', 'Jenkins', 'Kafka', 'Redis'],
  },
  {
    company: 'HDFC ERGO General Insurance',
    position: 'Java Full Stack Developer',
    location: 'Bangalore, India',
    duration: 'Apr 2020 — Jan 2022',
    highlights: [
      'Developed claims processing system with Java 11, Spring Boot, GraphQL APIs; supported 100K+ policies with sub-200ms query performance',
      'Integrated Apache Spark for insurance analytics; built fraud detection pipelines processing 1TB+ claims data daily, identified fraud worth $2.3M',
      'Implemented OAuth 2.0 + mTLS across partner APIs; achieved SOC2 compliance for claims data exchange with 50+ insurance partners',
      'Migrated monolith to Docker microservices; reduced infrastructure costs 45% via AWS ECS auto-scaling',
    ],
    tech: ['Java 11', 'Spring Boot 2.x', 'GraphQL', 'Spark', 'Docker', 'AWS ECS', 'Cassandra'],
  },
];

const certifications = [
  { name: 'AWS Certified Developer Associate', year: 2023 },
  { name: 'Oracle Java SE 11 Professional', year: 2022 },
  { name: 'IBM Enterprise Data Science', year: 2023 },
  { name: 'IBM Cloud - Based Mobile Solutions', year: 2021 },
];

const education = [
  { school: 'University of the Cumberlands, USA', degree: 'Master\'s in Information Technology' },
  { school: 'PRIST University, INDIA', degree: 'Bachelor\'s in Information Technology' },
];

const skillsCategories = [
  { category: 'Backend Technologies', skills: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Microservices', 'Hibernate/JPA', 'Mockito', 'JUnit'] },
  { category: 'Frontend Technologies', skills: ['React.js', 'Angular', 'React 18', 'Angular 16', 'Redux', 'RxJS', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'Terraform', 'Maven', 'Gradle'] },
  { category: 'API & Security', skills: ['RESTful APIs', 'GraphQL APIs', 'OAuth 2.0', 'JWT', 'OpenID Connect', 'Swagger/OpenAPI', 'mTLS'] },
  { category: 'Data & Streaming', skills: ['Apache Kafka', 'JMS', 'Event-Driven Architecture', 'Oracle', 'MySQL', 'PostgreSQL', 'Cassandra', 'DynamoDB', 'MongoDB'] },
  { category: 'AI/ML & Monitoring', skills: ['GenAI', 'LLM Integration', 'NLP', 'Fraud Detection APIs', 'Prometheus', 'Grafana', 'ELK Stack', 'GitHub Copilot'] },
];

const projects = [
  {
    title: 'AI Fraud Detection Platform',
    description: '92% accuracy fraud detection system using Kafka + ML models. Integrated Python ML models (XGBoost, BERT) with Java services.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Python', 'XGBoost'],
  },
  {
    title: 'Healthcare Microservices',
    description: 'Handled 50K+ appointments/day with sub-100ms response. Real-time notifications via Kafka event sourcing.',
    tech: ['Spring Boot', 'Angular', 'Azure AKS', 'Kafka', 'RxJS'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Scaled to 10K orders/hour with optimized DB queries. Served 2M+ SKUs with MongoDB optimization.',
    tech: ['Java', 'React', 'MongoDB', 'Jenkins', 'Redis'],
  },
];

export default function Home() {
  const [expandedExp, setExpandedExp] = useState(null);
  const typingText = useTyping('I build scalable systems with Java, Spring Boot, and AWS 🚀');

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen pb-24">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Vikas R</h1>
          <p className="text-2xl text-gray-300 mb-2">Java Full Stack Developer</p>
          <p className="text-gray-400 italic h-8">{typingText}</p>
        </motion.div>

        <div className="mt-8 flex gap-4">
          <a href="/resume" className="px-6 py-3 bg-white text-black rounded-lg hover:scale-105 transition font-semibold hover:bg-gray-200">
            View Resume
          </a>
          <a href="/resume" target="_blank" className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition flex items-center gap-2">
            <FaFileDownload /> Print / Download
          </a>
        </div>

        <div className="mt-6 flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vikas-r-37063b159/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* About Summary */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Java Full Stack Developer with 5+ years building scalable enterprise applications using Java 17, Spring Boot 3.x, React 18, and microservices architecture. Delivered AI/ML integrations (fraud detection APIs, LLM-powered analytics, NLP pipelines) into production Java systems at Capital One and healthcare platforms. Expert in AWS EKS, Docker/Kubernetes, Kafka streaming, Jenkins CI/CD, and OAuth 2.0/JWT security. Reduced system latency 25%+ through optimized Spring Boot services and database indexing across banking, healthcare, and retail domains.
        </p>
      </section>

      {/* Work Experience */}
      <section id="experience" className="p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-700 transition focus:outline-none"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-400">{exp.company} • {exp.location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 hidden sm:block">{exp.duration}</span>
                  <motion.div
                    animate={{ rotate: expandedExp === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300"
                  >
                    <FaChevronDown size={20} />
                  </motion.div>
                </div>
              </button>

              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedExp === i ? 'auto' : 0,
                  opacity: expandedExp === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-700"
              >
                <div className="p-6 pt-0 border-t border-gray-600">
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="text-gray-300 text-sm leading-relaxed flex gap-3">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="p-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-gray-800 border border-gray-700"
                >
                  <h3 className="font-semibold text-blue-400">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-gray-800 border border-gray-700"
                >
                  <h3 className="font-semibold text-blue-400">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-lg bg-gray-800 border border-gray-700"
            >
              <h3 className="font-semibold text-blue-400 mb-3">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech, j) => (
                  <span key={j} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <motion.a
            href="tel:682-245-3297"
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
          >
            <FaPhone className="text-3xl text-blue-400 mx-auto mb-2" />
            <p className="text-gray-400">Phone</p>
            <p className="font-semibold text-white">682-245-3297</p>
          </motion.a>

          <motion.a
            href="mailto:varmar2113@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
          >
            <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-2" />
            <p className="text-gray-400">Email</p>
            <p className="font-semibold text-white">varmar2113@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vikas-r-37063b159/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
          >
            <FaLinkedin className="text-3xl text-blue-400 mx-auto mb-2" />
            <p className="text-gray-400">LinkedIn</p>
            <p className="font-semibold text-white">Connect With Me</p>
          </motion.a>
        </div>
      </section>

      <footer className="text-center p-6 text-gray-500 text-sm border-t border-gray-700">
        © 2026 Vikas R. All rights reserved.
      </footer>

      {/* Floating social tile */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/95 border border-gray-700 rounded-xl shadow-xl p-3 flex items-center gap-3">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition text-xl" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vikas-r-37063b159/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition text-xl" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}