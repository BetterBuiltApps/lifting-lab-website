Root navigation. Three tabs only: **Train**, **Tools**, **Me**.

```jsx
<TabBar active="tools" onChange={setTab} />
```

Do not add a fourth tab. Bar Trace, Warm-Up and Meet Day are all entries inside Tools — that's a deliberate structural decision in the app, not an oversight.
