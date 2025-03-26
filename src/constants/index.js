import todo from "../githubassets/todo.webp";
import ecommerce from "../githubassets/webstore.webp.webp";
import langai from "../githubassets/langai.webp";
import weather from "../githubassets/weather.webp";
import anonalyze from "../assets/anonalyze.webp"
import soundmates from "../githubassets/soundmates.webp";
import broke from "../githubassets/brokewoke.webp";


export const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Ahmed Abduljader, a passionate Computer Science student and Software Engineer.",
  description:
    "I'm currently in my 2nd year at York University",
  resumeLinkText: "Open Resume",
  resumeLink: "/ahmedjad.pdf",
};

export const PROJECTS = [
  {
    name: "AnonAlyze CTRLHACKDELETE 2024",
    description: "Winner of Best Security Hack by 1Password at CTRLHACKDELETE 2024",
    image: anonalyze,
    link: "https://github.com/AhmedJader/AnonAlyze",
  },
  {
    name: "Broke2Woke UofTHacks 12",
    description: "NextJS, TailwindCSS, Typescript, Javascript, Cohere AI, Express.js, Node.js, PostgreSQL, JWT, Flask, scikit-learn",
    image: broke,
    link: "https://github.com/HassanA01/UofTHacks12",
  },
  {
    name: "SoundMates DeltaHacks 11",
    description: "NextJS, TailwindCSS, Typescript, Javascript, Oauth 2.0, SpotifyAPI, Cohere AI",
    image: soundmates,
    link: "https://github.com/AhmedJader/SoundMates",
  },
  {
    name: "LangAI",
    description: "NextJs, TailwindCSS, Typescript, Preline, Openai API, Tabler Icons,  JavaScript",
    image: langai,
    link: "https://github.com/AhmedJader/LanguageAi",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Hey, I’m Ahmed Abduljader, a Computer Science student at York University with a passion for software development, AI, and all things tech.",
    "I could use this space to list my skills, but let’s be real—you can already guess that I spend most of my time coding, reading documentation, and working on projects. Instead, let me tell you what makes me different:",
    "When I’m not behind a screen, I’m in the gym pushing my limits—literally. I started my fitness journey benching a humble 95 lbs, but through relentless progression, strategic training, and the right supplementation (yes, I dry scoop pre-workout and creatine), I’ve hit a staggering 225 lbs bench press while maxing out the chest-fly machine (because let’s be honest, chest day is elite), whilst going from being dangerously underweight for my size, to putting on a whopping 20-30 pounds of muscle in under a year all around my body",
    "Over the past four years, I’ve refined my own training philosophy, combining compound strength movements with cable-based isolation work to optimize muscle growth and performance. Understanding how my body responds to different training styles is a process I approach scientifically—JUST like coding.",
    "why did I choose to describe myself in this out-of-the-norm manner? Because this is how I perceive situations, it's a glimpse into how I plan out my goals, achieve my ambitions, and it's more than 'I like developing just cuz'.",
    "Whether it’s engineering robust software solutions or perfecting my physique, I’m always analyzing, iterating, and improving, and simply showcasing ONE of my hobbies has hopefully exposed you to who I am behind the screen.",
    "If you’re into software development, AI, or pushing limits (in tech or the gym), let’s connect! I’m always open to learning, collaborating, and discussing ambitious ideas.",
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
