---
title: Build a workout around how you feel
description: Create a one-off workout from a quick check-in, then swap exercises, edit blocks and sets, and start it.
covers:
  - Docs/FEATURES.md#Workout builder (`Train/Builder/`)
  - Docs/FEATURES.md#The Build tab (`App/RootTabView.swift`, `App/CreateWorkoutSheet.swift`)
  - LiftingLab/Features/Train/Builder/WorkoutBuilderView.swift
  - LiftingLab/Features/Train/Builder/CheckInSheet.swift
  - LiftingLab/Features/Train/Builder/ExercisePickerSheet.swift
  - LiftingLab/Features/Train/Builder/CrucibleCard.swift
  - LiftingLab/Domain/Complex/ComplexSelection.swift
  - LiftingLab/Domain/Builder/WorkoutGenerator.swift
  - LiftingLab/Domain/Builder/WorkoutDraft.swift
  - LiftingLab/Domain/Builder/RepAwareIntensity.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/builder/WorkoutBuilderScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/ExercisePickerSheet.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/CreateWorkoutSheet.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/builder/WorkoutGenerator.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/builder/WorkoutDraft.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/builder/RepAwareIntensity.kt
verified_for: "1.5"
---

The workout builder is for days when you are not following a program. You answer a few questions about how you feel, the app drafts a session, and you change anything you like before you start.

<video controls playsinline preload="none" poster="/help/videos/v2/C1-poster.webp" width="300" aria-describedby="C1-desc">
  <source src="/help/videos/v2/C1.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/C1.vtt" srclang="en" label="English" default>
</video>

<p id="C1-desc"><em>Video, 34 seconds, with narration and captions. Energy, sore muscles and time. Sore muscles avoided. Sets and time shown. Light, Normal or Heavy. One set at a time. No program needed.</em></p>

## Start a workout

1. Tap the **Build** button (the plus in the middle of the tab bar).
2. Tap **Build My Workout**.
3. Fill in the check-in: your energy, which muscles are sore, which blocks you want to train, and optionally how much time you have. Sore muscles are filled in from your recent training, so just adjust them.
4. Tap **Load It Up**.

If you leave the blocks blank, the app chooses the shape of the session. If you tick blocks, such as Clean & Jerk and Squats, you get exactly those and nothing bolted on.<!-- since 1.5 --> A block you tick is built even when a sore muscle would normally keep it out, such as Core on a day your core is sore, just with less work in it.<!-- /since --> Your choice is remembered for next time.

<!-- since 1.5 -->

Low energy changes what you get. With the blocks left blank, an energy of 1 turns the day into a short recovery session: some light cardio, core work and one easy power lift. With blocks ticked, you still get those blocks, with fewer sets and lighter top sets.

Tick both Snatch and Clean & Jerk and you get both, snatch first. One of them is the day's main lift and gets the full load for your energy. The other is built one energy step lighter, so two heavy lifts do not stack.

If an injury you logged rules out the full snatch or clean, a strong day gives you the closest lift your injury allows, such as a power snatch, instead of leaving the lift out.

<!-- /since -->

The "Training at" row lets you pick which gym you are in, so the bar, plates and equipment match what you actually have.

<!-- since 1.5 -->

## How heavy the draft goes

The draft follows what is normal in weightlifting: the classic lifts are mostly singles and doubles, and the app never prescribes a classic lift or a squat set above 92% of your record on its own, however the sliders are set. You can still type a higher percentage on an exercise yourself. When those blocks are in the draft, and before the sliders move anything, the day's top work is:

| Energy | Snatch and clean & jerk | Squats |
|---|---|---|
| 5 | a single at 87% | 3 reps at 85% |
| 4 | a double at 82% | 3 reps at 82% |
| 3 | a double at 77% | 3 reps at 78% |
| 1 or 2 | 3 reps at 68% | 3 reps at 70% |

The percentage shown on a single or a double is the weight you lift: when a snatch single reads 87%, 87% of your snatch is what goes on the bar. A set of eight and a set of two are not the same percentage off the same record, so the app starts a longer set lighter than a short one.

If your experience level is Beginner, nothing in a loaded strength block goes above 80%. Pulls and deadlifts are the exception for everyone else: they can be prescribed at or above the lift they help, so they are not held to the 92% line.

<!-- /since -->

## Read the draft

The draft shows an estimated time, the total working sets and a list of blocks. A block is one part of the session, such as a lift, squats or accessories. Drag blocks to reorder them.

Cards on this screen explain the draft: what the app adjusted from your history, which weak point a choice addresses, and a "How this session was built" note that says why you are snatching today and what the time limit trimmed.

<!-- since 1.5 -->

Under a weak point, tap a movement listed under In this session to open that exercise. The note describes what the app did when it built the draft, so it stays the same when you edit the draft yourself.

The estimated time includes the warm-up sets the session adds in front of each loaded lift, when warm-up ramps are on in Settings. If you gave a time limit, the app fits the session to it in this order: core comes out first, then the cardio it added is shortened or dropped, then accessories and working sets come down, so your main lifts are cut last. If even the shortest version runs over, the note says how long it will take rather than claiming it fits.

