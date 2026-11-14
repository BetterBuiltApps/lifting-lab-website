---
title: Units and your data
description: Choose kilograms or pounds and learn where your data lives.
covers:
  - Docs/FEATURES.md#Tab 4, Locker
  - LiftingLab/Features/Me/SettingsView.swift
  - LiftingLab/Features/Me/DataPrivacySettingsView.swift
  - LiftingLab/Features/Me/DataExportView.swift
  - LiftingLab/Domain/Sharing/TrainingCSV.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/SettingsScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/DataPrivacyScreen.kt
  - LiftingLab/App/AppData.swift
verified_for: "1.5"
---

<video controls playsinline preload="none" poster="/help/videos/v2/K10-poster.webp" width="300" aria-describedby="K10-desc">
  <source src="/help/videos/v2/K10.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/K10.vtt" srclang="en" label="English" default>
</video>

<p id="K10-desc"><em>Video, 14 seconds, with narration and captions. Units, rest timer, grading, sounds.</em></p>

## Switch between kilograms and pounds

You pick a unit during first-run setup, and you can change it at any time.

1. Open the **Locker** tab.
2. Open **Settings**.
3. Find **Units**, near the top just under **Training**, and choose **Kilograms** or **Pounds**.

Every weight in the app then shows in your chosen unit. That includes the set card, your PRs, your history, and the numbers on screen when you load the bar.

### What happens to your old numbers

Nothing is rewritten. The app keeps every weight in kilograms behind the scenes and converts it only when it shows you a number. If you switch from kilograms to pounds, your history stays exactly as it was and simply reads differently. You can switch back whenever you like without any rounding creeping into your records.

### Peeking at the other unit during a session

The session screen has a kg/lb button in its toolbar. It shows what that screen would look like in the other unit, which is handy when you want to know what 102.5 kg comes to in pounds. It is a preview only: it ends when you leave the session, it does not change your Settings, and while it is on the working weight cannot be edited. To change the unit for good, use Settings.

## Where your data lives

Your sessions, sets and records are stored on your device, so the app works without a connection. The Data & Privacy screen shows where your training data is kept.<!-- since 1.5 --> Right now it says one of three things:<!-- /since -->

<!-- since 1.5 -->

- **This device + iCloud** when it is syncing to iCloud.
- **This device only** when it is not. The note underneath says why: you are not signed in to iCloud, or iCloud sync could not start this time. Your data is safe on the phone but is not backed up to iCloud, so check this before you wipe or replace your iPhone.
- **Not saving** if the app could not open your training data. Nothing logged then is saved. Quit and reopen the app to try again.

On a new iPhone signed in to the same iCloud account, the app waits a few seconds on first launch for your profile to arrive before it asks you to set up. If you open it with no connection, set-up appears as usual, and your synced profile replaces the empty one the next time you launch.

<!-- /since -->

Bar Trace video clips are handled separately. They save to your photo library either way. You can choose in Data & Privacy whether they also sync to iCloud so your other devices can play them, and the screen shows how much space your clips use.

:::note[Android]
Android keeps everything on the phone. There is no iCloud sync and no sync setting. Your sessions, records, profile and Bar Trace clips are stored on this device only, clips are copied into the app's private storage, and the app makes no network calls of its own.<!-- since 1.5 --> Clips you record in the app are also copied to your gallery (Movies, then Lifting Lab) on Android 10 and newer, so you keep the video if you change phones. What your gallery backs up is up to you; Lifting Lab sends nothing.<!-- /since -->
:::

<!-- since 1.5 -->

## Export your data as CSV

You can take your data out as spreadsheet files at any time. Export is free.

1. Open **Locker**, then **Settings**, then **Data & Privacy**.
2. Tap **Export Data (CSV)**.
3. Tap **Export All (3 CSV Files)**, or choose a single file.
4. Pick where to send it from the share sheet: Files, Mail, AirDrop, a spreadsheet app, or any other destination you use.

The three files are:

- **Lift Summary.** One row per lift: your best PR, your training max, your heaviest made set, your best estimated one-rep max, how many sessions and sets you have done, your total tonnage, and when you last trained it.
- **Personal Records.** Every PR you have logged.
- **Training History.** Every set you have logged. Warm-up sets are marked and never counted toward your totals. The last two columns, Metric and Quantity, say what a set was measured in: a timed set such as a plank shows its seconds, and a distance set such as a row shows its meters, so neither reads as a rep count or a zero weight.

Weights in the files appear in kilograms and in your chosen unit.

<!-- since 1.5 -->

A dumbbell set's weight is per hand, so its exercise is named with "(dumbbell, per hand)", for example Push Press (dumbbell, per hand). When you import such a file again, those rows are listed as not matched rather than read as a barbell weight.

<!-- /since -->

:::note[Android]
The Android export has the same Metric and Quantity columns at the end of Training History.
:::

:::note
Data & Privacy also holds Import Training History (CSV), which brings in sessions from a spreadsheet and is covered in [Import your training history from a CSV](/help/start/import-from-csv/), the Terms & Conditions and Privacy Policy, which you can read offline, a record of when you accepted the Terms, and an About the Data screen that names the sources behind the app's numbers.
:::

<!-- /since -->
