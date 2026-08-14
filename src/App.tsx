import React, { useEffect, useRef, useState } from 'react'
import oyinFace from '@/imports/oyinhero.png'
import kfcPdf from '@/imports/KFC.pdf'
import famePdf from '@/imports/Welcome-to-Fame-PR-Campaign-Proposal.pdf'
import cvPdf from '@/imports/Gift_Oyindamola_Animashaun__2_.pdf'
import kfcImg1 from '@/imports/KFC1.webp'
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
import marieImg2 from '@/imports/marie2.webp'
import marieImg3 from '@/imports/marie3.jpeg'
import comingSoon from '@/imports/Comingsoon.jpg'
import reel1 from '@/imports/reel1.jpeg'
import reel2 from '@/imports/reel2.jpg'
import reel3 from '@/imports/reel3.jpg'
import reel4 from '@/imports/reel4.jpg'
import greenwichLogo from '@/imports/greenwich.png'
import uiLogo from '@/imports/ui.png'
import googleLogo from '@/imports/google.png'

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

// ─── Global Styles & Keyframes Injector ─────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      /* Reveal animations */
      .fade-up, .fade-in, .slide-left, .slide-right {
        opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
      }
      .fade-up { transform: translateY(30px); }
      .fade-in { transform: scale(0.98); }
      .slide-left { transform: translateX(-30px); }
      .slide-right { transform: translateX(30px); }

      .visible {
        opacity: 1 !important;
        transform: translate(0) scale(1) !important;
      }

      .delay-1 { transition-delay: 0.1s; }
      .delay-2 { transition-delay: 0.2s; }
      .delay-3 { transition-delay: 0.3s; }
      .delay-4 { transition-delay: 0.4s; }

      /* Marquee Keyframes */
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track {
        animation: marquee 25s linear infinite;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }

      /* Buttons & Interactive Elements */
      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #1a1815;
        color: #f5f0e8;
        padding: 14px 28px;
        font-family: 'Outfit', sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-decoration: none;
        border: 1px solid #1a1815;
        cursor: pointer;
        transition: background 0.3s, color 0.3s, border-color 0.3s;
      }
      .btn-primary:hover {
        background: #c4623a;
        border-color: #c4623a;
        color: #fff;
      }

      .btn-outline {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: transparent;
        color: #1a1815;
        padding: 14px 28px;
        font-family: 'Outfit', sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-decoration: none;
        border: 1px solid #1a1815;
        cursor: pointer;
        transition: background 0.3s, color 0.3s;
      }
      .btn-outline:hover {
        background: #1a1815;
        color: #f5f0e8;
      }

      .nav-link {
        font-family: 'Outfit', sans-serif;
        font-weight: 400;
        font-size: 0.85rem;
        color: #1a1815;
        text-decoration: none;
        letter-spacing: 0.02em;
        transition: color 0.2s;
      }
      .nav-link:hover {
        color: #c4623a;
      }

      .section-label {
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #c4623a;
      }

      .stat-number {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2.2rem, 3.5vw, 3rem);
        color: #1a1815;
        line-height: 1;
      }
    `}</style>
  )
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

  const links = ['About', 'Background', 'Tools', 'Focus', 'Projects', 'Reels', 'Contact']

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
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
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
          <a href="mailto:Oyinash33@gmail.com" className="btn-primary" onClick={() => setOpen(false)} style={{ textAlign: 'center', justifyContent: 'center' }}>
            Hire Me
          </a>
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
      className="hero-section"
      style={{
        minHeight: '100dvh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        position: 'relative',
        background: '#f8f4ee',
      }}
    >
      {/* Content pane */}
      <div
        className="hero-content-pane"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(80px, 8vw, 120px) clamp(32px, 6vw, 96px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="fade-up" style={{ marginBottom: 'clamp(20px, 2.5vw, 36px)' }}>
          <span 
            className="section-label" 
            style={{ 
              letterSpacing: '0.18em', 
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#c4623a',
              textTransform: 'uppercase'
            }}
          >
            Portfolio — 2025
          </span>
        </div>

        <h1
          className="fade-up delay-1"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(3rem, 5.2vw, 6.2rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            color: '#1a1815',
            marginBottom: 'clamp(24px, 3vw, 36px)',
          }}
        >
          Gift<br />
          Oyinda<span style={{ fontStyle: 'italic', color: '#c4623a' }}>mola</span><br />
          Animashaun
        </h1>

        <p
          className="fade-up delay-2"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(1rem, 1.25vw, 1.2rem)',
            color: '#706c64',
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 'clamp(32px, 4vw, 44px)',
          }}
        >
          Marketing Communications Professional with 5+ years of international experience across the UK, USA, UAE, and Africa.
        </p>

        <div className="fade-up delay-3 hero-cta-group" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#about" className="btn-primary">View Work</a>
          <a href="mailto:Oyinash33@gmail.com" className="btn-outline">Get in Touch</a>
        </div>

        {/* Stats row */}
        <div
          className="fade-up delay-4 hero-stats-row"
          style={{
            display: 'flex',
            gap: 'clamp(24px, 3.5vw, 44px)',
            marginTop: 'clamp(36px, 4.5vw, 56px)',
            paddingTop: 'clamp(24px, 3vw, 36px)',
            borderTop: '1px solid #e5dfd5',
            flexWrap: 'wrap',
          }}
        >
          {[
            { n: '5+', label: 'Years Experience' },
            { n: '4', label: 'Continents' },
            { n: 'MA', label: 'Strategic Marketing' },
          ].map(({ n, label }) => (
            <div key={label} style={{ minWidth: 90 }}>
              <div className="stat-number">{n}</div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8a857c',
                  marginTop: 4,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image pane */}
      <div
        className="hero-image-pane"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#ece6dc',
          width: '100%',
          height: '100%',
          minHeight: '100%',
        }}
      >
        <img
          src={oyinFace}
          alt="Gift Oyindamola Animashaun"
          className="hero-portrait-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: `scale(1.04) translate(${(mousePos.x - 0.5) * -10}px, ${(mousePos.y - 0.5) * -10}px)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        <div
          className="hero-image-gradient"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(248, 244, 238, 0.4) 0%, transparent 25%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="fade-in delay-4 hero-badge"
          style={{
            position: 'absolute',
            bottom: 'clamp(24px, 3.5vw, 48px)',
            right: 'clamp(24px, 3.5vw, 48px)',
            background: 'rgba(248,244,238,0.94)',
            backdropFilter: 'blur(12px)',
            padding: 'clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 24px)',
            borderLeft: '3px solid #c4623a',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c4623a',
              marginBottom: 4,
            }}
          >
            Available for
          </div>
          <div
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
              color: '#1a1815',
            }}
          >
            New Opportunities
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-content-pane {
            order: 1 !important;
            padding-top: 110px !important;
            padding-bottom: 48px !important;
          }
          .hero-image-pane {
            order: 2 !important;
            height: clamp(380px, 60vh, 540px) !important;
            min-height: 380px !important;
          }
          .hero-image-gradient {
            background: linear-gradient(to bottom, rgba(248,244,238,0.6) 0%, transparent 35%) !important;
          }
        }

        @media (max-width: 520px) {
          .hero-image-pane {
            height: 340px !important;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group a {
            width: 100%;
            justify-content: center;
          }
          .hero-stats-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px !important;
          }
          .hero-badge {
            bottom: 16px !important;
            right: 16px !important;
            padding: 10px 16px !important;
          }
        }

        @media (hover: none) {
          .hero-portrait-img {
            transform: none !important;
          }
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
      logo: greenwichLogo,
    },
    {
      school: 'University of Ibadan',
      degree: 'BA Communications',
      period: '2017 – 2021',
      grade: 'Second Class Upper',
      color: '#8b1a1a',
      abbr: 'UI',
      logo: uiLogo,
    },
    {
      school: 'Google Digital Garage',
      degree: 'Fundamentals of Digital Marketing',
      period: '2024',
      grade: 'Certified',
      color: '#4285F4',
      abbr: 'G',
      logo: googleLogo,
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 32px)' }} className="background-grid">
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
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: 28,
                }}
              >
                {c.logo ? (
  <div
    style={{
      width: 52,
      height: 52,
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 6,
      marginBottom: 28,
      border: '1px solid rgba(245,240,232,0.15)',
    }}
  >
    <img
      src={c.logo}
      alt={`${c.school} logo`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  </div>
) : (
  <span>{c.abbr}</span>
)}
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
          .background-grid { grid-template-columns: 1fr !important; }
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 28px)' }} className="focus-grid">
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
          .focus-grid { grid-template-columns: 1fr !important; }
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

        <iframe
          src={`${url}#toolbar=0`}
          title={title}
          style={{ flex: 1, border: 'none', background: '#e8e4dc' }}
        />
      </div>
    </div>
  )
}

