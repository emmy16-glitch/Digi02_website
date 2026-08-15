import type { ComponentPropsWithoutRef } from 'react'

type SectionLabelProps = ComponentPropsWithoutRef<'p'>

export function SectionLabel({ className = '', ...props }: SectionLabelProps) {
  return <p className={`section-label type-tech ${className}`.trim()} {...props} />
}
