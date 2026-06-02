import { ArrowLeft, HelpCircle } from 'lucide-react'
import logoSrc from '../assets/logo.svg'
import { stagger } from '../lib/animate'

const NAV_LINKS = [
  { label: 'Home', active: false },
  { label: 'Benefits', active: false },
  { label: 'Budget', active: true },
  { label: 'Salary', active: false },
]

interface Props {
  onBack: () => void
}

function Row({ label, value, help }: { label: string; value: string; help?: boolean }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-lg font-normal text-black leading-7 whitespace-nowrap">{label}</span>
        {help && (
          <button className="flex items-center justify-center size-6 rounded-md bg-[#f7f7f8] hover:bg-[#eaeaeb] transition-colors">
            <HelpCircle className="size-[14px] text-[#50545e]" />
          </button>
        )}
      </div>
      <div className="flex-1 border-b border-dashed border-[#d0d0d3] min-w-4" />
      <span className="text-xl font-semibold text-[#22093e] leading-7 tracking-tight whitespace-nowrap shrink-0">
        {value}
      </span>
    </div>
  )
}

export default function CashOutPage({ onBack }: Props) {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      {/* Nav — instant */}
      <header className="border-b border-[#eaeaeb] flex h-[60px] items-center justify-between px-8 w-full shrink-0">
        <div className="flex items-center gap-2">
          <img src={logoSrc} alt="Payflip" className="h-7" />
        </div>
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 h-[60px] items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
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

      {/* Back button + Title */}
      <div className="animate-in flex flex-col gap-6 items-start w-[640px] pt-10" style={stagger(0)}>
        <button
          onClick={onBack}
          className="flex items-center justify-center size-9 rounded-lg bg-[#f7f7f8] hover:bg-[#eaeaeb] transition-colors"
        >
          <ArrowLeft className="size-4 text-[#0f0d28]" />
        </button>

      <div className="flex flex-col gap-2 items-start w-full" style={stagger(1)}>
        <h1 className="text-4xl font-bold text-[#0f0d28] leading-[44px] tracking-tight">
          Simulate cash-out
        </h1>
        <p className="text-lg font-normal text-[#50545e] leading-7">
          Take some or all of your budget as cash with your next payslip.
        </p>
      </div>
      </div>

      {/* Card */}
      <div
        className="animate-in flex flex-col gap-10 items-start w-[640px] mt-10 p-10 rounded-2xl border border-[#eaeaeb]"
        style={stagger(2)}
      >
        <Row label="Total available" value="€3500" />
        <Row label="Locked portion" value="€720,56" help />
        <Row label="Total available for cash out" value="€2779,34" />

        <div className="border-t border-[#eaeaeb] w-full" />

        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-normal text-[#0f0d28] leading-7">
            Estimated net after cash out:
          </span>
          <span className="text-2xl font-bold text-[#22093e] leading-8 tracking-tight whitespace-nowrap">
            €833
          </span>
        </div>
      </div>

      {/* Close — outside the card */}
      <div className="animate-in w-[640px] mt-4 pb-16" style={stagger(3)}>
        <button
          onClick={onBack}
          className="w-full flex items-center justify-center min-h-[40px] px-4 py-3 rounded-[10px] bg-[#f7f7f8] hover:bg-[#eaeaeb] transition-colors"
        >
          <span className="text-base font-semibold text-[#202532] leading-6">Back</span>
        </button>
      </div>
    </div>
  )
}
