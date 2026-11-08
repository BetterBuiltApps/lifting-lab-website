# Releasing the website and the guides with an app release

One switch controls what liftinglab.app and liftinglab.app/help say: the repository variable **`APP_RELEASE`**.

| Value | What the site and guides show |
|---|---|
| unset or `1.2` | What is live in the App Store today. Unreleased content is **not in the build at all** (not just hidden). |
| `1.5` | Everything tagged "since 1.5": the guide text, the full video summaries and 1.5 videos, the CSV line, the Complexes guide. |

The deploy fails (`tools/release-guard.mjs`) if anything for a release that has not been reached is still in the output.

## Release day

1. **Look first (optional, any time):** `tools/preview-release.sh 1.5`, then open http://localhost:4173/. This builds both sites for 1.5 and serves them locally. Nothing is deployed.
2. **Flip it, at the moment the app goes live.** Either:
   - **On GitHub:** repo **Settings > Secrets and variables > Actions > Variables**, add (or edit) `APP_RELEASE` = `1.5`. Then **Actions > Deploy site to GitHub Pages > Run workflow** (branch `main`).
   - **Or with one command:**
     ```bash
     gh variable set APP_RELEASE --body 1.5 -R BetterBuiltApps/lifting-lab-website && gh workflow run deploy.yml -R BetterBuiltApps/lifting-lab-website
     ```
   The deploy takes about one to two minutes. Tip: set the App Store release to manual, so you press it and the workflow within the same minute.
3. **Check:** the workflow summary says `Built for APP_RELEASE=1.5`; open liftinglab.app and liftinglab.app/help.
4. **To undo:** set `APP_RELEASE` back to `1.2` and run the workflow again.

## After the release is out
- In `tools/release.mjs` set `DEFAULT_RELEASE` to `'1.5'` and delete the `APP_RELEASE` variable, so a plain push keeps showing 1.5.
- Four Help descriptions (`units-and-data`, `programs`, `prs-and-log-book`, `locker`) were made neutral because frontmatter cannot be gated. Restore the CSV, cycle report, rep records and help wording if you want it.
- Re-check the items listed under "Needs a decision" below.

## How content is tagged (for the next release too)
- **Guide text:** wrap it in `<!-- since 1.5 -->` and `<!-- /since -->` (block: own line, blank line around; or inline in a paragraph). Whole page: `since: "1.5"` in the frontmatter. See `help/src/plugins/remark-since.mjs`. Alt text cannot hold markers, so wrap the whole image.
- **Site copy:** `import { released } from '../lib/release'`, then `released('1.5') ? ... : ...` (see the CSV clause in `Explore.jsx`).
- **Videos and stills:** the gallery lives in `site/src/sections/Watch.jsx` and is fed by `site/src/data/videos.<release>.json`, written by the video project (`scripts/v2/web-export.mjs`: tab layout, `since`, `replaces`). Files for a later release are staged in `site/release/<v>/` and `help/release/<v>/` (they mirror the root of the build output) and are copied into the build only when the flag reaches that version (`tools/release-assets.mjs`). Re-run the export after changing videos, and commit the result.
- **A new release (say 1.6):** add it to `RELEASES` in `tools/release.mjs` and to the list in `web-export.mjs`, then tag content "since 1.6". Releases that were never submitted (1.3, 1.4) are not tagged: use the release that ships the feature.
- **Local builds:** `APP_RELEASE=1.5 npm run build` in `site/` and in `help/`. The Help build clears the Astro cache every time, because Astro caches rendered Markdown by file content and would otherwise reuse the old release's pages.

## Needs a decision (not gated yet)
- The home page and guides already sell **Technique Doctor** and **Strength ratios**, which the release notes list as 1.5 additions (earlier versions may have had a smaller form).
- Guide items the release notes do not settle: Classic Systems, "How this session was built" cards, Save as routine, Exercise variety, Reset Your Numbers, Film Room grading level, the order of lights and grade in Film a lift, and the Terms tick on Skip in getting started.
- Screenshots in the guides (tools hub, locker, workout builder, log book) may show 1.5 screens.
