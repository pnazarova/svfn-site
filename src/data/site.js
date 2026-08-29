/**
 * Site-wide config.
 */

export const SITE = {
  name: 'The Silicon Valley Faculty Network',
  domain: 'https://siliconvalleyfaculty.com',
  email: 'info@siliconvalleyfaculty.com',
};

/**
 * Form handling.
 *
 * GitHub Pages serves static files only, so it cannot process a form post.
 * Web3Forms takes the submission and emails it straight to the address the
 * key is registered to. No account to manage, no CRM, no database.
 *
 * TO ACTIVATE:
 *   1. Go to https://web3forms.com
 *   2. Enter info@siliconvalleyfaculty.com and press Create Access Key
 *   3. They email you a key. Paste it below, commit, done.
 *
 * Until a real key is set, the forms show a notice instead of accepting
 * submissions, so nobody fills one in and thinks it was received.
 */
export const FORM_ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_KEY';

export const FORMS_LIVE = FORM_ACCESS_KEY !== 'REPLACE_WITH_WEB3FORMS_KEY';

/**
 * Booking.
 *
 * Calendly for info@siliconvalleyfaculty.com. A plain link rather than an
 * embed, so no third-party script runs on the site.
 *
 * Leave empty and every "book a call" button disappears on its own. Paste the
 * Calendly URL here and they all appear.
 */
export const BOOKING_URL = '';
export const BOOKING_LIVE = BOOKING_URL !== '';
