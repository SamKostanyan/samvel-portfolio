// Central place for all portfolio content.
// Edit this file to update copy without touching any component.

export const profile = {
  name: 'Samvel Kostanyan',
  title: 'Full Stack Developer',
  location: 'Yerevan, Armenia',
  email: 'samvel.kostanyan.1994@gmail.com',
  phone: '+374 93 745274',
  summary:
    'Full Stack Developer experienced in building scalable web and mobile applications using modern technologies. Skilled in backend development, API design and integration, and responsive frontend and mobile app development. Focused on performance, clean code, and delivering reliable, user-friendly digital products.',
  resumeUrl: 'resume.pdf',
  social: {
    github: 'https://github.com/SamKostanyan',
    linkedin: 'https://www.linkedin.com/in/samvel-kostanyan-a6951a222/',
    telegram: 'https://t.me/samvel_kostanyan',
  },
}

export const skills = [
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'PHP / Laravel', category: 'Backend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'RESTful APIs', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Git / GitHub', category: 'Tooling' },
  { name: 'HTML / CSS', category: 'Frontend' },
  { name: 'jQuery', category: 'Frontend' },
  { name: 'Claude Code', category: 'AI Tooling' },
  { name: 'Cursor AI', category: 'AI Tooling' },
]

export const languages = [
  { name: 'Armenian', level: 'Native' },
  { name: 'Russian', level: 'Fluent' },
  { name: 'English', level: 'Professional' },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'CodeIdea LLC',
    location: 'Yerevan, Armenia',
    period: '2020 — Present',
    points: [
      'Designed and developed RESTful APIs for web and mobile applications.',
      'Implemented authentication and authorization systems.',
      'Optimized MySQL database structure and queries for improved performance and scalability.',
      'Built responsive dashboards, booking systems, and event management interfaces.',
      'Developed modern frontend applications using Vue.js and React.js.',
      'Integrated frontend applications with Laravel backend APIs.',
      'Developed reusable UI components and managed application state with Vuex and modern React patterns.',
      'Built and maintained cross-platform mobile applications for iOS and Android using React Native.',
      'Integrated mobile applications with backend APIs, push notifications, and real-time features.',
      'Integrated secure payment processing systems for web and mobile platforms.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'LeanTech LLC',
    companyUrl: 'https://www.linkedin.com/company/leantechllc/posts/',
    location: 'Remote',
    period: 'Jan 2026 — Jun 2026',
    points: [
      'Built and maintained full stack features across frontend and backend.',
      'Worked with REST APIs and modern JavaScript frameworks to deliver responsive web applications.',
      'Collaborated with cross-functional teams to design, develop, and ship product features.',
      'Followed code review best practices for clean, maintainable, and scalable code.',
    ],
  },
]

export const education = [
  {
    school: 'Profit D.C.',
    location: 'Yerevan, Armenia',
    detail: 'Professional development coursework',
  },
]

export const projects = [
  {
    slug: 'sportyfriends',
    name: 'SportyFriends',
    tagline: 'The all-in-one digital membership and booking platform for sports & leisure clubs.',
    description:
      'A club-management platform I built end to end: the marketing site and club dashboard on Vue.js + Laravel, and a native mobile app in React Native. It handles memberships, activity bookings, member communication, and payments — and the same backend now also powers white-labeled club apps, including Padel Center Middelfart and TopSpinPlaza below.',
    role: 'Full Stack Developer',
    stack: {
      web: ['Vue.js', 'Laravel', 'MySQL', 'REST API'],
      mobile: ['React Native', 'iOS', 'Android', 'Push Notifications'],
    },
    highlights: [
      'Designed and shipped RESTful APIs powering the web platform, the mobile app, and every white-labeled club app from one backend.',
      'Built membership, activity booking, and payment flows for clubs and their members.',
      'Implemented authentication, real-time features, and push notifications in React Native.',
      'Optimized MySQL schema and queries for a growing, multi-club user base.',
    ],
    links: {
      appStore: 'https://apps.apple.com/am/app/sportyfriends/id1391773424',
      web: 'https://landing.sportyfriends.com/',
    },
    blurb: 'Find players. Book venues. Play more.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    slug: 'padel-center-middelfart',
    name: 'Padel Center Middelfart',
    tagline: '"We Make Sports Easier" — court booking & membership management for a padel club.',
    description:
      'A white-labeled club app built on the SportyFriends platform for Padel Center Middelfart. Members purchase memberships, book courts, browse club information, and register for activities and events — all backed by the same shared Laravel API and React Native codebase.',
    role: 'Full Stack Developer',
    stack: {
      web: ['Vue.js', 'Laravel', 'REST API'],
      mobile: ['React Native', 'iOS'],
    },
    highlights: [
      'Real-time court booking flow for padel courts.',
      'In-app membership purchase and management.',
      'Club info, staffed hours, and activity/event registration.',
    ],
    links: {
      appStore: 'https://apps.apple.com/am/app/padel-center-middelfart/id6450256097',
    },
    blurb: '"We Make Sports Easier" — book your court in seconds.',
    accent: 'from-sky-400 to-blue-500',
  },
  {
    slug: 'topspinplaza',
    name: 'TopSpinPlaza',
    tagline: 'Court discovery, bookings, and memberships for padel facilities.',
    description:
      'Another white-labeled deployment of the SportyFriends platform, built for TopSpinPlaza. Players can find available courts, purchase memberships, book time slots, and get activity reminders — all powered by the same shared Laravel backend and React Native mobile app.',
    role: 'Full Stack Developer',
    stack: {
      web: ['Vue.js', 'Laravel', 'REST API'],
      mobile: ['React Native', 'iOS'],
    },
    highlights: [
      'Court discovery and real-time availability.',
      'Membership purchases and activity registration.',
      'Center info, contact details, and activity reminders.',
    ],
    links: {
      appStore: 'https://apps.apple.com/am/app/topspinplaza/id6741908024',
    },
    blurb: 'Find a court. Book it. Play.',
    accent: 'from-orange-400 to-rose-500',
  },
]
