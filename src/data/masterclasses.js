/**
 * Masterclasses.
 *
 * One source of truth, used on the home page, the masterclasses page and the
 * program page. Add one here and it appears everywhere.
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
];

/** The one to feature. */
export const nextMasterclass = masterclasses[0];
