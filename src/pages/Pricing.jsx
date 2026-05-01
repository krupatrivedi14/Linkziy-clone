import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Pricing.module.css'

const TABS = [
  'Outreach Automation',
  'LinkedIn Scheduling',
  'AI Assistant',
  'All-In-One Bundle',
  'Add-ons',
]

const MODULES = [
  {
    name: 'Outreach Automation',
    defaultPlan: 'agency',
    comparisonTitle: 'Outreach Automation comparison',
    plans: [
      { id: 'starter', name: 'Starter', badge: 'Starter', badgeStyle: 'dark', desc: '1 sender account for outreach.', price: '$19' },
      { id: 'growth', name: 'Growth', badge: 'Popular', badgeStyle: 'dark', desc: 'For growing teams with multiple senders.', price: '$49' },
      { id: 'agency', name: 'Agency', badge: 'Agency', badgeStyle: 'lime', desc: 'Scale outreach across many senders.', price: '$149' },
    ],
    details: {
      starter: {
        name: 'Starter',
        subtitle: 'Core platform pricing based on sender accounts.',
        tag: 'Outreach Automation',
        features: ['1 Sender account', 'Unlimited campaigns', 'Safe automation controls', 'Custom outreach flow builder', 'Automated follow-ups', 'Campaign analytics'],
        price: '$19/month',
      },
      growth: {
        name: 'Growth',
        subtitle: 'For growing teams with multiple senders.',
        tag: 'Outreach Automation',
        features: ['3 Sender accounts', 'Unlimited campaigns', 'Safe automation controls', 'Custom outreach flow builder', 'Automated follow-ups', 'Campaign analytics', 'Priority support'],
        price: '$49/month',
      },
      agency: {
        name: 'Agency',
        subtitle: 'Core platform pricing based on sender accounts.',
        tag: 'Outreach Automation',
        features: ['10 Sender accounts', 'Unlimited campaigns', 'Safe automation controls', 'Custom outreach flow builder', 'Automated follow-ups', 'Campaign analytics'],
        price: '$149/month',
      },
    },
    comparison: [
      { feature: 'Sender accounts', starter: '1', growth: '3', agency: '10' },
      { feature: 'Unlimited campaigns', starter: true, growth: true, agency: true },
      { feature: 'Custom outreach flow builder', starter: true, growth: true, agency: true },
      { feature: 'Automated follow-ups', starter: true, growth: true, agency: true },
      { feature: 'Campaign analytics', starter: true, growth: true, agency: true },
      { feature: 'Safe automation controls', starter: true, growth: true, agency: true },
    ],
  },

  {
    name: 'LinkedIn Scheduling',
    defaultPlan: 'growth',
    comparisonTitle: 'LinkedIn Scheduling comparison',
    plans: [
      { id: 'creator', name: 'Creator', badge: 'Creator', badgeStyle: 'dark', desc: 'Schedule content for 1 LinkedIn account.', price: '$9' },
      { id: 'growth', name: 'Growth', badge: 'Popular', badgeStyle: 'lime', desc: 'For creators managing multiple accounts.', price: '$15' },
      { id: 'agency', name: 'Agency', badge: 'Agency', badgeStyle: 'dark', desc: 'For agencies publishing at scale.', price: '$35' },
    ],
    details: {
      creator: {
        name: 'Creator',
        subtitle: 'Pricing based on LinkedIn accounts connected.',
        tag: 'LinkedIn Scheduling',
        features: ['1 LinkedIn account', 'Post analytics', 'Unlimited post scheduling', 'Content calendar'],
        price: '$9/month',
      },
      growth: {
        name: 'Growth',
        subtitle: 'Pricing based on LinkedIn accounts connected.',
        tag: 'LinkedIn Scheduling',
        features: ['3 LinkedIn accounts', 'Multi-account publishing', 'Post analytics', 'Unlimited post scheduling', 'Content calendar'],
        price: '$15/month',
      },
      agency: {
        name: 'Agency',
        subtitle: 'Pricing based on LinkedIn accounts connected.',
        tag: 'LinkedIn Scheduling',
        features: ['10 LinkedIn accounts', 'Multi-account publishing', 'Post analytics', 'Unlimited post scheduling', 'Content calendar'],
        price: '$35/month',
      },
    },
    comparison: [
      { feature: 'LinkedIn accounts', creator: '1', growth: '3', agency: '10' },
      { feature: 'Unlimited post scheduling', creator: true, growth: true, agency: true },
      { feature: 'Content calendar', creator: true, growth: true, agency: true },
      { feature: 'Post analytics', creator: true, growth: true, agency: true },
      { feature: 'Multi-account publishing', creator: true, growth: true, agency: true },
    ],
  },

  {
    name: 'AI Assistant',
    defaultPlan: 'starter',
    comparisonTitle: 'AI Content Assistant comparison',
    plans: [
      { id: 'starter', name: 'Starter', badge: 'Starter', badgeStyle: 'lime', desc: '100 AI credits per month.', price: '$9' },
      { id: 'growth', name: 'Growth', badge: 'Popular', badgeStyle: 'dark', desc: '300 AI credits per month.', price: '$15' },
      { id: 'pro', name: 'Pro', badge: 'Pro', badgeStyle: 'dark', desc: '1,000 AI credits per month.', price: '$32' },
    ],
    details: {
      starter: {
        name: 'Starter',
        subtitle: 'AI credits for posts, outreach messages, comments, hooks, and ideas.',
        tag: 'AI Content Assistant',
        features: ['100 AI credits / month', 'Post + message assistance', 'Ideas, hooks, comments', 'LinkedIn post generation', 'Outreach message writing', 'Comment generation', 'Hook writing', 'Content ideas'],
        price: '$9/month',
      },
      growth: {
        name: 'Growth',
        subtitle: 'AI credits for posts, outreach messages, comments, hooks, and ideas.',
        tag: 'AI Content Assistant',
        features: ['300 AI credits / month', 'Post + message assistance', 'Ideas, hooks, comments', 'LinkedIn post generation', 'Outreach message writing', 'Comment generation', 'Hook writing', 'Content ideas'],
        price: '$15/month',
      },
      pro: {
        name: 'Pro',
        subtitle: 'AI credits for posts, outreach messages, comments, hooks, and ideas.',
        tag: 'AI Content Assistant',
        features: ['1,000 AI credits / month', 'Post + message assistance', 'Ideas, hooks, comments', 'LinkedIn post generation', 'Outreach message writing', 'Comment generation', 'Hook writing', 'Content ideas'],
        price: '$32/month',
      },
    },
    comparison: [
      { feature: 'AI credits per month', starter: '100', growth: '300', pro: '1000' },
      { feature: 'LinkedIn post generation', starter: true, growth: true, pro: true },
      { feature: 'Outreach message writing', starter: true, growth: true, pro: true },
      { feature: 'Comment generation', starter: true, growth: true, pro: true },
      { feature: 'Hook writing', starter: true, growth: true, pro: true },
      { feature: 'Content ideas', starter: true, growth: true, pro: true },
    ],
  },

  {
    name: 'All-In-One Bundle',
    defaultPlan: 'bundle',
    comparisonTitle: 'All-In-One Bundle comparison',
    plans: [
      { id: 'bundle', name: 'Linkziy Pro Suite', badge: 'Bundle', badgeStyle: 'lime', desc: 'Full suite in one plan.', price: '$59' },
    ],
    details: {
      bundle: {
        name: 'Linkziy Pro Suite',
        subtitle: 'Everything in one plan for the complete Linkziy ecosystem.',
        tag: 'All-In-One Bundle',
        features: ['1 Sender account', 'Scheduling for 1 LinkedIn account', '600 lead credits / month', '300 AI credits', 'Campaign analytics', '1 LinkedIn sender account', '600 lead credits per month'],
        price: '$59/month',
      },
    },
    comparison: [
      { feature: '1 LinkedIn sender account', bundle: true },
      { feature: 'Scheduling for 1 LinkedIn account', bundle: true },
      { feature: '600 lead credits per month', bundle: true },
      { feature: '300 AI credits', bundle: true },
      { feature: 'Campaign analytics', bundle: true },
    ],
  },

  {
    name: 'Add-ons',
    defaultPlan: 'sender1',
    comparisonTitle: 'Add-ons comparison',
    plans: [
      { id: 'sender1', name: '+1 Sender Account', badge: 'Add-on', badgeStyle: 'lime', desc: 'Expand sender capacity anytime.', price: '$17' },
      { id: 'sender5', name: '+5 Sender Accounts', badge: 'Add-on', badgeStyle: 'dark', desc: 'Scale outreach quickly.', price: '$75' },
      { id: 'sender10', name: '+10 Sender Accounts', badge: 'Add-on', badgeStyle: 'dark', desc: 'Best for agencies scaling senders.', price: '$135' },
      { id: 'leads500', name: 'Extra 500 Leads', badge: 'Add-on', badgeStyle: 'dark', desc: 'Top up lead credits anytime.', price: '$11' },
      { id: 'leads1000', name: 'Extra 1000 Leads', badge: 'Add-on', badgeStyle: 'dark', desc: 'More leads for higher-volume outreach.', price: '$17' },
      { id: 'whiteLabel', name: 'White Label Reports', badge: 'Agency add-on', badgeStyle: 'dark', desc: 'Custom branding + shareable client reports.', price: '$29' },
    ],
    details: {
      sender1: {
        name: '+1 Sender Account',
        subtitle: 'Expand sender capacity, buy extra leads, and unlock agency-ready reporting.',
        tag: 'Add-ons',
        features: ['Adds 1 sender account', 'Billed monthly', 'Works with outreach plans', 'Upgrade without switching plans', 'Pay only for what you need', 'Instant scalability for teams'],
        price: '$17/month',
      },
      sender5: {
        name: '+5 Sender Accounts',
        subtitle: 'Expand sender capacity, buy extra leads, and unlock agency-ready reporting.',
        tag: 'Add-ons',
        features: ['Adds 5 sender accounts', 'Billed monthly', 'Works with outreach plans', 'Upgrade without switching plans', 'Pay only for what you need', 'Instant scalability for teams'],
        price: '$75/month',
      },
      sender10: {
        name: '+10 Sender Accounts',
        subtitle: 'Expand sender capacity, buy extra leads, and unlock agency-ready reporting.',
        tag: 'Add-ons',
        features: ['Adds 10 sender accounts', 'Billed monthly', 'Works with outreach plans', 'Upgrade without switching plans', 'Pay only for what you need', 'Instant scalability for teams'],
        price: '$135/month',
      },
      leads500: {
        name: 'Extra 500 Leads',
        subtitle: 'Expand sender capacity, buy extra leads, and unlock agency-ready reporting.',
        tag: 'Add-ons',
        features: ['Adds 500 lead credits', 'Billed monthly', 'Works with lead plans', 'Upgrade without switching plans', 'Pay only for what you need', 'Instant scalability for teams'],
        price: '$11/month',
      },
      leads1000: {
        name: 'Extra 1000 Leads',
        subtitle: 'Expand sender capacity, buy extra leads, and unlock agency-ready reporting.',
        tag: 'Add-ons',
        features: ['Adds 1000 lead credits', 'Billed monthly', 'Works with lead plans', 'Upgrade without switching plans', 'Pay only for what you need', 'Instant scalability for teams'],
        price: '$17/month',
      },
      whiteLabel: {
        name: 'White Label Reports',
        subtitle: 'Expand sender capacity, buy extra leads, and unlock agency-ready reporting.',
        tag: 'Add-ons',
        features: ['Custom branding', 'Shareable client reports', 'Agency-ready reporting', 'Upgrade without switching plans', 'Pay only for what you need', 'Instant scalability for teams'],
        price: '$29/month',
      },
    },
    comparison: [
      { feature: 'Upgrade without switching plans', sender1: true, sender5: true, sender10: true, leads500: true, leads1000: true, whiteLabel: true },
      { feature: 'Pay only for what you need', sender1: true, sender5: true, sender10: true, leads500: true, leads1000: true, whiteLabel: true },
      { feature: 'Instant scalability for teams', sender1: true, sender5: true, sender10: true, leads500: true, leads1000: true, whiteLabel: true },
      { feature: 'Billed monthly', sender1: true, sender5: true, sender10: true, leads500: true, leads1000: true, whiteLabel: true },
    ],
  },
]

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h12M13 5l7 7-7 7" />
    </svg>
  )
}

