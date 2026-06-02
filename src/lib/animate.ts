export const STAGGER = 60 // ms between each element
export const DURATION = 380 // ms per animation — same for all elements

/** Returns inline style for a staggered fade-up entrance. */
export function stagger(index: number): React.CSSProperties {
  return {
    animationDelay: `${index * STAGGER}ms`,
    animationFillMode: 'both',
  }
}
