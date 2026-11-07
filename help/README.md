# Lifting Lab Help (liftinglab.app/help/)

Task-based how-to guides for the app. Starlight (Astro), plain Markdown, one
article per task. Deployed with the marketing site: `deploy.yml` builds this and
copies `dist/` into `site/dist/help`.

```bash
npm install --prefix help
npm run dev --prefix help      # localhost:4321/help/
npm run build --prefix help    # -> help/dist
```

## Writing an article

Put it in `src/content/docs/<folder>/` (`start`, `train`, `bar-trace`, `more`,
`releases`). Frontmatter is schema-checked, so a missing key fails the build:

```yaml
---
title: Log a session
description: One sentence.
covers:
  - Docs/FEATURES.md#Active session            # informational
  - LiftingLab/Features/Train/Session/ActiveSessionView.swift   # drift-checked
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/ActiveSessionScreen.kt   # drift-checked
verified_for: "1.4"
---
```

- `covers` is what makes drift detectable. List every screen the article
  describes, on both apps: iOS paths from the app repo root, Android paths from the
  Android repo root with `lifting-lab-android/` in front. The app repo's
  `Scripts/help-drift-check.sh --report` lists articles whose covered code changed
  since they were verified, uncommitted edits included, and it runs as a Claude Code
  `Stop` hook there, so drift is raised at the end of the session that caused it.
  `/update-help` (app repo skill) drafts the fixes.
- Bump `verified_for` only after checking the article against that app build.
- **Never rename a slug**: the apps link to these URLs. Add a redirect if one must move.
- Plain second person, numbered steps, mark paid features "Pro", describe only what
  a Release build ships. No em or en dashes (see the repo CLAUDE.md).
- Screenshots: regenerate with the process in the repo CLAUDE.md, reference by filename.

## Theme

Dark only, amber accent, mirrored from `tokens/colors.css` in `src/styles/custom.css`
(change `tokens/` first). The theme picker is removed on purpose.

## iPhone and Android

One set of guides covers both apps. Where behavior differs, add a Starlight
`:::note[Android]` aside (or name both in the sentence), and only state what you
checked in the Android source (`lifting-lab-android`). The drift check reads the
Android paths an article lists, so an Android-only change to a covered screen is
flagged too. It cannot flag a screen nobody listed: when an article starts
describing another screen, add both apps' files to its `covers`.
