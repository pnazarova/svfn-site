/**
 * Guest practitioners.
 *
 * One source of truth, used by /faculty and by each program page.
 *
 * photo   — file in public/faculty/, square, at least 400px.
 * session — which session of the program they join.
 */

export const guests = [
  {
    name: 'Douglas Laney',
    affiliation: 'Coined the term infonomics · Gartner, Deloitte',
    session: 'Data as a strategic asset',
    photo: '/faculty/douglas-laney.jpg', // source: douglasblaney.com
  },
  {
    name: 'Matei Zaharia',
    affiliation: 'Creator of Apache Spark · Databricks',
    session: 'How AI actually works',
    photo: '/faculty/matei-zaharia.jpg', // source: cs.stanford.edu/~matei
  },
  {
    name: 'Ion Stoica',
    affiliation: 'UC Berkeley · Databricks, Anyscale',
    session: 'How AI actually works',
    photo: '/faculty/ion-stoica.jpg', // source: people.eecs.berkeley.edu/~istoica
  },
  {
    name: 'Irina Kofman',
    affiliation: 'Meta, OpenAI',
    session: 'Generative AI strategy',
    photo: null,
  },
  {
    name: 'Pascal Bornet',
    affiliation: 'Intelligent automation and agentic AI',
    session: 'Agentic AI',
    photo: '/faculty/pascal-bornet.jpg', // source: pascalbornet.com
  },
  {
    name: 'Sunil Mallya',
    affiliation: 'CTO and cofounder · Flip AI',
    session: 'Agentic AI',
    photo: null,
  },
  {
    name: 'Ricardo Baeza-Yates',
    affiliation: 'Responsible AI',
    session: 'Governance, ethics and regulation',
    photo: '/faculty/ricardo-baeza-yates.jpg', // source: baeza.cl
  },
  {
    name: 'Ilya Strebulaev',
    affiliation: 'Stanford GSB · co-author of The Venture Mindset',
    session: 'The Venture Mindset',
    photo: null,
  },
  {
    name: 'Alex Dang',
    affiliation: 'Co-author of The Venture Mindset · McKinsey, Amazon',
    session: 'From business strategy to AI strategy',
    photo: '/faculty/alex-dang.jpg', // source: bigthink.com author page
  },
  {
    name: 'Esteban Arcaute',
    affiliation: 'Responsible AI · Walmart, Meta',
    session: 'Governance, ethics and regulation',
    photo: null,
  },
  {
    name: 'Ricardo Bion',
    affiliation: 'VP Data · Airbnb, Instagram, Slack',
    session: 'Organizing for data and AI',
    photo: null,
  },
  {
    name: 'Ryan Gross',
    affiliation: 'VP Data · GE, Caylent',
    session: 'Organizing for data and AI',
    photo: null,
  },
  {
    name: 'Stephen Orban',
    affiliation: 'Led enterprise adoption at AWS · Dow Jones',
    session: 'Change management and transformation',
    photo: null,
  },
  {
    name: 'Mariano Maluf',
    affiliation: 'CTO and CIO · Coca-Cola, Kimberly-Clark',
    session: 'Change management and transformation',
    photo: null,
  },
  {
    name: 'Craig Suckling',
    affiliation: 'Former CIO · UK Government, Amazon, Accenture',
    session: 'Change management and transformation',
    photo: null,
  },
  {
    name: 'Sergey Patsko',
    affiliation: 'Data and AI · Capgemini',
    session: 'Technology selection and delivery at scale',
    photo: null,
  },
  {
    name: 'Phil Mui',
    affiliation: 'Salesforce',
    session: 'Technology selection and delivery at scale',
    photo: null,
  },
  {
    name: 'Jim Guszcza',
    affiliation: 'Chief Data Scientist · Deloitte, Stanford',
    session: 'From business strategy to AI strategy',
    photo: null,
  },
  {
    name: 'Michael Wu',
    affiliation: 'Chief AI Strategist · PROS',
    session: 'From business strategy to AI strategy',
    photo: null,
  },
  {
    name: 'Sam Naghsineh',
    affiliation: 'CTO and cofounder · Ninja AI, Meta',
    session: 'Competitive advantage and proprietary models',
    photo: null,
  },
];

/**
 * Guests split by whether we have a portrait yet.
 * Those with photos get a visual card; the rest are listed by name, position
 * and session. A named list reads better than a grid of empty circles.
 */
export const guestsWithPhoto = guests.filter((g) => g.photo);
export const guestsListed = guests.filter((g) => !g.photo);
