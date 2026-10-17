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
]
