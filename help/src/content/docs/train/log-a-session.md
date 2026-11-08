---
title: Log a session
description: Start a workout from the Train tab, log each set with Made or Miss, use the rest timer, and finish.
covers:
  - Docs/FEATURES.md#Dashboard
  - Docs/FEATURES.md#Active session
  - Docs/FEATURES.md#Pre-session
  - LiftingLab/Features/Train/Session/ActiveSessionView.swift
  - LiftingLab/Features/Train/Complex/ComplexSequenceRow.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/TrainDashboardScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/ActiveSessionScreen.kt
  - LiftingLab/App/LaunchReconciler.swift
  - LiftingLab/Features/Train/Session/ActiveSessionModel.swift
verified_for: "1.5"
---

<video controls playsinline preload="none" poster="/help/videos/v2/B2-poster.webp" width="300" aria-describedby="B2-desc">
  <source src="/help/videos/v2/B2.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/B2.vtt" srclang="en" label="English" default>
</video>

<p id="B2-desc"><em>Video, 23 seconds, with narration and captions. The next set loads. Rest starts. 6 easy to 10 all out. Tag how it failed, or skip the tag.</em></p>

## Start a session

Open the **Train** tab. Whatever is waiting for you sits near the top.

- **Today's program day.** If you are following a program, a button starts today's session. You first see a quick check-in where you tap how you feel. Feeling below normal eases the day's fixed weights a little. One tap starts the session.
- **A session you left open.** It appears as a row saying which workout, how far in you were, and how long ago. Tap it to go back in.
- **Something new.** Tap **Build** (the plus in the middle of the tab bar), then **Build My Workout** for a session made around how you feel today.

![The Check In sheet: Fresh, Normal, Tired and Smoked, with Tired easing today's weights by 5 percent and Smoked by 10 percent.](../../../assets/screens/check-in.png)

![The Train tab with a paused session: a Back Under the Bar row showing the workout and how many sets are logged.](../../../assets/screens/resume-session.png)

Leaving a session never loses a set. Backing out just pauses it, and every set you logged is already saved.

<!-- since 1.5 -->

To end a paused session without going back in, press and hold its row. **Finish It** closes the session at the last set you logged, so it shows in your Log Book as the short session it was, and a program day counts as done. **Discard** deletes the workout after asking. If a program day has nothing logged yet, only **Discard** is offered, which puts the day back on your schedule instead of marking a session you never did as complete.

:::note[Android]
On Android, tap the three dots at the end of the row instead of pressing and holding.
:::

A program day you started late and carried past midnight stays open, so the app does not close it for you in the middle of your workout. A day you stopped more than 12 hours ago is closed with the sets you logged, or put back on your schedule if you had logged none.

<!-- /since -->

## The set card

The session shows one set at a time. You see the exercise, the weight in large type, the target reps, and a picture of the bar with the plates on each side. The classic lifts, squats, pulls and presses open with warm-up sets first, starting with the empty bar. These are labelled as warm-ups and are not counted as training.<!-- since 1.5 --> When the same lift comes back later in the session, such as back-off sets after a heavy top set, it has no second warm-up: you are already warm from the first.<!-- /since -->

To log a set:

1. Check the weight. Tap the number to type a new one, or use the minus and plus buttons to step to the next weight your plates can build.
2. Check **Reps done**. Left alone, it counts the full target if you make the lift and zero if you miss. Nudge it if you did more or fewer.
3. Tap **Made** or **Miss**.
4. If you miss, you can tag what went wrong. The app then suggests causes, drills and cues for that fault.<!-- since 1.5 --> Tagged misses also count in [Technique Doctor](/help/train/technique-doctor/).<!-- /since -->

Some sets ask how hard it felt. Pick the answer that fits, from easy to all out.<!-- since 1.5 --> Rating a working set as all out holds the next sets at that weight instead of climbing.<!-- /since -->

If you change a weight and make the lift, the remaining sets of that exercise move by the same amount, so you do not have to retype it each time.

<!-- since 1.5 -->

A complex (several lifts on one bar) is one set with its lifts listed in order. If you miss one, the app asks **Where did it go?** so you can tap the lift that failed. Complexes cannot be filmed yet. See [Build and log a complex](/help/train/complexes/).

<!-- /since -->

<!-- since 1.5 -->

A set that asks you to go by feel, with no weight written, can open on what you lifted last time. The line under the weight says where the number came from. It names the reps that weight was made for, for example "From 100 kg for 1 last time, adjusted for 3 this set", because a weight you made for a single is not a weight to carry unchanged into a triple. Type your own number and the line goes away.

## Swap an exercise mid-session

In a workout you built yourself, tap the circled dots beside the exercise name and choose **Swap exercise** for as long as one of its working sets is still ahead. Sets you have already logged stay under the lift you did them as, and the sets still to come, and any warm-up sets you have not done, move to the new lift. If the new weight is lighter than the old one, a line under the weight says which lift it is now for. Program days cannot be swapped.

<!-- /since -->

## Rest timer

Once you log a set, the rest timer starts. By default it counts up so you can see how long you have rested. In **Settings > Training** you can turn on the countdown timer, which signals when rest is up even if your phone is locked. It keeps running if you leave the session and come back<!-- since 1.5 -->, and adding an exercise from the session list does not restart it<!-- /since -->.

<!-- since 1.5 -->

If you turn on **Spoken rest cues** in **Settings > Accessibility**, the phone says when 30 seconds remain on the countdown and when rest is over. At the end of a rest it names the set you are about to do, numbered the way the card shows it (a warm-up as a warm-up set), at the weight on the bar. After the last set of an exercise it just says rest is over.

<!-- /since -->

<!-- since 1.5 -->

## The Accessibility view

If you prop your phone on the floor, or you simply want bigger controls, turn on the Accessibility view. Tap the **A** in the session's top corner, or go to **Settings > Accessibility**. The weight, reps and set label become very large, white on black. **Made** and **Miss** grow into huge buttons, and gray controls get a clear outline. You can still type or step the weight and set the reps.

:::tip
Switching the view on and off mid-session never changes your logged sets.
:::

<!-- /since -->

## Finish

When every set is done, tap **Finish Session**. You can end early with **Cut It Short**, which saves what you have logged.<!-- since 1.5 --> If you have not logged a single set, there is nothing to save, so the same button reads **Discard** and removes the workout instead of counting it as done. A program day you discard goes back on your schedule.<!-- /since --> A celebration screen shows any new records. From there, tap **Done** to leave, **Log how it went** to add a note, or **Share Workout**. The note is optional and stays available from the Log Book.

Changed your mind about a workout? The finish menu also offers **Discard Workout**, which asks before deleting.

<!-- since 1.5 -->

If you paused a session and finished it hours later, it ends at your last logged set, plus up to half an hour for a long rest or a note. The Log Book duration, the shared card and the workout saved to Apple Health (Health Connect on Android) then show the time you trained, not the time the session sat open.

<!-- /since -->

![The set card: the exercise name, the weight in large type with the reps, a bar loading diagram, a Reps done stepper, and Made and Miss buttons.](../../../assets/screens/set-card.png)

<video controls muted playsinline preload="metadata" poster="/help/videos/log-a-set-poster.png" width="300" aria-describedby="log-a-set-desc">
  <source src="/help/videos/log-a-set.mp4" type="video/mp4">
</video>

<p id="log-a-set-desc"><em>Video, 12 seconds, no sound: from the session list, open an exercise and tap Made. The rest timer starts and the next warm-up set loads.</em></p>
