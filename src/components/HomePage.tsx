import { ChevronRight, Gift, Bike, TriangleAlert, Home, Laptop, Smartphone, X } from 'lucide-react'
import { stagger } from '../lib/animate'
import { NavBar, NAV_LINKS_HOME, CARD_HOVER, DiscoverCard, AccessoriesPromoCard, BikePromoCard } from './shared'

export default function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen pb-20">
      <NavBar links={NAV_LINKS_HOME} onNavigate={onNavigate} />

      <div className="flex flex-col gap-12 items-center w-full">
        {/* Greeting */}
        <div className="animate-in flex flex-col gap-10 items-start w-[864px] pt-10" style={stagger(0)}>
          <h1 className="text-4xl font-bold text-[#0f0d28] leading-[44px] tracking-tight">Hi Pauline</h1>
        </div>

        {/* To review */}
        <div className="animate-in flex flex-col gap-6 items-start w-[864px]" style={stagger(1)}>
          <h2 className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight">To review</h2>

          <div className="flex flex-col gap-5 w-full">
            {[
              { icon: <Gift className="size-5 text-[#9333ea]" />, title: 'Sign addendum', sub: 'To unlock your end of year premium' },
              { icon: <Bike className="size-5 text-[#9333ea]" />, title: '1 bike lease in draft', sub: 'Review and submit your choice' },
              { icon: <TriangleAlert className="size-5 text-[#9333ea]" />, title: "Pension saving's rejected", sub: 'Review and edit your choice' },
            ].map((item) => (
              <div key={item.title} className={`flex items-center p-5 rounded-2xl border border-[#eaeaeb] bg-white gap-3 ${CARD_HOVER}`}>
                <div className="p-1 shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-2xl bg-gradient-to-b from-[rgba(245,226,254,0.66)] to-[#f5e2fe]">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight">{item.title}</p>
                  <p className="text-sm font-medium text-[#50545e] leading-5">{item.sub}</p>
                </div>
                <ChevronRight className="size-5 text-[#50545e] shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Discover */}
        <div className="animate-in flex flex-col gap-10 items-start w-[864px]" style={stagger(2)}>
          <h2 className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight">Discover</h2>

          <div className="flex gap-8 w-full items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 flex-1">
              <DiscoverCard
                icon={<Home className="size-5 text-[#9333ea]" />}
                title="Pension savings"
                description="Reclaim part of it here more efficiently than any cash payout."
                badge="2 drafts"
              />

              <AccessoriesPromoCard />

              {/* Editorial card */}
              <div className={`flex flex-col gap-4 p-5 rounded-2xl border border-[#eaeaeb] bg-white ${CARD_HOVER}`}>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight">Pension savings or warrants?</p>
                  <button className="flex items-center justify-center size-9 rounded-full bg-[#eaeaeb] hover:bg-[#d5d5d7] transition-colors shrink-0">
                    <X className="size-4 text-[#50545e]" />
                  </button>
                </div>
                <p className="text-sm text-[#50545e] leading-5">Which one is the better choice for you?</p>
                <button className="flex items-center justify-center px-4 py-2 rounded-[10px] border border-[#d9dadd] hover:bg-[#f7f7f8] transition-colors">
                  <span className="text-base font-semibold text-[#0f0d28] leading-6">Learn more</span>
                </button>
              </div>

              <DiscoverCard
                icon={<Smartphone className="size-5 text-[#9333ea]" />}
                title="Smartphone"
                description="Reclaim part of it here more efficiently than any cash payout."
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 flex-1">
              <DiscoverCard
                icon={<Home className="size-5 text-[#9333ea]" />}
                title="Bike leasing via o2o"
                description="Reclaim part of it here more efficiently than any cash payout."
                badge="Already chosen"
              />

              <DiscoverCard
                icon={<Smartphone className="size-5 text-[#9333ea]" />}
                title="Smartphone"
                description="Reclaim part of it here more efficiently than any cash payout."
              />

              <DiscoverCard
                icon={<Laptop className="size-5 text-[#9333ea]" />}
                title="Laptop"
                description="Reclaim part of it here more efficiently than any cash payout."
              />

              <BikePromoCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
