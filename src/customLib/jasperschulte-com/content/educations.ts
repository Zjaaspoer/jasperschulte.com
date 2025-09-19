export interface Education {
  readonly area: string
  readonly endDate: Date
  readonly institution: string
  readonly startDate: Date
  readonly studyType: string
  readonly url: string
}

export const educations: Education[] = [
  {
    area: 'Computer Science',
    endDate: new Date(2008, 6, 1),
    institution: 'University of Amsterdam',
    startDate: new Date(2001, 8, 1),
    studyType: "Master's degree",
    url: 'https://www.uva.nl/',
  },
  {
    area: 'Gymnasium',
    endDate: new Date(2001, 6, 1),
    institution: 'Stedelijk Gymnasium Haarlem',
    startDate: new Date(1995, 8, 1),
    studyType: 'High School',
    url: 'https://www.sghaarlem.nl/',
  },
]
