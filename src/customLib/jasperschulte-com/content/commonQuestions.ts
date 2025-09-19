// TODO: ask chatgtp what common questions i can be asked

export interface AnswerItem {
  readonly explanation: string
  readonly summary: string
}

export interface QuestionAnswer {
  readonly answer: AnswerItem[]
  readonly question: string
}

export const commonQuestions: QuestionAnswer[] = [
  {
    answer: [
      {
        explanation: 'TODO',
        summary: 'TODO',
      },
    ],
    question: 'what are you looking for in a job?',
  },
  {
    answer: [
      {
        explanation:
          "I focus on painting a clear vision of where we're headed in the next five years and why it matters, helping everyone understand both our future direction and the context of how we got here.",
        summary: 'Inspirational',
      },
      {
        explanation:
          'I create a safe and transparent space where team members feel comfortable being open, which builds trust and allows them to do their best work.',
        summary: 'Trust and Vulnerability',
      },
      {
        explanation:
          'I lead by being in the trenches with my team, sharing my plans and thought process openly so that everyone can align and contribute to the journey.',
        summary: 'Transparency',
      },
      {
        explanation:
          "I prioritize clear communication, especially when things aren't going well, addressing underperformance or roadblocks directly and constructively.",
        summary: 'Clarity',
      },
    ],
    question: 'what is your leadership style?',
  },
  {
    answer: [
      {
        explanation:
          'I start by developing a clear, evolving document. In the first weeks, I focus on listening and observing. By the end of the first week, I start sharing initial observations with my manager and then gradually open it up to my direct reports and the broader team over the next weeks.',
        summary: 'Structured 90-Day Plan',
      },
      {
        explanation:
          'I make myself highly visible through internal channels like Slack or town halls, so the team gets to know me quickly and trust can build.',
        summary: 'Visible Communication',
      },
    ],
    question: 'how do you expect to hit the ground running as an interim?',
  },
  {
    answer: [
      {
        explanation:
          'Renewal/retention, ARR expansion, win rate in deals influenced by product, time saved per school (north star for MIS), support cost per school.',
        summary: 'Business outcomes (lagging)',
      },
      {
        explanation:
          'Feature adoption/usage by role (SLT, teachers, admins), activation of key workflows (attendance, comms, reporting), NPS/CSAT, help-to-product deflection.',
        summary: 'Product value & adoption',
      },
      {
        explanation:
          'Uptime/SLOs, incident rate, MTTR, change-fail rate, regression/bug backlog, data quality & compliance (incl. accessibility).',
        summary: 'Reliability & trust',
      },
      {
        explanation:
          'DORA (lead time, deploy freq, MTTR, change fail), throughput & WIP, predictability (plan vs. done), cycle time per workflow.',
        summary: 'Delivery performance (leading)',
      },
      {
        explanation:
          'Defect escape rate, flaky test rate, PR review time, infra cost per active school / per transaction, cloud efficiency savings.',
        summary: 'Quality & efficiency',
      },
    ],
    question: 'how do you measure the ROI of the tech engineering team? Which metrics do you look at?',
  },
  {
    answer: [
      {
        explanation:
          'DORA metrics (lead time, deployment frequency, change fail rate, MTTR) — to ensure we ship reliably and often.',
        summary: 'Delivery performance',
      },
      {
        explanation:
          'Planned vs. delivered work, cycle time, throughput — are we doing what we said, and how smoothly?',
        summary: 'Predictability',
      },
      {
        explanation:
          "Defect escape rate, incident volume, regression backlog — making sure we aren't trading speed for stability.",
        summary: 'Quality',
      },
      {
        explanation: 'Engagement, retention, and onboarding speed — healthy teams deliver better over time.',
        summary: 'Team health',
      },
      {
        explanation: '% of work tied to business or product OKRs, to keep engineering impact visible.',
        summary: 'Alignment to outcomes',
      },
    ],
    question: 'what metrics do you look for to monitor engineering performance?',
  },
  {
    answer: [
      {
        explanation:
          "I start by making sure engineers understand why we use metrics. It's not about control, but about having a shared language to see how we're performing as a team. When they see the purpose, they often start using these metrics themselves to improve.",
        summary: "Explain the 'Why'",
      },
      {
        explanation:
          'I ensure there are no punitive measures. The goal is to let teams own their metrics and improve autonomously. Engineers generally want to do a great job, and when they have the right data, they naturally optimize.',
        summary: "Empower, Don't Micromanage",
      },
      {
        explanation:
          "I tailor metrics to each team's context. A platform team's metrics might look different from a feature team's. It's not one-size-fits-all.",
        summary: 'Context Matters',
      },
    ],
    question: 'how do you implement these metrics without affecting culture, motivation?',
  },
  {
    answer: [
      {
        explanation:
          "I share my thought process openly so the team knows what to expect and understands my intentions. This helps everyone see where we're headed.",
        summary: 'Transparency',
      },
      {
        explanation:
          "If I say I'll do something, I do it. I'm careful with promises and make sure to deliver, which builds credibility fast.",
        summary: 'Follow-through',
      },
      {
        explanation:
          'I focus on enabling others and make it clear my job is to support them. Spending time in person, especially early on, helps create that trust.',
        summary: 'Personal connection',
      },
    ],
    question: 'how do you build trust with a team over a short period.',
  },
  {
    answer: [
      {
        explanation:
          'Defined a clear set of KPIs (delivery, quality, reliability, team health) and rolled them out across ~300 teams, moving from anecdotal reporting to measurable performance.',
        summary: 'Introduced a company-wide engineering metrics framework',
      },
      {
        explanation:
          'Standardised on lead time, deployment frequency, MTTR, and change fail rate. This made delivery speed and reliability transparent and comparable across teams.',
        summary: 'Embedded DORA metrics into team goals',
      },
      {
        explanation:
          'Helped leaders and teams see metrics not as control, but as feedback loops to improve. This improved adoption and avoided negative cultural impact.',
        summary: 'Shifted focus from vanity metrics to actionable insights',
      },
      {
        explanation:
          'Booking saw shorter lead times, more frequent deployments, and faster incident recovery. Teams also reported higher clarity in priorities and accountability.',
        summary: 'Delivered measurable outcomes',
      },
      {
        explanation:
          'Published metrics in dashboards visible across the org, which increased trust between product, engineering, and leadership by making progress tangible.',
        summary: 'Created transparency & trust',
      },
    ],
    question: 'what were some of you main deliveries at booking, specific to implementing engineering metrics',
  },
  {
    answer: [
      {
        explanation:
          "I'm always mindful that teams outside the headquarters often get information later or feel less included. I make it a point to schedule meetings in time zones that work for them and respect local holidays and customs.",
        summary: 'Acknowledge HQ Privilege',
      },
      {
        explanation:
          "I adapt my approach based on each team's cultural norms. For example, while I might be very direct as a Dutch leader, I recognize that other cultures may prefer more nuanced communication. The goal is to get the best out of everyone by respecting how they work best.",
        summary: 'Cultural Sensitivity',
      },
      {
        explanation:
          "Whenever possible, I travel to meet teams face-to-face. This helps build trust and a deeper understanding that video calls alone can't achieve.",
        summary: 'In-Person Connection',
      },
    ],
    question:
      'how do you manage globally based distributed teams during times of significant business change (particularly within a growth context).',
  },
  {
    answer: [
      {
        explanation:
          'I make expectations explicit and measurable, so there\'s no ambiguity about what "good" looks like.',
        summary: 'Early clarity',
      },
      {
        explanation:
          'Often underperformance is situational — unclear goals, poor collaboration, or misaligned skills. I diagnose before judging.',
        summary: 'Understand root causes',
      },
      {
        explanation:
          'I address issues quickly, in a respectful 1:1 setting, focusing on facts and behaviors, not personalities.',
        summary: 'Direct but supportive conversations',
      },
      {
        explanation:
          'I provide coaching, mentoring, or training where needed, and pair individuals with stronger peers when helpful.',
        summary: 'Support & development',
      },
      {
        explanation:
          "If progress isn't made despite support, I take decisive action — because team health and delivery outcomes can't be compromised.",
        summary: 'Accountability',
      },
    ],
    question: 'what is your approach to underperformance, descaling etc',
  },
  {
    answer: [
      {
        explanation:
          'Define what "good" looks like with measurable quality benchmarks (e.g. DORA, SLOs, defect escape).',
        summary: 'Set clear standards',
      },
      {
        explanation:
          "Embed testing, automation, and peer review into the delivery flow so quality doesn't depend on after-the-fact checks.",
        summary: 'Build quality into the process',
      },
      {
        explanation: 'Use data as feedback loops for teams, not as control tools, so they feel empowered to improve.',
        summary: 'Make metrics team-owned',
      },
      {
        explanation:
          'Continuously adjust practices to ensure we can ship fast and reliably, even under high growth or change.',
        summary: 'Balance speed and stability',
      },
      {
        explanation:
          "Standards aren't static — I revisit them regularly as the org and product scale, to ensure they stay fit for purpose.",
        summary: 'Evolve with context',
      },
    ],
    question: 'how do you maintain standards of delivery quality in high change and growth environments.',
  },
  {
    answer: [
      {
        explanation:
          "Define what good engineering leadership looks like — beyond code, it's about outcomes, people, and collaboration.",
        summary: 'Set clear expectations',
      },
      {
        explanation:
          'Pair managers with me or senior peers for regular 1:1s focused on decision-making, stakeholder management, and communication.',
        summary: 'Coaching & mentoring',
      },
      {
        explanation:
          'Involve them in cross-functional initiatives, letting them practice influencing outside their comfort zone with my support.',
        summary: 'Practical development',
      },
      {
        explanation:
          'Provide timely, constructive feedback and encourage self-reflection so growth is visible and tangible.',
        summary: 'Feedback & reflection',
      },
      {
        explanation:
          'Demonstrate transparency, trust-building, and commercial awareness in my own leadership, so they see it in action.',
        summary: 'Role modelling',
      },
    ],
    question:
      'how do you upskill the lower Engineering management layer when they are technically strong but lack a leadership quality',
  },
  {
    answer: [
      {
        explanation:
          'The time it takes for a commit to get into production. This measures how quickly code changes can be delivered to users.',
        summary: 'Lead Time for Changes',
      },
      {
        explanation:
          'How often an organization successfully releases to production. This indicates the frequency of deployments.',
        summary: 'Deployment Frequency',
      },
      {
        explanation:
          'The percentage of changes to production that result in degraded service and subsequently require remediation. This measures the quality of releases.',
        summary: 'Change Failure Rate',
      },
      {
        explanation:
          'The time required to restore service when a service incident or a defect that impacts users occurs. This measures how quickly issues are resolved.',
        summary: 'Mean Time to Recovery (MTTR)',
      },
    ],
    question: 'what are the DORA metrics?',
  },
  {
    answer: [
      {
        explanation:
          '70% of learning happens through on-the-job experiences, challenging assignments, and real-world problem-solving. This includes stretch projects, new responsibilities, and learning from mistakes.',
        summary: '70% - Experiential Learning',
      },
      {
        explanation:
          '20% of learning comes from relationships and social interactions, including mentoring, coaching, feedback from peers and managers, and collaborative work.',
        summary: '20% - Social Learning',
      },
      {
        explanation:
          '10% of learning occurs through formal training programs, courses, workshops, and structured educational content like books and online resources.',
        summary: '10% - Formal Learning',
      },
    ],
    question: 'what is the 70-20-10 model in the context of learning and development?',
  },
  {
    answer: [
      {
        explanation:
          'I was directly responsible for guiding the organisation through extreme growth, setting up the structure, leadership, and practices needed to support expansion across multiple countries.',
        summary: 'Scaled engineering from ~80 to ~800 in 14 months',
      },
      {
        explanation:
          'Despite pressure on quality due to hypergrowth, I introduced modern engineering practices like CI/CD, coding standards, automated testing, and DORA metrics, which actually improved reliability and delivery speed.',
        summary: 'Raised quality while scaling fast',
      },
      {
        explanation:
          'I established tribes, leadership layers, and collaboration models that enabled distributed teams to operate effectively and sustain delivery at scale.',
        summary: 'Built organisational maturity',
      },
      {
        explanation:
          'We managed to launch in 5 new countries within 7 months while reducing incident rates and improving lead times — showing that velocity and quality can improve together.',
        summary: 'Balanced speed with resilience',
      },
      {
        explanation:
          'A key learning was that you must codify values, engineering standards, and ways of working early, then reinforce them consistently as the company grows, or risk losing them entirely.',
        summary: "Learned culture and quality don't scale by accident",
      },
    ],
    question: 'What did you learn and achieve in the hypergrowth environment of Getir?',
  },
]
