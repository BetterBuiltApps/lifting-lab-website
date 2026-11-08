---
title: Build a workout around how you feel
description: Create a one-off workout from a quick check-in, then swap exercises, edit blocks and sets, and start it.
covers:
  - Docs/FEATURES.md#Workout builder (`Train/Builder/`)
  - Docs/FEATURES.md#The Build tab (`App/RootTabView.swift`, `App/CreateWorkoutSheet.swift`)
  - LiftingLab/Features/Train/Builder/WorkoutBuilderView.swift
  - LiftingLab/Features/Train/Builder/CheckInSheet.swift
  - LiftingLab/Features/Train/Builder/ExercisePickerSheet.swift
verified_for: "1.4"
---

The workout builder is for days when you are not following a program. You answer a few questions about how you feel, the app drafts a session, and you change anything you like before you start.

## Start a workout

1. Tap the **Build** button (the plus in the middle of the tab bar).
2. Tap **Build My Workout**.
3. Fill in the check-in: your energy, which muscles are sore, which blocks you want to train, and optionally how much time you have. Sore muscles are filled in from your recent training, so just adjust them.
4. Tap **Load It Up**.

If you leave the blocks blank, the app chooses the shape of the session. If you tick blocks, such as Clean & Jerk and Squats, you get exactly those and nothing bolted on. Your choice is remembered for next time.

The "Training at" row lets you pick which gym you are in, so the bar, plates and equipment match what you actually have.

## Read the draft

The draft shows an estimated time, the total working sets and a list of blocks. A block is one part of the session, such as a lift, squats or accessories. Drag blocks to reorder them.

Cards on this screen explain the draft: what the app adjusted from your history, which weak point a choice addresses, and a "How this session was built" note that says why you are snatching today and what the time limit trimmed.

## Change exercises

- **Swap:** tap Swap on an exercise. The closest matches from the same kind of lift appear first, and the list is limited to the equipment you have. Sets and reps carry over to the new exercise, but a number measured differently does not: swap a run for a rower, or a plank for sit-ups, and the new exercise starts from its own default.
- **Add exercise:** use Add exercise at the foot of a block.
- **Remove an exercise:** tap its delete button and confirm.
- **Remove a block:** use Remove block. Emptying a block removes it, and the time it frees is shared among the blocks that are left. Anything you set by hand in those blocks stays: typed percentages, reps and sets, dumbbell choices, Pyramid switches and the order you dragged the blocks into.
- **Add block:** use Add block to bring in a whole new part of the session.

## Edit sets and weights

Each exercise has steppers for sets and reps. Timed and distance work steps in its own unit: seconds for a hold such as a plank, minutes for a rower, bike or ski machine, and kilometres for a run. Percentage work shows a percent of your record for that lift, and effort-based work shows a target effort rating (RPE, a 1-10 scale of how hard a set feels).

Each loaded exercise also has a **Pyramid** switch. When it is on, the sets climb or descend like a ladder instead of repeating one weight. Low-rep work such as doubles and singles holds its reps and ramps the weight.

Sliders for volume and intensity scale the whole session. The intensity slider sets each percentage from where the slider sits, so sliding it up and back returns the same numbers, and the weights match what a new draft at that setting would give. A percentage you typed moves with the slider from where you typed it.

## Reshuffle

Not keen on the draft? Tap **Reshuffle** for a different set of movements. Anything you have swapped, added or deleted stays as you left it. Only the parts you have not touched change, and sets and reps you typed in are kept.

:::tip
Press Save as routine to keep a draft you like. It appears under Routines in My Programs. Percentages are worked out when you start it, so a routine follows your latest records rather than the weights you had when you saved it.
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
