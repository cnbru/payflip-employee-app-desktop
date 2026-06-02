import { useState } from 'react'
import { ChevronRight, ChevronDown, Lock, Gift, Euro, Clock, Activity, HelpCircle, X } from 'lucide-react'
import { stagger } from '../lib/animate'

const NAV_LINKS = [
  { label: 'Home', active: false },
  { label: 'Benefits', active: false },
  { label: 'Budget', active: true },
  { label: 'Salary', active: false },
]

const FAQS = [
  'How is my End of year premium calculcated?',
  'What is the 1/2 rule?',
  'When and how does this budget pay out?',
  'What if I leave the company before December?',
]


interface Props {
  onBack: () => void
  onCashOut: () => void
  onNavigate: (page: string) => void
}

const SIGNED_TRANSACTIONS = [
  { title: 'Smartphone via Coolblue', date: '5 April, 12:45', amount: '-€1100' },
  { title: 'Pension saving', date: '5 April, 12:45', amount: '-€976' },
  { title: 'Alan assurance', date: '5 April, 12:45', amount: '-€1120' },
]

const NAV_TARGETS: Record<string, string> = { Home: 'home', Benefits: 'benefits-catalog', Budget: 'budgets' }

export default function BudgetDetailPage({ onBack, onCashOut, onNavigate }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [signed, setSigned] = useState(false)
  const [lockedModalOpen, setLockedModalOpen] = useState(false)

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

      {/* Section 1 — breadcrumb, instant */}
      <div className="flex items-center gap-2 px-8 h-9 w-full border-b border-[#eaeaeb]">
        <button onClick={onBack} className="text-sm text-[#50545e] hover:text-[#0f0d28] cursor-pointer">
          Budgets
        </button>
        <ChevronRight className="size-4 text-[#50545e]" />
        <span className="text-sm font-medium text-[#0f0d28]">End of year premium</span>
      </div>

      {/* Section 1 — hero */}
      <div
        className={`animate-in flex flex-col gap-10 items-center justify-center pb-10 pt-10 px-8 w-full transition-colors duration-500 ${signed ? 'bg-[#e2f0fe]' : 'bg-[#f7f7f8]'}`}
        style={stagger(0)}
      >
        <div className="flex flex-col gap-4 w-full max-w-[1312px]">
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-bold text-[#0f0d28] leading-[44px] tracking-tight whitespace-nowrap">
              End of year premium
            </h1>
            {!signed && (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-medium leading-4 bg-[#fff3e5] border border-[#ffe1be] text-[#a64f21] whitespace-nowrap">
                <Lock className="size-3" />
                Locked
              </span>
            )}
          </div>

          {!signed && (
            <div className="bg-[#fff3e5] flex gap-6 items-center justify-between p-6 rounded-2xl w-full">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <span className="text-base font-semibold text-[#0f0d28] leading-6">Sign to unlock your budget</span>
                <span className="text-sm text-[#50545e] leading-5">
                  Once signed, you can use this budget to purchase benefits. Your budget unlocks automatically after signing.
                </span>
              </div>
              <button
                onClick={() => setSigned(true)}
                className="flex items-center gap-2 bg-[#220a35] text-white text-base font-semibold px-4 py-2 rounded-[10px] whitespace-nowrap shrink-0 hover:bg-[#2d0d47] transition-colors"
              >
                Sign now
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-stretch w-full max-w-[1312px]">
          <div className="flex flex-col gap-5 py-10 flex-1">
            <span className="text-base font-medium text-[#50545e] leading-6 whitespace-nowrap">Available budget</span>
            <span className={`text-5xl leading-[56px] tracking-tight whitespace-nowrap ${signed ? 'font-bold text-[#22093e]' : 'font-semibold text-[#0f0d28]'}`}>€3.500</span>
          </div>
          {signed && (
            <>
              <div className="w-px bg-[#c5d8ee] mx-12 shrink-0" />
              <div className="flex flex-col gap-5 py-10 flex-1">
                <span className="text-base font-medium text-[#50545e] leading-6 whitespace-nowrap">Locked portion of your budget</span>
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-normal text-[#0f0d28] leading-[56px] tracking-tight whitespace-nowrap">€720,56</span>
                  <button
                    onClick={() => setLockedModalOpen(true)}
                    className="flex items-center justify-center size-9 rounded-lg shrink-0 hover:bg-[#d0e4f7] transition-colors"
                  >
                    <HelpCircle className="size-[18px] text-[#50545e]" />
                  </button>
                </div>
              </div>
            </>
          )}
          <div className="w-px bg-[#c5d8ee] mx-12 shrink-0" />
          <div className="flex flex-col justify-between py-10 flex-1">
            <span className="text-base font-medium text-[#50545e] leading-6 whitespace-nowrap">Choice deadline</span>
            <span className="text-5xl font-normal text-[#0f0d28] leading-[56px] tracking-tight whitespace-nowrap">7 dec 2026</span>
          </div>
          <div className="w-px bg-[#c5d8ee] mx-12 shrink-0" />
          <div className="flex flex-col justify-between py-10 flex-1">
            <span className="text-base font-medium text-[#50545e] leading-6 whitespace-nowrap">Cash out date</span>
            <span className="text-5xl font-normal text-[#0f0d28] leading-[56px] tracking-tight whitespace-nowrap">13 dec 2026</span>
          </div>
        </div>
      </div>

      {/* Section 2 — how to use */}
      <div className="animate-in flex flex-col gap-6 items-start py-12 w-[864px]" style={stagger(1)}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight">How to use your budget?</h2>
          <p className="text-base text-[#50545e] leading-6">Pick how much goes to benefits and how much to cash. You can split.</p>
        </div>

        <div className="flex gap-4 w-full">
          <a onClick={() => onNavigate('benefits-catalog')} className="group flex flex-1 items-center p-5 rounded-2xl border border-[#eaeaeb] bg-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#d0d0d3]">
            <div className="flex flex-1 gap-3 items-center">
              <div className="p-1 shrink-0">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-gradient-to-b from-[rgba(245,226,254,0.66)] to-[#f5e2fe]">
                  <Gift className="size-5 text-[#9333ea]" />
                </div>
              </div>
              <div className="flex flex-1 gap-3 items-center">
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight whitespace-nowrap">On benefits</span>
                  <span className="text-sm font-medium text-[#50545e] leading-5">Tax-smart warrants, multimedia and more</span>
                </div>
                <ChevronRight className="size-5 text-[#50545e] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>

          <a onClick={onCashOut} className="group flex flex-1 items-center p-5 rounded-2xl border border-[#eaeaeb] bg-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#d0d0d3]">
            <div className="flex flex-1 gap-3 items-center">
              <div className="p-1 shrink-0">
                <div className="flex items-center justify-center size-10 rounded-2xl bg-gradient-to-b from-[rgba(226,240,254,0.31)] to-[#e2f0fe]">
                  <Euro className="size-5 text-[#3b82f6]" />
                </div>
              </div>
              <div className="flex flex-1 gap-3 items-center">
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight whitespace-nowrap">By cashing out</span>
                  <span className="text-sm font-medium text-[#50545e] leading-5">Simulate what you'll get in December</span>
                </div>
                <ChevronRight className="size-5 text-[#50545e] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>

        </div>
      </div>

      <div className="border-t border-[#eaeaeb] w-full" />

      {/* Section 3 — transactions */}
      <div className="animate-in flex flex-col gap-6 items-start py-12 w-[864px]" style={stagger(2)}>
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl font-semibold text-[#0f0d28] leading-8 tracking-tight">Transactions</span>
          <button className="text-sm font-semibold text-[#0f0d28] underline">View all</button>
        </div>

        {signed ? (
          <div className="flex flex-col gap-8 w-full">
            {SIGNED_TRANSACTIONS.map((tx, i) => (
              <div key={i} className="flex items-center justify-between w-full">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center justify-center size-[38px] rounded-lg bg-[#f5f5f7] shrink-0">
                    <Activity className="size-4 text-[#50545e]" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-sm font-medium text-[#0f0d28] leading-5 whitespace-nowrap">{tx.title}</span>
                    <span className="text-xs text-[#50545e] leading-4 whitespace-nowrap">{tx.date}</span>
                  </div>
                </div>
                <div className="flex gap-6 items-center justify-end">
                  <span className="text-base text-[#50545e] whitespace-nowrap">{tx.amount}</span>
                  <ChevronRight className="size-5 text-[#50545e] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center py-10 px-4 w-full border border-[#eaeaeb] rounded-[10px]">
            <div className="flex items-center justify-center size-8 rounded-lg bg-[#f7f7f8]">
              <Clock className="size-4 text-[#50545e]" />
            </div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-sm font-medium text-[#0f0d28] leading-5">No transactions yet</span>
              <span className="text-xs text-[#50545e] leading-4">All your end of year premium transactions will appear here</span>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-[#eaeaeb] w-full" />

      {/* Section 4 — FAQs */}
      <div className="animate-in flex flex-col gap-4 items-start py-12 w-[864px]" style={stagger(3)}>
        <h2 className="text-2xl font-semibold text-[#071628] leading-8 tracking-tight">FAQs</h2>

        <div className="flex flex-col w-full">
          {FAQS.map((question, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex items-center gap-2 py-[15.5px] w-full text-left"
              >
                <span className="flex-1 text-lg font-medium text-[#071628] leading-7">{question}</span>
                <ChevronDown
                  className={`size-4 text-[#50545e] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e5e5e5]" />
            </div>
          ))}
        </div>

        <button className="text-base font-semibold text-[#071628] underline leading-6 mt-2">
          Visit our help centre
        </button>
      </div>

      {/* Locked portion modal */}
      {lockedModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setLockedModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Panel */}
          <div
            className="animate-in relative bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] w-full max-w-[480px] mx-4 p-8 flex flex-col gap-5"
            style={{ animationDuration: '220ms' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLockedModalOpen(false)}
              className="absolute top-5 right-5 flex items-center justify-center size-8 rounded-lg text-[#50545e] hover:bg-[#f7f7f8] transition-colors"
            >
              <X className="size-4" />
            </button>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#0f0d28] leading-7 tracking-tight pr-8">
                What is a locked portion?
              </h3>
              <p className="text-sm text-[#50545e] leading-6">
                You signed your addendum in May. The 5 months before that{' '}
                <span className="font-medium text-[#0f0d28]">(5 × €144.11 = €720.56)</span> were
                already queued for the December payslip by Belgian law. They can't move back into
                Payflip, but no more slots will lock from here on.
              </p>
            </div>

            <div className="border-t border-[#eaeaeb]" />

            <p className="text-sm text-[#50545e] leading-6">
              This is a <span className="font-medium text-[#0f0d28]">Belgian legal rule</span>, not
              a Payflip charge. It applies to every employee whose salary becomes a flexible budget.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
