import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { CONTACT } from '../../contact.config';

export const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const recaptchaWidgetId = useRef(null);
  const recaptchaContainer = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // If RECAPTCHA_SITE_KEY is provided, lazily load the v2 script and render the widget.
    if (CONTACT.RECAPTCHA_SITE_KEY) {
      if (!window.grecaptcha) {
        const s = document.createElement('script');
        s.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
        s.onload = () => renderRecaptcha();
      } else {
        renderRecaptcha();
      }
    }

    function renderRecaptcha() {
      try {
        // render the checkbox widget
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaContainer.current, {
          sitekey: CONTACT.RECAPTCHA_SITE_KEY,
        });
      } catch (err) {
        // rendering may fail if key is invalid — just ignore and rely on honeypot
        console.warn('reCAPTCHA render failed', err);
      }
    }

    // cleanup
    return () => {
      // grecaptcha doesn't provide destroy in v2, we keep it simple
    };
  }, []);

  const validate = (formData) => {
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      return 'Please fill name, email and message.';
    }
    // basic email test
    const email = formData.get('email');
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) return 'Please use a valid email address.';
    // honeypot should be empty
    if (formData.get('hp') !== '') return 'Spam detected.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setStatus('sending');

    const formData = new FormData(formRef.current);

    const vError = validate(formData);
    if (vError) {
      setErrorMsg(vError);
      setStatus('error');
      return;
    }

    // If recaptcha present, append token
    if (CONTACT.RECAPTCHA_SITE_KEY && window.grecaptcha && recaptchaWidgetId.current !== null) {
      try {
        const token = window.grecaptcha.getResponse(recaptchaWidgetId.current);
        if (!token) {
          setErrorMsg('Please complete the reCAPTCHA challenge.');
          setStatus('error');
          return;
        }
        formData.append('g-recaptcha-response', token);
      } catch (err) {
        console.warn('Error reading recaptcha token', err);
      }
    }

    try {
      const res = await fetch(CONTACT.FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        formRef.current.reset();
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          try { window.grecaptcha.reset(recaptchaWidgetId.current); } catch (e) { /* noop */ }
        }
      } else {
        const payload = await res.json().catch(() => ({}));
        setErrorMsg(payload.error || 'Submission failed.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Network error: ' + err.message);
      setStatus('error');
    }
  };

  return (
    <section className='contact' id='contact' aria-label='Contact'>
      <div className='contact-inner'>
        <h3>Contact me</h3>
        <p className='lead'>Have a project or an opportunity? Send me a message and I’ll get back to you.</p>

        <form ref={formRef} className='contact-form' onSubmit={handleSubmit} noValidate>
          <label className='sr-only' htmlFor='name'>Name</label>
          <input id='name' name='name' placeholder='Your name' aria-label='Your name' />

          <label className='sr-only' htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' placeholder='your@email.com' aria-label='Your email' />

          <label className='sr-only' htmlFor='subject'>Subject</label>
          <input id='subject' name='subject' placeholder='Subject (optional)' aria-label='Subject' />

          <label className='sr-only' htmlFor='message'>Message</label>
          <textarea id='message' name='message' rows='6' placeholder='Tell me about your needs...' aria-label='Message' />

          {/* Honeypot anti-spam field (should be left empty by humans) */}
          <div style={{ display: 'none' }} aria-hidden='true'>
            <label htmlFor='hp'>Leave this empty</label>
            <input id='hp' name='hp' type='text' />
          </div>

          {/* reCAPTCHA will be rendered here if configured */}
          {CONTACT.RECAPTCHA_SITE_KEY ? (
            <div className='recaptcha-wrapper'>
              <div ref={recaptchaContainer} className='g-recaptcha' />
            </div>
          ) : (
            <div className='recaptcha-note'>
              <small>Captcha not configured — enable reCAPTCHA in <code>src/contact.config.js</code> for extra spam protection.</small>
            </div>
          )}

          <div className='form-actions'>
            <button className='btn btn-primary' type='submit' disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <button className='btn btn-secondary' type='reset' onClick={() => { setStatus('idle'); setErrorMsg(''); }}>
              Reset
            </button>
          </div>

          <div className='form-status' role='status' aria-live='polite'>
            {status === 'success' && <p className='success'>Thanks — I will reply soon!</p>}
            {status === 'error' && <p className='error'>Error: {errorMsg}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};
