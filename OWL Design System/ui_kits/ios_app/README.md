# OWL for iPhone — UI kit

High-fidelity recreations of the real app's core screens, composed entirely from
this design system's components.

**Source of truth:** the SwiftUI codebase at `OWL/OWL/Features/…`, read directly.
No screenshots were used.

| Screen | Recreated from |
| --- | --- |
| Dashboard (Train) | `Features/Train/Dashboard/DashboardView.swift` |
| Active session | `Features/Train/Session/ActiveSessionView.swift`, `Theme/Components/SessionComponents.swift` |
| Tools hub | `Features/Tools/ToolsHubView.swift` |
| Bar Trace home | `Features/OWL/OWLHomeView.swift` |
| Bar Trace analysis | `Features/OWL/OWLPlayerView.swift`, `ScoreRingCard.swift`, `PhaseBreakdownCard.swift`, `VelocityChartCard.swift`, `PositionsCard.swift`, `TechniqueFindingsCard.swift` |
| Me hub | `Features/Me/` + `App/RootTabView.swift` |

`index.html` is interactive: the first phone runs the real navigation —
Train → Start Session (log sets, watch the rest ring), Tools → Bar Trace → tap the
top analysis to open the player (scrub the trace, seek from the velocity graph,
step frames, change playback rate).

## Files

- `ios-frame.jsx` — device bezel (starter component, not part of the brand)
- `Shell.jsx` — screen scaffold, iOS large title, inline nav, streak chip
- `Dashboard.jsx`, `ActiveSession.jsx`, `ToolsHub.jsx`, `BarTraceHome.jsx`, `BarTracePlayer.jsx`

## Known abbreviations

- The video stage uses a still exercise illustration under a synthetic S-curve
  trace; the real app draws over an `AVPlayerLayer`.
- The pose/skeleton overlay and the compare player are described in the app's
  code but not recreated here — the trace, metrics, phases, velocity graph,
  positions and findings cards are.
- Lists are abbreviated (4 saved analyses standing in for many).
