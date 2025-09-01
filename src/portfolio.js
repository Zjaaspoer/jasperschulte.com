import emoji from "react-easy-emoji";
// @ts-ignore - Module declaration not being picked up by TypeScript
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {content} from "./customLib/jasperschulte.com/content";
import {format} from "date-fns";
// @ts-ignore - Module declaration not being picked up by TypeScript
import {camelCase} from "lodash";

// Helper function to conditionally import company logos
// @ts-ignore - Parameter type not needed in JS file
const getCompanyLogo = (companyName) => {
  try {
    return require(`./assets/images/${camelCase(companyName)}Logo.png`);
  } catch (error) {
    if (String(error).startsWith("Error: Cannot find module '")) {
      console.warn(companyName)
      console.warn(String(error))
      // If the logo file doesn't exist, return undefined
      return undefined;
    }
    throw error;
  }
};

const portfolio = {
  illustration: {
    animated: true
  },
  greeting: {
    username: "jasperschulte",
    title: "Hi, I'm Jasper",
    subTitle: emoji("Your next (fractional) CTO"),
    displayGreeting: true
  },
  socialMediaLinks: {
    linkedin: "https://www.linkedin.com/in/jasperschulte/",
    display: true
  },
  splashScreen: {
    enabled: true,
    animation: splashAnimation,
    duration: 2000
  },
  skillsSection: {
    title: "",
    subTitle: "",
    skills: [],
    softwareSkills: [],
    display: false
  },
  educationInfo: {
    display: false,
    schools: []
  },
  techStack: {
    viewSkillBars: false,
    experience: [],
    displayCodersrank: false
  },
  workExperiences: {
    display: true,
    experience: content.experiences.map(e => ({
      company: e.companyName,
      companylogo: getCompanyLogo(e.companyName),
      desc: '',
      descBullets: e.highlights,
      role: e.role,
      date: `${format(e.startDate, "yyyy MMMM")} - ${
        e.endDate ? format(e.endDate, "yyyy MMMM") : "Present"
      }`
    }))
  },
  openSource: {
    showGithubProfile: "false",
    display: false
  },
  bigProjects: {
    title: "",
    subtitle: "",
    projects: [],
    display: false
  },
  achievementSection: {
    title: emoji("Achievements"),
    subtitle: "[TODO]",
    achievementsCards: [],
    display: false
  },
  blogSection: {
    title: "",
    subtitle: "",
    displayMediumBlogs: "false",
    blogs: [],
    display: false
  },
  talkSection: {
    title: "",
    subtitle: emoji(""),
    talks: [],
    display: false
  },
  podcastSection: {
    title: emoji(""),
    subtitle: "",
    podcast: [],
    display: false
  },
  contactInfo: {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    email_address: "<firstname>@<firstname><lastname>.com"
  },
  twitterDetails: {
    userName: "",
    display: false
  },
  isHireable: true,
  resumeSection: {
    title: "",
    subtitle: "",
    display: false
  }
};

// Automatically export all top-level properties
export const {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
} = portfolio;
