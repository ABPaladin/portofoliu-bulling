import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Project from './pages/Project.jsx'
import CzechCollaboration from './pages/CzechCollaboration.jsx'
import ForStudents from './pages/ForStudents.jsx'
import ForParents from './pages/ForParents.jsx'
import ForTeachers from './pages/ForTeachers.jsx'
import Evaluation from './pages/Evaluation.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="collaboration" element={<CzechCollaboration />} />
          <Route path="students" element={<ForStudents />} />
          <Route path="parents" element={<ForParents />} />
          <Route path="teachers" element={<ForTeachers />} />
          <Route path="evaluation" element={<Evaluation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
