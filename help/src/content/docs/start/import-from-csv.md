---
title: Import your training history from a CSV
description: Bring past sessions into your log from the app's own export, Hevy, Strong or a spreadsheet, after a review that saves nothing until you confirm.
covers:
  - LiftingLab/Features/Me/DataPrivacySettingsView.swift
  - LiftingLab/Features/Me/HistoryImportView.swift
  - LiftingLab/Features/Me/HistoryImporter.swift
  - LiftingLab/Domain/Import/HistoryImport.swift
  - LiftingLab/Domain/Import/ExerciseNameAliases.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/interop/history/HistoryImportScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/SettingsScreen.kt
verified_for: "1.5"
since: "1.5"
---

If you kept your training in a spreadsheet or another app, you can bring it into your log. Importing is free.

## Open the importer

Go to **Settings**, then **Data & Privacy**, then tap **Import Training History (CSV)** and tap **Choose CSV File**. While the app reads a large file, the screen says **Reading the file**.

## What the file needs

The importer reads these files, and the review tells you which one it recognised:

- **Lifting Lab's own export**, from iPhone or Android.
- **Hevy.** In Hevy, open Profile, Settings, Export & Import Data, Export Data, then Export Workouts. The importer looks for the columns title, start_time, exercise_title, set_type, weight_kg or weight_lbs, reps and rpe. Start times need English month names, and a start time in another language is listed as skipped. Times are read in your phone's time zone, so a workout near midnight can land on the neighbouring day.
- **Strong.** Export your workouts from Strong. The importer looks for Date, Workout Name, Exercise Name, Set Order, Weight, Reps and RPE. W marks a warm-up set, and D and F mark drop and failure sets, which are imported as working sets. Older Strong files do not name the weight unit, so after you choose the file the review asks whether the weights are in kg or lb. Pick the unit Strong was set to, because the wrong one scales every weight by 2.2.
- **Any other spreadsheet** with a date, an exercise, reps and a weight for every set. Other apps' files are not read by name.

For a spreadsheet, **Date**, **Exercise**, **Reps** and **Weight** are needed, and **Set**, **RPE**, **Result**, **Session name** and **Kind** are optional. The weight unit, kg or lb, is detected from the weight column header or from a **Unit** column. A row with a blank unit is read in the unit you use in the app, and the review tells you when that happened. If there is no **Result** column, every set counts as made.

## How rows are handled

- **Exercises** are matched to the app's library by name. A name that does not match is skipped and listed for you, with how many rows it covers. The app never invents an exercise. The library is an Olympic weightlifting list, so a bench press or a machine exercise is listed rather than imported. "Squat (Barbell)" is read as the back squat, "(Barbell)" is ignored on other names, and "and" matches "&". Nothing else is guessed.
- **Timed, distance and bodyweight movements** are skipped.
- **Sets you already have** are skipped. A set counts as a duplicate when the day, the exercise and the set number are the same. Without a **Set** column, the set number is the row's order for that exercise in that session. A skipped row still counts, so you can fix a name in the file and import again without adding a set twice.
- **Dates written as 3/4/2025** are read in your phone's date order. When that was a guess, the review screen warns you.
- Only the first 20,000 rows of a file are read, and the review warns you if there are more.

## Review, then import

Before anything is saved you see a review: the counts, the skipped rows with the reason for each, the exercise names that did not match, and any warnings. Nothing is saved until you tap **Import**. To stop, leave without tapping it.

Imported sessions carry the note **Imported from a CSV file.** so you can tell them apart in your Log Book. You can delete them one at a time there, but there is no single undo for a whole import. Imports do not create personal records, so add any PRs yourself from the Locker. If the save fails, nothing from that import is kept, and you can try again.

:::note[Android]
The **Import Training History (CSV)** row is in the **Data** section of **Settings**, next to Export, not under Data & Privacy. After you tap it and choose a file, you pick it with the system document picker.
:::
