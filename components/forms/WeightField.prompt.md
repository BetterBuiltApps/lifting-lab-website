OWL's borderless input row — label left, tabular value right, unit suffix. Covers both `WeightField` (kg-backed) and `NumericRow` (any unit).

```jsx
<WeightField title="Body weight" value="88.5" unit="kg" onChange={set} />
<WeightField title="Reps" value="3" unit="reps" onChange={set} />
```

Never wrap it in a bordered box or add a floating placeholder label — inputs in OWL are list rows, matching iOS grouped forms.