function CheckCell() {
  return (
    <span className={styles.checkCircle}>
      <CheckIcon />
    </span>
  )
}

export default function Pricing() {
  useReveal()

  const [activeTab, setActiveTab] = useState(0)
  const currentModule = MODULES[activeTab] || MODULES[0]

  const [activePlan, setActivePlan] = useState(currentModule.defaultPlan)

useEffect(() => {
  const firstPlanId = currentModule.plans[0]?.id
  setActivePlan(firstPlanId)
}, [activeTab])

  const detail =
  currentModule.details[activePlan] ||
  currentModule.details[currentModule.plans[0].id]
  const columns = currentModule.plans

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={`reveal ${styles.headSection}`}>
          <h1 className={styles.heading}>Choose the pricing plan that fits your growth.</h1>
          <p className={styles.subheading}>
            Pick a module, compare plans, and see exactly what's included — upfront and clear.
          </p>

          <div className={styles.tabs}>
            {TABS.map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        <div className={`reveal ${styles.plansCard}`}>
          <div className={styles.plansGrid}>
            <div className={styles.planList}>
              {currentModule.plans.map((plan) => {
                const isActive = activePlan === plan.id

                return (
                  <button
                    key={plan.id}
                    type="button"
                    className={`${styles.planRow} ${isActive ? styles.planRowActive : ''}`}
                    onClick={() => setActivePlan(plan.id)}
                  >
                    <span className={styles.planIcon}>
                      <StarIcon />
                    </span>

                    <div className={styles.planMeta}>
                      <div className={styles.planNameRow}>
                        <span className={styles.planName}>{plan.name}</span>
                        <span className={`${styles.planBadge} ${plan.badgeStyle === 'lime' ? styles.planBadgeLime : styles.planBadgeDark}`}>
                          {plan.badge}
                        </span>
                      </div>
                      <span className={styles.planDesc}>{plan.desc}</span>
                    </div>

                    <div className={styles.planPriceCol}>
                      <span className={styles.planPrice}>{plan.price}</span>
                      <span className={styles.planPeriod}>per month</span>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className={`gc ${styles.detailCard}`}>
              <div className={styles.detailHeader}>
                <div>
                  <div className={styles.detailName}>{detail.name}</div>
                  <div className={styles.detailSub}>{detail.subtitle}</div>
                </div>
                <span className={styles.detailTag}>{detail.tag}</span>
              </div>

              <ul className={styles.featureList}>
                {detail.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.featureCheck}>
                      <CheckIcon />
                    </span>
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.detailFooter}>
                <div className={styles.detailPriceBlock}>
                  <span className={styles.detailPriceLabel}>No credit card required</span>
                  <span className={styles.detailPriceVal}>{detail.price}</span>
                </div>

                <button type="button" className={styles.startBtn}>
                  Start Free <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`reveal ${styles.compCard}`}>
          <div className={styles.compHeader}>
            <div>
              <div className={styles.compTitle}>{currentModule.comparisonTitle}</div>
              <div className={styles.compSub}>A clear table, designed for quick decisions.</div>
            </div>
          </div>

          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.thead}>
                  <th className={`${styles.th} ${styles.thFeature}`}>Features</th>

                  {columns.map((plan) => (
                    <th
                      key={plan.id}
                      className={`${styles.th} ${activePlan === plan.id ? styles.thAgency : ''}`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentModule.comparison.map((row) => (
                  <tr key={row.feature} className={styles.tr}>
                    <td className={`${styles.td} ${styles.tdFeature}`}>{row.feature}</td>

                    {columns.map((plan) => {
                      const value = row[plan.id]

                      return (
                        <td
                          key={plan.id}
                          className={`${styles.td} ${activePlan === plan.id ? styles.tdAgency : ''}`}
                        >
                          {typeof value === 'boolean'
                            ? value ? <CheckCell /> : <span className={styles.dash}>—</span>
                            : <span className={styles.tdNum}>{value}</span>}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`reveal ${styles.ctaBlock}`}>
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>Built for LinkedIn growth</span>
            <h2 className={styles.ctaTitle}>Start your Linkziy free trial</h2>
            <p className={styles.ctaSub}>
              Automate outreach, schedule content, generate leads, and scale faster — free to start. No credit card required.
            </p>
            <button type="button" className={styles.ctaBtn}>
              Start free trial <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}