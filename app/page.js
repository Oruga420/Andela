"use client";

import BlueCanvas from "./components/BlueCanvas";

const summary =
  "AI Solutions Architect and Community Leader with a proven track record of shipping 120+ GenAI applications and driving enterprise AI adoption from 47% to 97%. Deeply experienced in assessing technical capabilities, having successfully transitioned from Project Management to Data/AI Engineering. Founder of a 100+ member AI community, combining technical expertise in LLMs, RAG, and Agentic Workflows with the soft skills required to advise CTOs and evaluate top-tier engineering talent. Experienced in GCP, AWS, and Vercel environments.";

const chips = [
  "Agentic Workflows",
  "LLMs (OpenAI, Anthropic)",
  "RAG",
  "Prompt Engineering",
  "Next.js & Vercel",
  "GCP & AWS",
  "Technical Talent Assessment",
  "Agile/Scrum",
];

const experiences = [
  {
    role: "AI Solutions Architect",
    company: "Assent",
    location: "Canada (Remote)",
    dates: "Feb 2025 - Present",
    bullets: [
      "Generated over $1 million in savings and reclaimed 20,000+ man-hours annually by replacing manual tasks with custom Agentic Workflows and GenAI automations.",
      "Drove internal AI adoption metrics from 47% to 97% through strategic implementation and internal education.",
      "Designed secure, scalable architectures using GCP, AWS, and Vercel, integrating LLMs via live RAG and custom MCP servers.",
      "Established documentation and governance patterns, enabling admins and developers to deploy safe, auditable AI tools.",
    ],
  },
  {
    role: "AI Solutions Architect",
    company: "Sesh | AI Solutions",
    location: "Toronto, Canada",
    dates: "Nov 2021 - Present",
    bullets: [
      "Lead a community of 100+ members, teaching AI concepts and evaluating technical progress, directly aligning with the assessment needs of the Andela role.",
      "Architected over 120 GenAI applications and 90+ chatbots across 30 distinct clients, ensuring productive, real-world utility.",
      "Provide technical guidance to small businesses and groups like Latinas in Tech and Somos Latinos in Tech, translating complex AI advances into actionable engineering strategies.",
    ],
  },
  {
    role: "Salesforce Consultant",
    company: "Online Business Systems",
    location: "Toronto, Canada",
    dates: "Jun 2024 - Nov 2024",
    bullets: [
      "Advised clients on Agentforce and Marketing Cloud implementations, defining technical requirements and talent needs for successful project delivery.",
      "Worked between sales, service, and marketing teams to align technical execution with business goals.",
    ],
  },
  {
    role: "Salesforce Manager",
    company: "Globalization Partners",
    location: "Ontario, Canada",
    dates: "Nov 2018 - Nov 2023",
    bullets: [
      "Successfully transitioned from Admin to Manager to GenAI Developer, providing first-hand experience in engineering career transitions.",
      "Built early GenAI-powered workflows and internal chatbots (GIA), utilizing LLMs to support development teams.",
    ],
  },
  {
    role: "Project Manager",
    company: "Amstar DMC",
    location: "Mexico",
    dates: "May 2016 - Nov 2018",
    bullets: [
      "Managed complex web and integration projects with budgets up to $700k, leading cross-functional teams of up to 18 people.",
    ],
  },
];

const education = [
  {
    title: "Ingenieria en Sistemas",
    school: "Universidad Marista de MAcrida",
    dates: "2007",
    details: ["GPA: 3.9/4.0"],
  },
  {
    title: "Certifications",
    school: "",
    dates: "",
    details: [
      "Salesforce Certified AI Associate",
      "Salesforce Certified Administrator (SCA)",
    ],
  },
];

const contact = [
  { label: "Phone", value: "+1 437 243 3693" },
  { label: "Email", value: "alex@seshwithfriends.org" },
  { label: "LinkedIn", value: "linkedin.com/in/amorac" },
  { label: "Website", value: "eloruga.com/about/index.html" },
  { label: "GitHub", value: "github.com/Oruga420" },
];

export default function Page() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page">
      <div className="toolbar">
        <button className="button" onClick={handlePrint}>
          Download PDF
        </button>
      </div>
      <div style={{ position: "absolute", inset: 0 }}>
        <BlueCanvas />
      </div>
      <div className="header">
        <div className="name-block">
          <h1 className="name">Alejandro De La Mora</h1>
          <p className="role">(Role) AI Solutions Architect & Community Leader</p>
          <p className="summary">{summary}</p>
        </div>
        <div className="contact-card">
          <h3 className="contact-title">Contact</h3>
          <div className="contact-list">
            {contact.map((item) => (
              <div key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Areas of Expertise</h3>
        <div className="chip-row">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Work Experience</h3>
        <ul className="experience">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.role}`} className="experience-item">
              <div className="experience-title">
                <h4 className="experience-role">
                  {job.role} | {job.company}
                </h4>
                <span>{job.dates}</span>
              </div>
              <div className="experience-meta">{job.location}</div>
              <ul className="experience-list">
                {job.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Education & Certifications</h3>
        <ul className="education">
          {education.map((edu) => (
            <li key={edu.title} className="edu-item">
              <h4 className="edu-title">{edu.title}</h4>
              {edu.school && <div className="edu-meta">{edu.school}</div>}
              {edu.dates && <div className="edu-meta">{edu.dates}</div>}
              <ul className="experience-list">
                {edu.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
