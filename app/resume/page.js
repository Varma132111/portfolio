'use client';

import { motion } from 'framer-motion';
import { FaFileDownload, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const resumeData = {
  name: 'Vikas R',
  title: 'Java Full Stack Developer',
  contact: {
    phone: '682-245-3297',
    email: 'varmar2113@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vikas-varma'
  },
  summary: `Java Full Stack Engineer with nearly 5 years of active hands-on experience designing and building scalable distributed
systems and enterprise applications using Java 17/21, Spring Boot 3.x, React 18, and microservices architecture.
Delivered AI/ML integrations (fraud detection APIs, LLM-powered analytics, NLP pipelines) into production Java
systems at Capital One and healthcare platforms. Expert in AWS EKS, Docker/Kubernetes, Kafka streaming, Jenkins
CI/CD, and OAuth 2.0/JWT security. Reduced system latency 25%+ through optimized Spring Boot services and
database indexing across banking, healthcare, and retail domains.`,
  
  skills: {
    'Programming Languages': 'Java 21, Java 17, Java 11, JavaScript (ES6+), TypeScript, SQL, Python',
    'Frontend Technologies': 'React.js, Angular, Redux, HTML5, CSS3, JavaScript, AJAX, JSON',
    'Backend Technologies': 'Spring Boot, Spring MVC, Spring Cloud, Microservices Architecture, Distributed Systems, Event-Driven Architecture, Hibernate/JPA, Spring Security, JUnit, Mockito',
    'Cloud/DevOps': 'AWS, Azure, Docker, Kubernetes, Helm, Jenkins, GitHub Actions, CI/CD pipelines, Terraform, Maven, Gradle',
    'API / Security': 'RESTful APIs, GraphQL APIs, OAuth 2.0, JWT, OpenID Connect, Keycloak SSO, Swagger/OpenAPI, REST Assured, mTLS',
    'AI / Machine Learning': 'Generative AI (GenAI), Large Language Models (LLM) Integration, Natural Language Processing (NLP), AI/ML APIs, AI-assisted Fraud Detection APIs, GitHub Copilot',
    'Messaging & Streaming': 'Apache Kafka, JMS, Event-Driven Architecture, Event Sourcing',
    'Databases': 'Oracle, MySQL, PostgreSQL, Cassandra, DynamoDB, MongoDB, Redis',
    'Monitoring & Logging': 'Prometheus, Grafana, ELK Stack',
    'Version Control & Tools': 'Git, GitHub, IntelliJ IDEA, VS Code, Postman',
    'Methodologies': 'Agile (Scrum), DevOps, Unit Testing, System Design'
  },

  experience: [
    {
      company: 'Capital One',
      position: 'Java Full Stack Developer',
      location: 'Plano, United States',
      duration: 'Jun 2025 — Present',
      highlights: [
        'Designed and built event-driven distributed systems handling 10M+ daily transactions; architected 15+ Spring Boot microservices using Spring Cloud (Eureka, Gateway, Config Server), reducing API latency 28% via reactive programming and connection pooling.',
        'Built AI-powered fraud detection platform integrating Python ML models (XGBoost, BERT) with Java services via Kafka streams; achieved 92% fraud detection accuracy, cutting false positives 35%.',
        'Engineered React 18 dashboards with real-time WebSocket updates and LLM chat interfaces for risk analysts, improving alert triage time 40%.',
        'Containerized services with Docker, deployed to AWS EKS with blue-green deployments via Jenkins/GitHub Actions; achieved 99.95% uptime.',
        'Implemented OAuth 2.0 + JWT with Spring Security across 20+ APIs; integrated Keycloak for SSO, significantly reducing authentication-related incidents.',
        'Built ELK Stack dashboards monitoring 10M+ daily transactions, reducing MTTR from 4 hrs to 45 min.'
      ]
    },
    {
      company: 'Northside Hospital',
      position: 'Java Full Stack Developer',
      location: 'Atlanta, United States',
      duration: 'May 2024 — Apr 2025',
      highlights: [
        'Architected patient management microservices using Spring Boot + Azure AKS; designed distributed system processing 50K+ daily appointments with sub-100ms response times.',
        'Integrated Apache Kafka for real-time lab results and notifications; implemented event sourcing pattern, cutting data sync delays 60%.',
        'Provisioned infrastructure with Terraform (Azure ARM templates); managed 50+ Kubernetes pods across dev/staging/prod, saving 20 hours/month in manual ops.',
        'Enhanced observability with Prometheus/Grafana + custom Spring Boot Actuator endpoints; reduced P99 latency outliers 32%.',
        'Led HL7 FHIR API development connecting Spring Boot services to Epic/Cerner EHR systems, enabling bidirectional patient data exchange for 15K+ daily records with 99.9% data accuracy and HIPAA/SOC2 compliance.',
        'Engineered patient portal using React 18 + Spring Boot backend with OAuth 2.0/JWT authentication, delivering self-service appointment scheduling and lab result access to 200K+ patients, cutting call center volume 38%.'
      ]
    },
    {
      company: 'Reliance Retail',
      position: 'Java Full Stack Developer',
      location: 'Hyderabad, India',
      duration: 'Feb 2022 — Jul 2023',
      highlights: [
        'Built e-commerce platform with Spring Boot REST APIs + React 17 serving 2M+ SKUs; optimized MongoDB indexes, cutting catalog queries 25%.',
        'Designed domain-driven microservices for order/inventory management; used Kafka for async order processing, handling 10K orders/hour at peak load.',
        'Refactored legacy SQL stored procedures to JPA repositories + caching; reduced database load 40%, enabling 3x concurrent users.',
        'Led CI/CD transformation with Jenkins + Maven; automated 90% of deployments, cutting release cycles from 2 weeks to 2 days.',
        'Engineered real-time inventory sync using Spring Boot REST APIs + Redis caching across 2M+ SKUs, integrating Apache Kafka for cross-warehouse updates that eliminated 22% of stockouts during peak sales.'
      ]
    },
    {
      company: 'HDFC ERGO General Insurance Company',
      position: 'Java Full Stack Developer',
      location: 'Bangalore, India',
      duration: 'Apr 2020 — Jan 2022',
      highlights: [
        'Developed claims processing system with Java 11, Spring Boot, GraphQL APIs; supported 100K+ policies with sub-200ms query performance.',
        'Integrated Apache Spark for insurance analytics; built fraud detection pipelines processing 1TB+ claims data daily, helped identify potential fraud worth $2.3M.',
        'Implemented OAuth 2.0 + mTLS across partner APIs; achieved SOC2 compliance for claims data exchange with 50+ insurance partners.',
        'Migrated monolith to Docker microservices; reduced infrastructure costs 45% via AWS ECS auto-scaling.',
        'Optimized claims adjudication workflows using Spring Boot 2.x + GraphQL subscriptions for real-time status updates, automating 65% of routine claims (50K+/month) and reducing processing time from 7 days to 18 hours.'
      ]
    }
  ],

  certifications: [
    'AWS Certified Developer Associate',
    'Oracle Java SE 11 Professional',
    'IBM Enterprise Data Science',
    'IBM Cloud - Based Mobile Solutions',
    'IBM Getting Started with Cloud for the Enterprise'
  ],

  education: [
    {
      school: 'University of the Cumberlands',
      location: 'USA',
      degree: "Master's",
      field: 'Information Technology'
    },
    {
      school: 'PRIST University',
      location: 'India',
      degree: "Bachelor's",
      field: 'Information Technology'
    }
  ]
};

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with Navigation */}
        <motion.div className="flex justify-between items-center mb-8" variants={itemVariants}>
          <Link
            href="/"
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <FaFileDownload size={16} />
            Print / Download
          </button>
        </motion.div>

        {/* Resume Container */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8 md:p-12"
          variants={itemVariants}
        >
          {/* Header */}
          <motion.div className="text-center border-b-2 border-slate-200 dark:border-slate-700 pb-6 mb-8" variants={itemVariants}>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{resumeData.name}</h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{resumeData.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <FaPhone size={14} />
                {resumeData.contact.phone}
              </a>
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <FaEnvelope size={14} />
                {resumeData.contact.email}
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <FaLinkedin size={14} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.section className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">SUMMARY</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {resumeData.summary}
            </p>
          </motion.section>

          {/* Skills */}
          <motion.section className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">SKILLS</h2>
            <div className="space-y-3">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wide">
                    {category}:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 ml-4">
                    {skills}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">EXPERIENCE</h2>
            <div className="space-y-8">
              {resumeData.experience.map((job, index) => (
                <motion.div key={index} className="border-l-4 border-blue-600 pl-6" variants={itemVariants}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {job.position}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {job.company}, {job.location}
                      </p>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                      {job.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-justify">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">CERTIFICATIONS</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 mt-1">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Education */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">EDUCATION</h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <motion.div key={index} className="border-l-4 border-blue-600 pl-6" variants={itemVariants}>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.school}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {edu.degree}, {edu.field}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </motion.div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            background: white;
          }
          .bg-gradient-to-br {
            background: white !important;
          }
          button {
            display: none;
          }
          a[href^="/"] {
            display: none;
          }
          .dark\:bg-slate-800 {
            background: white !important;
          }
          .dark\:text-white {
            color: #000 !important;
          }
          .dark\:text-slate-300 {
            color: #666 !important;
          }
        }
      `}</style>
    </div>
  );
}
