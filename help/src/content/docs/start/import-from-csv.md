---
title: Import your training history from a CSV
description: Bring past sessions into your log from the app's own export or from a spreadsheet, after a review that saves nothing until you confirm.
covers:
  - LiftingLab/Features/Me/DataPrivacySettingsView.swift
  - LiftingLab/Features/Me/HistoryImportView.swift
  - LiftingLab/Features/Me/HistoryImporter.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/SettingsScreen.kt
verified_for: "1.5"
since: "1.5"
---

If you kept your training in a spreadsheet or another app, you can bring it into your log. Importing is free.

## Open the importer

Go to **Settings**, then **Data & Privacy**, then tap **Import Training History (CSV)** and choose your file.

## What the file needs

The importer accepts the app's own export (from iPhone or Android) and common training logs. Each row is one set. These columns are read:

- **Date**, **Exercise**, **Reps** and **Weight** are needed.
- **Set**, **RPE**, **Result**, **Session name** and **Kind** are optional.

The weight unit, kg or lb, is detected from the weight column header or from a **Unit** column. If there is no **Result** column, every set counts as made.

## How rows are handled

- **Exercises** are matched to the app's library by name. A name that does not match is skipped and listed for you. The app never invents an exercise.
- **Non-weight exercises** are skipped.
- **Sets you already have** are skipped. A set counts as a duplicate when the day, the exercise and the set number are the same.
- **Dates written as 3/4/2025** are read in your phone's date order. When that was a guess, the review screen warns you.
- A file can hold up to 20,000 rows.

## Review, then import

Before anything is saved you see a review: the counts, the skipped rows with the reason for each, the exercise names that did not match, and any warnings. Nothing is saved until you tap **Import**. To stop, leave without tapping it.

Imported sessions carry the note **Imported from a CSV file.** so you can tell them apart in your log book. Imports do not create personal records.

:::note[Android]
After you tap **Import Training History (CSV)**, you pick the file with the system document picker.
:::
