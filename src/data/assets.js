// Central image registry. Importing assets (rather than hard-coding /public
// paths) lets Vite hash + optimize them and keeps URLs correct under any base.
import logoBanner from '../assets/logo-banner.jpg'
import homeStudent from '../assets/home-student.jpg'
import homeParent from '../assets/home-parent.jpg'
import homeTeacher from '../assets/home-teacher.jpg'
import aboutPortrait from '../assets/about-portrait.jpg'
import project from '../assets/project.jpg'
import studentsHero from '../assets/students-hero.jpg'
import studentsLetter from '../assets/students-letter.jpg'
import studentsFingers from '../assets/students-fingers.jpg'
import studentsFilming from '../assets/students-filming.jpg'
import studentsGirls from '../assets/students-girls.jpg'
import studentsStop from '../assets/students-stop.jpg'
import studentsIllustration from '../assets/students-illustration.jpg'
import parentsLetter from '../assets/parents-letter.jpg'
import parentsTender from '../assets/parents-tender.jpg'
import teachersWelcome from '../assets/teachers-welcome.jpg'

export const img = {
  logoBanner,
  homeStudent,
  homeParent,
  homeTeacher,
  aboutPortrait,
  project,
  studentsHero,
  studentsLetter,
  studentsFingers,
  studentsFilming,
  studentsGirls,
  studentsStop,
  studentsIllustration,
  parentsLetter,
  parentsTender,
  teachersWelcome,
}

// Photos & videos from the Moldova × Czech project (folder: src/assets/poze proiect).
// import.meta.glob picks them all up automatically — drop new files in and they appear.
const photoModules = import.meta.glob('../assets/poze proiect/*.jpg', {
  eager: true,
  import: 'default',
})
const videoModules = import.meta.glob('../assets/poze proiect/*.mp4', {
  eager: true,
  import: 'default',
})

const byNumericPath = ([a], [b]) => a.localeCompare(b, undefined, { numeric: true })

export const czechPhotos = Object.entries(photoModules).sort(byNumericPath).map(([, src]) => src)
export const czechVideos = Object.entries(videoModules).sort(byNumericPath).map(([, src]) => src)
