import { useState } from 'react';
import { GOLD, BORDER, MUTED, WHITE, BG3 } from '../theme';
import { PageWrapper, PageHeader, Btn } from '../components/UI';

const CATEGORIES = ['All', 'PC Builds', 'Upgrades', 'Design Work', 'Setups'];

const ITEMS = [
  { id:1, cat:'PC Builds',   title:'Gaming Build — RTX 4070',        desc:'Custom gaming rig built for high-performance 1440p gaming. Full cable management and Windows 11 setup included.',     specs:['RTX 4070','Intel i7-13700K','32GB DDR5','2TB NVMe SSD'] },
  { id:2, cat:'PC Builds',   title:'Workstation Build',               desc:'Quiet, reliable workstation built for productivity and multi-tasking. Optimized for office apps and video conferencing.', specs:['Intel i5-12400','16GB DDR4','1TB SSD','Integrated Graphics'] },
  { id:3, cat:'PC Builds',   title:'Budget Build — First PC',         desc:'Entry-level build for a first-time PC owner. Performs great for everyday tasks, browsing, and light productivity.',   specs:['Ryzen 5 5600','16GB DDR4','500GB SSD','Radeon RX 6600'] },
  { id:4, cat:'Upgrades',    title:'Laptop SSD Upgrade',              desc:'Swapped a failing HDD for a fast NVMe SSD. Boot time went from 3 minutes down to under 15 seconds.',                  specs:['1TB Samsung 970 EVO','Windows reinstall','Data transferred','Clean setup'] },
  { id:5, cat:'Upgrades',    title:'RAM Upgrade — Desktop',           desc:'Doubled a client's RAM from 8GB to 32GB. Night and day difference for multitasking.',                                  specs:['32GB DDR4 3200MHz','Dual channel','XMP enabled','Stress tested'] },
  { id:6, cat:'Upgrades',    title:'GPU Swap & Driver Setup',         desc:'Upgraded a GTX 1060 to an RTX 3060. Full driver cleanup, install, and performance benchmarking included.',             specs:['RTX 3060 12GB','DDR removal','Clean driver install','Benchmarked'] },
  { id:7, cat:'Design Work', title:'Business Card Design',            desc:'Clean, minimal business card for a local contractor. Print-ready files delivered in 24 hours.',                        specs:['Front & back','Print-ready PDF','Editable file','24hr delivery'] },
  { id:8, cat:'Design Work', title:'Logo Design',                     desc:'Modern hexagonal logo for a tech startup. Multiple color variations and transparent background included.',               specs:['SVG & PNG','Color variations','Brand guidelines','Transparent BG'] },
  { id:9, cat:'Setups',      title:'Home Office Configuration',       desc:'Full home office setup — dual monitors, cable management, printer install, and software configuration.',               specs:['Dual monitor setup','Cable management','Printer install','Software setup'] },
];

const PlaceholderImg = ({ cat }) => (
  <div style={{
    height: 200,
    background: 'linear-gradient(135deg, #222 0%, #1a1a1a 50%, #262626 100%)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    borderBottom: `1px solid ${BORDER}`,
    position: 'relative',
  }}>
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.2" style={{ marginBottom: 8 }}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21,15 16,10 5,21"/>
    </svg>
    <span style={{ fontSize: 9, color: 'rgba(201,168,76,0.28)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
      Add Photo
    </span>
    <div style={{
      position: 'absolute', top: 12, left: 12,
      background: GOLD, color: '#1c1c1c',
      fontSize: 9, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      padding: '3px 10px', borderRadius: 2,
    }}>{cat}</div>
  </div>
);

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? ITEMS : ITEMS.filter(i => i.cat === filter);

  return (
    <PageWrapper>
      <PageHeader
        label="Gallery"
        title="Previous"
        titleGold="Work."
        subtitle="A look at recent builds, upgrades, and design projects. Add your own photos to bring each project to life."
      />

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{
              padding: '8px 22px', borderRadius: 3,
              border: `1px solid ${filter === c ? GOLD : BORDER}`,
              background: filter === c ? 'rgba(201,168,76,0.1)' : 'transparent',
              color: filter === c ? GOLD : MUTED,
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseEnter={e => { if (filter !== c) e.currentTarget.style.color = WHITE; }}
            onMouseLeave={e => { if (filter !== c) e.currentTarget.style.color = MUTED; }}
          >{c}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 32 }}>
        {filtered.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 8, overflow: 'hidden',
              cursor: 'pointer',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <PlaceholderImg cat={item.cat} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: WHITE, marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.65, marginBottom: 12 }}>
                {item.desc.length > 85 ? item.desc.substring(0, 85) + '...' : item.desc}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {item.specs.slice(0, 2).map((s, j) => (
                  <span key={j} style={{
                    fontSize: 10, color: GOLD,
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: 3, padding: '2px 8px',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
        Replace placeholder images with your actual build photos in src/pages/Gallery.jsx
      </p>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.88)',
            zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: BG3,
              border: `1px solid ${GOLD}`,
              borderRadius: 12,
              maxWidth: 580, width: '100%',
              overflow: 'hidden',
            }}
          >
            <PlaceholderImg cat={selected.cat} />
            <div style={{ padding: '24px 28px' }}>
              <div style={{ fontSize: 10, color: GOLD, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6 }}>{selected.cat}</div>
              <div style={{ fontSize: 19, fontWeight: 800, color: WHITE, marginBottom: 10 }}>{selected.title}</div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.8, marginBottom: 18 }}>{selected.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
                {selected.specs.map((s, i) => (
                  <span key={i} style={{
                    fontSize: 11, color: GOLD,
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.22)',
                    borderRadius: 3, padding: '4px 12px',
                  }}>{s}</span>
                ))}
              </div>
              <div style={{ textAlign: 'right' }}>
                <Btn onClick={() => setSelected(null)}>Close</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
