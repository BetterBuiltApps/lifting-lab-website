repo: hickad/OWL
branch: main

## Last sync

date: 2026-07-25T00:00:00Z
status: NOT ACCESSIBLE — github_get_tree 404'd on both `main` and `master`. The
repo is private and the import App is not installed on `hickad`, or the name
differs. Everything in this design system was read from the locally mounted
`OWL/` folder instead, which is the same project.

### Updated in this project
- Token layer written from `OWL/OWL/Theme/Theme.swift` (colors, type, spacing, motion)
- 19 components authored from `OWL/OWL/Theme/Components/` and the feature views
- iPhone UI kit recreating Dashboard, Active Session, Tools, Bar Trace home + analysis
- Brand assets copied from `OWL/OWL/Assets.xcassets/`

## Screen map

| Screen / file | Source files |
| --- | --- |
| `tokens/*.css` | `OWL/OWL/Theme/Theme.swift`, `OWL/OWL/Theme/Components/PlateVisuals.swift` |
| `components/core/*` | `Theme/Components/CommonComponents.swift`, `SessionComponents.swift`, `JuicyProgressBar.swift` |
| `components/data/*` | `Features/OWL/ScoreRingCard.swift`, `PhaseBreakdownCard.swift`, `VelocityChartCard.swift`, `Theme/Components/SparklineView.swift`, `PlateVisuals.swift` |
| `components/session/*` | `Theme/Components/SessionComponents.swift`, `Features/Train/Session/ActiveSessionView.swift` |
| `components/feedback/*` | `Theme/Components/BadgeToast.swift` |
| `components/navigation/*` | `Features/Tools/ToolsHubView.swift`, `App/RootTabView.swift`, `Features/OWL/OWLHomeView.swift` |
| `ui_kits/ios_app/Dashboard.jsx` | `Features/Train/Dashboard/DashboardView.swift` |
| `ui_kits/ios_app/ActiveSession.jsx` | `Features/Train/Session/ActiveSessionView.swift` |
| `ui_kits/ios_app/ToolsHub.jsx` | `Features/Tools/ToolsHubView.swift` |
| `ui_kits/ios_app/BarTraceHome.jsx` | `Features/OWL/OWLHomeView.swift` |
| `ui_kits/ios_app/BarTracePlayer.jsx` | `Features/OWL/OWLPlayerView.swift` + its cards |
| `ui_kits/marketing_site/*` | none — no web source in the repo |
| `assets/*` | `OWL/OWL/Assets.xcassets/`, `uploads/` |
