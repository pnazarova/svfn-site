/**
 * Masterclasses.
 *
 * One source of truth, used on the home page, the masterclasses page and the
 * program page. Add one here and it appears everywhere.
 *
 * Keep this list in date order. The home page features the first entry.
 *
 * date   — exact date and time once confirmed. Null until then.
 * window — the month or period, shown while the exact date is still open.
 *          With a window set the card asks people to sign up to be told the
 *          date, which is a softer commitment than a fixed calendar slot.
 */

export const masterclasses = [
  {
    title: "Leading Today's AI in the Enterprise",
    faculty: 'Carlos Escapa',
    facultyRole: 'Formerly AWS and Meta',
    photo: '/faculty/carlos-escapa-sq.jpg',
    duration: '45 minutes',
    date: '1 September 2026, 18:00 CET',
    program: 'Chief AI Officer Program',
    blurb:
      'What is actually working inside large organizations right now, what is not, and where the leverage is for the people accountable for it.',
  },
  {
    title: 'The Nine Principles VCs Use to Pick Winners',
    faculty: 'Alex Dang',
    facultyRole: 'Co-author of The Venture Mindset',
    photo: '/faculty/alex-dang.jpg',
    duration: '45 minutes',
    date: '21 September 2026, 18:00 CET',
    program: 'The Venture Mindset',
    blurb:
      'Venture investors turn down ninety-nine ideas to back one. The nine principles behind how they choose, and what changes when you run them inside a company that already has a business to protect.',
  },
];

/** The one to feature. */
export const nextMasterclass = masterclasses[0];
