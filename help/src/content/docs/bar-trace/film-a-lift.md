---
title: Film a lift and read your bar path
description: Record or import a clip, mark the plate, and read the bar path Lifting Lab traces for you.
covers:
  - Docs/FEATURES.md#Tab 2, Bar Trace
  - LiftingLab/Features/BarPath/BarPathHomeView.swift
  - LiftingLab/Features/BarPath/DelayedReplayView.swift
  - LiftingLab/Features/BarPath/Share/ShareClipView.swift
  - LiftingLab/Features/BarPath/CameraCaptureView.swift
  - LiftingLab/Features/BarPath/PlateSeedView.swift
  - LiftingLab/Features/BarPath/BarPathCompareView.swift
  - LiftingLab/Features/BarPath/BarPathTrendCard.swift
  - LiftingLab/Features/BarPath/PhotoLibrarySaver.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/barpath/ui/PlateSeedScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/barpath/ui/CameraCaptureScreen.kt
verified_for: "1.4"
---

Bar Trace turns a video of your lift into a line showing where the bar travelled, plus a grade and the things worth fixing. You can film inside the app or bring in a clip you already have.

![The Bar Trace tab: Record and Import buttons, a Delayed Replay card, and a list of your past analyses with grades and bar speed.](../../../assets/screens/bar-trace-home.png)

## Set up the phone

The first time you tap Record or Import, the app shows a short guide. You can reopen it any time from "Where to put the phone".

- Stand the phone side-on, at a right angle to the bar, so the end of the bar points at the lens.
- Put it about 3 to 5 metres back, around hip height, on something steady.
- Keep your whole lift in frame, with room above you for the bar overhead.
- Make sure the plate nearest the camera is clearly visible at the start.

Standing too close is the most common problem: the plate looks oversized and the bar can leave the top of the frame.

## Record or import a clip

1. Open the Bar Trace tab.
2. Tap **Record** to film, or **Import** to pick a clip from your phone's video picker (your photo library on iPhone).
3. When recording, you can flip between the back and front cameras, pinch to zoom, and use the rotate button if the phone is lying flat or leaning on a plate. The front camera preview looks mirrored, but the saved clip is not.

While a take is running, the close button is greyed out. Tap Stop first, so the clip is kept and analysed.

:::note
On iPhone the first recording asks to add the clip to your photo library. If you decline, or a save fails, the app tells you once: your recordings then live only inside Lifting Lab and are left out of iCloud backup, so a new phone will not bring them over. You can allow "Add Photos Only" in Settings. Clips you import already live in your library.
:::

:::note[Android]
Android does not copy recordings to the gallery, so there is no photo-library prompt or notice.
:::

## Trim the clip

If you filmed yourself walking to the bar and back, trim the clip so only the lift is analysed. Drag the two handles to the stretch you want. The video file itself is never cut, so nothing is lost. Skipping the trim analyses the whole clip, which just takes longer.

## Mark the plate

Drag the circle over the plate nearest the camera and size it to match. This tells the app what to follow and gives it a sense of scale.

Circle a full-size 450 mm plate, the kind of bumper plate marked 20 kg or 45 lb. The scale for every speed and distance comes from it. A smaller plate, such as a 5 kg or 2.5 kg change plate, would make every figure wrong by about half. If the circle looks too small or too large for a full-size plate in your frame, the app says so over the picture. The app often suggests a circle for you, so check it sits on the plate and adjust if not.

:::tip
If the trace fails, the app takes you back to the circle. Most failures are a circle that sat slightly off the plate, so nudge it and try again.
:::

## Read the result

The bar path is traced on your phone (on iPhone with Apple's built-in vision tools, on Android with its own on-device analysis). From the top of the result screen down you get:

1. Your video with the traced path.
2. Whether the lift would count, shown as three referee-style lights (for the snatch, clean, and their variations).
3. A technique grade, with a bar for each part of the lift.
4. What to fix first, with drills that address it.
5. Speed, phase and position details. Tap a row or drag the graph to jump to that moment in the video.

Once you have two or more lifts of the same type, numbers are compared with your own average. If something could not be read, the card says why.

A new speed PR is judged against your earlier clips of the same lift at a similar weight, within about 5 kg or 5 percent of the bar. A light warm-up does not hold the record against your working sets, and a light day does not beat heavy work.

When the tracker lost the bar for much of a clip, its speeds and distances are not trusted. That clip is left out of your trend charts (the card says how many), it is not scored against your average, and it can never set a speed PR. Compare still shows both clips' numbers but not the differences between them, and the share screen starts with bar speed, path score and the velocity graph switched off. You can switch them on yourself.

## Replay it a few seconds late

Delayed Replay shows the camera feed 3, 5, 8 or 10 seconds behind. Prop the phone up, lift, and turn around to watch the rep without touching anything. Nothing is recorded or saved, and it does not use up an analysis.

## Share, compare and manage

- **Share** makes a vertical clip with the trace and stats on it.
- **Compare** overlays two analyses (Pro).
- **Re-analyze** and **Delete** are in the menu on the result screen.

:::note
Free accounts can run three analyses a month. Pro removes the limit. A failed trace does not count against it.
:::
