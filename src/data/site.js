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
 * FormSubmit takes the submission and emails it to the address in the action
 * URL. No account, no API key, no CRM. Same service Greg's site uses.
 *
 * ONE-TIME ACTIVATION: the first time any of these forms is submitted,
 * FormSubmit emails info@siliconvalleyfaculty.com asking to confirm the
 * address. Click that link once and every form works from then on.
 *
 * The address appears in the served HTML, which is fine because it is already
 * published in the footer. To hide it later, activate the form and swap in the
 * hashed endpoint FormSubmit gives you.
 */
export const FORM_ENDPOINT = 'https://formsubmit.co/info@siliconvalleyfaculty.com';

/**
 * Booking.
 *
 * Calendly for info@siliconvalleyfaculty.com. A plain link rather than an
 * embed, so no third-party script runs on the site.
 *
 * Leave empty and every "book a call" button disappears on its own. Paste the
 * Calendly URL here and they all appear.
 */
export const BOOKING_URL = 'https://calendly.com/siliconvalleyfaculty-info/30min';
export const BOOKING_LIVE = BOOKING_URL !== '';
