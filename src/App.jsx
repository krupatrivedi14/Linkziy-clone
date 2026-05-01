import { useState, useEffect } from 'react'

import CustomCursor    from './components/CustomCursor'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Ticker          from './components/Ticker'
import ProblemSection  from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import Features        from './components/Features'
import Outcomes        from './components/Outcomes'
import BuiltFor        from './components/BuiltFor'
import HowItWorks      from './components/HowItWorks'
import WhyUs           from './components/WhyUs'
import CTA             from './components/CTA'
import Footer          from './components/Footer'

import Pricing           from './pages/Pricing'
import SignIn            from './pages/SignIn'
import SignUp            from './pages/SignUp'
import Dashboard         from './pages/Dashboard'
import Prospects         from './pages/Prospects'
import Sequences         from './pages/Sequences'
import Inbox             from './pages/Inbox'
import Analytics         from './pages/Analytics'
import CampaignAnalytics from './pages/CampaignAnalytics'
import Safety            from './pages/Safety'
import DashboardPricing  from './pages/DashboardPricing'

import { useReveal } from './hooks/useReveal'

function usePage() {
  const getPage = () => {
    const p = window.location.pathname.replace(/\/$/, '')

    if (p === '/pricing') return 'pricing'
    if (p === '/signin') return 'signin'
    if (p === '/signup') return 'signup'
    if (p === '/dashboard') return 'dashboard'
    if (p === '/prospects') return 'prospects'
    if (p === '/sequences') return 'sequences'
    if (p === '/inbox') return 'inbox'
    if (p === '/analytics') return 'analytics'
    if (p === '/campaigns') return 'campaigns'
    if (p === '/safety') return 'safety'
    if (p === '/dashboard-pricing') return 'dashboard-pricing'

    return 'home'
  }

  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handler = () => setPage(getPage())
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  const navigate = (target) => {
    const paths = {
      home: '/',
      pricing: '/pricing',
      signin: '/signin',
      signup: '/signup',
      dashboard: '/dashboard',
      prospects: '/prospects',
      sequences: '/sequences',
      inbox: '/inbox',
      analytics: '/analytics',
      campaigns: '/campaigns',
      safety: '/safety',
      'dashboard-pricing': '/dashboard-pricing',
    }

    window.history.pushState({}, '', paths[target] ?? '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { page, navigate }
}

function HomePage({ onNavigate }) {
  useReveal()

  return (
    <div className="lz-page">
      <Hero />
      <Ticker />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <Outcomes />
      <BuiltFor />
      <HowItWorks />
      <WhyUs />
      <CTA onNavigate={onNavigate} />
    </div>
  )
}

export default function App() {
  const { page, navigate } = usePage()

  if (page === 'signin') return <SignIn onNavigate={navigate} />
  if (page === 'signup') return <SignUp onNavigate={navigate} />

  if (page === 'dashboard') {
    return <Dashboard onNavigate={navigate} activePage="dashboard" />
  }

  if (page === 'prospects') {
    return (
      <Dashboard onNavigate={navigate} activePage="prospects">
        <Prospects />
      </Dashboard>
    )
  }

  if (page === 'sequences') {
    return (
      <Dashboard onNavigate={navigate} activePage="sequences">
        <Sequences />
      </Dashboard>
    )
  }

  if (page === 'inbox') {
    return (
      <Dashboard onNavigate={navigate} activePage="inbox">
        <Inbox />
      </Dashboard>
    )
  }

  if (page === 'analytics') {
    return (
      <Dashboard onNavigate={navigate} activePage="analytics">
        <Analytics />
      </Dashboard>
    )
  }

  if (page === 'campaigns') {
    return (
      <Dashboard onNavigate={navigate} activePage="campaigns">
        <CampaignAnalytics />
      </Dashboard>
    )
  }

  if (page === 'safety') {
    return (
      <Dashboard onNavigate={navigate} activePage="safety">
        <Safety />
      </Dashboard>
    )
  }

  if (page === 'dashboard-pricing') {
    return (
      <Dashboard onNavigate={navigate} activePage="dashboard-pricing">
        <DashboardPricing />
      </Dashboard>
    )
  }

  return (
    <>
      <CustomCursor />
      <Navbar currentPage={page} onNavigate={navigate} />
      {page === 'pricing' ? <Pricing /> : <HomePage onNavigate={navigate} />}
      <Footer />
    </>
  )
}