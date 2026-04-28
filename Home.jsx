import { GOLD, GOLD_LIGHT, BG, BORDER, MUTED, WHITE } from '../theme';
import { GoldLine, SectionLabel, Btn, Card, IconBox } from '../components/UI';
import { MonitorIcon, WrenchIcon, ShieldIcon, CpuIcon, GearIcon, PenIcon } from '../components/Icons';

const SERVICES = [
  { icon: <MonitorIcon />, title: 'Tech Classes',              desc: '6 courses from beginner to advanced. Real practice, printed handouts every session.' },
  { icon: <WrenchIcon />,  title: 'Tech Help & Troubleshooting', desc: 'We find the problem, fix it fast, and explain what happened so it never surprises you again.' },
  { icon: <ShieldIcon />,  title: 'Security & Device Setup',   desc: 'New device setup done right — antivirus, backups, and privacy from day one.' },
  { icon: <CpuIcon />,     title: 'Custom PC Builds',          desc: 'Built to your budget and purpose. Every part chosen carefully. No retail markups.' },
  { icon: <GearIcon />,    title: 'Hardware Upgrades & Repairs', desc: 'More memory, faster storage, better cooling. New life for your existing machine.' },
  { icon: <PenIcon />,     title: 'Design & Digital Services', desc: 'Logos, flyers, business cards, and social media graphics. Professional results, fast.' },
];

const WHY = [
  { t: 'One Provider',       d: 'Education, tech support, hardware, and design — all from one person you can trust.' },
  { t: 'No Jargon',          d: 'We go at your pace. Plain English, no confusing language, no rushing.' },
  { t: 'Hands-On Practice',  d: 'Real practice every session — not just watching slides and hoping it sticks.' },
  { t: 'Take-Home Materials', d: 'Every class includes printed step-by-step handouts you can reference at home.' },
];

const STATS = [
  { val: '6',     label: 'Courses Available' },
  { val: '100%',  label: 'Hands-On Learning' },
  { val: 'Free',  label: 'First Consultation' },
  { val: '$45',   label: 'First Session' },
];

export default function Home({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '120px 56px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* ambient glows */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -160, left: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          {/* badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(201,168,76,0.1)', border: `1px solid rgba(201,168,76,0.3)`,
            borderRadius: 3, padding: '6px 16px', marginBottom: 28,
            animation: 'fadeUp 0.5s ease 0.05s both',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: GOLD, textTransform: 'uppercase' }}>
              Full-Service Tech Solutions
            </span>
          </div>

          {/* headline */}
          <h1 style={{
            fontSize: 'clamp(40px,5.5vw,72px)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.02em', color: WHITE,
            marginBottom: 24,
            animation: 'fadeUp 0.5s ease 0.15s both',
          }}>
            Your tech problems<br />
            solved. Your skills<br />
            <span style={{ color: GOLD }}>built.</span>
          </h1>

          <p style={{
            fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 520,
            marginBottom: 40,
            animation: 'fadeUp 0.5s ease 0.25s both',
          }}>
            Tech education, troubleshooting, custom PC builds, hardware upgrades, and design services — all from one place.
          </p>

          <div style={{ display: 'flex', gap: 16, animation: 'fadeUp 0.5s ease 0.35s both' }}>
            <Btn gold onClick={() => go('book')}>Book Free Consultation</Btn>
            <Btn onClick={() => go('services')}>View Services</Btn>
          </div>

          {/* stats bar */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
            border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden',
            marginTop: 72,
            animation: 'fadeUp 0.5s ease 0.45s both',
          }}>
            {STATS.map(({ val, label }, i) => (
              <div key={i} style={{
                padding: '28px 24px', textAlign: 'center',
                background: i === 1 ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)',
                borderRight: i < 3 ? `1px solid ${BORDER}` : 'none',
              }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: i === 1 ? GOLD : WHITE, marginBottom: 6, letterSpacing: '-0.5px' }}>{val}</div>
                <div style={{ fontSize: 10, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── SERVICES PREVIEW ────────────────────────── */}
      <section style={{ padding: '80px 56px', maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel text="What We Do" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 40 }}>
          {SERVICES.map(({ icon, title, desc }, i) => (
            <Card key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 22px' }}>
              <IconBox>{icon}</IconBox>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: WHITE, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 11.5, color: MUTED, lineHeight: 1.7 }}>{desc}</div>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Btn onClick={() => go('services')}>See All Services</Btn>
        </div>
      </section>

      <GoldLine />

      {/* ── NEW CLIENT OFFER ─────────────────────────── */}
      <section style={{ padding: '72px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            border: `1.5px solid ${GOLD}`,
            borderRadius: 10,
            padding: '36px 44px',
            background: 'rgba(201,168,76,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}>
            <div style={{
              background: GOLD, color: BG,
              fontSize: 9, fontWeight: 800,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '6px 14px', borderRadius: 2,
              whiteSpace: 'nowrap', flexShrink: 0, alignSelf: 'flex-start',
            }}>New Clients</div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: WHITE, marginBottom: 10, lineHeight: 1.35 }}>
                Free 20-Minute Consultation —{' '}
                <span style={{ color: GOLD }}>Then $45 for Your First Session</span>
              </div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.75 }}>
                Not sure where to start? We'll figure out exactly what you need — no charge, no pressure.
                When you're ready, your first session is just $45. Regular pricing applies after that.
              </p>
            </div>

            <div style={{
              borderLeft: `1px solid rgba(201,168,76,0.3)`,
              paddingLeft: 36, textAlign: 'center', flexShrink: 0,
            }}>
              <div style={{ fontSize: 13, color: MUTED, textDecoration: 'line-through', marginBottom: 2 }}>$60</div>
              <div style={{ fontSize: 48, fontWeight: 900, color: GOLD, lineHeight: 1 }}>$45</div>
              <div style={{ fontSize: 9, color: MUTED, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>First Session</div>
              <Btn gold onClick={() => go('book')} style={{ padding: '10px 22px', fontSize: 10 }}>Book Now</Btn>
            </div>
          </div>
        </div>
      </section>

      <GoldLine />

      {/* ── WHY SAVANT ─────────────────────────────── */}
      <section style={{ padding: '72px 56px', maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel text="Why People Choose Savant" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
          {WHY.map(({ t, d }, i) => (
            <div key={i} style={{ borderTop: `2px solid ${GOLD}`, paddingTop: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: WHITE, marginBottom: 10 }}>{t}</div>
              <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.75 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
