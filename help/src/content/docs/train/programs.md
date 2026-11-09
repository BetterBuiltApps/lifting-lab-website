---
title: Pick and run a program
description: Choose a program, follow its sessions, and handle the days you miss.
covers:
  - Docs/FEATURES.md#Programs (`Train/Programs/`)
  - Docs/FEATURES.md#Missed sessions (`Train/MissedSession/`)
  - LiftingLab/Features/Train/Programs/ProgramDetailView.swift
  - LiftingLab/Features/Train/Programs/MyProgramsView.swift
  - LiftingLab/SeedData/ProgramTemplates/ClassicSystems.swift
  - LiftingLab/Features/Train/Programs/CycleReportView.swift
  - LiftingLab/Features/Train/MissedSession/MissedSessionView.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/programs/ProgramDetailScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/programs/CycleReportScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/MissedSessionSheet.kt
  - LiftingLab/Domain/MissedSessionPolicy.swift
  - LiftingLab/Domain/Progression/LoadProgression.swift
  - LiftingLab/Domain/ProgramEngine.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/programs/MyProgramsScreen.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/MissedSessionPolicy.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/progression/LoadProgression.kt
verified_for: "1.5"
---

A program is a multi-week plan with every session laid out for you. Use one when you want structure instead of deciding each day.

<video controls playsinline preload="none" poster="/help/videos/v2/D1-poster.webp" width="300" aria-describedby="D1-desc">
  <source src="/help/videos/v2/D1.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/D1.vtt" srclang="en" label="English" default>
</video>

<p id="D1-desc"><em>Video, 22 seconds, with narration and captions. Build, then Start a Program. The rest are marked Pro. 4x2 at 63% shows as 79 kg.</em></p>

## Start a program

1. Tap the **Build** button, then **Start a Program**.
2. Browse the list. Each card shows the number of weeks and the type of training.
3. Open one to preview its weeks and days.
4. Tap **Start This Program**, then **Start Today**. The program begins today. If you already have a program running, the app asks before it abandons that one, and the sessions you finished stay in your Log Book.

Beginner Foundation is free. Every other program is Pro, including the Classic Systems below. To write your own, see [Write your own program](/help/train/program-builder/).

## Classic systems (Pro)

Below the Program Library, **Classic Systems** holds four programs built on the principles of well-known national training traditions:

- **Bulgarian-Style High Frequency**: 6 weeks, 5 days. The classic lifts and squats, worked up to a heavy single by feel each day, then back-off singles.
- **Soviet-Era Multi-Lift**: 8 weeks, 4 days. A wide range of variations and pulls, in two waves with an easier week between.
- **Chinese-Style Volume and Strength**: 8 weeks, 5 days. High squat and pull volume, with upper back and posterior chain work every day.
- **Russian-Style Squat Cycle**: 6 weeks, 3 days. A squat block that ends in a test single, with light technique work to keep the lifts sharp.

Open one to see its tradition card, such as **The Bulgarian Tradition**: the principles it is built on and how it was adapted. The sets and percentages are the app's own, not a copy of any team's plan, and each is scaled to one session a day, since the originals were written for full-time athletes training more than once a day.

On a daily-heavy-single day, the back-off sets are a percentage of the top single you actually made, so their weight appears once you log it.

<!-- since 1.5 -->

## Complexes in a program (Pro)

In Program Builder, a day's exercise list includes complexes beside single lifts. See [Build and log a complex](/help/train/complexes/).

:::note[Android]
On Android, an exercise row in Program Builder also offers **Make it a complex**, and a day offers **Add complex**.
:::

<!-- /since -->

Without Pro you can still open a Pro program and read its first week. **Unlock with Pro** at the bottom takes you to the upgrade.

:::note[Android]
On Android, **Unlock with Pro** opens Settings, Subscription, where you choose a plan.
:::

## How sessions are made

You do not build the sessions. Each day in the program lists its exercises, sets and reps, and most weights are a percentage of your record for that lift. When you start a day, the app turns those percentages into real weights using your current records, so the loads follow your progress.

<!-- since 1.5 -->

