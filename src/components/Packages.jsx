import { Dumbbell, Activity, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Dumbbell,
    title: 'Elite Strength',
    desc: 'Periodized programming for maximum strength and lean mass. 1:1 weekly coaching, form audits, and performance tracking.',
    badge: 'Premium',
  },
  {
    icon: Activity,
    title: 'Athlete Engine',
    desc: 'Speed, agility, and conditioning protocols built for on-field dominance. Recovery and mobility built-in.',
    badge: 'Pro',
  },
  {
    icon: Gauge,
    title: 'Metabolic Reset',
    desc: 'Cutting-edge metabolic strategies to optimize body composition and energy systems with data-driven insights.',
    badge: 'Signature',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-black">Premium Training Packages</h2>
          <p className="text-white/60 mt-4 max-w-2xl">Minimalist, high-impact systems personalized for your physiology and schedule.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <it.icon className="text-[#d4af37]" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">{it.badge}</div>
                <h3 className="text-xl font-semibold mt-2">{it.title}</h3>
                <p className="text-white/60 mt-3">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
