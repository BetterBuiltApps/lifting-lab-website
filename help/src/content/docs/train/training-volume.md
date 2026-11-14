---
title: Read your training volume
description: See your average relative intensity, how many lifts you took at 70% or more, and how your work splits between the lifts, pulls and squats.
covers:
  - Docs/IMPORT_AND_VOLUME.md
  - LiftingLab/Features/Me/Progress/PlayerProgressView.swift
  - LiftingLab/Features/Me/Progress/TrainingVolumeCard.swift
  - LiftingLab/Domain/TrainingVolume.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/PlayerProgressScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/TrainingVolumeCard.kt
verified_for: "1.5"
since: "1.5"
---

Training Volume reads your logged sets and answers three questions a coach asks: how heavy were they on average, how many lifts were taken at a real loading, and where did the work go. It is free.

## Open it

Go to **Locker**, tap the level strip to open **Gains**, and scroll to **Training Volume**. Pick **4 weeks**, **12 weeks** or **All history** at the top of the card.

## What is counted

Made sets only. Warm-up and bar-work sets are left out, and so are timed, distance and bodyweight movements. A complex counts as the reps of its parts.

## The three readings

- **Average relative intensity.** Each rep's weight as a share of that lift's reference max, averaged over every rep. A set of 2 at 80 kg against a 100 kg reference counts twice, at 80%. The reference is the max the session was built from. When a set has none, for example an imported set, your current personal record for that lift is used, and the card says how many lifts that was, because a newer record can make an older set look lighter than it was.
- **Lifts at 70%+.** The number of reps at or above 70% of the reference max. Seventy percent is this app's own line, not a standard, and the card prints it.
- **Workload split.** Lifts, share and tonnage for the snatch, the clean and jerk, pulls, squats and other. The snatch and the clean and jerk include their power, hang, block, pause and tall versions, and the jerks. Pulls are the pull and deadlift variations. Squats include front, back, pause, overhead and split squats. Other is presses, receiving drills and assistance work. A dumbbell set counts both hands in tonnage.

Complexes and dumbbell sets are in the split but not in the intensity figures, and the card says how many lifts that is. The stacked bar is read out as one description, and the rows under it show the same numbers as text.

:::note[Android]
The same card sits on the Gains screen with the same numbers. TalkBack reads the split as one chart description, followed by the rows.
:::
