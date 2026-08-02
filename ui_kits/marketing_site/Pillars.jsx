function Pillar({ eyebrow, title, body, shots, reverse }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: reverse ? 'minmax(0,1.1fr) minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'clamp(28px,4vw,60px)', alignItems: 'center',
    }} className="split">
      {reverse ? <>
        <div style={{ display: 'grid', gap: 22 }}><SiteHead eyebrow={eyebrow} title={title} body={body} max={520} /></div>
        <div style={{ display: 'flex', gap: 18, justifyContent: 'center' }}>{shots}</div>
      </> : <>
        <div style={{ display: 'flex', gap: 18, justifyContent: 'center' }}>{shots}</div>
        <div style={{ display: 'grid', gap: 22 }}><SiteHead eyebrow={eyebrow} title={title} body={body} max={520} /></div>
      </>}
    </div>
  );
}

function Pillars() {
  return (
    <section id="pillars" style={{ padding: 'clamp(60px,7vw,110px) 0', display: 'grid', gap: 'clamp(60px,7vw,100px)' }}>
      <div style={owlSiteWrap}>
        <Pillar eyebrow="It builds today's session" title="Tell it how you feel. It builds the workout."
          body="Tell Lifting Lab how you feel, what's sore, what's in your gym, and how much time you've got. It builds a full session around that — the right classic lift for today's rotation, strength work that avoids what's sore, accessories that balance the day out. Then it's yours: reorder it, swap anything, dial a block up or down, and once you start, work through it in whatever order you want. Lifting Lab builds the session. You run it."
          shots={<><Shot src="../../assets/screens/08-readiness-checkin.png" alt="Readiness check-in: energy, soreness, equipment and time" width={240} />
            <Shot src="../../assets/screens/11-session-hub.png" alt="Resulting session: reorder, swap, dial blocks up or down" width={240} /></>} />
      </div>
      <div style={owlSiteWrap}>
        <Pillar reverse eyebrow="It programs the cycle" title="Five programs, loaded off your real PRs."
          body="Technique, strength, specification, peak, and a masters cycle — periodized templates that load off your real PRs, not a generic template. Every set arrives with the target weight, the percentage, and the plates for your bar. Miss a session and Lifting Lab reschedules it instead of scolding you."
          shots={<Shot src="../../assets/screens/02-programs-list.png" alt="Programs list: five periodized cycles" width={260} />} />
      </div>
      <div style={owlSiteWrap}>
        <Pillar eyebrow="It sees the lift" title="Film a set. Lifting Lab reads the pull."
          body="Film a set, right from your session. Lifting Lab tracks the plate through the whole lift and breaks it into first pull, transition, second pull, turnover, and catch — then scores the path and shows you the drift. Compare today's snatch against your best one. And when the tracking isn't clean, Lifting Lab tells you that too, instead of pretending."
          shots={<><Shot src="../../assets/screens/16-bar-trace-compare.png" alt="Compare: two lifts overlaid at true scale" width={230} />
            <Shot src="../../assets/screens/15b-bar-trace-live-metrics.png" alt="Bar Trace metrics: peak speed, mean pull speed, bar height" width={230} /></>} />
      </div>
      <div style={owlSiteWrap}>
        <Pillar reverse eyebrow="It knows the sport" title="Built on Sinclair, Robi, and IWF classes."
          body="Sinclair and Robi. IWF weight classes and world records. Prilepin. Plate math for your gym's actual inventory. Warm-up ramps that shape jumps the way a coach would. An illustrated library for every lift. And a meet-day planner that counts attempts, not minutes, so you're warm when the bar is loaded."
          shots={<><Shot src="../../assets/screens/21-sinclair.png" alt="Sinclair score calculator" width={230} />
            <Shot src="../../assets/screens/17-barbell-loader.png" alt="Barbell loader: plate math for your gym" width={230} /></>} />
      </div>
    </section>
  );
}

Object.assign(window, { Pillars });
