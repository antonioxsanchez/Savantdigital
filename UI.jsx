import { GOLD, GOLD_LIGHT, BG, BORDER, MUTED, WHITE } from '../theme';

export const GoldLine = () => (
  <div style={{
    height: 2,
    background: `linear-gradient(90deg, transparent 0%, ${GOLD} 25%, ${GOLD_LIGHT} 50%, ${GOLD} 75%, transparent 100%)`,
    flexShrink: 0,
    width: '100%',
  }} />
);

export const SectionLabel = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
    <div style={{ height: 1, width: 28, background: GOLD, flexShrink: 0 }} />
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
      color: GOLD, textTransform: 'uppercase', whiteSpace: 'nowrap',
    }}>{text}</span>
    <div style={{ height: 1, flex: 1, background: BORDER }} />
  </div>
);

export const Btn = ({ children, onClick, gold = false, style: s = {}, fullWidth = false }) => (
  <button
    onClick={onClick}
    style={{
      display: 'inline-block',
      padding: '12px 28px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      border: gold ? 'none' : `1.5px solid ${GOLD}`,
      borderRadius: 3,
      background: gold ? `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` : 'transparent',
      color: gold ? BG : GOLD,
      cursor: 'pointer',
      transition: 'all 0.2s',
      width: fullWidth ? '100%' : 'auto',
      fontFamily: "'Montserrat', sans-serif",
      ...s,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.3)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >{children}</button>
);

export const IconBox = ({ children }) => (
  <div style={{
    width: 42, height: 42, minWidth: 42,
    borderRadius: 7,
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.25)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: GOLD,
  }}>{children}</div>
);

export const Card = ({ children, style: s = {}, hover = true }) => {
  const base = {
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: '24px',
    background: 'rgba(255,255,255,0.025)',
    transition: 'border-color 0.2s, transform 0.2s',
    ...s,
  };
  return (
    <div
      style={base}
      onMouseEnter={hover ? e => {
        e.currentTarget.style.borderColor = GOLD;
        e.currentTarget.style.transform = 'translateY(-3px)';
      } : undefined}
      onMouseLeave={hover ? e => {
        e.currentTarget.style.borderColor = BORDER;
        e.currentTarget.style.transform = 'translateY(0)';
      } : undefined}
    >{children}</div>
  );
};

export const FieldLabel = ({ children }) => (
  <label style={{
    display: 'block',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: GOLD,
    marginBottom: 8,
  }}>{children}</label>
);

export const PageWrapper = ({ children }) => (
  <div style={{ paddingTop: 72, minHeight: '80vh' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 56px 72px' }}>
      {children}
    </div>
  </div>
);

export const PageHeader = ({ label, title, titleGold, subtitle, maxW = 600 }) => (
  <div style={{ marginBottom: 52 }}>
    <SectionLabel text={label} />
    <h1 style={{
      fontSize: 44,
      fontWeight: 900,
      color: WHITE,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      marginBottom: 16,
    }}>
      {title}{' '}
      {titleGold && <span style={{ color: GOLD }}>{titleGold}</span>}
    </h1>
    {subtitle && (
      <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.8, maxWidth: maxW }}>
        {subtitle}
      </p>
    )}
  </div>
);
