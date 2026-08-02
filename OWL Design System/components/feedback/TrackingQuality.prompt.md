The honesty pattern, taken verbatim from the shipping app. Use it wherever a computed result could be wrong.

```jsx
<TraceVerdict>The tracker lost the bar too often on this clip to read technique from its path — see the tracking note below.</TraceVerdict>
<TrackingQuality quality="poor" evidence="41% frames · conf 0.73"
  note="The tracker lost the plate for part of this clip, so the score and speeds may be off. Re-film side-on, whole bar in frame, steady phone." />
```

Three rules, all visible in the real screens:

1. **Always show the evidence.** `41% frames · conf 0.73` — the athlete can judge for themselves.
2. **Say what it means for the numbers**, not just that quality was poor: "so the score and speeds may be off".
3. **End with the fix.** "Re-film side-on, whole bar in frame, steady phone."

Never suppress the metrics because tracking was poor — show them with the caveat attached.
