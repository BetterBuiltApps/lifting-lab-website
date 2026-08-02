The workhorse list row. Used for saved analyses, session history and the "next session" card.

```jsx
<NavRow title="Snatch · 102.5 kg" caption="Mar 14, 6:12 PM" icon="activity"
  accessory={<><Badge>A</Badge><span className="owl-numeric">1.78 m/s</span></>} />
```

The chevron is `--glyph-decorative` (35% white) — decorative, deliberately below the text-contrast bar. Put the metric that justifies the tap in `accessory`.
