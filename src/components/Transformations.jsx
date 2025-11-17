import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
]

export default function Transformations() {
  return (
    <section id="transforms" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black">Athlete Transformations</h2>
          <p className="text-white/60 mt-4 max-w-2xl">Real clients. Real outcomes. Precision-led coaching that compounds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative rounded-2xl overflow-hidden border border-white/10">
              <img src={src} alt="Transformation" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-sm">
                <div className="text-[#d4af37] tracking-widest text-[10px] uppercase">12 Weeks</div>
                <div className="font-semibold">-8% Body Fat • + Strength</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
