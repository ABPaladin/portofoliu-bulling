// Single source of truth for the site's pages. `labelKey` points to an i18n
// key under `nav` so the same list drives the Navbar, the mobile menu and the
// Footer in every language.
export const navLinks = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/project', labelKey: 'nav.project' },
  { to: '/students', labelKey: 'nav.students' },
  { to: '/parents', labelKey: 'nav.parents' },
  { to: '/teachers', labelKey: 'nav.teachers' },
  { to: '/evaluation', labelKey: 'nav.evaluation' },
]
