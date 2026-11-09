import { Experience } from './experiences'

// kept for the record but never public. this file is deliberately not synced to the jasperschulte.com repo: whatever
// that repo imports ends up in its public javascript bundle, even when it is filtered out at render time
export const hiddenExperiences: Experience[] = [
  {
    companyName: 'Salesbuildr',
    endDate: new Date(2026, 1, 28),
    highlights: [],
    isHidden: true,
    location: 'Amsterdam, NL',
    role: 'CTO (Fractional)',
    startDate: new Date(2025, 11, 1),
    subRoleActual: null,
    subRoleOptimized: null,
    url: 'https://salesbuildr.com',
  },
  {
    companyName: 'Just Russel',
    endDate: null,
    highlights: [],
    isHidden: true,
    location: 'Ghent, BE',
    role: 'Mentor for technical leadership',
    startDate: new Date(2025, 10, 1),
    subRoleActual: null,
    subRoleOptimized: null,
    url: 'https://justrussel.com/',
  },
  {
    companyName: 'jasperschulte.com',
    endDate: new Date(2026, 8, 30),
    highlights: [
      "Operating via jasperschulte.com, I've delivered (fractional/interim) engineering leadership for multiple organizations.",
    ],
    isHidden: true,
    location: null,
    role: '(Fractional/Interim) Engineering Leader',
    startDate: new Date(2015, 0, 1),
    subRoleActual: null,
    subRoleOptimized: null,
    url: 'https://jasperschulte.com',
  },
]
