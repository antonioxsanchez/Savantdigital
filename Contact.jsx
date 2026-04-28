import { useState } from 'react';
import { GOLD, BORDER, MUTED, WHITE, BG } from '../theme';
import { PageWrapper, PageHeader, Btn, FieldLabel } from '../components/UI';
import { PhoneIcon, MailIcon, CalIcon } from '../components/Icons';

const inputStyle = {
  width: '100%',
  fontFamily: "'Montserrat', sans-serif",
  background: 'rgba(255,255,255,0.04)',
  border: `1px solid ${BORDER}`,
  color: WHITE,
  borderRadius: 4,
  padding: '12px 16px',
  fontSize: 13,
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <PageWrapper>
      <PageHeader
        label="Contact"
        title="Get in"
        titleGold="Touch."
        subtitle="Have a question, want a quote, or just not sure where to start? Send a message and we'll get back to you within 24 hours."
        maxW={500}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'flex-start' }}>

        {/* ── FORM ── */}
        {!sent ? (
          <div style={{
            border: `1px solid ${BORDER}`,
            borderRadius: 10, padding: '36px 32px',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <FieldLabel>Name *</FieldLabel>
                <input style={inputStyle} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name"
                  onFocus={e => e.target.style.borderColor = GOLD}
                  onBlur={e => e.target.style.borderColor = BORDER}
                />
              </div>
              <div>
                <FieldLabel>Email *</FieldLabel>
                <input style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com"
                  onFocus={e => e.target.style.borderColor = GOLD}
                  onBlur={e => e.target.style.borderColor = BORDER}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <FieldLabel>Subject</FieldLabel>
              <input style={inputStyle} value={form.subject} onChange={e => set('subject', e.target.value)} placeholder="What's this about?"
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = BORDER}
              />
            </div>

            <div style={{ marginBottom: 28 }}>
              <FieldLabel>Message *</FieldLabel>
              <textarea
                style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
                rows={6}
                value={form.message}
                onChange={e => set('message', e.target.value)}
                placeholder="Tell us what you need..."
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = BORDER}
              />
            </div>

            <Btn gold fullWidth onClick={() => { if (form.name && form.email && form.message) setSent(true); }}
              style={{ padding: '14px', fontSize: 12 }}
            >
              Send Message
            </Btn>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', textAlign: 'center', marginTop: 12 }}>
              * Required fields.
            </p>
          </div>
        ) : (
          <div style={{
            border: `1px solid ${GOLD}`,
            borderRadius: 10, padding: '52px 32px',
            background: 'rgba(201,168,76,0.05)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              border: `2px solid ${GOLD}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, color: GOLD, marginBottom: 20,
            }}>✓</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: WHITE, marginBottom: 12 }}>Message Sent!</div>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.85, maxWidth: 340, marginBottom: 8 }}>
              Thanks for reaching out. Antonio will reply to{' '}
              <span style={{ color: GOLD }}>{form.email}</span> within 24 hours.
            </p>
            <div style={{ marginTop: 24 }}>
              <Btn onClick={() => { setForm({ name:'',email:'',subject:'',message:'' }); setSent(false); }}>
                Send Another Message
              </Btn>
            </div>
          </div>
        )}

        {/* ── SIDEBAR ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '22px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>Contact Info</div>

            {[
              { icon: <PhoneIcon />, label: '929-707-1951', sub: 'Call or text anytime' },
              { icon: <MailIcon />, label: 'savantdigitalco@gmail.com', sub: 'Response within 24 hours' },
              { icon: <CalIcon />, label: 'Available 7 Days a Week', sub: 'Morning through evening' },
            ].map(({ icon, label, sub }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                <span style={{ color: GOLD, marginTop: 1 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: WHITE, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '22px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Service Area</div>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.8 }}>
              Classes available one-on-one or in small groups. We come to you, or meet at a convenient location.
              Hardware and design services available remotely or in person.
            </p>
          </div>

          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '22px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Founder</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: WHITE, letterSpacing: '0.08em' }}>ANTONIO SANCHEZ</div>
            <div style={{ fontSize: 9, color: GOLD, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 5 }}>
              Founder — Savant Digital Co
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
