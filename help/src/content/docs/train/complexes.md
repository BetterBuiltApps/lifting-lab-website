---
title: Build and log a complex
description: Chain two or more lifts on one bar, check every transition, load it off your weakest part, and log it as one set.
covers:
  - Docs/COMPLEX_BUILDER.md
  - Docs/FEATURES.md#Complex builder (`Train/Complex/`)
  - LiftingLab/Features/Train/Complex/ComplexBuilderView.swift
  - LiftingLab/Features/Train/Complex/ComplexLibraryView.swift
  - LiftingLab/Features/Train/Complex/ComplexCopy.swift
  - LiftingLab/Domain/Complex/ComplexValidator.swift
  - LiftingLab/Domain/Complex/ComplexLoading.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/complex/ComplexBuilderScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/complex/ExerciseComplexesCard.kt
verified_for: "1.5"
---

A complex is two or more lifts done back to back without putting the bar down, such as a clean, two front squats and a jerk. It is logged as one set.

Building and editing complexes is **Pro**. Without Pro you can open any complex and read it, and any complex already in your workouts or programs stays free to run and log.

## Where to find complexes

- **Tools tab**: the **Complex Builder** tile under Prep.
- **My Programs**: the **Complexes** row.
- **Exercise library**: the **Complexes** chip, or **Use in a complex** on any lift's page. Each lift's page also lists **Complexes with this lift**.

Each place opens the same list: **Yours** and eight **Starters**. Open a starter to see how the bar gets from each lift to the next, then save your own copy.

## Build a complex (Pro)

1. Tap **New complex**.
2. Under **Lifts, in order**, tap **Add a movement** for each lift, in the order you will do them. Lifts that start where the bar already is are listed first.
3. Set the reps for each lift (one to five), and the **Rounds**: how many times through before the bar goes down (one to three). Drag to reorder.
4. Read the note between each pair of lifts. It says how the bar gets there, such as **Stay there** or **Lower to the rack**. If it says **Can't get there**, the bar would have to be put down, and the note says what to add first.
5. Check **Loading** (see below).
6. Give it a name, then tap **Save to library** to keep it, or **Add to workout** when you opened the builder from a workout.

You can add a lift whose transition does not work yet and fix the order after. Saving waits until every gap works.

## How the weight is chosen

One bar means one weight, so it has to suit the hardest part. Under **Loading**, the app shows what your records support for each part on its own and names the **limiter**: the part your records support least. Doing the lifts in a row costs more, so start below the lowest.

The prescription is a percentage of the limiter (75% to start) unless you pick another part. You see today's weight, and a warning if it is above what your records support for any part. A lift with no record is named, because it cannot be checked.

## Add a complex to a workout

In the workout builder, Program Builder, or a session's swap and add lists, complexes sit beside single movements under a **Complexes** heading, with **Build a new complex** below them. Without Pro they show a lock.

For Pro members, the daily workout builder may put one complex in the classic lift block on its own. **How this session was built** says why.

:::note[Android]
In Program Builder on Android, an exercise row also offers **Make it a complex**, which opens the builder with that lift already in it, and a day offers **Add complex**.
:::

## Log a complex

The set card lists the parts in order, with one weight and one rest. Warm-ups are one round of the same complex at each lighter weight.

1. Tap **Made** if you finished every part.
2. If you miss, the app asks **Where did it go?** Tap the lift where it went wrong. You can then tag what happened on that lift, as with any miss.

Complexes cannot be filmed yet, because Bar Trace reads one lift per clip.

## Records

A complex never changes your PRs, rep records or training maxes, because the weight was chosen to suit its weakest part. Each complex keeps its own best instead, shown as **Complex best** on the complex and in the session's detail. Bests are each complex's own.

To keep a complex you did in a past session, open the session in the Log Book and tap **Save as complex**.
