interface Certificate {
  readonly date: Date
  readonly issuer: string
  readonly name: string
}

export const certificates: Certificate[] = [
  {
    date: new Date(2023, 7, 16),
    issuer: 'EASA',
    name: 'Pilot Licence',
  },
  {
    date: new Date(2007, 4, 1),
    issuer: 'KNVvL',
    name: 'Skydive Instructor',
  },
]
