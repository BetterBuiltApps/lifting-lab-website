Bar speed over the lift, phase-colored, with a white playhead. It doubles as a scrubber.

```jsx
<VelocityChart samples={series} phases={phases} currentTime={t} onSeek={setT} />
```

Always pair it with the same `phases` you gave `PhaseTimeline` so the colors agree. Without `phases` it draws one amber line — the correct fallback when tracking quality can't support segmentation.
