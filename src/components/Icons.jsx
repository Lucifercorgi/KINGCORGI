export default function Icons() {
  return null
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M5 12h13M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Check({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Phone({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.7 2 2 0 016.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Pin({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

export function Clock({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5V12l3.2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
