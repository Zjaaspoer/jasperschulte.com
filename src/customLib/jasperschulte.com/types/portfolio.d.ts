import { ReactElement } from 'react';

// Splash Screen
export interface SplashScreen {
  enabled: boolean;
  animation: any; // lottie animation object
  duration: number;
}

// Illustration
export interface Illustration {
  animated: boolean;
}

// Greeting
export interface Greeting {
  username: string;
  title: string;
  subTitle: ReactElement;
  resumeLink?: string;
  displayGreeting: boolean;
}

// Social Media Links
export interface SocialMediaLinks {
  github?: string;
  linkedin?: string;
  gmail?: string;
  gitlab?: string;
  facebook?: string;
  medium?: string;
  stackoverflow?: string;
  display: boolean;
}

// Skills Section
export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
}

export interface SkillsSection {
  title: string;
  subTitle: string;
  skills: ReactElement[];
  softwareSkills: SoftwareSkill[];
  display: boolean;
}

// Education
export interface School {
  schoolName: string;
  logo: any; // require() result
  subHeader: string;
  duration: string;
  desc: string;
  descBullets?: string[];
}

export interface EducationInfo {
  display: boolean;
  schools: School[];
}

// Tech Stack
export interface TechExperience {
  Stack: string;
  progressPercentage: string;
}

export interface TechStack {
  viewSkillBars: boolean;
  experience: TechExperience[];
  displayCodersrank: boolean;
}

// Work Experience
export interface WorkExperience {
  role: string;
  company: string;
  companylogo: any; // require() result
  date: string;
  desc: string;
  descBullets?: string[];
}

export interface WorkExperiences {
  display: boolean;
  experience: WorkExperience[];
}

// Open Source
export interface OpenSource {
  showGithubProfile: string;
  display: boolean;
}

// Big Projects
export interface Project {
  image: any; // require() result
  projectName: string;
  projectDesc: string;
  footerLink: Array<{
    name: string;
    url: string;
  }>;
}

export interface BigProjects {
  title: string;
  subtitle: string;
  projects: Project[];
  display: boolean;
}

// Achievement Section
export interface AchievementCard {
  title: string;
  subtitle: string;
  image: any; // require() result
  imageAlt: string;
  footerLink: Array<{
    name: string;
    url: string;
  }>;
}

export interface AchievementSection {
  title: ReactElement;
  subtitle: string;
  achievementsCards: AchievementCard[];
  display: boolean;
}

// Blog Section
export interface Blog {
  url: string;
  title: string;
  description: string;
}

export interface BlogSection {
  title: string;
  subtitle: string;
  displayMediumBlogs: string;
  blogs: Blog[];
  display: boolean;
}

// Talk Section
export interface Talk {
  title: string;
  subtitle: string;
  slides_url: string;
  event_url: string;
}

export interface TalkSection {
  title: string;
  subtitle: ReactElement;
  talks: Talk[];
  display: boolean;
}

// Podcast Section
export interface PodcastSection {
  title: ReactElement;
  subtitle: string;
  podcast: string[];
  display: boolean;
}

// Resume Section
export interface ResumeSection {
  title: string;
  subtitle: string;
  display: boolean;
}

// Contact Info
export interface ContactInfo {
  title: ReactElement;
  subtitle: string;
  number?: string;
  email_address: string;
}

// Twitter Details
export interface TwitterDetails {
  userName: string;
  display: boolean;
}

// Main export interface
export interface Portfolio {
  illustration: Illustration;
  greeting: Greeting;
  socialMediaLinks: SocialMediaLinks;
  splashScreen: SplashScreen;
  skillsSection: SkillsSection;
  educationInfo: EducationInfo;
  techStack: TechStack;
  workExperiences: WorkExperiences;
  openSource: OpenSource;
  bigProjects: BigProjects;
  achievementSection: AchievementSection;
  blogSection: BlogSection;
  talkSection: TalkSection;
  podcastSection: PodcastSection;
  contactInfo: ContactInfo;
  twitterDetails: TwitterDetails;
  isHireable: boolean;
  resumeSection: ResumeSection;
}

// Individual exports - these declare the types for the exports from portfolio.js
export declare const illustration: Illustration;
export declare const greeting: Greeting;
export declare const socialMediaLinks: SocialMediaLinks;
export declare const splashScreen: SplashScreen;
export declare const skillsSection: SkillsSection;
export declare const educationInfo: EducationInfo;
export declare const techStack: TechStack;
export declare const workExperiences: WorkExperiences;
export declare const openSource: OpenSource;
export declare const bigProjects: BigProjects;
export declare const achievementSection: AchievementSection;
export declare const blogSection: BlogSection;
export declare const talkSection: TalkSection;
export declare const podcastSection: PodcastSection;
export declare const contactInfo: ContactInfo;
export declare const twitterDetails: TwitterDetails;
export declare const isHireable: boolean;
export declare const resumeSection: ResumeSection;