Starting a day opens a short check-in first. The percentages stay as the program wrote them, but the number they come from can move with what your recent sessions show: a lift you made cleanly can go up a little, a lift you missed stays where it was, and a lift you keep missing or stalling on backs off. The check-in lists each lift whose weight moved and why, and you can turn that off for the day. A rough day, or a recovery or injury warning the app has picked up, can also lower the day's weights.

<!-- /since -->

<!-- since 1.5 -->

A lift is only backed off after a stall when you were really straining on it: a missed rep, an effort of RPE 8 or more, or a set made well under its target percentage. If a program holds a lift at 68% and you made every rep, you are not backed off for it. A rise is a small weekly step, paid in whole kilos when the usual plate step would round down to nothing, so lighter lifters can advance too. After a long break the weights you start from stay a little under your record, rather than jumping back to it. Rises and back-offs land on a weight your gym's bar and plates can build, so a pound gym moves in the plate steps it really has, not in a fractional number.

<!-- /since -->

Open today's session from the Train tab and it runs in the same live screen as any other workout.

## Pause, end or restart

On the Programs list and on the running program's own page you can **End Program** or **Restart from Week 1**. Both ask you to confirm. Ending only stops the remaining schedule. Sessions you already finished stay in your Log Book.

<!-- since 1.5 -->

Restarting a Pro program starts it again from the beginning, so it needs Pro. If your subscription has ended, you can still continue or end a Pro program you started, but **Restart from Week 1** asks you to unlock Pro first. Beginner Foundation and your own programs can always be restarted.

:::note[Android]
On Android, the Restart from Week 1 button is replaced by a line saying that restarting needs Pro. Continue Program and End Program stay available.
:::

<!-- /since -->

## Skipping and missed days

<!-- since 1.5 -->

To skip a day on purpose, tap **Skip Today** on the Train tab before you start it. The day is recorded as skipped and the program carries on with the next one.

<!-- /since -->

If a scheduled day passes without a session, the app asks what to do about it:

![The missed session sheet with three choices: Skip it, Reschedule and Merge into next.](../../../assets/screens/missed-session.png)

- **Skip it:** logged as missed, and the program continues from tomorrow. Good late in a cycle, in a deload week, or when you chose to rest.
- **Reschedule:** the session moves to today and later sessions shift back a day. Good for a single miss early on.
- **Merge into next:** a reduced version is added to your next session, so you keep some of the volume without doubling the load.<!-- since 1.5 --> Accessories are dropped, the sets are halved, and any prescribed pause stays. Its lifts go in with that day's lifts, ahead of the pulls and squats, and if both days have a squat you do only the one already planned. If your next session already holds a merged day, it goes to the one after. When there is no later session to add it to, for example on the last day of a program, Merge is greyed out.<!-- /since -->

<!-- since 1.5 -->

If you skip or merge a session that was holding a merged day, that merged day moves on to your next free session rather than being lost.

<!-- /since -->

If you missed several days, you get one question about the most recent one. The older days are logged as missed once you choose. If you close it without choosing, nothing changes and it asks again next time.

<!-- since 1.5 -->

### Optional days

Some programs offer a day you can take or leave. In the Masters Cycle, the fourth day each week is an optional technique and accessory session. If you train it, it counts like any other day. If you let it pass, the app does not ask about it, does not count it as missed or skipped, and does not hold the program open for it.

<!-- /since -->

:::tip
Not sure? Skip it. One missed session does not break a program.
:::

<!-- since 1.5 -->

## The cycle report (Pro)

When a program ends, Pro members see a report of what it changed:

- Your records at the start against the end. The report runs through the whole of the program's last day, so a final test day or heavy singles day counts.
- Your strength ratios, start to end.
- Bar speed early against late, if you filmed enough clips.
- What to run next, with a suggested program.

Ending from inside a workout does not interrupt you with the report. Finished programs keep their report under **Previous Programs** on the Programs list.

![The Train tab with an active program: a Start Today's Program button, today's session, Skip Today and End Program, and this week's schedule.](../../../assets/screens/train-dashboard.png)

<!-- /since -->
