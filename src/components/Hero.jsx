import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="tracking-[0.35em] uppercase text-xs text-white/60 mb-6">Luxury Performance Coaching</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
            Elevate Your Form. Redefine Your Limits.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Bespoke training and nutrition programs for high-performers. Precision coaching, data-driven results, and a white-glove experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#packages" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#d4af37] text-black font-semibold hover:brightness-110 transition">
              Explore Programs
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition">
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
