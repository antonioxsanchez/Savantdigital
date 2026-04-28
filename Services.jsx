import { GOLD, BORDER, MUTED, WHITE } from '../theme';
import { PageWrapper, PageHeader, Btn, IconBox } from '../components/UI';
import { MonitorIcon, WrenchIcon, ShieldIcon, CpuIcon, GearIcon, PenIcon, CheckIcon } from '../components/Icons';

const SERVICES = [
  {
    icon: <MonitorIcon />,
    title: 'Tech Classes — All Levels',
    price: 'From $30 / person',
    desc: '6 structured courses taking you from total beginner to confident computer user. Windows 11, email, internet safety, cloud storage, Microsoft Office, browser mastery, downloads, and advanced hidden features. Every session includes printed step-by-step handouts.',
    bullets: ['6 complete courses', 'Printed handouts every session', 'One-on-one or small groups', '90 minutes per session'],
  },
  {
    icon: <WrenchIcon />,
    title: 'Tech Help & Troubleshooting',
    price: 'Contact for pricing',
    desc: 'Computer running slow, frozen, or not connecting? We find the problem, fix it fast, and walk you through exactly what happened so it never catches you off guard again.',
    bullets: ['Same-day service when available', 'Remote or in-person', 'Virus and malware removal', 'Wi-Fi and network issues'],
  },
  {
    icon: <ShieldIcon />,
    title: 'Security & Device Setup',
    price: 'Contact for pricing',
    desc: 'New device setup done right. Antivirus, password manager, two-factor authentication, cloud backup, and privacy settings — all configured correctly from the start.',
    bullets: ['New device configuration', 'Antivirus & firewall setup', 'Password manager setup', 'Backup solutions'],
  },
  {
    icon: <CpuIcon />,
    title: 'Custom PC Builds',
    price: 'Contact for quote',
    desc: 'Built to your exact budget and purpose — gaming, creative work, or everyday use. Every component selected and assembled with care. No pre-built markups, no unnecessary extras.',
    bullets: ['Budget-matched component selection', 'Gaming, work & home builds', 'Full assembly and testing', 'Windows setup included'],
  },
  {
    icon: <GearIcon />,
    title: 'Hardware Upgrades & Repairs',
    price: 'Contact for pricing',
    desc: 'More RAM, faster SSD, better cooling, GPU swaps, and thermal paste replacements. Breathe new life into an old machine before spending money on something new.',
    bullets: ['RAM & SSD upgrades', 'GPU installation', 'Cooling & thermal work', 'Diagnosis & repair'],
  },
  {
    icon: <PenIcon />,
    title: 'Design & Digital Services',
    price: 'Contact for quote',
    desc: 'Logos, flyers, business cards, social media graphics, and digital branding. Clean, professional work delivered fast for individuals and small businesses.',
    bullets: ['Logo design', 'Flyers & print materials', 'Social media graphics', 'Business card design'],
  },
];

export default function Services({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  return (
    <PageWrapper>
      <PageHeader
        label="Our Services"
        title="Everything You Need."
        titleGold="One Place."
        subtitle="From learning your first computer skill to building a custom rig from scratch — Savant Digital Co covers it all."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 52 }}>
        {SERVICES.map((s, i) => (
          <div
            key={i}
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: '28px',
              background: 'rgba(255,255,255,0.02)',
              transition: 'border-color 0.2s',
              animationDelay: `${i * 0.07}s`,
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
            onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
              <IconBox>{s.icon}</IconBox>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: WHITE, marginBottom: 4, lineHeight: 1.3 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: GOLD, fontWeight: 600, letterSpacing: '0.06em' }}>{s.price}</div>
              </div>
            </div>

            {/* Desc */}
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>{s.desc}</p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.bullets.map((b, j) => (
                <div key={j} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  fontSize: 10.5, color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 3, padding: '3px 10px',
                }}>
                  <span style={{ color: GOLD }}><CheckIcon /></span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', paddingTop: 8 }}>
        <p style={{ color: MUTED, fontSize: 14, marginBottom: 18 }}>
          Not sure what you need? Start with a free 20-minute consultation.
        </p>
        <Btn gold onClick={() => go('book')}>Book Free Consultation</Btn>
      </div>
    </PageWrapper>
  );
}
