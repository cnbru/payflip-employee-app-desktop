import { useState } from 'react'
import { ChevronRight, Home, Laptop, Smartphone } from 'lucide-react'
import { stagger } from '../lib/animate'
import { NavBar, NAV_LINKS_BENEFITS, DiscoverCard, AccessoriesPromoCard, BikePromoCard, CARD_HOVER } from './shared'

const TABS = ['All budgets', 'End of year premium', 'Mobility', 'Bonus']

interface Props {
  onNavigate: (page: string) => void
}

export default function BenefitsCatalogPage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex flex-col items-center bg-white min-h-screen pb-20">
      <NavBar links={NAV_LINKS_BENEFITS} onNavigate={onNavigate} />

      <div className="flex flex-col gap-12 items-center w-full">
        {/* Section 1 — title + stat cards */}
        <div className="animate-in flex flex-col gap-4 items-start w-[864px] pt-10" style={stagger(0)}>
          <h1 className="text-4xl font-bold text-[#0f0d28] leading-[44px] tracking-tight">Benefits</h1>

          <div className="flex gap-8 w-full">
            <div className={`flex flex-1 items-center p-5 rounded-2xl border border-[#eaeaeb] bg-white gap-3 ${CARD_HOVER}`}>
              <div className="p-1 shrink-0">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-gradient-to-b from-[rgba(245,226,254,0.66)] to-[#f5e2fe]">
                  <span className="text-xl font-semibold text-[#c42bfc] leading-7">3</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight">Benefits in draft</p>
                <p className="text-sm font-medium text-[#50545e] leading-5">See all your drafts</p>
              </div>
              <ChevronRight className="size-5 text-[#50545e] shrink-0" />
            </div>

            <div className={`flex flex-1 items-center p-5 rounded-2xl border border-[#eaeaeb] bg-white gap-3 ${CARD_HOVER}`}>
              <div className="p-1 shrink-0">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-gradient-to-b from-[rgba(245,226,254,0.66)] to-[#f5e2fe]">
                  <span className="text-xl font-semibold text-[#c42bfc] leading-7">1</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight">Active benefits</p>
                <p className="text-sm font-medium text-[#50545e] leading-5">See all your active benefits</p>
              </div>
              <ChevronRight className="size-5 text-[#50545e] shrink-0" />
            </div>
          </div>
        </div>

        {/* Section 2 — Discover */}
        <div className="animate-in flex flex-col gap-6 items-start w-[864px]" style={stagger(1)}>
          <h2 className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight">Discover</h2>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#f7f7f8] rounded-xl">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-3 py-2 rounded-[10px] text-sm font-medium leading-5 whitespace-nowrap transition-all ${
                  activeTab === i
                    ? 'bg-white text-[#0f0d28] shadow-[0_1px_2px_rgba(0,0,0,0.1)]'
                    : 'text-[#50545e] hover:text-[#0f0d28]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Masonry grid — two independent columns */}
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
              <DiscoverCard
                icon={<Smartphone className="size-5 text-[#9333ea]" />}
                title="Smartphone"
                description="Reclaim part of it here more efficiently than any cash payout."
              />
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
