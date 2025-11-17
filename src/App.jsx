import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Nutrition from './components/Nutrition'
import Transformations from './components/Transformations'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Nutrition />
        <Transformations />
        <Pricing />
        <Contact />
        <footer className="border-t border-white/10 text-white/60 text-sm">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} AURELIA — Elite Fitness
            </div>
            <div className="tracking-[0.3em] uppercase text-[10px]">Precision • Discipline • Elegance</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
