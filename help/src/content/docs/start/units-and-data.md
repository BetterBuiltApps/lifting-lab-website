---
title: Units and your data
description: Choose kilograms or pounds, learn where your data lives, and export it as CSV files.
covers:
  - Docs/FEATURES.md#Tab 4, Locker
  - LiftingLab/Features/Me/SettingsView.swift
  - LiftingLab/Features/Me/DataPrivacySettingsView.swift
  - LiftingLab/Features/Me/DataExportView.swift
  - LiftingLab/App/AppData.swift
verified_for: "1.4"
---

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

Your sessions, sets and records are stored on your device, so the app works without a connection. The Data & Privacy screen lists the data location as "This device + iCloud" and notes that training data syncs to iCloud.

On a new iPhone signed in to the same iCloud account, the app waits a few seconds on first launch for your profile to arrive before it asks you to set up. If you open it with no connection, set-up appears as usual, and your synced profile replaces the empty one the next time you launch.

Bar Trace video clips are handled separately. They save to your photo library either way. You can choose in Data & Privacy whether they also sync to iCloud so your other devices can play them, and the screen shows how much space your clips use.

:::note[Android]
Android keeps everything on the phone. There is no iCloud sync and no sync setting. Your sessions, records, profile and Bar Trace clips are stored on this device only, clips are copied into the app's private storage, and the app makes no network calls of its own.
:::

## Export your data as CSV

You can take your data out as spreadsheet files at any time. Export is free.

1. Open **Locker**, then **Settings**, then **Data & Privacy**.
2. Tap **Export Data (CSV)**.
3. Tap **Export All (3 CSV Files)**, or choose a single file.
4. Pick where to send it from the share sheet: Files, Mail, AirDrop, a spreadsheet app, or any other destination you use.

The three files are:

- **Lift Summary.** One row per lift: your best PR, your training max, your heaviest made set, your best estimated one-rep max, how many sessions and sets you have done, your total tonnage, and when you last trained it.
- **Personal Records.** Every PR you have logged.
- **Training History.** Every set you have logged. Warm-up sets are marked and never counted toward your totals.

Weights in the files appear in kilograms and in your chosen unit.

:::note
Data & Privacy also holds the Terms & Conditions and Privacy Policy, which you can read offline, a record of when you accepted the Terms, and an About the Data screen that names the sources behind the app's numbers.
:::
