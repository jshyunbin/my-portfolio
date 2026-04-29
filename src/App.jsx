import { useState, useEffect } from 'react'
import { DesktopPortfolio, MobilePortfolio, ArticlePage } from './components/Portfolio'

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

export default function App() {
  const isMobile = useIsMobile()
  const [page, setPage] = useState('portfolio')

  const goToArticle = () => {
    setPage('article')
    window.scrollTo(0, 0)
  }
  const goBack = () => {
    setPage('portfolio')
    window.scrollTo(0, 0)
  }

  if (page === 'article') {
    return <ArticlePage mobile={isMobile} onBack={goBack} />
  }

  return isMobile
    ? <MobilePortfolio onReadArticle={goToArticle} />
    : <DesktopPortfolio onReadArticle={goToArticle} />
}
