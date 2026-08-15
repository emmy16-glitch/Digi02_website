import type { ComponentPropsWithoutRef } from 'react'

type PrimaryButtonProps = ComponentPropsWithoutRef<'a'>

export function PrimaryButton({ className = '', ...props }: PrimaryButtonProps) {
  return <a className={`button button--primary ${className}`.trim()} {...props} />
}
