import React from "react";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "OpenAI API",
      "Solidity",
      "Smart Contracts",
      "Git & GitHub",
      "Docker",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Penetration Testing",
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "SQL Injection",
      "OWASP Top 10",
      "Ethical Hacking",
      "Network Security",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-12 text-cyberGreen"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Skills & Cybersecurity Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map(({ title, skills }) => (
          <div key={title} className="bg-codeBlue rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
