import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PetsSection from './components/PetsSection.jsx'
import Welcome from './components/Welcome.jsx'
import Guides from './components/Guides.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { brand, categories, filters, navLinks, pets } from './data/site.js'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleCategoryOpen = (categoryId) => {
    if (categoryId === 'featured') {
      scrollToId('lien-he')
      return
    }
    setActiveFilter(categoryId)
    scrollToId('thu-cung')
  }

  return (
    <>
      <Header navLinks={navLinks} brand={brand} />
      <main>
        <Hero
          categories={categories}
          filters={filters}
          activeFilter={activeFilter}
          onFilter={setActiveFilter}
          onCategoryOpen={handleCategoryOpen}
        />
        <PetsSection
          pets={pets}
          filters={filters}
          activeFilter={activeFilter}
          onFilter={setActiveFilter}
        />
        <Welcome brand={brand} />
        <Guides />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
