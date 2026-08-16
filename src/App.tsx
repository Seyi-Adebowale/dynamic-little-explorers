import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProgramsPage } from '@/pages/ProgramsPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { StoriesPage } from '@/pages/StoriesPage'
import { StoryPage } from '@/pages/StoryPage'
import { ContactPage } from '@/pages/ContactPage'
import { EnrolmentPage } from '@/pages/EnrolmentPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="stories/:slug" element={<StoryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="enrol" element={<EnrolmentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
