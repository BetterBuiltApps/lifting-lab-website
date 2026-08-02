The lift-phase breakdown from Bar Trace. Phase colors are fixed and shared with the trace overlay and velocity graph: first pull sky, transition purple, second pull amber, turnover green, catch near-white.

```jsx
<PhaseTimeline
  phases={[{kind:'firstPull',label:'First pull',duration:0.62,peakVelocity:0.95}, …]}
  insight="Bar speed drops 31% through the transition — a smoother scoop keeps the pull building."
  insightTone="caution"
/>
```

Never recolor the phases; `PHASE_COLORS` is exported so overlays stay in sync. The insight sentence names the fix, not just the number.
