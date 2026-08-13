import { useEffect, useRef, useState } from 'react'
import oyinFace from '@/imports/image.png'
import kfcPdf from '@/imports/KFC.pdf'
import famePdf from '@/imports/Welcome-to-Fame-PR-Campaign-Proposal.pdf'
import cvPdf from '@/imports/Gift_Oyindamola_Animashaun__2_.pdf'
import kfcImg1 from '@/imports/KFC1.JPG'
import kfcImg2 from '@/imports/KFC2.jpg'
import kfcImg3 from '@/imports/KFC3.jpg'
import fameImg1 from '@/imports/Fame1.jpg'
import fameImg2 from '@/imports/Fame2.jpg'
import cmbImg1 from '@/imports/CMB1.jpg'
import cmbImg2 from '@/imports/CMB2.jpg'
import cmbImg3 from '@/imports/CMB3.jpg'
import cmbImg4 from '@/imports/CMB4.jpg'
import cmbImg5 from '@/imports/CMB5.jpg'
import cmbImg6 from '@/imports/CMB6.jpg'
import marieImg1 from '@/imports/marie1.jpeg'
import marieImg2 from '@/imports/marie2.jpg'
import marieImg3 from '@/imports/marie3.jpeg'
// ─── Scroll animation hook ───────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['About', 'Background', 'Tools', 'Projects', 'Contact']

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2ddd4' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        padding: '0 clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a
          href="#top"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: '#1a1815', textDecoration: 'none', letterSpacing: '-0.01em' }}
        >
          GOA
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
          <a href="mailto:Oyinash33@gmail.com" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.72rem' }}>
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, height: 2, background: '#1a1815', marginBottom: 5, transition: 'transform 0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: '#1a1815', marginBottom: 5, opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
          <div style={{ width: 22, height: 2, background: '#1a1815', transition: 'transform 0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#f5f0e8', padding: '24px clamp(24px, 5vw, 80px)', borderTop: '1px solid #e2ddd4', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
  }

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left pane */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(80px, 8vw, 120px) clamp(24px, 5vw, 80px) clamp(60px, 6vw, 80px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="section-label">Portfolio — 2025</span>
        </div>

        <h1
          className="fade-up delay-1"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(3.2rem, 6vw, 6.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#1a1815',
            marginBottom: 40,
          }}
        >
          Gift<br />
          Oyinda<span style={{ fontStyle: 'italic', color: '#c4623a' }}>mola</span><br />
          Animashaun
        </h1>

        <p
          className="fade-up delay-2"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8a857c', maxWidth: 340, lineHeight: 1.7, marginBottom: 48 }}
        >
          Marketing Communications Professional with 5+ years of international experience across the UK, USA, UAE, and Africa.
        </p>

        <div className="fade-up delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#about" className="btn-primary">View Work</a>
          <a href="mailto:Oyinash33@gmail.com" className="btn-outline">Get in Touch</a>
        </div>

        {/* Stats row */}
        <div
          className="fade-up delay-4"
          style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 40, borderTop: '1px solid #e2ddd4', flexWrap: 'wrap' }}
        >
          {[
            { n: '5+', label: 'Years Experience' },
            { n: '4', label: 'Continents' },
            { n: 'MA', label: 'Strategic Marketing' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="stat-number">{n}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a857c', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right pane — image */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#2a2420',
        }}
      >
        <img
          src={oyinFace}
          alt="Gift Oyindamola Animashaun"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.85,
            transform: `scale(1.06) translate(${(mousePos.x - 0.5) * -12}px, ${(mousePos.y - 0.5) * -12}px)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        {/* Overlay gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(245,240,232,0.3) 0%, transparent 30%)' }} />

        {/* Floating label */}
        <div
          className="fade-in delay-4"
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            background: 'rgba(245,240,232,0.92)',
            backdropFilter: 'blur(12px)',
            padding: '16px 24px',
            borderLeft: '3px solid #c4623a',
          }}
        >
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4623a', marginBottom: 4 }}>Available for</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: '#1a1815' }}>New Opportunities</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#top { grid-template-columns: 1fr; }
          section#top > div:last-child { height: 50vh; }
        }
      `}</style>
    </section>
  )
}

