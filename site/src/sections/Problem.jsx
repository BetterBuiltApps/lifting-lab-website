import React from 'react';
import { siteWrap } from './Chrome';

/* The three situations the page is written for.
 *
 * These were three same-size cards of heading-plus-text, the lazy container,
 * and the page's second screen. They are typographic entries on a ruled list
 * now: the same information, no boxes, and the rules echo the axis that runs
 * the rest of the page rather than introducing a second visual device. */
export function Problem() {
  const cases = [
    ['Your program lives in a spreadsheet.', 'Percentages calculated by hand, on a phone, covered in chalk.'],
    ['You missed. You don’t know why.', 'The lift felt fine until it wasn’t, and there’s nobody watching.'],
    ['Your first meet is in six weeks.', 'Nobody has explained what actually happens in the warm-up room.'],
  ];
  return (
    <section id="problem" style={{ padding: 'clamp(56px,6vw,90px) 0 0' }}>
      <div style={siteWrap}>
        <ul className="problem-list">
          {cases.map(([h, b]) => (
            <li key={h} className="problem-case">
              <h2 className="problem-case-title">{h}</h2>
              <p className="problem-case-body">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
