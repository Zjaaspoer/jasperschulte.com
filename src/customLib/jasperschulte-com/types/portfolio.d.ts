import { ReactElement } from 'react'

// splash Screen
export interface SplashScreen {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly animation: any
  readonly duration: number
  readonly enabled: boolean
}

// illustration
export interface Illustration {
  readonly animated: boolean
}

// greeting
export interface Greeting {
  readonly displayGreeting: boolean
  readonly resumeLink?: string
  readonly subTitle: ReactElement
  readonly title: string
  readonly username: string
}

// social Media Links
export interface SocialMediaLinks {
  readonly display: boolean
  readonly facebook?: string
  readonly github?: string
  readonly gitlab?: string
  readonly gmail?: string
  readonly linkedin?: string
  readonly medium?: string
  readonly stackoverflow?: string
}

// skills Section
export interface SoftwareSkill {
  readonly fontAwesomeClassname: string
  readonly skillName: string
}

export interface SkillsSection {
  readonly display: boolean
  readonly skills: ReactElement[]
  readonly softwareSkills: SoftwareSkill[]
  readonly subTitle: string
  readonly title: string
}

// education
export interface School {
  readonly desc: string
  readonly descBullets?: string[]
  readonly duration: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly logo: any
  readonly schoolName: string
  // require() result
  readonly subHeader: string
}

export interface EducationInfo {
  readonly display: boolean
  readonly schools: School[]
}

// tech Stack
export interface TechExperience {
  readonly progressPercentage: string
  readonly Stack: string
}

export interface TechStack {
  readonly displayCodersrank: boolean
  readonly experience: TechExperience[]
  readonly viewSkillBars: boolean
}

// work Experience
export interface WorkExperience {
  readonly company: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly companylogo: any
  // require() result
  readonly date: string
  readonly desc: string
  readonly descBullets?: string[]
  readonly role: string
}

export interface WorkExperiences {
  readonly display: boolean
  readonly experience: WorkExperience[]
}

// open Source
export interface OpenSource {
  readonly display: boolean
  readonly showGithubProfile: string
}

// big Projects
export interface Project {
  readonly footerLink: {
    readonly name: string
    readonly url: string
  }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly image: any
  readonly projectDesc: string
  // require() result
  readonly projectName: string
}

export interface BigProjects {
  readonly display: boolean
  readonly projects: Project[]
  readonly subtitle: string
  readonly title: string
}

// achievement Section
export interface AchievementCard {
  readonly footerLink: {
    readonly name: string
    readonly url: string
  }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly image: any
  // require() result
  readonly imageAlt: string
  readonly subtitle: string
  readonly title: string
}

export interface AchievementSection {
  readonly achievementsCards: AchievementCard[]
  readonly display: boolean
  readonly subtitle: string
  readonly title: ReactElement
}

// blog Section
export interface Blog {
  readonly description: string
  readonly title: string
  readonly url: string
}

export interface BlogSection {
  readonly blogs: Blog[]
  readonly display: boolean
  readonly displayMediumBlogs: string
  readonly subtitle: string
  readonly title: string
}

// talk Section
export interface Talk {
  readonly event_url: string
  readonly slides_url: string
  readonly subtitle: string
  readonly title: string
}

export interface TalkSection {
  readonly display: boolean
  readonly subtitle: ReactElement
  readonly talks: Talk[]
  readonly title: string
}

// podcast Section
export interface PodcastSection {
  readonly display: boolean
  readonly podcast: string[]
  readonly subtitle: string
  readonly title: ReactElement
}

// resume Section
export interface ResumeSection {
  readonly display: boolean
  readonly subtitle: string
  readonly title: string
}

// contact Info
export interface ContactInfo {
  readonly email_address: string
  readonly number?: string
  readonly subtitle: string
  readonly title: ReactElement
}

// twitter Details
export interface TwitterDetails {
  readonly display: boolean
  readonly userName: string
}

// main export interface
export interface Portfolio {
  readonly achievementSection: AchievementSection
  readonly bigProjects: BigProjects
  readonly blogSection: BlogSection
  readonly contactInfo: ContactInfo
  readonly educationInfo: EducationInfo
  readonly greeting: Greeting
  readonly illustration: Illustration
  readonly isHireable: boolean
  readonly openSource: OpenSource
  readonly podcastSection: PodcastSection
  readonly resumeSection: ResumeSection
  readonly skillsSection: SkillsSection
  readonly socialMediaLinks: SocialMediaLinks
  readonly splashScreen: SplashScreen
  readonly talkSection: TalkSection
  readonly techStack: TechStack
  readonly twitterDetails: TwitterDetails
  readonly workExperiences: WorkExperiences
}

// individual exports - these declare the types for the exports from portfolio.js
export declare const illustration: Illustration
export declare const greeting: Greeting
export declare const socialMediaLinks: SocialMediaLinks
export declare const splashScreen: SplashScreen
export declare const skillsSection: SkillsSection
export declare const educationInfo: EducationInfo
export declare const techStack: TechStack
export declare const workExperiences: WorkExperiences
export declare const openSource: OpenSource
export declare const bigProjects: BigProjects
export declare const achievementSection: AchievementSection
export declare const blogSection: BlogSection
export declare const talkSection: TalkSection
export declare const podcastSection: PodcastSection
export declare const contactInfo: ContactInfo
export declare const twitterDetails: TwitterDetails
export declare const isHireable: boolean
export declare const resumeSection: ResumeSection