If your sessions usually run longer than the estimate, the app fits the draft to the time your sessions really take, or to the time you gave in the check-in. A line that is greyed out is something the app noticed that changed nothing today, for example when the draft already fits your time.

Distances, such as a run, are shown in kilometres or miles to match your kg or lb setting.

<!-- /since -->

## Change exercises

- **Swap:** tap Swap on an exercise<!-- since 1.5 -->. The closest matches from the same kind of lift appear first<!-- /since -->, and the list is limited to the equipment you have.<!-- since 1.5 --> The new exercise keeps the sets, and keeps the reps when they are counted the same way. A plank swapped for sit-ups gets the sit-ups' own rep count, and a rowing machine swapped for a run keeps the same number of minutes. Its weight is set for today the way the app would set it, so swapping in a full clean on a technique day does not jump to a near-maximum.<!-- /since -->
- **Add exercise:** use Add exercise at the foot of a block.<!-- since 1.5 --> Its weight follows the same rule as a swap.<!-- /since -->

<!-- since 1.5 -->

- **Remove an exercise:** tap its delete button and confirm.

<!-- /since -->

- **Remove a block:** use Remove block.<!-- since 1.5 --> Emptying a block removes it, and the time it frees is shared among the blocks that are left. Anything you set by hand in the other blocks stays: typed percentages, reps and sets, dumbbell choices, Pyramid switches and the order you dragged the blocks into.<!-- /since -->
- **Add block:** use Add block to bring in a whole new part of the session.

<!-- since 1.5 -->

- **Complexes (Pro):** the exercise list shows complexes beside single lifts under **Complexes**, with **Build a new complex** below them. Pro members may also find the app has put one complex in the classic lift block. See [Build and log a complex](/help/train/complexes/).

<!-- /since -->

## Edit sets and weights

Each exercise has steppers for sets and reps. Percentage work shows a percent of your record for that lift, and effort-based work shows a target effort rating (RPE, a 1-10 scale of how hard a set feels).<!-- since 1.5 --> A cardio piece, such as a row, a bike or a run, has a Minutes stepper instead, from 5 to 60 in steps of 5.<!-- /since -->

Each loaded exercise also has a **Pyramid** switch. When it is on, the sets climb or descend like a ladder instead of repeating one weight. Low-rep work such as doubles and singles holds its reps and ramps the weight.

Sliders for volume and intensity scale the whole session.

<!-- since 1.5 -->

The Intensity slider runs from 15% lighter to 10% heavier than the draft. It is a position, not a running total: sliding it up and back returns the same numbers, and the weights match what a new draft at that setting would give. It never takes a classic lift or a squat above 92% of your record once its reps are counted (80% for a beginner). That is why a single that starts at 87% stops at 92% even with the slider all the way up.

A percentage you typed moves with the slider from where you typed it, and holds at 95% on the bar (80% for a beginner). A weight you typed above that is never cut just for being touched. Moving the slider back to zero puts every weight back where it started.

If you gave a time limit, the sets it trimmed stay trimmed when you set a block to Light, Normal or Heavy, or move the volume slider. Only what you change grows or shrinks.

:::note[Android]
The Android builder gives the same loads, caps and slider range as the iPhone app, so the same check-in builds the same draft on both.
:::

<!-- /since -->

## Reshuffle

Not keen on the draft? Tap **Reshuffle** for a different set of movements.<!-- since 1.5 --> Anything you have swapped, added or deleted stays as you left it. Only the parts you have not touched change, and sets and reps you typed in are kept.<!-- /since -->

:::tip
Press Save as routine to keep a draft you like. It appears under Routines in My Programs. Percentages are worked out when you start it, so a routine follows your latest records rather than the weights you had when you saved it.

<!-- since 1.5 -->

If you are training around an injury when you start a routine, any movement that loads the hurt area is swapped for a safer relative, or left out when there is none, the same way a new draft would be. "How this session was built" names each change. Your saved routine is not altered, and Swap puts the original movement back if you choose.

<!-- /since -->
:::

## Start

Tap **Send It** to begin. The workout opens in the live session screen, where you log each set.

![A workout draft: four blocks with their share of the session, an Add block button, Volume and Intensity sliders, and the Send It button.](../../../assets/screens/workout-builder.png)

<video controls muted playsinline preload="metadata" poster="/help/videos/build-a-workout-poster.png" width="300" aria-describedby="build-a-workout-desc">
  <source src="/help/videos/build-a-workout.mp4" type="video/mp4">
</video>

<p id="build-a-workout-desc"><em>Video, 12 seconds, no sound: tap Build, choose Build My Workout, answer the check-in and tap Load It Up. The draft opens with its blocks, ready to adjust.</em></p>

:::note
Settings has an Exercise variety option under Custom Workouts. Focused sticks to a short list of proven lifts, Varied (the default) uses any movement that does the same job, and Wide reaches into lighter technique and position work.
:::
