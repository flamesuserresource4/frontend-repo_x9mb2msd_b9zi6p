import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white">
          <span className="font-black tracking-wide text-xl">AURELIA</span>
          <span className="ml-2 text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">Elite Fitness</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {[
            { id: 'packages', label: 'Training' },
            { id: 'nutrition', label: 'Nutrition' },
            { id: 'transforms', label: 'Transformations' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'contact', label: 'Book' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            className="px-4 py-2 rounded-full bg-[#d4af37] text-black font-semibold hover:brightness-110 transition"
          >
            Book Now
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4 text-white/80">
            {[
              { id: 'packages', label: 'Training' },
              { id: 'nutrition', label: 'Nutrition' },
              { id: 'transforms', label: 'Transformations' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'contact', label: 'Book' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 border-b border-white/10 last:border-none"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 px-4 py-3 rounded-full bg-[#d4af37] text-black font-semibold"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
