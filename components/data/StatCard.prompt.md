Compact labeled statistic. Three `medium` across = the dashboard week-stats strip; four `large` in a 2×2 = the Bar Trace metrics grid.

```jsx
<StatCard value="12.4t" label="Wk Tonnage" />
<StatCard value="1.24 m/s" label="Peak speed" accent="var(--amber)" size="large" />
```

In the metrics grid only the headline metric is amber, peak speed. Mean pull speed, bar height and drift stay white. Units live inside the value string, never in the label.
