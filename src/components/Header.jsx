import { useEffect, useMemo, useRef, useState } from 'react'

const scrollToId = (id) => (event) => {
  const el = document.getElementById(id)
  if (!el) return
  event.preventDefault()
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header({ navLinks, brand }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${solid ? ' is-solid' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#trang-chu" onClick={scrollToId('trang-chu')} aria-label={`${brand.name} — về trang chủ`}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="42" height="42">
              <rect width="64" height="64" rx="14" fill="#16233c" />
              <path d="M20 18 L26 26 H38 L44 18 L46 34 C46 44 38 50 32 50 C26 50 18 44 18 34 Z" fill="#f3e5cf" />
              <path d="M20 18 L26 26 L18 34 Z" fill="#c98a52" />
              <path d="M44 18 L38 26 L46 34 Z" fill="#c98a52" />
              <circle cx="26" cy="35" r="2.6" fill="#16233c" />
              <circle cx="38" cy="35" r="2.6" fill="#16233c" />
              <path d="M32 40 l-3.5 2.5 h7 Z" fill="#16233c" />
              <circle cx="32" cy="47" r="1.8" fill="#b9854a" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">{brand.name}</span>
            <span className="brand-tagline">{brand.tagline}</span>
          </span>
        </a>

        <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Điều hướng chính">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setOpen(false)
                scrollToId(link.href.slice(1))(e)
              }}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn-navy nav-cta-mobile" href={brand.phoneHref}>
            Liên hệ tư vấn
          </a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-navy header-cta" href="#lien-he" onClick={scrollToId('lien-he')}>
            Liên hệ tư vấn
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
