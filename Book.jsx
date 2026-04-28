import { useState } from 'react';
import { GOLD, BORDER, MUTED, WHITE, BG } from '../theme';
import { PageWrapper, PageHeader, Btn, FieldLabel, Card } from '../components/UI';
import { PhoneIcon, MailIcon } from '../components/Icons';

const SERVICES = [
  'Free 20-Minute Consultation',
  'Tech Class — Basic Computer Skills',
  'Tech Class — Windows 11 Essentials',
  'Tech Class — Email & Internet Skills',
  'Tech Class — Advanced Computer Skills',
  'Tech Class — Web Skills & Downloads',
  'Tech Class — The Other 90%',
  'Tech Help & Troubleshooting',
  'Security & Device Setup',
  'Custom PC Build Consultation',
  'Hardware Upgrade / Repair',
  'Design Services Consultation',
];

const TIMES = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];

const PRICING = [
  { label: 'One-on-One · 90 min', price: '$60', sub: 'Per session' },
  { label: 'Small Group · 3–6 people', price: '$30', sub: 'Per person · 90 min' },
  { label: '4-Session Package', price: '$120', sub: 'Per person' },
  { label: 'Corporate Training', price: '$125', sub: 'Per hour' },
];

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

export default function Book() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', date:'', time:'', notes:'' });
  const [submitted, setSubmitted] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) return (
    <PageWrapper>
      <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center', paddingTop: 40 }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          border: `2px solid ${GOLD}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, color: GOLD,
          margin: '0 auto 24px',
        }}>✓</div>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: WHITE, marginBottom: 14 }}>Request Received!</h2>
        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.85, marginBottom: 8 }}>
          Thanks, <strong style={{ color: WHITE }}>{form.name}</strong>. Your appointment request has been submitted.
          Antonio will reach out to confirm within 24 hours.
        </p>
        <p style={{ fontSize: 12, color: MUTED, marginBottom: 32 }}>
          Confirmation will be sent to: <span style={{ color: GOLD }}>{form.email}</span>
        </p>
        <Btn gold onClick={() => { setForm({ name:'',email:'',phone:'',service:'',date:'',time:'',notes:'' }); setSubmitted(false); }}>
          Book Another Session
        </Btn>
      </div>
    </PageWrapper>
  );

  return (
    <PageWrapper>
      <PageHeader
        label="Book an Appointment"
        title="Schedule Your"
        titleGold="Session."
        subtitle="New clients start with a free 20-minute consultation. Fill out the form and we'll confirm your time within 24 hours."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'flex-start' }}>

        {/* ── FORM ── */}
        <div style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
          padding: '36px 32px',
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <FieldLabel>Full Name *</FieldLabel>
              <input style={inputStyle} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your full name"
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = BORDER}
              />
            </div>
            <div>
              <FieldLabel>Email Address *</FieldLabel>
              <input style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com"
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = BORDER}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <FieldLabel>Phone Number</FieldLabel>
            <input style={inputStyle} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(929) 000-0000"
              onFocus={e => e.target.style.borderColor = GOLD}
              onBlur={e => e.target.style.borderColor = BORDER}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <FieldLabel>Service Requested *</FieldLabel>
            <select style={{ ...inputStyle, colorScheme: 'dark' }} value={form.service} onChange={e => set('service', e.target.value)}
              onFocus={e => e.target.style.borderColor = GOLD}
              onBlur={e => e.target.style.borderColor = BORDER}
            >
              <option value="">Select a service...</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <FieldLabel>Preferred Date</FieldLabel>
              <input style={{ ...inputStyle, colorScheme: 'dark' }} type="date" value={form.date} onChange={e => set('date', e.target.value)}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = BORDER}
              />
            </div>
            <div>
              <FieldLabel>Preferred Time</FieldLabel>
              <select style={{ ...inputStyle, colorScheme: 'dark' }} value={form.time} onChange={e => set('time', e.target.value)}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = BORDER}
              >
                <option value="">Select a time...</option>
                {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <FieldLabel>Notes or Questions</FieldLabel>
            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
              rows={4}
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              placeholder="Tell us a little about what you need help with..."
              onFocus={e => e.target.style.borderColor = GOLD}
              onBlur={e => e.target.style.borderColor = BORDER}
            />
          </div>

          <Btn gold fullWidth onClick={() => { if (form.name && form.email && form.service) setSubmitted(true); }}
            style={{ padding: '14px', fontSize: 12 }}
          >
            Submit Appointment Request
          </Btn>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', textAlign: 'center', marginTop: 12 }}>
            * Required fields. We'll confirm within 24 hours.
          </p>
        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* New client offer */}
          <div style={{
            border: `1.5px solid ${GOLD}`,
            borderRadius: 8, padding: '22px',
            background: 'rgba(201,168,76,0.05)',
          }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: BG, background: GOLD, padding: '4px 10px', borderRadius: 2, display: 'inline-block', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
              New Clients
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, color: WHITE, marginBottom: 8, lineHeight: 1.3 }}>Free 20-Min Consultation</div>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.7, marginBottom: 10 }}>
              Start here — we figure out what you need and recommend the right path. No charge, no pressure.
            </p>
            <div style={{ fontSize: 13, color: GOLD, fontWeight: 700 }}>Then just $45 for your first session.</div>
          </div>

          {/* Pricing */}
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>Regular Pricing</div>
            {PRICING.map(({ label, price, sub }) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingBottom: 10, marginBottom: 10,
                borderBottom: `1px solid rgba(255,255,255,0.05)`,
              }}>
                <div>
                  <div style={{ fontSize: 12, color: MUTED }}>{label}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>{sub}</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: WHITE }}>{price}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>Prefer to Call?</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 12, color: MUTED }}>
              <span style={{ color: GOLD }}><PhoneIcon /></span>
              929-707-1951
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: MUTED }}>
              <span style={{ color: GOLD }}><MailIcon /></span>
              savantdigitalco@gmail.com
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
