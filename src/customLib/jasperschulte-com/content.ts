import { basics } from './content/basics'
import { certificates } from './content/certificates'
import { commonQuestions } from './content/commonQuestions'
import { context } from './content/context'
import { educations } from './content/educations'
import { experiences } from './content/experiences'
import { hiddenExperiences } from './content/hiddenExperiences'
import { leads } from './content/leads'
import { pitch } from './content/pitch'

export const content = {
  basics,
  certificates,
  commonQuestions,
  context,
  educations,
  experiences: [...experiences, ...hiddenExperiences],
  leads,
  pitch,
}
