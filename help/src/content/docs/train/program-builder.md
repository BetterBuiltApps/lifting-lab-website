---
title: Write your own program
description: Build a multi-week program in Program Builder, set each day's lifts and loads, then run it, print it or send it.
covers:
  - Docs/FEATURES.md#Program Builder (`Features/Coach/`)
  - LiftingLab/Features/Coach/CoachProgramsView.swift
  - LiftingLab/Features/Coach/ProgramEditorView.swift
  - LiftingLab/Features/Coach/DayEditorView.swift
  - LiftingLab/Features/Train/Programs/MyProgramsView.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/coach/CoachProgramsScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/coach/ProgramEditorScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/programs/MyProgramsScreen.kt
verified_for: "1.5"
---

Program Builder is for writing your own multi-week plan, week by week and day by day, instead of picking one from the library. Writing a program is **Pro**. Without Pro you keep, edit, print, send and run anything you have already written or been sent.

## Open Program Builder

1. Tap the **Build** button, then **Start a Program**.
2. Scroll to **Build Your Own** and tap **Program Builder**. A Pro lock on the row means you can open it but not start a new program.

## Make a program

1. Tap **New program** (the plus). A Free account sees a lock instead and is taken to what Pro adds.
2. Under **Program**, set the name, author, a short summary and the **Days per week**.
3. Each week has a **Phase label** and a **Deload week** switch. Tap **Add week** for another one. A new week starts as a copy of the one before it, so write one good week and adjust.
4. Tap **Add day** inside a week, then tap the day to edit it.
5. Everything saves as you go. To remove a week or a day, use its bin and confirm.

## Edit a day

In a day, give it a name and a **Weekday offset**, which places it in the week from 0 to 6 days after the week starts. Tap **Add exercise** to pick a lift from the full exercise list. Each exercise has:

- **Sets** and **Reps**.
- **Load**, which is one of:
  - **% of PR**: a percentage of your record for a lift you choose under **Reference PR**. Weights are worked out when you start the day, so the program follows your records.
  - **Fixed kg**: one weight.
  - **RPE**: a target effort from 5 to 10.
  - **Bodyweight**: no load.
- **Rest** for that exercise, in 15 second steps.
- **Accessory**, to mark it as supporting work, and **Notes** for yourself or the lifter.
- **Swap**, which keeps the sets, reps, rest and note and changes the movement, and **Remove**.

You can drag exercises to reorder them. The app asks before it deletes anything you wrote.

<!-- since 1.5 -->

For back-off sets, choose **% of top set** as the Load. Put a top set of the same exercise before it, and these sets take their weight from it.

<!-- /since -->

<!-- since 1.5 -->

The exercise list also shows complexes beside single lifts. A complex row is written as a percentage of the contest lift it belongs to. See [Build and log a complex](/help/train/complexes/).

:::note[Android]
On Android, an exercise row also offers **Make it a complex**, and a day offers **Add complex**.
:::

<!-- /since -->

## Run it, print it or send it

Your programs appear under **Custom and Imported** on the Programs screen, where you open one and tap **Start This Program** like any other. Your own programs are never locked behind Pro to run.

The **Export** menu on a program offers **Print Program**, **Save as PDF** and **Send to Another Athlete (.liftinglab)**, a file anyone with Lifting Lab can open. To add a program someone sent you, tap **Add a Program You Were Sent** at the foot of the Programs screen and choose the file.

:::caution
If you delete a program that is running, the running copy ends with it. Sessions you already finished stay in your Log Book.
:::

:::note[Android]
On Android the **Export** menu offers the same three choices, and the Programs screen has the same **Add a Program You Were Sent** button.
:::
