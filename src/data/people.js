/**
 * The people behind the institute.
 *
 * One source of truth, used by /about and /faculty. Guest practitioners live
 * separately in guests.js; these are the principals.
 *
 * Publish someone here only once they have agreed. Photos must come from the
 * person or from their own site, with the source logged beside the path.
 */

export const founders = [
  {
    name: 'Gregory La Blanc',
    role: 'Cofounder and Faculty Director',
    photo: '/faculty/gregory-la-blanc.jpg',
    bio: `Greg is Faculty Director of Professional Education at UC Berkeley's College of
      Engineering and a Distinguished Teaching Fellow at Berkeley Haas and Berkeley Law.
      He has taught at Stanford's Graduate School of Business and HEC Paris, and holds the
      Haas Cheit Award for teaching. He has advised leaders at more than a hundred companies
      and governments on strategy, finance and technology, and hosts unSILOed, a podcast now
      past six hundred conversations. He is the constant across every program we run.`,
  },
  {
    name: 'Polina Nazarova',
    role: 'Cofounder',
    photo: '/faculty/polina-nazarova.jpg', // source: supplied by Polina
    bio: `Polina has run corporate sales and partnerships at Harbour.Space Institute of
      Technology in Barcelona since 2020, a technology and design university where the
      courses are taught by people still doing the work. She built its business-to-business
      function from nothing into the institution's largest revenue line, taking it from
      seven percent of total revenue to forty-one in five years. She holds a degree in
      mathematics from LMU Munich and works in six languages.`,
  },
];

export const foundingFaculty = [
  {
    name: 'Nicolas Darveau-Garneau',
    role: 'Founding Faculty',
    photo: '/faculty/nicolas-darveau-garneau.jpg', // source: supplied by Nicolas
    bio: `Nicolas was Chief Evangelist at Google, where he worked with the C-suites of more
      than a thousand of Google's largest customers on how they grow. Before that he was on
      the founding team of MSN.com at Microsoft, cofounded four internet companies and sold
      three, and worked at McKinsey and as a senior equity analyst at Sanford C. Bernstein.
      He is the author of Be a Sequoia, Not a Bonsai: The Seven Growth Secrets of the
      World's Most Successful Companies, and sits on the boards of TMX Group, iA Financial,
      McEwen Mining and Alida.`,
  },
  {
    name: 'Carlos Escapa',
    role: 'Program Lead · Chief AI Officer Program',
    photo: '/faculty/carlos-escapa.jpg',
    bio: `Carlos led AI and machine learning practice at AWS for nearly a decade, first as
      Global AI/ML Practice Leader and later running Data and AI for the Accenture-AWS
      Business Group, with a period at Meta in AI business development in between. He has
      worked on hundreds of implementation projects worldwide and coauthored The AI-Driven
      Business: Leading, Competing and Thriving in the Age of Artificial Intelligence. He
      advises startups on corporate development and go-to-market, and lectures at Berkeley
      Haas, ESADE and IE.`,
  },
  {
    name: 'Alex Dang',
    role: 'Program Lead · The Venture Mindset',
    photo: '/faculty/alex-dang.jpg', // source: bigthink.com author page
    bio: `Alex coauthored The Venture Mindset: How to Make Smarter Bets and Achieve
      Extraordinary Growth with Stanford's Ilya Strebulaev, a Financial Times Business Book
      of the Month now translated into twelve languages. He is a Senior Advisor and former
      Partner at McKinsey and was previously a product executive at Amazon and AWS. He
      advises large companies on building venture-style decision-making inside established
      organizations.`,
  },
];

/** Everyone who teaches, for the faculty page. */
export const principals = [founders[0], ...foundingFaculty];
