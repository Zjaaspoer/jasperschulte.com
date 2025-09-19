export interface Certificate {
  readonly date: Date
  readonly issuer: string
  readonly name: string
}

export const certificates: Certificate[] = [
  {
    date: new Date(2023, 7, 16),
    issuer: 'EASA - European Union Aviation Safety Agency',
    name: 'Pilot License',
  },
  {
    date: new Date(2012, 6, 1),
    issuer: 'KNVvL',
    name: 'Skydiving Instructor',
  },
]