// ─── Image Carousel Subcomponent ─────────────────────────────────────────────
function ProjectImageCarousel({ images, expanded }: { images: any[]; expanded: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0)

  if (!images || images.length === 0) return null

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev + 1) % images.length)
  }

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length)
  }

  const currentImg = images[activeIdx]
  const imgSrc = typeof currentImg === 'string' ? currentImg : currentImg?.src
  const imgAlt = currentImg?.alt || ''

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#e8e4dc', minHeight: '220px', aspectRatio: '16/9', width: '100%' }}>
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          transform: expanded ? 'scale(1.03)' : 'scale(1)',
        }}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImg}
            aria-label="Previous image"
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
            aria-label="Next image"
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
            {activeIdx + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      num: '01',
      title: "KFC Finger Lickin' Festivities",
      year: '2024',
      category: 'Strategy & Campaign',
      client: 'KFC',
      desc: 'Collaborated with the Data Marketing Association (DMA) to design a digital-first campaign driving app adoption and festive customer engagement.',
      metric: null,
      metricLabel: null,
      tags: ['Campaign Strategy', 'App Marketing', 'DMA Challenge'],
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
        { src: cmbImg6, alt: 'Cooperative Mortgage Bank infographic' },
      ],
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
      videoUrl: new URL('./imports/home.mp4', import.meta.url).href, 
      videoPoster: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&auto=format&sat=-30',
      accent: '#c05c5c',
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
      client: 'Self-Initiated',
      desc: 'Building an independent travel publication exploring travel as a lens for understanding identity, creativity, belonging, and culture. Its first editorial project, Women Who Wander, is a narrative-led exploration of contemporary womanhood through travel.',
      metric: null,
      metricLabel: null,
      tags: ['Editorial Writing', 'Travel', 'Published Feature'],
      images: [
        { src: comingSoon, alt: 'Travel editorial' },
      ],
      accent: '#ff4800',
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

  const imageList = p.images || (p.img ? [{ src: p.img, alt: p.imgAlt }] : [])

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
      <button
        onClick={() => setExpanded(!expanded)}
        className="project-row-button"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '40px 1fr auto auto',
          alignItems: 'center',
          gap: 'clamp(12px, 2vw, 40px)',
          padding: 'clamp(20px, 2.5vw, 28px) 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.8rem', color: '#c4c0b8', letterSpacing: '0.05em' }}>{p.num}</span>

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

        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: '0.85rem', color: '#8a857c', whiteSpace: 'nowrap' }}>{p.year}</span>

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

      <div style={{
        overflow: 'hidden',
        maxHeight: expanded ? 1200 : 0,
        transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div 
          className="project-expand-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px, 4vw, 64px)',
            paddingBottom: 40,
            paddingTop: 8,
          }}
        >
          {p.videoUrl ? (
            <div style={{ position: 'relative', overflow: 'hidden', background: '#000', aspectRatio: '16/9', width: '100%' }}>
              <video
                src={p.videoUrl}
                poster={p.videoPoster}
                controls
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ) : (
            <ProjectImageCarousel images={imageList} expanded={expanded} />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>{p.client}</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: '#5a5650', lineHeight: 1.85, marginBottom: 24 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {p.tags.map((t: string) => (
                  <span key={t} style={{ padding: '5px 12px', border: '1px solid #e2ddd4', fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: '0.72rem', color: '#8a857c' }}>{t}</span>
                ))}
              </div>

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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-expand-grid { grid-template-columns: 1fr !important; }
          .project-row-button { grid-template-columns: 30px 1fr auto !important; }
          .project-row-button > span:nth-child(3) { display: none; }
        }
      `}</style>
    </div>
  )
}

// ─── Reels / Short-Form Video Section ─────────────────────────────────────────
function ReelViewerModal({
  reel,
  onClose,
}: {
  reel: {
    title: string
    category: string
    platform: string
    views: string
    videoUrl?: string
    previewImg?: string
    link: string
  }
  onClose: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isDirectVideo =
    reel.videoUrl &&
    (reel.videoUrl.endsWith('.mp4') ||
      reel.videoUrl.includes('.mp4?') ||
      reel.videoUrl.startsWith('blob:') ||
      reel.videoUrl.startsWith('data:'))

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(18, 15, 12, 0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 40px)',
        animation: 'reelFadeIn 0.25s ease-out',
      }}
    >
      <style>{`
        @keyframes reelFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes reelSlideUp {
          from { transform: translateY(20px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          height: '85vh',
          maxHeight: '740px',
          background: '#000',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
          animation: 'reelSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close viewer"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            background: 'rgba(26, 24, 21, 0.65)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f5f0e8',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#c4623a')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(26, 24, 21, 0.65)')}
        >
          ✕
        </button>

        {/* Video Player */}
        <div style={{ flex: 1, position: 'relative', background: '#000', overflow: 'hidden' }}>
          {isDirectVideo ? (
            <video
              src={reel.videoUrl}
              poster={reel.previewImg}
              autoPlay
              controls
              playsInline
              loop
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : reel.videoUrl ? (
            <iframe
              src={reel.videoUrl.includes('?') ? `${reel.videoUrl}&autoplay=1` : `${reel.videoUrl}?autoplay=1`}
              title={reel.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          ) : (
            <img
              src={reel.previewImg}
              alt={reel.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          )}
        </div>

        {/* Footer info & Optional External Link */}
        <div
          style={{
            background: 'linear-gradient(to top, #1a1815 0%, rgba(26, 24, 21, 0.95) 85%, transparent 100%)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            zIndex: 5,
          }}
        >
          {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#c4623a',
              }}
            >
              {reel.category}
            </span>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.72rem',
                color: '#9a9590',
              }}
            >
              {reel.views} Views
            </span>
          </div> */}

          {/* <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.25rem',
              color: '#f5f0e8',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {reel.title}
          </h3> */}

          {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.75rem',
                color: '#9a9590',
              }}
            >
              Playing on Portfolio
            </span>
            <a
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                padding: '8px 16px',
                fontSize: '0.7rem',
                color: '#f5f0e8',
                borderColor: 'rgba(245, 240, 232, 0.25)',
                background: 'rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c4623a'
                e.currentTarget.style.borderColor = '#c4623a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(245, 240, 232, 0.25)'
              }}
            >
              Open on {reel.platform} ↗
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

