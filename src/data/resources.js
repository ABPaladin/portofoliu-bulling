// Document & media resources.
//  - Drive docs keep their real Google Drive file id (open + download links).
//  - Local docs live in /public/docs and are served from the site itself.
// Human-readable titles + descriptions live in the i18n files, keyed by `key`.

const driveUrls = (id) => ({
  view: `https://drive.google.com/file/d/${id}/view`,
  download: `https://drive.google.com/uc?export=download&id=${id}`,
})

// Files in /public are served from the site root (respecting Vite's base).
const localUrls = (file) => {
  const url = `${import.meta.env.BASE_URL}docs/${file}`
  return { view: url, download: url }
}

export const parentDocs = [
  { key: 'doc_phase', type: 'pdf', ...driveUrls('1WfMOAcBgAMqKEcq4Am7siISLwRdsY7FD') },
  { key: 'doc_24h', type: 'docx', ...driveUrls('1ouZafSfD9Zwtwrhp0d4XDZ9MhW6eAqC1') },
  { key: 'doc_my_child', type: 'docx', ...driveUrls('1bycRkG0i_ssBlju8lgVo35LyVp5YOIZF') },
  { key: 'doc_activities', type: 'docx', ...driveUrls('1P_-AU9wLtf2d7cTbhhPPPEzp9Eio0ry4') },
]

// Real files supplied with the project (served locally from /public/docs).
export const projectDocs = [
  { key: 'doc_stop', type: 'pdf', ...localUrls('stop-bullying-cunosc-inteleg-aplic.pdf') },
  { key: 'doc_unity', type: 'pptx', ...localUrls('unitate-prin-diversitate.pptx') },
  { key: 'doc_friendship', type: 'pptx', ...localUrls('thread-of-friendship-martisor.pptx') },
]

export const teacherDocs = [
  { key: 'doc_respect', type: 'pdf', ...driveUrls('1gnTuRPVbhDz2regvhR3CRBdzp5gT7oHr') },
  { key: 'doc_for_teachers', type: 'pptx', ...driveUrls('1ed_Of_q_ELakUL2Ppv7oqkEUnYiTHaVD') },
  { key: 'doc_self_confidence', type: 'pptx', ...driveUrls('1J40iJBkX7f6Hj3GEa4wRb-7lTIYKhXZn') },
]

// The two presentations that document the Moldova × Czech Republic partnership.
export const czechDocs = [projectDocs[1], projectDocs[2]]

// Google Slides presentation embedded on the home page.
export const presentation = {
  id: '1C6XEunCUZ5qbGP6SJYKA1y_jEtF1wvtZwQbv05xHLIE',
  embed:
    'https://docs.google.com/presentation/d/1C6XEunCUZ5qbGP6SJYKA1y_jEtF1wvtZwQbv05xHLIE/embed?start=false&loop=false&delayms=5000',
  present:
    'https://docs.google.com/presentation/d/1C6XEunCUZ5qbGP6SJYKA1y_jEtF1wvtZwQbv05xHLIE/present',
}

export const CONTACT_EMAIL = 'viki.pancenco@gmail.com'
export const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/'