// ─── About / Bio ──────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'start' }}>
        <div className="slide-left">
          <span className="section-label">About</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 16, color: '#1a1815' }}>
            Bio
          </h2>
          <div style={{ width: 40, height: 2, background: '#c4623a', marginTop: 24 }} />
        </div>

        <div className="slide-right">
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)', lineHeight: 1.8, color: '#1a1815', marginBottom: 28 }}>
            <strong style={{ fontWeight: 600 }}>Hi, I am a Marketing Communications Professional</strong> — with 5+ years of international experience across the UK, USA, UAE, and Africa.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', lineHeight: 1.9, color: '#5a5650', marginBottom: 48 }}>
            Proven track record in driving brand growth, leading integrated campaigns, and managing cross-functional teams in fast-paced environments. Passionate about connecting brands with diverse audiences through engaging storytelling, data-driven insights, and results-oriented marketing communications.
          </p>

          {/* Expertise pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
            {['Brand Strategy', 'Integrated Campaigns', 'Content Marketing', 'Cross-functional Leadership', 'Data Analytics', 'Digital Marketing', 'Stakeholder Management', 'Social Media'].map((tag, i) => (
              <span
                key={tag}
                className={`fade-up delay-${(i % 4) + 1}`}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  padding: '8px 16px',
                  border: '1px solid #e2ddd4',
                  color: '#5a5650',
                  background: '#faf7f2',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={cvPdf}
            download="Gift_Oyindamola_Animashaun_CV.pdf"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 4 }}>
              <path d="M8 3v7M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

// ─── Background / Education ───────────────────────────────────────────────────
function Background() {
  const creds = [
    {
      school: 'University of Greenwich',
      degree: 'MA Strategic Marketing',
      period: '2024 – 2025',
      grade: 'Distinction',
      color: '#1a3a6e',
      abbr: 'UoG',
    },
    {
      school: 'University of Ibadan',
      degree: 'BA Communications',
      period: '2017 – 2021',
      grade: 'Second Class Upper',
      color: '#8b1a1a',
      abbr: 'UI',
    },
    {
      school: 'Google Digital Garage',
      degree: 'Fundamentals of Digital Marketing',
      period: '2024',
      grade: 'Certified',
      color: '#4285F4',
      abbr: 'G',
    },
  ]

  return (
    <section
      id="background"
      style={{
        background: '#1a1815',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="fade-up" style={{ marginBottom: 64 }}>
          <span className="section-label" style={{ color: '#c4623a' }}>Education &amp; Credentials</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 16, color: '#f5f0e8' }}>
            Background
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 32px)' }}>
          {creds.map((c, i) => (
            <div
              key={c.school}
              className={`fade-up delay-${i + 1}`}
              style={{
                padding: 'clamp(28px, 3vw, 44px)',
                border: '1px solid rgba(245,240,232,0.1)',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(245,240,232,0.03)',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,240,232,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(196,98,58,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,240,232,0.03)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,240,232,0.1)' }}
            >
              {/* Abbr badge */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: c.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: 28,
                }}
              >
                {c.abbr}
              </div>

              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4623a', marginBottom: 8 }}>
                {c.period}
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', color: '#f5f0e8', lineHeight: 1.2, marginBottom: 12 }}>
                {c.school}
              </h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: '#9a9590', lineHeight: 1.6, marginBottom: 20 }}>
                {c.degree}
              </p>
              <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(196,98,58,0.15)', color: '#c4623a', fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                {c.grade}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #background > div > div:last-child { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

