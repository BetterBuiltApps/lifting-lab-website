The rest timer during an active session. Amber arc → green when rest is up, with an endgame scale-pulse.

```jsx
<TimerRing progress={0.72} centerText="1:24" />
<TimerRing progress={1} centerText="0:04" emphasized pulsing />
```

The readout is monospaced-digit and 34px heavy so it's legible mid-set at arm's length. The pulse is suppressed under `prefers-reduced-motion`.
