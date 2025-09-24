import emoji from "react-easy-emoji";
// @ts-ignore - Module declaration not being picked up by TypeScript
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {content} from "./customLib/jasperschulte-com/content";
import {format} from "date-fns";
// @ts-ignore - Module declaration not being picked up by TypeScript
import {camelCase, chain, first, last} from "lodash";

// Helper function to conditionally import company logos
// @ts-ignore - Parameter type not needed in JS file
const getCompanyLogo = companyName => {
  try {
    return require(`./assets/images/${camelCase(companyName)}Logo.webp`)
  } catch (error) {
    if (String(error).startsWith("Error: Cannot find module '")) {
      console.warn(companyName)
      console.warn(String(error))
      // If the logo file doesn't exist, return undefined
      return undefined
    }
    throw error
  }
}

const eSToDate = eS =>
  `${format(last(eS).startDate, 'yyyy MMMM')} - ${
    first(eS).endDate ? format(first(eS).endDate, 'yyyy MMMM') : 'Present'
  }`

const portfolio = {
  illustration: {
    animated: true
  },
  greeting: {
    about: content.pitch.elevatorPitch,
    username: "jasperschulte",
    title: "Hi, I'm Jasper",
    subTitle: emoji(content.pitch.label),
    displayGreeting: true
  },
  socialMediaLinks: {
    linkedin: "https://www.linkedin.com/in/jasperschulte/",
    display: true
  },
  splashScreen: {
    enabled: false,
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
    experience: chain(content.experiences)
      .orderBy(e => {
        if (e.role.toLowerCase().includes('engineering leader')) {
          return 9999999999999
        }
        return Number(e.startDate)
      }, 'desc')
      .groupBy((e) => {
        if (e.companyName === 'jasperschulte.com') {
          return Math.random()
        }
        return e.companyName
      })
      .map(eS => {
        return {
          company: first(eS).companyName,
          companylogo: getCompanyLogo(first(eS).companyName),
          desc: '',
          descBullets: eS.flatMap(e => e.highlights),
          role: first(eS).role,
          date: eSToDate(eS),
        }
      })
      .value(),
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
    title: emoji("Contact Me"),
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
