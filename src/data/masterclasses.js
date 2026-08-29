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
    title: 'What a Term Sheet Actually Says',
    faculty: 'Alex Dang',
    facultyRole: 'Program Lead · Inside the Deal',
    photo: '/faculty/alex-dang.jpg',
    duration: '45 minutes',
    date: '21 September 2026, 18:00 CET',
    program: 'Inside the Deal',
    blurb:
      'The clauses that decide who actually makes money when a company sells, and why corporate investors and founders routinely sign terms they could not explain a year later.',
  },
];

/** The one to feature. */
export const nextMasterclass = masterclasses[0];
