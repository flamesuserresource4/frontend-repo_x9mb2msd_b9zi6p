import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch((import.meta.env.VITE_BACKEND_URL || '') + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks — we\'ll reach out shortly.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black">Book a Consultation</h2>
          <p className="text-white/60 mt-4">Tell us about your goals — we\'ll craft a plan built around your life.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-white/60 mb-2">Full Name</label>
              <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-2">Email</label>
              <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-2">Phone</label>
              <input type="tel" name="phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-white/60 mb-2">Goals</label>
              <textarea name="message" rows="7" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" placeholder="Share your training background, timeline, and outcomes you're targeting" />
            </div>
            <button className="w-full px-6 py-4 rounded-full bg-[#d4af37] text-black font-semibold hover:brightness-110 transition">Request Booking</button>
            {status && <p className="text-sm text-white/60">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
