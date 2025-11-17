import { Leaf, FlaskConical, Apple } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  { icon: Apple, title: 'Personal Macros', text: 'Calibrated to your biomarkers, goals, and training blocks.' },
  { icon: FlaskConical, title: 'Supplement Stack', text: 'Evidence-based, minimal, and targeted to your needs.' },
  { icon: Leaf, title: 'Lifestyle Alignment', text: 'Protocols that fit travel, schedule, and stress realities.' },
]

export default function Nutrition() {
  return (
    <section id="nutrition" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-black">Nutrition Coaching</h2>
            <p className="text-white/60 mt-4">High-end nutrition architecture designed for clarity and adherence. No fluff. Just results.</p>
            <div className="mt-8 space-y-5">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <p.icon className="text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-white/60">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="https://cdn.coverr.co/videos/coverr-preparing-a-healthy-salad-2885/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
