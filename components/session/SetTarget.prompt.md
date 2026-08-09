The active-set card: what to lift, how much, why that number, and how to load the bar.

```jsx
<SetTarget exercise="Hang Snatch" weight="65.5" reps={2} setLabel="Set 1 of 4"
  cue="Set the back before you dip" percentOfPR="64% of 101kg Snatch"
  loadPerSide="20 + 2.5 + 0.25" onFilm={film} onEditWeight={edit} />
```

Notes from the shipping screen:

- Load per side is **plain arithmetic text**, not a plate diagram. The diagram lives in the Barbell Loader tool; mid-set the athlete wants the sum.
- The cue is italic and in curly quotes, it's the coach's voice, not the app's.
- The weight is tappable; the athlete can always override the prescribed load.
