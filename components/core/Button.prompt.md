The one button in Lifting Lab: an amber fill with a **black** label, springing to 0.93 scale on press.

```jsx
<Button variant="gradient" size="large" full onClick={start}>Start Session</Button>
<Button variant="plain" size="small">Start a new one instead</Button>
```

Variants: `primary` (flat amber), `gradient` (amber gradient, reserved for the day's session CTA), `make` / `miss` (green / red set logging, always 56pt tall in practice), `secondary` (elevated surface), `plain` (amber text, no fill).
Never put an amber label on a dark fill for a primary action, the app always inverts to black on amber.
