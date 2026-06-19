import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/navigation'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import Logo from './Logo.jsx'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname])

  // Subtle elevation once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand-100 text-brand-800'
        : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
    }`

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? 'bg-white/90 shadow-sm backdrop-blur'
          : 'bg-white/70 backdrop-blur'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 xl:h-20">
        <Link to="/" className="shrink-0" aria-label={t('site.name')}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={linkClass}>
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-brand-800 hover:bg-brand-50 xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`xl:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="container-page flex flex-col gap-1 border-t border-brand-100 py-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-100 text-brand-800'
                      : 'text-slate-700 hover:bg-brand-50'
                  }`
                }
              >
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