// ─── Tools marquee ────────────────────────────────────────────────────────────
function Tools() {
  const tools = [
    'HubSpot', 'Microsoft 365', 'Google Analytics', 'Salesforce', 'Meta Ads',
    'Notion', 'Asana', 'Canva', 'Tableau', 'WordPress', 'Mailchimp', 'Slack',
    'Sprinklr', 'Monday.com',
  ]

  return (
    <section id="tools" style={{ padding: 'clamp(80px, 10vw, 140px) 0', overflow: 'hidden' }}>
      <div style={{ padding: '0 clamp(24px, 5vw, 80px)', maxWidth: 1400, margin: '0 auto', marginBottom: 48 }}>
        <div className="fade-up">
          <span className="section-label">Toolkit</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 16, color: '#1a1815' }}>
            Tools &amp; Platforms
          </h2>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid #e2ddd4', borderBottom: '1px solid #e2ddd4', padding: '20px 0', background: '#faf7f2', position: 'relative' }}>
        <div
          className="marquee-track"
          style={{ display: 'flex', gap: 0, width: 'max-content' }}
        >
          {[...tools, ...tools].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '0 32px' }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.05rem', color: '#1a1815', whiteSpace: 'nowrap' }}>{t}</span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4623a', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Grid of tool pills */}
      <div style={{ padding: '48px clamp(24px, 5vw, 80px) 0', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {tools.map((t, i) => (
            <div
              key={t}
              className={`tool-pill fade-up delay-${(i % 5) + 1}`}
              style={{
                padding: '10px 22px',
                border: '1px solid #e2ddd4',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize: '0.82rem',
                color: '#1a1815',
                background: '#faf7f2',
                cursor: 'default',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Portfolio Focus ──────────────────────────────────────────────────────────
function Focus() {
  const cards = [
    {
      title: 'Storytelling',
      desc: 'Transforming ideas into engaging brand narratives that build connection, shape perception, and drive meaningful engagement.',
      img: 'https://images.unsplash.com/photo-1590102426275-8d1c367070d3?w=600&h=480&fit=crop&auto=format',
      alt: 'Open book with creative elements',
      accent: '#c4623a',
    },
    {
      title: 'Strategy',
      desc: 'Developing insight-driven marketing strategies through data, that align with brand goals, drive engagement, and deliver measurable results across channels.',
      img: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?w=600&h=480&fit=crop&auto=format',
      alt: 'Strategic planning session with laptop',
      accent: '#1a3a6e',
    },
    {
      title: 'Branding',
      desc: 'Shaping and evolving brand identities through cohesive visual, verbal, and experiential elements that foster recognition, loyalty, and relevance.',
      img: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=600&h=480&fit=crop&auto=format',
      alt: 'Brand identity design materials',
      accent: '#3d6b3e',
    },
  ]

  return (
    <section id="focus" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: '#faf7f2' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="fade-up" style={{ marginBottom: 64 }}>
          <span className="section-label">Expertise</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 16, color: '#1a1815' }}>
            Portfolio Focus
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 28px)' }}>
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`focus-card fade-up delay-${i + 1}`}
              style={{ background: '#fff', overflow: 'hidden' }}
            >
              <div style={{ overflow: 'hidden', height: 240, background: '#e8e4dc' }}>
                <img src={c.img} alt={c.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 'clamp(24px, 2.5vw, 36px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 2, background: c.accent }} />
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', color: '#1a1815', letterSpacing: '-0.01em' }}>{c.title}</h3>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: '#5a5650', lineHeight: 1.8 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #focus > div > div:last-child { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

// ─── PDF Modal ───────────────────────────────────────────────────────────────
function PdfModal({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(26,24,21,0.7)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(16px, 4vw, 48px)',
        animation: 'fadeInOverlay 0.25s ease',
      }}
    >
      <style>{`@keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }`}</style>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 960,
          height: '90vh',
          background: '#f5f0e8',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 32px 80px rgba(26,24,21,0.35)',
          animation: 'slideUpModal 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <style>{`@keyframes slideUpModal { from { transform:translateY(24px); opacity:0 } to { transform:translateY(0); opacity:1 } }`}</style>

        {/* Modal header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #e2ddd4', flexShrink: 0 }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.05rem', color: '#1a1815' }}>{title}</span>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c4623a', textDecoration: 'none' }}
            >
              Open in new tab ↗
            </a>
            <button
              onClick={onClose}
              style={{ background: 'none', border: '1px solid #e2ddd4', cursor: 'pointer', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1815', fontSize: '1.1rem', transition: 'background 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#1a1815', (e.currentTarget as HTMLButtonElement).style.color = '#f5f0e8')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent', (e.currentTarget as HTMLButtonElement).style.color = '#1a1815')}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <iframe
          src={`${url}#toolbar=0`}
          title={title}
          style={{ flex: 1, border: 'none', background: '#e8e4dc' }}
        />
      </div>
    </div>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      num: '01',
      title: 'KFC Finger Lickin\' Festivities',
      year: '2024',
      category: 'Strategy & Campaign',
      client: 'KFC',
      desc: 'Collaborated with the Data Marketing Association (DMA)...',
      metric: null,
      metricLabel: null,
      tags: ['Campaign Strategy', 'App Marketing', 'DMA Challenge'],
        
        // Replace single `img` with an array of images
      images: [
      { src: kfcImg1, alt: 'KFC storefront campaign' },
      { src: kfcImg2, alt: 'KFC app interface banner' },
      { src: kfcImg3, alt: 'KFC social media campaign' },
      ],
        
      accent: '#e4002b',
      link: kfcPdf,
      linkLabel: 'See full campaign',
      type: 'Strategy',
      linkType: 'pdf',
    },
    {
      num: '02',
      title: '#welcometoFAME',
      year: '2023',
      category: 'Strategy & Campaign',
      client: 'Fame App',
      desc: 'Designed and executed the "Welcome to Fame" onboarding campaign — curated PR packages tailored for select influencers across skincare, lifestyle, fashion, and food verticals, fostering a mutually beneficial relationship and leveraging their reach to drive awareness and accelerate user acquisition.',
      metric: '1k+',
      metricLabel: 'New App Sign-ups',
      tags: ['Influencer Marketing', 'PR Packages', 'User Acquisition'],
      images: [
      { src: fameImg1, alt: 'Fame App onboarding campaign' },
      { src: fameImg2, alt: 'Fame App influencer collaboration' },
      ],
      imgAlt: 'Luxury PR package unboxing',
      accent: '#c9a84c',
      link: famePdf,
      linkLabel: 'See full campaign',
      type: 'Strategy',
      linkType: 'pdf',
    },
    {
      num: '03',
      title: '#askcooperativemortgagebank',
      year: '2020',
      category: 'Strategy & Campaign',
      client: 'Cooperative Mortgage Bank',
      desc: 'Partnered with Cooperative Mortgage Bank to drive lead generation and brand awareness for their homeownership schemes. Designed a strategy centred on straightforward, engaging ad copies that simplified complex mortgage concepts, making homeownership accessible and relatable.',
      metric: '35%',
      metricLabel: 'Boost in Home-ownership Inquiries',
      tags: ['Lead Generation', 'Brand Awareness', 'Social Media'],
      images: [
      { src: cmbImg1, alt: 'Cooperative Mortgage Bank social media ad' },
      { src: cmbImg2, alt: 'Cooperative Mortgage Bank email campaign' },
      { src: cmbImg3, alt: 'Cooperative Mortgage Bank landing page' },
      { src: cmbImg4, alt: 'Cooperative Mortgage Bank promotional video' },
      { src: cmbImg5, alt: 'Cooperative Mortgage Bank customer testimonial' },
      {src: cmbImg6, alt: 'Cooperative Mortgage Bank infographic' },
      ],
      imgAlt: 'Home ownership real estate',
      accent: '#2e7d32',
      link: '#',
      linkLabel: 'See full campaign',
      type: 'Strategy',
      linkType: 'external',
    },
    {
      num: '04',
      title: 'Home: An Aspirational Ad',
      year: '2020',
      category: 'Brand Campaign',
      client: 'Cooperative Mortgage Bank',
      desc: 'An emotive aspirational advertisement designed to evoke profound emotions within the audience, compelling them towards the pursuit of home ownership. Assumed the roles of both writer and creative director for this impactful campaign that leveraged powerful sentiments around the idea of home.',
      metric: '60%',
      metricLabel: 'Rise in Digital Engagement',
      tags: ['Creative Direction', 'Copywriting', 'Brand Campaign'],
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&auto=format&sat=-30',
      imgAlt: 'Aspirational home campaign visual',
      accent: '#5c6bc0',
      link: '#',
      linkLabel: 'Watch the ad',
      type: 'Branding',
      linkType: 'external',
    },
    {
      num: '05',
      title: 'Travel Feature in Marie Claire',
      year: '2023',
      category: 'Published Work',
      client: 'Marie Claire',
      desc: 'Featured in Marie Claire with a travel piece exploring the unique opportunities and challenges of travelling within Africa. The article highlights the continent\'s rich cultural diversity, untapped tourism potential, and areas for improvement to enhance travel experiences.',
      metric: null,
      metricLabel: null,
      tags: ['Editorial Writing', 'Travel', 'Published Feature'],
      images: [
      { src: marieImg1, alt: 'Africa travel editorial' },
      { src: marieImg2, alt: 'Marie Claire travel feature' },
      { src: marieImg3, alt: 'Exploring African destinations' },
      ],
      imgAlt: 'Africa travel editorial',
      accent: '#c4623a',
      link: 'https://marieclaire.ng/beyond-imagination-benin-republic/',
      linkLabel: 'Read the article',
      type: 'Storytelling',
      linkType: 'external',
    },
    {
      num: '06',
      title: 'Independent Travel Publication',
      year: '2023',
      category: 'Coming Soon',
      client: '',
      desc: 'I am currently building an independent travel publication that explores travel as a lens for understanding identity, creativity, belonging, and culture. Its first editorial project, Women Who Wander, is a narrative-led exploration of contemporary womanhood through travel. Through personal stories and cultural reflections, the project examines how women navigate both the world and themselves within it—moving beyond destination-focused content toward storytelling that is immersive, emotional, and meaningful.',
      metric: null,
      metricLabel: null,
      tags: ['Editorial Writing', 'Travel', 'Published Feature'],
      images: [
      { src: marieImg1, alt: 'Africa travel editorial' },
      { src: marieImg2, alt: 'Marie Claire travel feature' },
      { src: marieImg3, alt: 'Exploring African destinations' },
      ],
      imgAlt: 'Africa travel editorial',
      accent: '#c4623a',
      link: 'https://marieclaire.ng/beyond-imagination-benin-republic/',
      linkLabel: 'Read the article',
      type: 'Storytelling',
      linkType: 'external',
    }
  ]

  const filters = ['All', 'Strategy', 'Branding', 'Storytelling']
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter)

  return (
    <section id="projects" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: '#f5f0e8' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div className="fade-up">
            <span className="section-label">Selected Work</span>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 16, color: '#1a1815' }}>
              Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="fade-up delay-2" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '8px 20px',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: activeFilter === f ? '#1a1815' : '#e2ddd4',
                  background: activeFilter === f ? '#1a1815' : 'transparent',
                  color: activeFilter === f ? '#f5f0e8' : '#8a857c',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.num} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, i }: { p: any; i: number }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [pdfOpen, setPdfOpen] = useState(false)

  return (
    <div
      className={`fade-up delay-${(i % 3) + 1}`}
      style={{
        borderTop: '1px solid #e2ddd4',
        background: hovered ? '#faf7f2' : 'transparent',
        transition: 'background 0.3s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Collapsed row */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '60px 1fr auto auto',
          alignItems: 'center',
          gap: 'clamp(16px, 3vw, 40px)',
          padding: 'clamp(20px, 2.5vw, 28px) 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Number */}
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.8rem', color: '#c4c0b8', letterSpacing: '0.05em' }}>{p.num}</span>

        {/* Title + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 32px)', flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', color: '#1a1815', letterSpacing: '-0.01em', margin: 0 }}>{p.title}</h3>
          <span style={{
            padding: '4px 12px',
            background: hovered ? p.accent + '18' : '#f0ede8',
            color: hovered ? p.accent : '#8a857c',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}>{p.category}</span>
        </div>

        {/* Year */}
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.85rem', color: '#8a857c', whiteSpace: 'nowrap' }}>{p.year}</span>

        {/* Chevron */}
        <span style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          border: '1px solid #e2ddd4',
          borderRadius: '50%',
          color: '#1a1815',
          transition: 'transform 0.3s, border-color 0.3s',
          transform: expanded ? 'rotate(45deg)' : 'none',
          borderColor: hovered ? p.accent : '#e2ddd4',
          flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {/* Expanded panel */}
      <div style={{
        overflow: 'hidden',
        maxHeight: expanded ? 600 : 0,
        transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(24px, 4vw, 64px)',
          paddingBottom: 40,
          paddingTop: 8,
        }}>
          {/* Image Carousel */}
{(() => {
  const imageList = p.images || (p.img ? [{ src: p.img, alt: p.imgAlt }] : []);
  const [activeIdx, setActiveIdx] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % imageList.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const currentImg = imageList[activeIdx];
  const imgSrc = typeof currentImg === 'string' ? currentImg : currentImg?.src;
  const imgAlt = currentImg?.alt || p.imgAlt;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#e8e4dc', aspectRatio: '16/9' }}>
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          transform: expanded ? 'scale(1.03)' : 'scale(1)',
        }}
      />

      {/* Navigation Arrows (Only rendered if >1 image) */}
      {imageList.length > 1 && (
        <>
          <button
            onClick={prevImg}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(26, 24, 21, 0.6)',
              color: '#f5f0e8',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ‹
          </button>
          <button
            onClick={nextImg}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(26, 24, 21, 0.6)',
              color: '#f5f0e8',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ›
          </button>
          
          {/* Counter pill */}
          <span style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(26, 24, 21, 0.75)',
            color: '#f5f0e8',
            fontSize: '0.65rem',
            padding: '3px 8px',
            fontFamily: "'Outfit', sans-serif"
          }}>
            {activeIdx + 1} / {imageList.length}
          </span>
        </>
      )}
    </div>
  );
})()}

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>{p.client}</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: '#5a5650', lineHeight: 1.85, marginBottom: 24 }}>{p.desc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {p.tags.map((t: string) => (
                  <span key={t} style={{ padding: '5px 12px', border: '1px solid #e2ddd4', fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: '0.72rem', color: '#8a857c' }}>{t}</span>
                ))}
              </div>

              {/* Metric */}
              {p.metric && (
                <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, padding: '14px 20px', background: p.accent + '12', borderLeft: `3px solid ${p.accent}`, marginBottom: 28 }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.2rem', color: p.accent, lineHeight: 1 }}>{p.metric}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: '0.78rem', color: '#5a5650' }}>{p.metricLabel}</span>
                </div>
              )}
            </div>

            {p.linkType === 'pdf' ? (
              <button onClick={() => setPdfOpen(true)} className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                {p.linkLabel}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                {p.linkLabel}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {pdfOpen && <PdfModal url={p.link} title={p.title} onClose={() => setPdfOpen(false)} />}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .project-expand-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'transparent',
    border: '1px solid #e2ddd4',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 300,
    fontSize: '0.95rem',
    color: '#1a1815',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: '#1a1815' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 8vw, 120px)', alignItems: 'start' }}>
        <div className="slide-left">
          <span className="section-label" style={{ color: '#c4623a' }}>Let's Talk</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.02em', marginTop: 16, color: '#f5f0e8' }}>
            Get in<br /><em>Touch</em>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '1rem', color: '#9a9590', lineHeight: 1.8, marginTop: 24, marginBottom: 48 }}>
            Open to new opportunities, collaborations, and conversations about brand strategy and marketing communications.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { label: 'Email', value: 'Oyinash33@gmail.com', href: 'mailto:Oyinash33@gmail.com' },
              { label: 'Phone', value: '+44 7943 956126', href: 'tel:+447943956126' },
              { label: 'Location', value: 'United Kingdom', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ paddingBottom: 24, borderBottom: '1px solid rgba(245,240,232,0.08)' }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4623a', marginBottom: 6 }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: '#f5f0e8', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c4623a')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = '#f5f0e8')}
                  >{value}</a>
                ) : (
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: '#f5f0e8' }}>{value}</div>
                )}
              </div>
            ))}

            {/* Social links */}
            <div style={{ paddingTop: 8 }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4623a', marginBottom: 16 }}>Socials</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oyindamola-animashaun-416637175/' },
                  { label: 'Instagram', href: 'https://www.instagram.com/brellss?igsh=MXNwYjExb3I1c2wxeA%3D%3D&utm_source=qr' },
                  { label: 'TikTok', href: 'https://www.tiktok.com/@brellss?_r=1&_t=ZS-96tvkepkei9' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '9px 20px',
                      border: '1px solid rgba(245,240,232,0.15)',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#f5f0e8',
                      textDecoration: 'none',
                      transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#c4623a'; el.style.borderColor = '#c4623a' }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.borderColor = 'rgba(245,240,232,0.15)' }}
                  >{label} ↗</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="slide-right">
          {sent ? (
            <div style={{ padding: 48, border: '1px solid rgba(196,98,58,0.3)', textAlign: 'center' }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', color: '#c4623a', marginBottom: 16 }}>Thank you!</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, color: '#9a9590' }}>Your message has been received. Gift will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { key: 'name', label: 'Full Name', type: 'text' },
                { key: 'email', label: 'Email Address', type: 'email' },
              ].map(({ key, label, type }) => (
                <div key={key}>
                  <label style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9a9590', display: 'block', marginBottom: 8 }}>{label}</label>
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#c4623a')}
                    onBlur={e => (e.target.style.borderColor = '#e2ddd4')}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9a9590', display: 'block', marginBottom: 8 }}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = '#c4623a')}
                  onBlur={e => (e.target.style.borderColor = '#e2ddd4')}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#120f0c', padding: '28px clamp(24px, 5vw, 80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1rem', color: '#f5f0e8' }}>GOA</div>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.8rem', color: '#5a5650' }}>
        © 2025 Gift Oyindamola Animashaun — Marketing Communications Professional
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oyindamola-animashaun-416637175/' },
          { label: 'Email', href: 'mailto:Oyinash33@gmail.com' },
          { label: 'CV', href: cvPdf, download: 'Gift_Oyindamola_Animashaun_CV.pdf' },
        ].map(({ label, href, download }) => (
          <a key={label} href={href} {...(download ? { download } : { target: '_blank', rel: 'noopener noreferrer' })}
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5650', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c4623a')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = '#5a5650')}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal()

  return (
    <div style={{ background: '#f5f0e8', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Background />
      <Tools />
      <Focus />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
