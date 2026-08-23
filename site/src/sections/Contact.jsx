import React from 'react';
import { siteWrap, SiteHead } from './Chrome';
import { Button } from '../design-system';
import { SITE } from '../config';
import { Reveal } from '../lib/Reveal';

/* The only form on the site. It posts to Web3Forms, which relays a plain form
   POST as email, so there is no backend and no server to keep alive.

   Everything the form sends is a field in the markup, including access_key and
   subject, so `new FormData(form)` collects the whole payload in one step and
   there is exactly one place to look when a value arrives wrong. */

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
];

export function Contact() {
  // idle -> sending -> sent | error. One string beats three booleans that can
  // contradict each other, and the button label reads straight off it.
  const [status, setStatus] = React.useState('idle');
  const [note, setNote] = React.useState('');

  async function onSubmit(e) {
    e.preventDefault();
    // Double-click, or Enter held down in a text field, both fire submit twice.
    if (status === 'sending') return;
    // Read the node before the first await. React nulls currentTarget once the
    // handler yields, so form.reset() below would throw on the resolved path.
    const form = e.currentTarget;
    const body = new FormData(form);
    setStatus('sending');
    setNote('');
    try {
      const res = await fetch(SITE.contact.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });
      const data = await res.json().catch(() => ({}));
      // res.ok is not enough: Web3Forms answers 200 with success:false when the
      // key is wrong or the submission is filtered, and reporting that as sent
      // is the one failure the sender can never detect.
      if (res.ok && data.success) {
        form.reset();
        setStatus('sent');
        setNote('Message sent. It lands in the inbox and gets read.');
      } else {
        setStatus('error');
        setNote(data.message || 'That did not send. Try again in a moment.');
      }
    } catch {
      setStatus('error');
      setNote('Could not reach the server. Check your connection and try again.');
    }
  }

  return (
    <section id="contact" style={{ padding: 'clamp(60px,7vw,110px) 0', background: 'var(--surface)' }}>
      <div style={siteWrap}>
        <Reveal className="split" style={{ '--split-cols': 'minmax(0,0.85fr) minmax(0,1.15fr)', alignItems: 'start' }}>
          <SiteHead
            title="Have a question?"
            max={420}
            body="Got a question the FAQ didn't answer? Ask it here. Bug reports and feature requests land in the same inbox, and a real person reads every message."
          />

          <form className="contact-form" onSubmit={onSubmit}>
            {/* Not user-facing, but real fields, so FormData picks them up. */}
            <input type="hidden" name="access_key" value={SITE.contact.accessKey} />
            <input type="hidden" name="subject" value={SITE.contact.subject} />
            {/* Web3Forms' honeypot: a bot that fills every field it finds ticks
                this and the submission is dropped. Hidden from sight, from the
                tab order, and from autofill, so a person never meets it. */}
            <input
              type="checkbox" name="botcheck" className="contact-honeypot"
              tabIndex={-1} autoComplete="off" aria-hidden="true"
            />

            {FIELDS.map(({ name, label, type, autoComplete }) => (
              <div key={name} className="contact-field">
                <label className="contact-label" htmlFor={`contact-${name}`}>{label}</label>
                <input
                  className="contact-input"
                  id={`contact-${name}`} name={name} type={type}
                  required autoComplete={autoComplete}
                />
              </div>
            ))}

            <div className="contact-field contact-field--wide">
              <label className="contact-label" htmlFor="contact-message">Message</label>
              <textarea className="contact-input contact-textarea" id="contact-message" name="message" required />
            </div>

            <div className="contact-actions">
              <Button type="submit" size="large" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending' : 'Send'}
              </Button>
              {/* Rendered even when empty. An aria-live region that appears at
                  the same moment as its text is inconsistently announced, so
                  the node has to already be in the tree when the text lands. */}
              <p
                className="contact-status"
                role={status === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                data-state={status}
              >
                {note}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
