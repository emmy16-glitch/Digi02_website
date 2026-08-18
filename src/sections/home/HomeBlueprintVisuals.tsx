type WorkVisualKind = 'thermal' | 'payment' | 'public'

const gold = '#C9A34A'
const goldLight = '#E0BC67'
const white = '#F7F6F2'
const muted = '#AAA8A2'

export function HomeBlueprintWorkVisual({ kind }: { kind: WorkVisualKind }) {
  if (kind === 'payment') {
    return (
      <svg className="home-blueprint-work-visual" viewBox="0 0 640 380" aria-hidden="true">
        <defs>
          <linearGradient id="payBg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#111112" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>
        </defs>
        <rect width="640" height="380" fill="url(#payBg)" />
        <g transform="translate(350 72) rotate(-7)">
          <rect width="220" height="250" rx="26" fill="#0B0B0C" stroke="#47433C" />
          <rect x="22" y="24" width="176" height="72" rx="10" fill="#151515" stroke={gold} strokeOpacity="0.32" />
          <text x="42" y="50" fill={muted} fontFamily="monospace" fontSize="11">SETTLEMENT VALUE</text>
          <text x="42" y="78" fill={goldLight} fontFamily="monospace" fontSize="22">₦ 2,450,000</text>
          {Array.from({ length: 12 }).map((_, index) => {
            const x = 28 + (index % 3) * 58
            const y = 122 + Math.floor(index / 3) * 43
            return <rect key={index} x={x} y={y} width="43" height="28" rx="6" fill="#171818" stroke="#333431" />
          })}
        </g>
        <g transform="translate(56 64)">
          <text fill={goldLight} fontFamily="monospace" fontSize="11" letterSpacing="1.6">PAYMENT INFRASTRUCTURE</text>
          <path d="M0 30H190" stroke={gold} strokeOpacity="0.44" />
          <g fill={muted} fontFamily="monospace" fontSize="10">
            <text y="68">ACQUIRING</text><text y="106">SETTLEMENT</text><text y="144">RECONCILIATION</text>
          </g>
          <g fill={white} fontFamily="monospace" fontSize="12">
            <text x="116" y="68">ONLINE</text><text x="116" y="106">T+1</text><text x="116" y="144">MATCHED</text>
          </g>
          <g fill={gold}>
            <circle cx="198" cy="64" r="4"/><circle cx="198" cy="102" r="4"/><circle cx="198" cy="140" r="4"/>
          </g>
        </g>
      </svg>
    )
  }

  if (kind === 'public') {
    return (
      <svg className="home-blueprint-work-visual" viewBox="0 0 640 380" aria-hidden="true">
        <rect width="640" height="380" fill="#080909" />
        <g transform="translate(360 38)">
          <path d="M92 12 178 50l36 89-16 95-67 72-91-12-63-70 9-105 49-80Z" fill="#0B0B0C" stroke={gold} strokeOpacity="0.3" />
          <g stroke={gold} strokeOpacity="0.58" fill="none">
            <path d="M47 70 92 122l53-37 32 69-48 56-62-21-43 31" />
            <path d="M92 122 67 189M145 85l-16 125" />
          </g>
          <g fill={goldLight}><circle cx="47" cy="70" r="4"/><circle cx="92" cy="122" r="5"/><circle cx="145" cy="85" r="4"/><circle cx="177" cy="154" r="4"/><circle cx="129" cy="210" r="4"/><circle cx="67" cy="189" r="4"/></g>
        </g>
        <g transform="translate(52 54)">
          <text fill={goldLight} fontFamily="monospace" fontSize="11" letterSpacing="1.5">E-MANAGEMENT / KADUNA</text>
          <text y="42" fill={white} fontFamily="monospace" fontSize="14">PUBLIC OPERATIONS CONNECTED</text>
          <g transform="translate(0 78)">
            <rect width="230" height="166" rx="12" fill="#0D0E0E" stroke="#2B2A27" />
            <text x="18" y="28" fill={muted} fontFamily="monospace" fontSize="9">WORKFLOW STATUS</text>
            {['REQUESTS','APPROVALS','RECORDS','SERVICE DESKS'].map((label, index) => (
              <g key={label} transform={`translate(18 ${52 + index * 27})`}>
                <text fill={muted} fontFamily="monospace" fontSize="9">{label}</text>
                <rect x="105" y="-7" width={86 - index * 8} height="5" rx="2.5" fill={index === 0 ? goldLight : gold} fillOpacity={0.72 - index * 0.08} />
              </g>
            ))}
          </g>
        </g>
      </svg>
    )
  }

  return (
    <svg className="home-blueprint-work-visual" viewBox="0 0 640 380" aria-hidden="true">
      <defs>
        <linearGradient id="thermalBg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#0B0B0C" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
      </defs>
      <rect width="640" height="380" fill="url(#thermalBg)" />
      <path d="M0 308c90-42 161-13 242-45 80-31 132-94 229-69 67 17 110 44 169 30v156H0Z" fill="#101112" />
      <path d="M28 300c76-34 144-12 215-42 70-29 119-81 201-65 62 12 109 45 170 27" fill="none" stroke={gold} strokeOpacity="0.32" />
      <path d="M108 212c90-49 149-29 224-97 49-44 101-38 168-13" fill="none" stroke={goldLight} strokeOpacity="0.55" strokeWidth="2" strokeDasharray="8 10" />
      <g transform="translate(315 112)" stroke={goldLight} fill="none" strokeWidth="3">
        <path d="M-45 0h35l10-10 10 10h35M0-34v24M-18-28h36M-57-12l12 12M57-12 45 0" />
        <circle cx="-57" cy="-12" r="8"/><circle cx="57" cy="-12" r="8"/>
      </g>
      <g transform="translate(455 222)">
        <circle r="47" fill="none" stroke={gold} strokeOpacity="0.22"/><circle r="29" fill="none" stroke={gold} strokeOpacity="0.5"/><circle r="5" fill={goldLight}/><path d="M-47 0H47M0-47V47" stroke={gold} strokeOpacity="0.18"/>
      </g>
      <rect x="36" y="42" width="190" height="76" rx="9" fill="#080909" stroke={gold} strokeOpacity="0.34" />
      <text x="54" y="68" fill={goldLight} fontFamily="monospace" fontSize="10" letterSpacing="1.5">THERMAL INSPECTION</text>
      <text x="54" y="91" fill={white} fontFamily="monospace" fontSize="13">ASSET 18 · ANOMALY 02</text>
      <text x="54" y="108" fill={muted} fontFamily="monospace" fontSize="9">AI REVIEW · FIELD CAPTURE</text>
    </svg>
  )
}
