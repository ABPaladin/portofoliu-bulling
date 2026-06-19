// Google Drive resources preserved from the original Google Sites export.
// Each item keeps its real Drive file id; `view`/`download` URLs are derived
// from it. The human-readable title + description live in the i18n files,
// keyed by `key`, so they are translated per language.

const driveView = (id) => `https://drive.google.com/file/d/${id}/view`
const driveDownload = (id) => `https://drive.google.com/uc?export=download&id=${id}`

export const makeUrls = (id) => ({
  view: driveView(id),
  download: driveDownload(id),
})

export const parentDocs = [
  { key: 'doc_phase', id: '1WfMOAcBgAMqKEcq4Am7siISLwRdsY7FD', type: 'pdf' },
  { key: 'doc_24h', id: '1ouZafSfD9Zwtwrhp0d4XDZ9MhW6eAqC1', type: 'docx' },
  { key: 'doc_my_child', id: '1bycRkG0i_ssBlju8lgVo35LyVp5YOIZF', type: 'docx' },
  { key: 'doc_activities', id: '1P_-AU9wLtf2d7cTbhhPPPEzp9Eio0ry4', type: 'docx' },
]

export const teacherDocs = [
  { key: 'doc_respect', id: '1gnTuRPVbhDz2regvhR3CRBdzp5gT7oHr', type: 'pdf' },
  { key: 'doc_stop', id: '1725jFPnUE3gZmRr7pCjVi_o7Leo5oA6g', type: 'pdf' },
  { key: 'doc_for_teachers', id: '1ed_Of_q_ELakUL2Ppv7oqkEUnYiTHaVD', type: 'pptx' },
  { key: 'doc_self_confidence', id: '1J40iJBkX7f6Hj3GEa4wRb-7lTIYKhXZn', type: 'pptx' },
]

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
