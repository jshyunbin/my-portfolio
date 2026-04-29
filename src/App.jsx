import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import DesktopPortfolio from './components/DesktopPortfolio'
import MobilePortfolio from './components/MobilePortfolio'
import ArticlePage from './components/ArticlePage'

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return isMobile
}

function Portfolio() {
  const isMobile = useIsMobile()
  return isMobile ? <MobilePortfolio /> : <DesktopPortfolio />
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/article/:slug" element={<ArticleRoute />} />
      </Routes>
    </HashRouter>
  )
}

function ArticleRoute() {
  const isMobile = useIsMobile()
  return <ArticlePage mobile={isMobile} />
}
