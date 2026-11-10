---
title: Start a session with Siri or a shortcut
description: Ask Siri or use the Shortcuts app to open today's session, your Log Book, or the days to your meet.
covers:
  - LiftingLab/App/Intents/LiftingLabIntents.swift
  - lifting-lab-android/app/src/main/res/xml/shortcuts.xml
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/shortcuts/ShortcutRequests.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/shortcuts/AppShortcuts.kt
verified_for: "1.5"
since: "1.5"
---

Siri and the Shortcuts app can take you straight to the part of Lifting Lab you use most, without you finding it first. This is free.

## What you can ask for

- **Start My Session**: opens today's session so you can start it. With nothing scheduled, it says so and starts nothing.
- **Open My Log Book**: opens your Log Book.
- **Show My Next Meet Countdown**: Siri answers out loud with the days left, for example "12 days to NAME." If no meet is planned, it says there is no meet planned. The Meet Planner is **Pro**, so on the free plan Siri tells you the countdown is part of Pro.

## Ask Siri

Say one of these, using the app's name at the end:

- "Start my session in Lifting Lab"
- "Open my Log Book in Lifting Lab"
- "How long until my meet in Lifting Lab"

## Use the Shortcuts app

1. Open the **Shortcuts** app.
2. Tap the plus button to make a new shortcut, then tap **Add Action**.
3. Search for **Lifting Lab** and pick **Start My Session**, **Open My Log Book** or **Show My Next Meet Countdown**.
4. Tap **Done**.

:::note[Android]
Android has no spoken phrases yet. Instead, touch and hold the Lifting Lab icon to see three shortcuts: **Start my session**, **Open Log Book** and **Next meet**. Drag any of them onto your home screen to keep it there.

**Next meet** opens the Meet Planner. A shortcut tapped during onboarding, or while a set is in progress, does nothing.
:::
