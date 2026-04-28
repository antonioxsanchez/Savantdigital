import { useState } from 'react';
import { GOLD, BORDER, MUTED, WHITE, BG } from '../theme';
import { PageWrapper, PageHeader, Btn, SectionLabel } from '../components/UI';

const COURSES = [
  {
    num: 1, level: 'Beginner', levelColor: '#4cd97a',
    title: 'Basic Computer Skills',
    duration: '4 Sessions · 90 min each',
    desc: 'For people who are brand new or have very little experience. Mouse, keyboard, files, folders, desktop navigation, and safe internet basics.',
    sessions: [
      'Session 1 — Parts of a computer, mouse basics, turning on/off correctly, the desktop and Start Menu',
      'Session 2 — Opening and closing programs, File Explorer, creating folders, saving files',
      'Session 3 — Typing, selecting text, copy/cut/paste, Ctrl+Z, saving documents',
      'Session 4 — Browser basics, web addresses, HTTPS safety, recognizing scams and pop-ups',
    ],
  },
  {
    num: 2, level: 'Beginner — Intermediate', levelColor: GOLD,
    title: 'Windows 11 Essentials',
    duration: '4 Sessions · 90 min each',
    desc: 'Learn the tools already built into Windows 11. Start menu, Snap Layouts, virtual desktops, File Explorer deep dive, Settings, and key built-in apps.',
    sessions: [
      'Session 1 — New interface, Start menu customization, Snap Layouts, Virtual Desktops',
      'Session 2 — File Explorer deep dive, searching files, moving vs copying, Recycle Bin',
      'Session 3 — Settings app, wallpaper, dark mode, text size, display, notifications',
      'Session 4 — Snipping Tool, Windows Security, Task Manager, Photos app, Microsoft Edge',
    ],
  },
  {
    num: 3, level: 'Beginner — Intermediate', levelColor: GOLD,
    title: 'Email & Internet Skills',
    duration: '3 Sessions · 90 min each',
    desc: 'Set up email, browse safely, shop online, and join video calls. Practical skills you'll use every single day.',
    sessions: [
      'Session 1 — Gmail/Outlook setup, reading/replying/forwarding, attachments, phishing awareness',
      'Session 2 — Google search tips, evaluating websites, bookmarking, using browser tabs',
      'Session 3 — Safe online shopping, reading reviews, checkout safety, Zoom/Google Meet basics',
    ],
  },
  {
    num: 4, level: 'Intermediate', levelColor: GOLD,
    title: 'Advanced Computer Skills',
    duration: '5 Sessions · 90 min each',
    desc: 'Cloud storage, Microsoft Office basics, security practices, troubleshooting, and keyboard shortcuts that save real time every day.',
    sessions: [
      'Session 1 — OneDrive & Google Drive, syncing files, sharing, automatic backup',
      'Session 2 — Word formatting, Excel formulas (SUM/AVERAGE), PowerPoint basics, file formats',
      'Session 3 — Strong passwords, password managers, 2FA, Windows updates, VPNs',
      'Session 4 — Restart-first troubleshooting, reading errors, Googling fixes, Disk Cleanup',
      'Session 5 — Essential keyboard shortcuts, multi-monitor, browser extensions, productivity habits',
    ],
  },
  {
    num: 5, level: 'Intermediate', levelColor: GOLD,
    title: 'Web Skills & Downloads',
    duration: '4 Sessions · 90 min each',
    desc: 'Master your browser, download files safely, stream media, manage online accounts, and print or scan anything you need.',
    sessions: [
      'Session 1 — Browser anatomy, pinned tabs, Reading Mode, history, browser extensions',
      'Session 2 — Safe vs dangerous downloads, installing software correctly, managing Downloads folder',
      'Session 3 — Streaming controls, YouTube tips, account management, unsubscribing from emails',
      'Session 4 — Printing, Print to PDF, scanning with your phone, sharing files, ZIP compression',
    ],
  },
  {
    num: 6, level: 'Advanced', levelColor: '#e06c6c',
    title: 'The Other 90%',
    duration: '5 Sessions · 90 min each',
    desc: 'Hidden Windows features, storage management, Wi-Fi troubleshooting, accessibility tools, and beginner automation — things most people never discover on their own.',
    sessions: [
      'Session 1 — Clipboard History, emoji keyboard, God Mode, Sticky Notes, PowerToys',
      'Session 2 — Storage Sense, File History, external drives, finding duplicate files',
      'Session 3 — Wi-Fi fundamentals, diagnosing connection problems, speed testing, public Wi-Fi safety',
      'Session 4 — Voice typing, Magnifier, text size, mouse comfort, accessibility settings',
      'Session 5 — Startup programs, Task Scheduler, Windows Search deep dive, Power Automate Desktop',
    ],
  },
];

