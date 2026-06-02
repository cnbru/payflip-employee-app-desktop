import { useState } from 'react'
import HomePage from './components/HomePage'
import BenefitsCatalogPage from './components/BenefitsCatalogPage'
import BenefitsPage from './components/BenefitsPage'
import BudgetDetailPage from './components/BudgetDetailPage'
import CashOutPage from './components/CashOutPage'

type Page = 'home' | 'benefits-catalog' | 'budgets' | 'budget-detail' | 'cash-out'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const nav = (p: string) => setPage(p as Page)

  if (page === 'cash-out')        return <CashOutPage onBack={() => setPage('budget-detail')} />
  if (page === 'budget-detail')   return <BudgetDetailPage onBack={() => setPage('budgets')} onCashOut={() => setPage('cash-out')} onNavigate={nav} />
  if (page === 'budgets')         return <BenefitsPage onCardClick={() => setPage('budget-detail')} onNavigate={nav} />
  if (page === 'benefits-catalog') return <BenefitsCatalogPage onNavigate={nav} />

  return <HomePage onNavigate={nav} />
}
