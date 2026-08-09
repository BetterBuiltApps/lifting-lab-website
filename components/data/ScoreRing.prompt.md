The lift-score card from Bar Trace: amber ring, grade letter, `NN/100`, straightness and smoothness sub-bars.

```jsx
<ScoreRing total={86} grade="A" straightness={0.92} smoothness={0.78} />
<ScoreRing /> {/* honest ungraded state */}
```

Omitting `total` is a real state, not an error, render it rather than hiding the card when tracking quality is poor.