const PRICING = [
  { label: 'One-on-One · 90 min', price: '$60', sub: 'Per session', featured: true },
  { label: 'Small Group · 3–6 people', price: '$30', sub: 'Per person · 90 min', featured: false },
  { label: '4-Session Package', price: '$120', sub: 'Per person', featured: false },
  { label: 'Corporate Training', price: '$125', sub: 'Per hour', featured: false },
];

export default function Classes({ setPage }) {
  const [open, setOpen] = useState(null);
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };
  const toggle = (num) => setOpen(open === num ? null : num);

  return (
    <PageWrapper>
      <PageHeader
        label="Tech Classes"
        title="6 Courses."
        titleGold="Every Level."
        subtitle="Structured curriculum from total beginner to advanced. Every session includes printed handouts and hands-on practice."
      />

      {/* Pricing strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 52 }}>
        {PRICING.map(({ label, price, sub, featured }, i) => (
          <div key={i} style={{
            border: `1px solid ${featured ? GOLD : BORDER}`,
            borderRadius: 7,
            padding: '18px 16px',
            textAlign: 'center',
            background: featured ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)',
          }}>
            <div style={{ fontSize: 11, color: featured ? 'rgba(201,168,76,0.7)' : MUTED, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, fontWeight: 600, lineHeight: 1.5 }}>{label}</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: featured ? GOLD : WHITE, marginBottom: 4 }}>{price}</div>
            <div style={{ fontSize: 10, color: MUTED }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Courses accordion */}
      <SectionLabel text="Course Curriculum" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 48 }}>
        {COURSES.map((c) => {
          const isOpen = open === c.num;
          return (
            <div key={c.num} style={{
              border: `1px solid ${isOpen ? GOLD : BORDER}`,
              borderRadius: 8,
              overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}>
              {/* Row header */}
              <div
                onClick={() => toggle(c.num)}
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  background: isOpen ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  userSelect: 'none',
                }}
              >
                <div style={{
                  width: 38, height: 38, minWidth: 38, borderRadius: '50%',
                  border: `1.5px solid ${GOLD}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 800, color: GOLD,
                }}>{c.num}</div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: WHITE, marginBottom: 4 }}>{c.title}</div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: c.levelColor, fontWeight: 700, letterSpacing: '0.08em' }}>{c.level}</span>
                    <span style={{ fontSize: 10, color: MUTED }}>· {c.duration}</span>
                  </div>
                </div>

                <div style={{
                  fontSize: 22, color: GOLD,
                  transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  lineHeight: 1,
                }}>›</div>
              </div>

              {/* Expanded */}
              {isOpen && (
                <div style={{
                  padding: '20px 24px 24px',
                  borderTop: `1px solid ${BORDER}`,
                  background: 'rgba(0,0,0,0.12)',
                }}>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.8, marginBottom: 18 }}>{c.desc}</p>

                  <div style={{ fontSize: 10, fontWeight: 700, color: GOLD, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Sessions Covered
                  </div>

                  {c.sessions.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 9 }}>
                      <div style={{ width: 5, height: 5, minWidth: 5, borderRadius: '50%', background: GOLD, marginTop: 7 }} />
                      <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}

                  <div style={{ marginTop: 22 }}>
                    <Btn gold onClick={() => go('book')} style={{ padding: '10px 24px', fontSize: 10 }}>
                      Book This Course
                    </Btn>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: MUTED, fontSize: 14, marginBottom: 18 }}>New clients get a free 20-minute consultation before committing to anything.</p>
        <Btn gold onClick={() => go('book')}>Book Free Consultation</Btn>
      </div>
    </PageWrapper>
  );
}
