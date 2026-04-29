import { useNavigate } from 'react-router-dom'
import { PORTFOLIO_DATA } from '../data'
import PortraitPlaceholder from './PortraitPlaceholder'
import ContactIcon from './ContactIcon'
import SectionLabel from './SectionLabel'
import Timeline from './Timeline'
import SkillsBlock from './SkillsBlock'
import LanguagesBlock from './LanguagesBlock'
import ProjectCard from './ProjectCard'
import HobbiesBlock from './HobbiesBlock'

export default function MobilePortfolio({ photoSrc }) {
  const navigate = useNavigate()
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', padding: '32px 22px 40px', fontFamily: 'var(--sans)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 9.5, color: 'var(--ink-4)', letterSpacing: 1.2, marginBottom: 28 }}>
        <span>JHL · 2026</span>
        <span>v1.0</span>
      </div>

      {/* Hero */}
      <header style={{ marginBottom: 44 }}>
        {photoSrc
          ? <img src={photoSrc} alt={PORTFOLIO_DATA.name} style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--rule)', marginBottom: 22 }} />
          : <PortraitPlaceholder size={110} />
        }
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9.5, color: 'var(--accent)', letterSpacing: 2, marginTop: 22, marginBottom: 10 }}>HELLO — I'M</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 54, fontWeight: 500, lineHeight: 0.92, letterSpacing: -1.4, margin: 0, color: 'var(--ink)' }}>
          Joshua <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Hyunbin</span> Lee
        </h1>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--ink-2)', marginTop: 12 }}>
          {PORTFOLIO_DATA.tagline}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--rule)' }}>
          {PORTFOLIO_DATA.contacts.map((c) => (
            <a key={c.label} href={c.href || undefined} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-2)', textDecoration: 'none', letterSpacing: 0.3 }}>
              <span style={{ width: 14, display: 'inline-flex', color: 'var(--accent)' }}><ContactIcon kind={c.kind} /></span>
              {c.value}
            </a>
          ))}
        </div>
        {/* Visit Writing CTA */}
        <button
          onClick={() => navigate('/blog')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 22, padding: '12px 16px', border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', width: '100%' }}
        >
          <span>Visit Writing</span>
          <span aria-hidden>→</span>
        </button>
      </header>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={1}>Education</SectionLabel>
        <Timeline entries={PORTFOLIO_DATA.education} mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={2}>Experience</SectionLabel>
        <Timeline entries={PORTFOLIO_DATA.experience} mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={3}>Skills</SectionLabel>
        <SkillsBlock mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={4}>Languages</SectionLabel>
        <LanguagesBlock mobile />
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={5}>Selected Projects</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PORTFOLIO_DATA.projects.map((p, i) => <ProjectCard key={i} project={p} mobile />)}
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <SectionLabel num={6}>Things I Like</SectionLabel>
        <HobbiesBlock mobile />
      </section>

      <footer style={{ marginTop: 32, paddingTop: 18, borderTop: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-4)', letterSpacing: 1, textAlign: 'center' }}>
        © 2026 · J. H. LEE
      </footer>
    </div>
  )
}
