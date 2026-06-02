import { TrendingUp, Heart, X } from 'lucide-react'

export const CARD_HOVER = 'cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#d0d0d3]'

const imgAccessories = 'https://www.figma.com/api/mcp/asset/a554361a-a7f8-4ad7-8156-8f9c8ba8e2c7'
const imgBikeOverlay = 'https://www.figma.com/api/mcp/asset/f6625d8a-7710-4664-ac7d-89069b156212'

export const NAV_LINKS_HOME = [
  { label: 'Home', active: true },
  { label: 'Benefits', active: false },
  { label: 'Salary', active: false },
  { label: 'Budget', active: false },
]

export const NAV_LINKS_BENEFITS = [
  { label: 'Home', active: false },
  { label: 'Benefits', active: true },
  { label: 'Salary', active: false },
  { label: 'Budget', active: false },
]

export const NAV_LINKS_BUDGET = [
  { label: 'Home', active: false },
  { label: 'Benefits', active: false },
  { label: 'Salary', active: false },
  { label: 'Budget', active: true },
]

export function NavBar({ links, onNavigate }: {
  links: { label: string; active: boolean }[]
  onNavigate: (page: string) => void
}) {
  const targets: Record<string, string> = { Home: 'home', Benefits: 'benefits-catalog', Budget: 'budgets' }
  return (
    <header className="border-b border-[#eaeaeb] flex h-[60px] items-center justify-between px-8 w-full shrink-0">
      <img src="/src/assets/logo.svg" alt="Payflip" className="h-7" />
      <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 h-[60px] items-center">
        {links.map((link) => (
          <a
            key={link.label}
            onClick={() => targets[link.label] && onNavigate(targets[link.label])}
            className={`flex h-full items-center py-1.5 text-sm font-medium cursor-pointer whitespace-nowrap ${
              link.active ? 'border-b-2 border-[#0f0d28] text-[#0f0d28]' : 'text-[#50545e]'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center p-2 rounded-full bg-[#eaeaeb]">
        <div className="flex items-center justify-center size-5 rounded-[10px]">
          <span className="text-sm font-medium text-[#0f0d28] leading-5">PT</span>
        </div>
      </div>
    </header>
  )
}

export function TaxScores() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full">
        <TrendingUp className="size-4 text-[#9333ea]" />
        <span className="text-sm font-medium text-[#3b3940] whitespace-nowrap">Good</span>
      </div>
      <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full">
        <Heart className="size-4 text-pink-400" />
        <span className="text-sm font-medium text-[#3b3940] whitespace-nowrap">24% chose this</span>
      </div>
    </div>
  )
}

export function IconBox({ icon, className = '' }: { icon: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-center size-[49px] rounded-2xl bg-gradient-to-b from-[rgba(245,226,254,0.31)] to-[#f5e2fe] shrink-0 ${className}`}>
      {icon}
    </div>
  )
}

export function DiscoverCard({ icon, title, description, badge }: {
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
}) {
  return (
    <div className={`flex flex-col gap-6 p-5 rounded-2xl border border-[#eaeaeb] bg-white ${CARD_HOVER}`}>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between w-full h-[49px]">
          <IconBox icon={icon} />
          {badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-medium leading-4 bg-[#f7f7f8] text-[#0f0d28] whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight">{title}</span>
            <span className="text-sm font-medium text-[#0f0d28] leading-5">{description}</span>
          </div>
          <TaxScores />
        </div>
      </div>
    </div>
  )
}

export function AccessoriesPromoCard() {
  return (
    <div className={`flex flex-col gap-10 items-center bg-[#f5e2fe] rounded-2xl border border-[#eaeaeb] overflow-hidden pt-5 pb-12 px-5 ${CARD_HOVER}`}>
      <div className="flex items-center justify-between w-full">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-semibold text-white bg-[#220a35]">Accessories</span>
        <button className="flex items-center justify-center size-9 rounded-full bg-[#d5d5d7] hover:bg-[#c0c0c2] transition-colors">
          <X className="size-4 text-[#50545e]" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-5">
        <img src={imgAccessories} alt="Accessories" className="size-[84px] rounded-[21px] object-cover" />
        <div className="flex flex-col gap-2 text-center">
          <p className="text-[28px] font-bold text-[#0f0d28] leading-9 tracking-tight">Get your laptop accessories</p>
          <p className="text-sm font-medium text-[#0f0d28] leading-5">Earpods, charging cables,... you name it, we offer it.</p>
        </div>
      </div>
      <button className="flex items-center justify-center px-8 py-2 rounded-[10px] bg-[#220a35] hover:bg-[#2d0d47] transition-colors">
        <span className="text-base font-semibold text-white leading-6">Discover accessories</span>
      </button>
    </div>
  )
}

export function BikePromoCard() {
  return (
    <div className={`flex flex-col gap-6 items-center bg-[#0f0d28] rounded-2xl overflow-hidden px-5 py-10 border border-transparent ${CARD_HOVER}`}>
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="relative h-[142px] w-full flex items-center justify-center">
          <img src={imgBikeOverlay} alt="Bike" className="h-full object-contain" />
        </div>
        <div className="flex flex-col gap-2 text-center px-4">
          <p className="text-[28px] font-bold text-white leading-9 tracking-tight">It's biking season</p>
          <p className="text-sm font-medium text-white leading-5 opacity-80">Check out the catalogue of o2o to find your favourite bike and ride into summer.</p>
        </div>
      </div>
      <button className="flex items-center justify-center px-8 py-2 rounded-[10px] bg-[#f5e2fe] hover:bg-[#edd5fc] transition-colors">
        <span className="text-base font-semibold text-[#0f0d28] leading-6">Discover bikes</span>
      </button>
    </div>
  )
}
