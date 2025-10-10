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

// @ts-ignore - Parameter type not needed in JS file
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
      // @ts-ignore - Parameter type not needed in JS file
      .orderBy(e => {
        if (e.role.toLowerCase().includes('engineering leader')) {
          return 9999999999999
        }
        return Number(e.startDate)
      }, 'desc')
      // @ts-ignore - Parameter type not needed in JS file
      .groupBy((e) => {
        if (e.companyName === 'jasperschulte.com') {
          return Math.random()
        }
        return e.companyName
      })
      // @ts-ignore - Parameter type not needed in JS file
      .map(eS => {
        return {
          company: first(eS).companyName,
          companylogo: getCompanyLogo(first(eS).companyName),
          desc: '',
          // @ts-ignore - Parameter type not needed in JS file
          descBullets: eS.flatMap(e => e.highlights),
          role: first(eS).role,
          date: eSToDate(eS),
        }
      })
      .value(),
  },
  fractionalLeadership: {
    display: true,
    title: "Fractional Leadership",
    paragraphs: [
      'A Fractional Leader brings executive-level experience to a company part-time — offering strategy, structure, and leadership without the cost or permanence of a full-time hire.',
      'As a Fractional CTO, I help founders and leadership teams regain control of their technology organization. I focus on restoring clarity, stabilizing delivery and quality, and coaching internal leaders to take ownership. My ultimate goal is to make myself unnecessary — constantly reducing the hours I’m needed and removing myself from the critical path as quickly as possible.',
      'Where traditional consultants advise, fractional leaders work within the organization to create lasting change. I combine over twenty years of engineering and leadership experience at Booking.com, Tripadvisor, Getir, and SnappCar with a pragmatic, transparent style that builds trust fast.',
      'Every engagement includes a living document that tracks observations, goals, and progress, ensuring full transparency and alignment. The result is calm, focus, and sustainable momentum — long after I step back.',
    ]
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
  fractionalLeadership,
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
