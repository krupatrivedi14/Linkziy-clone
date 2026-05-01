import { useState } from 'react'
import styles from './Inner.module.css'

const CONVOS = [
  { id: 1, name: 'LinkedIn', initials: 'L', time: 'Sun', preview: 'Click to view conversation', unread: true },
  { id: 2, name: 'Melissa Torres', initials: 'MT', time: 'Mar 3', headline: 'Senior Manager @ LinkedIn | Conscious Business, Online Advertising', preview: 'Click to view conversation', unread: true },
  { id: 3, name: 'LinkedIn', initials: 'L', time: 'Nov 9', preview: 'Click to view conversation', unread: true },
  { id: 4, name: 'Škoda India', initials: 'ŠI', time: 'Sep 3', preview: 'Click to view conversation', unread: true },
  { id: 5, name: 'LinkedIn', initials: 'L', time: 'Aug 8', preview: 'Click to view conversation', unread: false },
  { id: 6, name: 'The LinkedIn Team', initials: 'TL', time: 'Apr 16', headline: 'Product Team at LinkedIn', preview: 'Click to view conversation', unread: false },
]

export default function Inbox() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = CONVOS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.inboxShell}>
      {/* ── Conversation list ── */}
      <aside className={styles.inboxSidebar}>
        <div className={styles.inboxSearch}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIco} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              className={styles.searchInput}
              placeholder="Search messages"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <button className={styles.syncBtn} title="Sync from LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
          </button>
        </div>

        <div className={styles.convoList}>
          {filtered.map(c => (
            <div
              key={c.id}
              className={`${styles.convoItem} ${selected === c.id ? styles.convoActive : ''}`}
              onClick={() => setSelected(c.id)}
            >
              <div className={styles.convoAvatar}>{c.initials}</div>
              <div className={styles.convoBody}>
                <div className={styles.convoTop}>
                  <span className={`${styles.convoName} ${c.unread ? styles.unreadName : ''}`}>{c.name}</span>
                  <span className={styles.convoTime}>{c.time}</span>
                </div>
                {c.headline && <p className={styles.convoHeadline}>{c.headline}</p>}
                <p className={`${styles.convoPreview} ${c.unread ? styles.unreadPreview : ''}`}>{c.preview}</p>
              </div>
              {c.unread && <span className={styles.unreadBadge}>1</span>}
            </div>
          ))}
        </div>
      </aside>

      {/* ── Message pane ── */}
      <div className={styles.inboxMain}>
        {selected ? (
          <div className={styles.msgPane}>
            <p className={styles.msgPlaceholder}>Message thread coming soon.</p>
          </div>
        ) : (
          <div className={styles.emptyPane}>
            <div className={styles.emptyIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
            </div>
            <h3 className={styles.emptyTitle}>Select a conversation</h3>
            <p className={styles.emptySub}>Choose a conversation from the list to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}
