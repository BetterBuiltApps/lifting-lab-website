---
title: Add the Lifting Lab widget
description: Put your next session, this week's tonnage, your top PR and the days to your meet on your home screen.
covers:
  - LiftingLabWidgets/LiftingLabSummaryWidget.swift
  - LiftingLabWidgets/WidgetSnapshotMirror.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/LiftingLabSummaryWidget.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/WidgetRefresher.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/WidgetSnapshotLoader.kt
verified_for: "1.5"
since: "1.5"
---

The Lifting Lab widget puts the numbers you check most on your home screen, so you can see them without opening the app. It is free.

## What it shows

- **Next session**: your next scheduled session. With nothing scheduled it reads **No session scheduled**.
- **This week**: the tonnage you have lifted this week.
- **Top PR**: your personal record. With none logged it reads **No PR logged**.
- **Meet**: the days left to your meet. This tile only appears when a meet is planned in the Meet Planner, which is **Pro**. Without a planned meet, the widget shows the other tiles and no meet tile.

It comes in two sizes, small and medium.

## Add it to your home screen

1. Touch and hold an empty spot on your home screen.
2. Tap the plus button in the top corner.
3. Search for **Lifting Lab** and pick the widget.
4. Choose small or medium, then tap **Add Widget**.

## When it updates

On iPhone the widget refreshes when you open the app or finish a session. If the numbers come from an earlier day, the widget says **As of** with that date, so you know how old they are. Open Lifting Lab to bring it up to date.

:::note[Android]
To add it, touch and hold an empty spot on your home screen, tap **Widgets**, then find **Lifting Lab**.

The Android widget reads your log directly instead of a saved copy, and it refreshes shortly after a session or a PR is saved.
:::
