import { ChevronRight, Lock, Car, Gift, UtensilsCrossed, Activity } from 'lucide-react'
import { stagger } from '../lib/animate'

interface Props {
  onCardClick: () => void
  onNavigate: (page: string) => void
}

const NAV_LINKS = [
  { label: 'Home', active: false },
  { label: 'Benefits', active: false },
  { label: 'Budget', active: true },
  { label: 'Salary', active: false },
]

const TRANSACTIONS = [
  { title: 'Smartphone via Coolblue', date: '5 April, 12:45', badge: 'Bonus', amount: '-€1100' },
  { title: 'Pension saving', date: '5 April, 12:45', badge: 'End of year premium', amount: '-€976' },
  { title: 'Alan assurance', date: '5 April, 12:45', badge: 'Bonus', amount: '-€1120' },
  { title: 'Alan assurance', date: '5 April, 12:45', badge: 'Bonus', amount: '-€1120' },
  { title: 'Alan assurance', date: '5 April, 12:45', badge: 'Bonus', amount: '-€1120' },
]

interface BudgetCardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  amount: string
  subtitle: string
  badge?: { label: string; variant: 'warning' | 'default' }
  onClick?: () => void
}

function BudgetCard({ icon, iconBg, title, amount, subtitle, badge, onClick }: BudgetCardProps) {
  return (
    <a role="button" onClick={onClick} className="flex flex-col gap-10 items-start cursor-pointer hover:opacity-80 transition-opacity w-full">
      <div className={`flex items-center justify-center rounded-2xl size-16 shrink-0 ${iconBg}`}>
        <div className="size-6 flex items-center justify-center">{icon}</div>
      </div>
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex gap-4 items-center">
          <span className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight whitespace-nowrap">
            {title}
          </span>
          {badge && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-medium leading-4 border whitespace-nowrap ${
              badge.variant === 'warning'
                ? 'bg-[#fff3e5] border-[#ffe1be] text-[#a64f21]'
                : 'bg-[#f7f7f8] border-[#eaeaeb] text-[#0f0d28]'
            }`}>
              {badge.label}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-5xl font-semibold text-[#22093e] leading-[56px] tracking-tight whitespace-nowrap">
              {amount}
            </span>
            <button className="flex items-center justify-center size-10 rounded-lg bg-[#f7f7f8]">
              <ChevronRight className="size-4 text-[#50545e]" />
            </button>
          </div>
          <span className="text-xs font-medium text-[#50545e] leading-4 whitespace-nowrap">{subtitle}</span>
        </div>
      </div>
    </a>
  )
}

function TransactionItem({ icon, title, date, badge, amount }: {
  icon: React.ReactNode; title: string; date: string; badge: string; amount: string
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-center size-[38px] rounded-lg bg-[#f5f5f7] shrink-0">
          <div className="size-4 flex items-center justify-center text-[#50545e]">{icon}</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-sm font-medium text-[#0f0d28] leading-5 tracking-tight whitespace-nowrap">{title}</span>
          <span className="text-xs text-[#50545e] leading-4 whitespace-nowrap">{date}</span>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-end w-[288px]">
        <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-medium leading-4 bg-[#f7f7f8] text-[#0f0d28] whitespace-nowrap">
          {badge}
        </span>
        <span className="text-base text-[#50545e] whitespace-nowrap">{amount}</span>
        <ChevronRight className="size-5 text-[#50545e] shrink-0" />
      </div>
    </div>
  )
}

const NAV_TARGETS: Record<string, string> = { Home: 'home', Benefits: 'benefits-catalog', Budget: 'budgets' }

export default function BenefitsPage({ onCardClick, onNavigate }: Props) {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      {/* Nav — instant */}
      <header className="border-b border-[#eaeaeb] flex h-[60px] items-center justify-between px-8 w-full shrink-0">
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.svg" alt="Payflip" className="h-7" />
        </div>
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 h-[60px] items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              onClick={() => NAV_TARGETS[link.label] && onNavigate(NAV_TARGETS[link.label])}
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

      <div className="flex flex-col gap-12 items-center w-full">
        {/* Section 1 — heading */}
        <div className="animate-in flex flex-col gap-10 items-center pt-10 px-8 w-full" style={stagger(0)}>
          <div className="w-[862px]">
            <h1 className="text-4xl font-bold text-[#0f0d28] leading-[44px] tracking-tight">Budgets</h1>
          </div>

          {/* Section 2 — budget grid */}
          <div className="animate-in relative w-[862px] py-6" style={stagger(1)}>
            <div className="absolute top-0 bottom-0 left-1/2 border-l border-[#eaeaeb]" />
            <div className="grid grid-cols-2 gap-x-20">
              <BudgetCard
                icon={<Lock className="size-5 text-[#a64f21]" />}
                iconBg="bg-[#fff3e5]"
                title="End of year premium"
                amount="€3.500"
                subtitle="Sign to unlock your budget"
                badge={{ label: 'Locked', variant: 'warning' }}
                onClick={onCardClick}
              />
              <BudgetCard
                icon={<Car className="size-5 text-[#3b82f6]" />}
                iconBg="bg-gradient-to-b from-[rgba(226,240,254,0.31)] to-[#e2f0fe]"
                title="Mobility"
                amount="€5432"
                subtitle="€1500 of €5.000 used"
                onClick={onCardClick}
              />
              <div className="col-span-2 border-t border-[#eaeaeb] my-8" />
              <BudgetCard
                icon={<Gift className="size-5 text-[#3b82f6]" />}
                iconBg="bg-gradient-to-b from-[rgba(226,240,254,0.31)] to-[#e2f0fe]"
                title="Bonus"
                amount="€600"
                subtitle="€1500 of €5.000 used"
                onClick={onCardClick}
              />
              <BudgetCard
                icon={<UtensilsCrossed className="size-5 text-[#3b82f6]" />}
                iconBg="bg-gradient-to-b from-[rgba(226,240,254,0.31)] to-[#e2f0fe]"
                title="Meal vouchers"
                amount="€120"
                subtitle="€80 of €200 used"
                onClick={onCardClick}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#eaeaeb] w-full" />

        {/* Section 3 — transactions */}
        <div className="animate-in flex flex-col gap-6 items-start w-[862px]" style={stagger(2)}>
          <div className="flex items-start justify-between w-full">
            <span className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight">Transactions</span>
            <button className="text-sm font-semibold text-[#0f0d28] underline">View all</button>
          </div>
          <div className="flex flex-col gap-8 items-start w-full">
            {TRANSACTIONS.map((tx, i) => (
              <TransactionItem key={i} icon={<Activity className="size-4" />} {...tx} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="text-sm font-semibold text-[#0f0d28] underline">View all</button>
          </div>
        </div>

        <div className="border-t border-[#eaeaeb] w-full" />
      </div>
    </div>
  )
}
