---
title: Find and fix a technique fault
description: Read what your own filmed lifts and tagged misses keep showing, see which fault to work on first, and browse the drills for every fault.
covers:
  - Docs/FEATURES.md#Exercise library & coaching (`Train/ExerciseLibrary/`, `Train/Coaching/`)
  - LiftingLab/Features/Train/Coaching/TechniqueDoctorView.swift
  - LiftingLab/Features/Train/Coaching/RecurringFaultPresentation.swift
  - LiftingLab/Domain/Coaching/TechniqueReview.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/coaching/TechniqueDoctorScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/coaching/LiftErrorDetailScreen.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/coaching/TechniqueReview.kt
verified_for: "1.5"
since: "1.5"
---

Technique Doctor answers one question: what should I fix? It reads what your own lifts keep showing, ranks it, and gives you the drills and the cue for each fault. Without Pro it reads your last 5 filmed lifts. Pro reads your last 20.

## Open it

- **Train tab:** tap **Technique** (the stethoscope) in the row of shortcuts.
- **Train tab card:** when a fault shows up on two or more different lifts, the card on the Train tab names it. Tap that row.
- **Bar Trace result:** the technique findings card links here.

## What your lifts show

The top of the screen says which fault your lifts show most, then lists the faults ranked by how often each one turned up. Two things feed the list:

- **Bar traces:** faults measured off the bar path of the lifts you filmed. See [Film a lift](/help/bar-trace/film-a-lift/).
- **Misses you tagged:** when you miss a set and tag what went wrong, that counts too, even if you did not film it.

Each fault card shows:

1. The fault and how many of the lifts reviewed showed it, such as 3 of 5 snatches.
2. Where the evidence came from: your bar traces, your own miss tags, or both agreeing.
3. A small trend line when the bar path measured the same fault more than once, so you can see whether it is getting better.
4. A cue to think about on the next rep.
5. Dates of the filmed lifts that showed it. Tap one to watch that exact clip, then go Back to return here.

When more than one related fault shows, a line says which to start with. The earlier fault in the lift often causes the later one, so you fix it first.

If nothing is flagged, the screen says so and how many lifts it looked at. If you have no filmed lifts and no tagged misses yet, it asks you to film a lift or tag a miss.

:::note
Without Pro, once you have filmed more than 5 lifts, a line under the list says it is reviewing your last 5 and what Pro reads instead, up to your last 20. Tap it to see what Pro adds. The diagnosis itself is always free.
:::

## Browse every fault

Below your diagnosis, **Browse all faults** lists the common faults for each lift. Choose **Snatch**, **Clean**, **Jerk** or **Pull**, then tap how the attempt failed. You get the likely causes, the drills that fix them, and the cue to think about on the next rep.

A fault page opens with where to put the phone to film that fault, and one question: **Do you know what the right position feels like?** Tap **Not yet** and it links the Learn the Lifts step that teaches that position. Tap **Yes** and the drills below are the fix. Your answer is not saved.

## Learn the Lifts

At the top of the screen, **Learn the Lifts** is a set of step-by-step progressions for the snatch, the clean and the jerk, from position to movement to speed to load. Each step says why it comes there, how to do it and what ready to move on looks like, and links the exercise. You can mark steps done. Nothing is locked, because the checks are your own judgement. It is free.

:::note[Android]
Technique Doctor works the same on Android, with the same 5 and 20 lift windows.
:::
