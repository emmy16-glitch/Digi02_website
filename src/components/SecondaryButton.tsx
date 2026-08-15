import type { ComponentPropsWithoutRef } from 'react'

type SecondaryButtonProps = ComponentPropsWithoutRef<'a'>

export function SecondaryButton({ className = '', ...props }: SecondaryButtonProps) {
  return <a className={`button button--secondary ${className}`.trim()} {...props} />
}
