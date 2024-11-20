import todo from "../githubassets/todo.webp";
import ecommerce from "../githubassets/webstore.webp.webp";
import langai from "../githubassets/langai.webp";
import weather from "../githubassets/weather.webp";
import anonalyze from "../assets/anonalyze.webp"


export const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Ahmed Abduljader, a passionate Computer Science student and Software Engineer.",
  description:
    "I'm currently in my 2nd year at York University",
  resumeLinkText: "Open Resume",
  resumeLink: "/AhmedAbdresume.pdf",
};

export const PROJECTS = [
  {
    name: "AnonAlyze",
    description: "Winner of Best Security Hack by 1Password at CTRLHACKDELETE 2024",
    image: anonalyze,
    link: "https://github.com/AhmedJader/AnonAlyze",
  },
  {
    name: "LangAI",
    description: "NextJs, TailwindCSS, Typescript, Preline, Openai API, Tabler Icons,  JavaScript",
    image: langai,
    link: "https://github.com/AhmedJader/LanguageAi",
  },
  {
    name: "Ecommerce Website",
    description: "",
    image: ecommerce,
    link: "https://github.com/AhmedJader/Refined-Ecommerce-Web-App",
  },
  {
    name: "Weather App",
    description: "",
    image: weather,
    link: "https://github.com/AhmedJader/WeatherAppAPI",
  },
  {
    name: "Full Stack TODO App",
    description: "",
    image: todo,
    link: "https://github.com/AhmedJader/fullstack-todo-frontend",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am currently in my 2nd year at York University. I have a deep passion in technology from a young age, analyzing how software was built and the technology involved in creating various tools and applications.",
    "In my spare time I enjoy listening to various genres of music such as HipHop, Pop, R&B, and Electronic Music. I also enjoy consuming various forms of media such as video games, reading webtoons and anime (Stereotypical of a CS student I know...)",
  ],
};

export const CONTACT_CONTENT = {
  headline: "Get in touch (;",
  description:
    "Feel free to reach out to me on any of the following platforms.",
  email: "Ahmedjader837@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/AhmedJader",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ahmed-abduljader-4464b325a/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Ahmed Abduljader. All rights reserved.`,
};
