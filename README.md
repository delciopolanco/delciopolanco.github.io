# Welcome to my portafolio.

Please see part of my work history here: [https://delciopolanco.github.io/]

Steps:

1 - npm install
2 - npm run build
3 - npm run push

Contact form setup (optional):

1. Create a Formspree form at https://formspree.io and copy the form endpoint (it looks like `https://formspree.io/f/{your_id}`).
2. Open `src/contact.config.js` and set `FORM_ENDPOINT` to your Formspree URL.
3. (Optional) To enable Google reCAPTCHA v2, register your site at https://www.google.com/recaptcha/admin, get the **site key** and set `RECAPTCHA_SITE_KEY` in `src/contact.config.js`. For server-side verification you will need the reCAPTCHA secret (do not commit it).
4. Test the form locally with `npm start` and submit a test message. Formspree will send you an email with the submission.

Notes:
- If you prefer another provider (Netlify Forms, Getform, EmailJS), you can update `src/CustomTemplate/contact/contact.js` to post to that endpoint instead.
- Do not commit server-side keys or secrets to the repo.