function Reels() {
  const [selectedReel, setSelectedReel] = useState<any>(null)

  const reels = [
    {
      id: 'reel-1',
      title: 'A Day in the Life of a Marketing Strategist',
      category: 'Lifestyle & Career',
      platform: 'Instagram',
      views: '45.2K',
      // Put your MP4 file or embed URL here:
      videoUrl: new URL('./imports/reel1.mp4', import.meta.url).href, 
      previewImg: reel1,
      link: 'https://www.instagram.com/reel/DV36vHqCAC3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 'reel-2',
      title: 'Behind The Scenes: Brand Direction & Production',
      category: 'Creative Direction',
      platform: 'Instagram',
      views: '28.6K',
      videoUrl: 'https://www.instagram.com/reel/DV36vHqCAC3/embed',
      // Direct Instagram cover thumbnail endpoint:
      previewImg:reel2,
      link: 'https://www.instagram.com/reel/DV36vHqCAC3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 'reel-3',
      title: 'Solo Travel Series: Exploring Contemporary Culture',
      category: 'Travel & Storytelling',
      platform: 'TikTok',
      views: '84.1K',
      videoUrl: new URL('./imports/home.mp4', import.meta.url).href,
      previewImg: reel3,
      link: 'https://www.tiktok.com/@brellss?_r=1&_t=ZS-96tvkepkei9',
    },
    {
      id: 'reel-4',
      title: '3 Marketing Frameworks Every Creator Needs',
      category: 'Brand Strategy',
      platform: 'Instagram',
      views: '19.4K',
      videoUrl: new URL('./imports/home.mp4', import.meta.url).href,
      previewImg: reel4,
      link: 'https://www.instagram.com/brellss?igsh=MXNwYjExb3I1c2wxeA%3D%3D&utm_source=qr',
    },
  ]

  return (
    <section id="reels" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: '#faf7f2' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div className="fade-up">
            <span className="section-label">Short-Form Content</span>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 16, color: '#1a1815' }}>
              Reels &amp; Highlights
            </h2>
          </div>

          <div className="fade-up delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="https://www.tiktok.com/@brellss?_r=1&_t=ZS-96tvkepkei9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.75rem' }}
            >
              TikTok Profile ↗
            </a>
            <a
              href="https://www.instagram.com/brellss?igsh=MXNwYjExb3I1c2wxeA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.75rem' }}
            >
              Instagram Profile ↗
            </a>
          </div>
        </div>

        {/* Reels Grid */}
        <div 
          className="reels-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(16px, 2vw, 28px)',
          }}
        >
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              className={`reel-card fade-up delay-${(idx % 4) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                background: '#1a1815',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                aspectRatio: '9 / 15',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              }}
            >
              {/* Media Preview */}
              <img
                src={reel.previewImg}
                alt={reel.title}
                className="reel-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: 0.88,
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                }}
              />

              {/* Gradient Overlays */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,24,21,0.92) 0%, rgba(26,24,21,0.3) 45%, rgba(26,24,21,0.4) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Header Badge */}
              {/* <div
                style={{
                  position: 'absolute',
                  top: 18,
                  left: 18,
                  right: 18,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    background: 'rgba(245,240,232,0.9)',
                    backdropFilter: 'blur(8px)',
                    color: '#1a1815',
                  }}
                >
                  {reel.platform}
                </span>
              </div> */}

              {/* Play Button Icon */}
              <div
                className="reel-play-button"
                style={{
                  position: 'absolute',
                  top: '46%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'rgba(245,240,232,0.85)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                  transition: 'transform 0.3s ease, background 0.3s ease',
                  zIndex: 2,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1815" style={{ marginLeft: 3 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Bottom Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'clamp(16px, 2vw, 24px)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                  {/* <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#c4623a',
                      marginBottom: 6,
                    }}
                  >
                    {reel.category}
                  </div> */}

                {/* <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
                    color: '#f5f0e8',
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                    margin: '0 0 12px 0',
                  }}
                >
                  {reel.title}
                </h3> */}

                {/* <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#f5f0e8',
                  }}
                >
                  Watch Video ▶
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Lightbox Modal when a reel is clicked */}
      {selectedReel && (
        <ReelViewerModal
          reel={selectedReel}
          onClose={() => setSelectedReel(null)}
        />
      )}

      <style>{`
        .reel-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.18) !important;
        }
        .reel-card:hover .reel-img {
          transform: scale(1.06);
          opacity: 0.95 !important;
        }
        .reel-card:hover .reel-play-button {
          transform: translate(-50%, -50%) scale(1.15);
          background: #c4623a !important;
        }
        .reel-card:hover .reel-play-button svg {
          fill: #fff !important;
        }

        @media (max-width: 1024px) {
          .reels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 580px) {
          .reels-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .reel-card {
            aspect-ratio: 16 / 11 !important;
          }
        }
      `}</style>
    </section>
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
    border: '1px solid rgba(245,240,232,0.2)',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 300,
    fontSize: '0.95rem',
    color: '#f5f0e8',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', background: '#1a1815' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 8vw, 120px)', alignItems: 'start' }} className="contact-grid">
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
                    onBlur={e => (e.target.style.borderColor = 'rgba(245,240,232,0.2)')}
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
                  onBlur={e => (e.target.style.borderColor = 'rgba(245,240,232,0.2)')}
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
          .contact-grid { grid-template-columns: 1fr !important; }
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
      <GlobalStyles />
      <Nav />
      <Hero />
      <About />
      <Background />
      <Tools />
      <Focus />
      <Projects />
      <Reels />
      <Contact />
      <Footer />
    </div>
  )
}