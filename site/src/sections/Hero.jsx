import React from 'react';
import { motion } from 'motion/react';
import { siteWrap, AppStoreButton, Shot } from './Chrome';
import { SITE } from '../config';
import { asset } from '../lib/asset';
import { DURATION, EASE, fadeUpItem, staggerContainer } from '../lib/motion';

export function Hero() {
  return (
    <header style={{
      background: 'radial-gradient(110% 80% at 76% 6%, rgba(245,166,35,0.16), transparent 60%), var(--bg)',
      paddingBottom: 'clamp(56px,7vw,104px)',
    }}>
      <div style={{ ...siteWrap, paddingTop: 'clamp(56px,7vw,96px)', display: 'grid', gap: 'clamp(32px,4vw,52px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.fade, ease: EASE.inOut }}
          style={{ display: 'grid', gap: 22, justifyItems: 'start', maxWidth: 680 }}
        >
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
              borderRadius: 999, background: 'var(--amber-16)', border: '1px solid var(--amber-40)',
              font: 'var(--type-caption)', fontWeight: 700, color: 'var(--amber)',
            }}>Coming soon</span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
              borderRadius: 999, background: 'var(--surface)', border: 'var(--border-hairline-1)',
              font: 'var(--type-caption)', color: 'var(--text-secondary)',
            }}>Built for competitive weightlifting</span>
          </div>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(44px,5.4vw,64px)', lineHeight: 1.0, letterSpacing: '-2px',
            color: 'var(--text-primary)',
          }}>
            The coach you don't have.
          </h1>
          <p style={{
            margin: 0, maxWidth: '52ch', fontSize: 19, lineHeight: 1.55,
            color: 'var(--text-secondary)',
          }}>
            Lifting Lab programs your cycle, analyzes your lifts frame by frame, tells you why the last one
            missed, and gets you through meet day. Built for one sport.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6, flexWrap: 'wrap' }}>
            <AppStoreButton />
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{SITE.ctaNote}</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.15)}
          className="hero-pair"
        >
          <motion.div variants={fadeUpItem(16)}>
            <Shot
              src={asset('assets/screens/08-readiness-checkin.png')}
              alt="Readiness check-in: energy, soreness and time build today's session"
              width={300}
              priority
              lcp
              caption="Tell it how you feel — it builds the session"
            />
          </motion.div>
          <motion.div variants={fadeUpItem(16)} style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-8% -8% 20%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.14), transparent 65%)', filter: 'blur(8px)',
            }} />
            <div style={{ position: 'relative' }}>
              <Shot
                src={asset('assets/screens/15-bar-trace-analysis-detail.png')}
                alt="Bar Trace: skeleton overlay, bar path and phase split on a snatch turnover"
                width={300}
                priority
                caption="Film a set — it reads the pull, phase by phase"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
