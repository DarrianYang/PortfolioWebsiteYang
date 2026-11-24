export const profile = {
  name: "Darrian Yang",
  title: "Supervisor – Robot Teleoperations",
  company: "Symbotic",
  location: "Dracut, MA",
  email: "darrianyang978@gmail.com",
  phone: "(978) 866-1605",
  phoneHref: "+19788661605",
  website: "https://darrianyang.com",
  github: "https://github.com/DarrianYang",
  linkedin: "https://www.linkedin.com/in/darrianyang",
  resumePath: "/resume.pdf",
  summary:
    "Robot Teleoperations Supervisor with a background in robotics infrastructure, systems engineering, and automation. I lead five direct reports within a larger team providing 24/7 support to automated warehouse customer sites.",
  intro: [
    "I’m a Robot Teleoperations Supervisor with a background in robotics infrastructure, systems engineering, and automation.",
    "I lead five direct reports within a larger team providing 24/7 robotics support to automated warehouse customer sites. Across the broader team, I coordinate procedures, scheduling, and training while helping improve robot reliability and meet customer needs.",
    "I also contribute to internal application development, automation, reporting, and cross-functional engineering projects.",
  ],
};

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/resume/", label: "Resume" },
] as const;

export const experience = [
  {
    company: "Symbotic",
    location: "Wilmington, MA",
    role: "Supervisor – Robot Teleoperations",
    dates: "August 2026 – Present",
    bullets: [
      "Supervise five direct reports, providing guidance, coaching, and development as part of a larger 24/7 robot teleoperations team.",
      "Coordinate teleoperations procedures, scheduling, coverage, and training across the broader team to support consistent 24/7 operations.",
      "Support customer needs by helping keep robots healthy and processing transactions so sites can meet their quotas; apply knowledge of SKU handling, product placement, and inbound and outbound warehouse operations when troubleshooting.",
      "Help develop and support the internal teleoperations application, and actively contribute to new projects and improvements to robotics workflows.",
      "Lead cross-functional projects and encourage continuous improvement in team performance and operational efficiency.",
      "Automate Snowflake SQL queries to deliver daily Sankey reports on robotics performance, workflow trends, and recurring failures.",
    ],
  },
  {
    company: "Symbotic",
    location: "Wilmington, MA",
    role: "Robotics Infrastructure Engineer II",
    dates: "August 2025 – August 2026",
    bullets: [
      "Support periodic vision container deployments to Walmart customer sites using Ubuntu Linux, Python, and shell scripts, coordinating production changes with the MLOps team through the Change Request (CR) process.",
      "Run post-deployment script checks to identify robots with failed vision container updates and review command-line logs to verify deployment results.",
      "Own robotics infrastructure support, teleoperations, and recovery procedures across distributed automated warehouse installations.",
      "Monitor production systems and analyze SQL, Tableau, and Sankey data to identify recurring faults, performance trends, and operational bottlenecks.",
      "Maintain Python-based support tools, technical runbooks, and escalation procedures; document and track operational issues in Confluence and Jira.",
    ],
  },
  {
    company: "Symbotic",
    location: "Wilmington, MA",
    role: "Robotics Infrastructure Engineer",
    dates: "August 2024 – August 2025",
    bullets: [
      "Executed overnight vision container deployments to Walmart customer sites using Ubuntu Linux, Python, and shell scripts through the MLOps change request process.",
      "Checked deployment script output and logs to identify robots with failed updates and flag systems requiring follow-up.",
      "Supported multi-site robotic warehouse infrastructure through production monitoring, fault isolation, and recovery of hardware and software issues.",
      "Collaborated with software and operations teams on production troubleshooting, tooling updates, and operational improvements.",
    ],
  },
  {
    company: "MIT Lincoln Laboratory",
    location: "Lexington, MA",
    role: "System Administrator Co-Op (Group 92)",
    dates: "September 2023 – January 2024",
    bullets: [
      "Provisioned and configured a Red Hat Enterprise Linux 9 virtual machine to host an internal web application using Node.js, Express, React, and MySQL.",
      "Configured REST API endpoints and SSL/TLS certificates for secure application access.",
      "Supported OS patching, system imaging, hardware troubleshooting, and workstation deployments.",
      "Held a U.S. Secret security clearance during the co-op.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Warehouse & logistics operations",
    items: ["Automated warehouse systems", "SKU handling", "Product placement", "Inbound & outbound operations", "Robotics operations"],
  },
  {
    label: "Systems & OS administration",
    items: ["Ubuntu Linux", "RHEL 8/9", "CentOS", "Windows", "SSH", "System monitoring"],
  },
  {
    label: "Scripting & tooling",
    items: ["Python", "Automation scripts", "Internal support utilities", "GUI tools", "Bash / shell", "REST APIs", "Power Automate"],
  },
  {
    label: "Infrastructure & reliability",
    items: ["Distributed robotics monitoring", "Production troubleshooting", "Incident escalation", "Recovery workflows"],
  },
  {
    label: "Deployment & validation",
    items: ["Vision container deployments", "Change request (CR) process", "Post-deployment checks", "Command-line log review"],
  },
  {
    label: "Observability & telemetry",
    items: ["Snowflake", "SQL", "Tableau dashboards", "Sankey workflow analysis", "Cloud UI monitoring consoles"],
  },
  {
    label: "Platforms & toolsets",
    items: ["Git", "GitHub", "Jira", "Confluence", "ServiceNow", "MySQL", "SharePoint", "Microsoft Teams"],
  },
];

export const projects = [
  {
    name: "Full-stack internal board application",
    stack: ["RHEL 9", "Node.js", "Express", "React", "MySQL", "SSL"],
    bullets: [
      "Built and hosted a web application on a RHEL 9 virtual machine with React, Node.js, Express, and MySQL.",
      "Developed eight REST API endpoints to retrieve application data from MySQL.",
      "Configured SSL certificates to secure the application.",
    ],
  },
];

export const education = {
  school: "Wentworth Institute of Technology",
  location: "Boston, MA",
  degree: "Bachelor of Science in Computer Science",
  dates: "Graduated August 2024",
  coursework: [
    "Operating Systems",
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Network Architecture",
  ],
};
