export const profile = {
  name: "Darrian Yang",
  title: "Robotics Infrastructure Engineer II",
  company: "Symbotic",
  location: "Dracut, MA",
  email: "darrianyang978@gmail.com",
  website: "https://darrianyang.com",
  github: "https://github.com/DarrianYang",
  linkedin: "https://www.linkedin.com/in/darrianyang",
  resumePath: "/resume.pdf",
  summary:
    "Robotics infrastructure engineer supporting production robotics systems and vision container deployments to Walmart customer sites. Experienced with Ubuntu, Python, shell scripting, MLOps change requests, post-deployment checks, and production troubleshooting. Skilled in RHEL systems administration, telemetry analysis (SQL, Tableau), production triage, and operational hardening. Prior U.S. Secret Clearance.",
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
    role: "Robotics Infrastructure Engineer II",
    dates: "August 2025 – Present",
    bullets: [
      "Continue to support vision container deployments to Walmart customer sites using Ubuntu, Python, and shell scripts, coordinating changes with the MLOps team through the CR process.",
      "Run post-deployment checks that identify robots with failed vision container updates; review command-line output and logs to verify results.",
      "Support production robotics infrastructure and teleoperations across automated warehouse sites, troubleshooting issues and coordinating recovery.",
      "Analyze operational data in SQL and Tableau to identify recurring issues, performance trends, and areas for improvement.",
      "Maintain SOPs and escalation guidance in Confluence and track engineering issues and operational work in Jira.",
    ],
  },
  {
    company: "Symbotic",
    location: "Wilmington, MA",
    role: "Robotics Infrastructure Engineer",
    dates: "August 2024 – August 2025",
    bullets: [
      "Executed overnight vision container deployments to Walmart customer sites using Ubuntu Linux, Python, and shell scripts through the MLOps change request process.",
      "Monitored deployments and reviewed script output to identify robots requiring follow-up after software updates.",
      "Supported robotics troubleshooting and recovery at production warehouse sites, using operational data and logs to investigate issues.",
      "Worked with engineering teams on production issues, tooling updates, documentation, and process improvements.",
    ],
  },
  {
    company: "MIT Lincoln Laboratory",
    location: "Lexington, MA",
    role: "System Administrator Co-Op (Group 92)",
    dates: "September 2023 – January 2024",
    bullets: [
      "Deployed an internal web application on Red Hat Enterprise Linux 9 using Node.js, Express, React, and MySQL.",
      "Built REST API endpoints and configured SSL certificates for secure application access.",
      "Supported OS patching, system imaging, hardware troubleshooting, and workstation deployments.",
      "Held a U.S. Secret security clearance during the co-op.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Operating systems",
    items: ["Ubuntu Linux", "Red Hat Enterprise Linux", "CentOS", "Windows", "SSH"],
  },
  {
    label: "Scripting & deployment",
    items: [
      "Python",
      "Bash / shell",
      "Vision container deployments",
      "Change request (CR) process",
    ],
  },
  {
    label: "Testing & monitoring",
    items: [
      "Post-deployment checks",
      "Command-line logs",
      "Failure identification",
      "Robotics monitoring",
      "Tableau",
    ],
  },
  {
    label: "Engineering tools",
    items: ["Jira", "Confluence", "Git", "GitHub", "SQL", "Power Automate"],
  },
  {
    label: "Robotics operations",
    items: [
      "Production troubleshooting",
      "Teleoperations",
      "Incident response",
      "SOPs",
      "Cross-team coordination",
    ],
  },
  {
    label: "Additional",
    items: ["REST APIs", "MySQL", "Node.js", "React", "Microsoft Teams", "SharePoint"],
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
