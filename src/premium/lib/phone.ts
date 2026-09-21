/**
 * Normalise a human-friendly display phone number into a valid `tel:` link.
 *
 * Nigerian numbers are commonly written "+234 (0) 816 ..." — the trunk
 * prefix "(0)" is only valid for domestic dialling and MUST be dropped in
 * international format, otherwise the link dials a wrong number.
 *
 *   telHref("+234 (0) 816 940 4088") → "tel:+2348169404088"
 */
export function telHref(display: string): string {
  const trimmed = display.trim();
  if (!trimmed.startsWith("+")) {
    return `tel:${trimmed.replace(/[^\d]/g, "")}`;
  }
  const digits = `+${trimmed.slice(1).replace(/\D/g, "")}`;
  return `tel:${digits.replace(/^(\+234)0+/, "$1")}`;
}
