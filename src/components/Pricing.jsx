import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Foundation',
    price: 249,
    features: [
      'Custom training plan',
      'Monthly check-ins',
      'Basic nutrition guide',
      'Email support',
    ],
  },
  {
    name: 'Elite',
    price: 499,
    highlight: true,
    features: [
      'Weekly 1:1 coaching',
      'Video form analysis',
      'Precision macro plan',
      'Priority support',
    ],
  },
  {
    name: 'Executive',
    price: 899,
    features: [
      'Concierge coaching',
      'Daily accountability',
      'On-demand consults',
      'Full lifestyle design',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black">Pricing</h2>
          <p className="text-white/60 mt-4">Choose your level of support. Upgrade anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-8 ${t.highlight ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-white/10 bg-white/5'}`}>
              {t.highlight && (
                <div className="absolute -top-3 left-8 bg-[#d4af37] text-black text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
              )}
              <div className="text-sm tracking-[0.3em] uppercase text-white/60">{t.name}</div>
              <div className="mt-4 text-4xl font-black">${t.price}<span className="text-base text-white/50">/mo</span></div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#d4af37]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full px-4 py-3 rounded-full border border-white/20 hover:border-white/40 transition">
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
