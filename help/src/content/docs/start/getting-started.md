---
title: Get started with Lifting Lab
description: A first look at the app's tabs and what to expect the first time you open it.
covers:
  - Docs/FEATURES.md#Onboarding
  - Docs/FEATURES.md#The Build tab
  - LiftingLab/Features/Onboarding/OnboardingFlowView.swift
  - LiftingLab/App/RootTabView.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/onboarding/OnboardingFlowScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/RootTabView.kt
verified_for: "1.4"
---

Lifting Lab is a training companion for Olympic weightlifting. It helps you plan a session, log every set, film a lift and trace the bar, and keep track of your records. This page covers the first launch and where things live.

These guides cover Lifting Lab on iPhone and on Android. Where the two differ, a note says so.

<video controls playsinline preload="none" poster="/help/videos/v2/L4-poster.webp" width="300" aria-describedby="L4-desc">
  <source src="/help/videos/v2/L4.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/L4.vtt" srclang="en" label="English" default>
</video>

<p id="L4-desc"><em>Video, 13 seconds, with narration and captions. Units, bar, experience, current bests. 16 or older, or a guardian agrees.</em></p>

## What you will see the first time

The first time you open the app, a short setup walks you through a few screens. Almost everything is optional, and you can change any answer later in Settings.

1. **Units.** Choose kilograms or pounds. Kilograms are the competition standard. Pounds work everywhere too. See [Units and your data](/help/start/units-and-data/) for how this works.
2. **About you.** Pick your bar (men's 20 kg or women's 15 kg), your experience level, and optionally your bodyweight. This sets your starting bar, your warm-up sets, and how programs scale. If you chose pounds, the men's choice is the 45 lb bar and the women's choice is the 15 kg bar. The bar choice also sets men's or women's scoring for your Sinclair and weight classes. Bodyweight is used for your Sinclair score too, a number that lets lifters of different sizes be compared.
3. **Starting PRs (optional).** Enter your current best lifts if you know them. Programs use these to work out percentages. Skip any you are unsure of. You can add records later, or set them in a session.
4. **Ready to go.** The last screen lists the tabs and asks for one confirmation: tick the box that says you are 16 or older, or that a parent or guardian is agreeing on your behalf. The Start training button stays off until you do. Weightlifting carries a risk of injury, so this screen also shows a short safety note, with the Terms and Privacy Policy one tap away.

If you tap Skip on an earlier screen, you keep anything you already entered and jump to the last screen. You still need to tick the box there.

:::note[Android]
On Android the Back gesture steps back one screen during setup, keeping what you typed. If you go back to Starting PRs and fix a number, the new number replaces the old one, and clearing a box removes that starting PR.
:::

The app does not ask for any permissions up front. Camera, notifications and similar requests appear later, at the moment you use a feature that needs them.

## The tabs

Along the bottom of the screen you will find:

- **Train.** Your home screen. It shows what is waiting for you today, your week, recent records, and shortcuts to programs, your PRs, your Log Book (a history of every session) and the exercise library. This is where you log sets.
- **Bar Trace.** Film a lift and the app traces the path of the bar so you can see what went wrong and what to fix.
- **Build** (the plus button in the middle). The one place to start something new. See below.
- **Tools.** Offline calculators and helpers: warm-ups, training percentages, plate loading, a kg and lb converter, a one-rep-max estimator and strength ratios. Some meet-day tools are Pro.
- **Locker.** Your profile, your gyms and plates, your level and streak, and Settings.

## Starting something new with Build

Build is a button that sits in the tab bar. Tap it from any tab and a small menu opens with two choices:

- **Build My Workout.** A workout made around how you feel today.
- **Start a Program.** Follow a structured plan over several weeks.

If you already have a session open, the menu leads with a way back into it. Starting something new then asks whether to keep the open workout paused or discard it, so you never lose work by accident.

:::tip
Your first session is a good time to follow [Log a session](/help/train/log-a-session/).
:::
