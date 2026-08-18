import type { ReactNode } from 'react'

type FlagshipKind = 'skygrid' | 'digivolt' | 'enterprise'
type WorkKind = 'thermal' | 'payment' | 'public'

const gold = '#d9a34e'
const goldSoft = '#efbd70'
const text = '#f3efe7'
const muted = '#a49f96'

function VisualFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="home-vector-visual" role="img" aria-label={label}>
      {children}
    </div>
  )
}

export function HomeHeroOperationsVisual() {
  return (
    <VisualFrame label="Digi02 national operations environment with autonomous systems telemetry">
      <svg className="home-vector-visual__svg" viewBox="0 0 920 620" aria-hidden="true">
        <defs>
          <linearGradient id="hv2-bg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#121718" />
            <stop offset="0.62" stopColor="#080a0a" />
            <stop offset="1" stopColor="#030404" />
          </linearGradient>
          <pattern id="hv2-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#fff" strokeOpacity="0.045" />
          </pattern>
          <radialGradient id="hv2-glow" cx="0.72" cy="0.45" r="0.5">
            <stop stopColor={gold} stopOpacity="0.2" />
            <stop offset="1" stopColor={gold} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="920" height="620" fill="url(#hv2-bg)" />
        <rect width="920" height="620" fill="url(#hv2-grid)" />
        <rect width="920" height="620" fill="url(#hv2-glow)" />

        <path d="M0 468c128-46 245-12 354-40 113-29 204-83 314-63 95 18 159 59 252 32v223H0Z" fill="#050606" />
        <path d="M0 475c103-25 181-39 267-17 94 25 173-19 245-54 84-41 151-36 229-2 69 30 123 26 179 12" fill="none" stroke={gold} strokeOpacity="0.17" />

        <g opacity="0.58" fill="#0d1011" stroke="#242929">
          <path d="M42 408V306h58v102M116 408V254h78v154M210 408V323h57v85M283 408V281h96v127M395 408V228h69v180" />
        </g>
        <g stroke="#fff" strokeOpacity="0.08">
          <path d="M54 333h34M54 355h34M54 377h34M129 281h51M129 307h51M129 333h51M222 344h32M222 367h32M299 308h64M299 336h64M408 258h43M408 288h43M408 318h43" />
        </g>

        <g transform="translate(500 62)">
          <rect width="374" height="238" rx="12" fill="#0b0e0f" stroke={gold} strokeOpacity="0.3" />
          <path d="M24 51H350M24 92H350M24 133H350M24 174H350M80 20V216M136 20V216M192 20V216M248 20V216M304 20V216" stroke="#fff" strokeOpacity="0.045" />
          <path d="M38 178 88 138l43 21 52-61 53 29 49-55 60 21" fill="none" stroke={goldSoft} strokeWidth="2.4" />
          <g fill={gold}><circle cx="88" cy="138" r="4"/><circle cx="183" cy="98" r="4"/><circle cx="285" cy="72" r="4"/></g>
          <g transform="translate(258 148)" fill="none" stroke={gold}><circle r="28" strokeOpacity="0.35"/><circle r="16" strokeOpacity="0.58"/><path d="M0-13V13M-13 0H13" strokeOpacity="0.72"/></g>
          <text x="24" y="29" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="2">NATIONAL OPERATIONS GRID</text>
          <text x="24" y="214" fill={muted} fontFamily="monospace" fontSize="9" letterSpacing="1.3">LIVE ROUTING · ANALYTICS · FIELD TELEMETRY</text>
        </g>

        <g transform="translate(570 330)">
          <rect width="304" height="176" rx="12" fill="#090c0c" stroke="#fff" strokeOpacity="0.12" />
          <rect x="18" y="18" width="95" height="140" rx="8" fill="#0f1314" stroke={gold} strokeOpacity="0.25" />
          <circle cx="65" cy="68" r="30" fill="none" stroke={gold} strokeOpacity="0.27" />
          <circle cx="65" cy="68" r="18" fill="none" stroke={gold} strokeOpacity="0.5" />
          <path d="M65 39v58M36 68h58" stroke={goldSoft} strokeOpacity="0.48" />
          <text x="35" y="132" fill={text} fontFamily="monospace" fontSize="10">UAV-02</text>
          <text x="35" y="147" fill={gold} fontFamily="monospace" fontSize="8">ACTIVE</text>
          <g transform="translate(132 25)">
            <text fill={muted} fontFamily="monospace" fontSize="8" letterSpacing="1">FIELD TELEMETRY</text>
            <text y="38" fill={text} fontFamily="monospace" fontSize="10">ALTITUDE</text><text x="96" y="38" fill={goldSoft} fontFamily="monospace" fontSize="10">120 M</text>
            <text y="67" fill={text} fontFamily="monospace" fontSize="10">SPEED</text><text x="96" y="67" fill={goldSoft} fontFamily="monospace" fontSize="10">45 KM/H</text>
            <text y="96" fill={text} fontFamily="monospace" fontSize="10">BATTERY</text><text x="96" y="96" fill={goldSoft} fontFamily="monospace" fontSize="10">87%</text>
            <path d="M0 118h138" stroke="#fff" strokeOpacity="0.09"/><path d="M0 136h101" stroke={gold} strokeOpacity="0.48" strokeWidth="3"/>
          </g>
        </g>

        <g transform="translate(446 309)" stroke={goldSoft} fill="none" strokeWidth="2.1">
          <path d="M-33 0h27l7-8 8 8h27M1-27v19M-14-23h30M-43-10l10 10M46-10 36 0" /><circle cx="-43" cy="-10" r="6"/><circle cx="46" cy="-10" r="6"/>
        </g>
        <path d="M449 307c34-51 69-79 114-92 58-17 92 1 135-42" fill="none" stroke={goldSoft} strokeOpacity="0.36" strokeWidth="1.5" strokeDasharray="7 9" />
        <circle cx="698" cy="173" r="5" fill={gold} />
      </svg>
    </VisualFrame>
  )
}

function SkyGridVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 400" aria-hidden="true">
      <defs><pattern id="sgv2-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#fff" strokeOpacity="0.055"/></pattern></defs>
      <rect width="640" height="400" fill="#090c0d"/><rect width="640" height="400" fill="url(#sgv2-grid)"/>
      <path d="M0 315c86-42 161-11 238-43 78-33 121-96 222-74 65 14 115 48 180 33v169H0Z" fill="#101314"/>
      <path d="M25 307c76-36 142-11 216-43 70-31 118-83 199-69 63 11 115 48 178 30" fill="none" stroke={gold} strokeOpacity="0.28"/>
      <path d="M82 224c94-52 149-30 232-102 52-45 104-39 174-14" fill="none" stroke={goldSoft} strokeOpacity="0.44" strokeWidth="2" strokeDasharray="8 10"/>
      <g transform="translate(316 109)" stroke={goldSoft} fill="none" strokeWidth="3"><path d="M-46 0h37l9-10 9 10h37M0-34v24M-18-29h36M-58-12l12 12M58-12 46 0"/><circle cx="-58" cy="-12" r="8"/><circle cx="58" cy="-12" r="8"/></g>
      <g transform="translate(430 212)"><circle r="49" fill="none" stroke={gold} strokeOpacity="0.22"/><circle r="30" fill="none" stroke={gold} strokeOpacity="0.48"/><circle r="5" fill={gold}/><path d="M-49 0H49M0-49V49" stroke={gold} strokeOpacity="0.2"/></g>
      <rect x="34" y="34" width="178" height="72" rx="9" fill="#080a0b" stroke={gold} strokeOpacity="0.3"/>
      <text x="52" y="59" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.5">SKYGRID / INSPECTION</text>
      <text x="52" y="82" fill={text} fontFamily="monospace" fontSize="13">MISSION 024 · LIVE</text>
      <text x="52" y="99" fill={muted} fontFamily="monospace" fontSize="9">AI ROUTE · RTK · THERMAL</text>
      <g transform="translate(472 305)"><rect width="134" height="56" rx="8" fill="#080a0b" stroke="#fff" strokeOpacity="0.1"/><text x="14" y="21" fill={muted} fontFamily="monospace" fontSize="8">SITE COVERAGE</text><text x="14" y="42" fill={goldSoft} fontFamily="monospace" fontSize="15">94.8%</text></g>
    </svg>
  )
}

function DigiVoltVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 400" aria-hidden="true">
      <rect width="640" height="400" fill="#0b0c0b"/>
      <path d="M42 293H598" stroke="#fff" strokeOpacity="0.08"/>
      <path d="M110 281c30-54 78-86 152-91l112-4c58-2 100 19 142 64l32 31H110Z" fill="#111415" stroke="#817b70" strokeOpacity="0.55" strokeWidth="2"/>
      <path d="M205 196c31-45 70-67 116-69 51-2 99 14 143 57" fill="none" stroke={goldSoft} strokeOpacity="0.62" strokeWidth="2"/>
      <path d="M245 191 307 137l62-3 63 51" fill="#15191a" stroke="#65635d"/>
      <circle cx="193" cy="281" r="37" fill="#060707" stroke="#8b8579" strokeOpacity="0.52" strokeWidth="3"/><circle cx="193" cy="281" r="16" fill="#111313" stroke={gold} strokeOpacity="0.34"/>
      <circle cx="463" cy="281" r="37" fill="#060707" stroke="#8b8579" strokeOpacity="0.52" strokeWidth="3"/><circle cx="463" cy="281" r="16" fill="#111313" stroke={gold} strokeOpacity="0.34"/>
      <g transform="translate(512 72)"><rect width="74" height="132" rx="11" fill="#0c0f10" stroke={gold} strokeOpacity="0.4"/><rect x="13" y="16" width="48" height="42" rx="5" fill="#15191a"/><path d="M30 92h18M39 64v28" stroke={goldSoft} strokeWidth="3"/><path d="M62 104c38 0 32 62-18 62" fill="none" stroke={gold} strokeOpacity="0.38" strokeWidth="2"/></g>
      <path d="M64 92c84-31 170-35 257-9 81 25 141 20 220-17" fill="none" stroke={gold} strokeOpacity="0.32" strokeDasharray="7 9"/>
      <g fill={gold}><circle cx="64" cy="92" r="4"/><circle cx="321" cy="83" r="4"/><circle cx="541" cy="66" r="4"/></g>
      <text x="38" y="48" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.5">DIGIVOLT / MOBILITY NETWORK</text>
      <text x="38" y="70" fill={text} fontFamily="monospace" fontSize="13">SMART CHARGING · GRID INTELLIGENCE</text>
      <g transform="translate(38 322)"><text fill={muted} fontFamily="monospace" fontSize="8">RANGE</text><text x="76" fill={goldSoft} fontFamily="monospace" fontSize="12">412 KM</text><text x="160" fill={muted} fontFamily="monospace" fontSize="8">BATTERY</text><text x="236" fill={goldSoft} fontFamily="monospace" fontSize="12">82%</text><text x="320" fill={muted} fontFamily="monospace" fontSize="8">CHARGE</text><text x="391" fill={goldSoft} fontFamily="monospace" fontSize="12">24 MIN</text></g>
    </svg>
  )
}

function EnterpriseVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 400" aria-hidden="true">
      <rect width="640" height="400" fill="#090b0b"/>
      <rect x="42" y="47" width="418" height="274" rx="12" fill="#0a0c0d" stroke="#fff" strokeOpacity="0.1"/>
      <rect x="42" y="47" width="418" height="38" rx="12" fill="#121516"/>
      <circle cx="65" cy="66" r="4" fill={gold}/><circle cx="80" cy="66" r="4" fill="#4a4c4c"/><circle cx="95" cy="66" r="4" fill="#4a4c4c"/>
      <rect x="64" y="105" width="84" height="194" rx="8" fill="#0d1011"/><path d="M78 129h52M78 151h38M78 173h46M78 215h52M78 237h40" stroke="#8f8b82" strokeOpacity="0.32"/>
      <rect x="169" y="105" width="124" height="64" rx="8" fill="#0d1011" stroke={gold} strokeOpacity="0.18"/><rect x="309" y="105" width="125" height="64" rx="8" fill="#0d1011" stroke="#fff" strokeOpacity="0.06"/><rect x="169" y="187" width="265" height="112" rx="8" fill="#0d1011"/>
      <path d="M187 269 221 235l36 18 39-46 39 27 43-50 39 29" fill="none" stroke={goldSoft} strokeWidth="2"/><path d="M188 215h231M188 239h231M188 263h231" stroke="#fff" strokeOpacity="0.045"/>
      <text x="184" y="128" fill={muted} fontFamily="monospace" fontSize="8">ACTIVE USERS</text><text x="184" y="152" fill={text} fontFamily="monospace" fontSize="18">2,418</text><text x="324" y="128" fill={muted} fontFamily="monospace" fontSize="8">OPERATIONS</text><text x="324" y="152" fill={goldSoft} fontFamily="monospace" fontSize="18">98.6%</text>
      <g transform="translate(480 112)"><rect width="118" height="205" rx="18" fill="#0b0d0e" stroke={gold} strokeOpacity="0.28"/><rect x="13" y="20" width="92" height="48" rx="8" fill="#131617"/><rect x="13" y="81" width="92" height="18" rx="5" fill="#151819"/><rect x="13" y="110" width="72" height="18" rx="5" fill="#151819"/><rect x="13" y="153" width="92" height="32" rx="8" fill={gold} fillOpacity="0.82"/><text x="34" y="173" fill="#090909" fontFamily="monospace" fontSize="9">APPROVE</text></g>
      <text x="42" y="29" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.5">ENTERPRISE / COMMAND LAYER</text><text x="454" y="349" textAnchor="end" fill={muted} fontFamily="monospace" fontSize="9">ERP · POS · HR · PAYROLL · REPORTING</text>
    </svg>
  )
}

export function FlagshipVisual({ kind }: { kind: FlagshipKind }) {
  return <VisualFrame label={`${kind} Digi02 technology illustration`}>{kind === 'skygrid' ? <SkyGridVisual /> : kind === 'digivolt' ? <DigiVoltVisual /> : <EnterpriseVisual />}</VisualFrame>
}

function ThermalWorkVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 390" aria-hidden="true">
      <rect width="640" height="390" fill="#080a0a"/><path d="M0 304c95-38 165-12 243-53 73-38 142-104 242-65 70 28 105 39 155 18v186H0Z" fill="#0d1010"/><path d="M34 306c84-35 152-8 230-51 70-38 127-90 213-64 67 20 99 39 137 22" fill="none" stroke={gold} strokeOpacity="0.32"/>
      <g transform="translate(176 156)" stroke={goldSoft} fill="none" strokeWidth="3"><path d="M-38 0h31l7-8 7 8h31M0-28v20M-16-24h32M-50-10l12 10M50-10 38 0"/><circle cx="-50" cy="-10" r="7"/><circle cx="50" cy="-10" r="7"/></g><path d="M189 159c76-47 139-37 215 4" fill="none" stroke={goldSoft} strokeOpacity="0.42" strokeDasharray="7 9"/>
      <g transform="translate(432 179)"><circle r="64" fill="none" stroke={gold} strokeOpacity="0.17"/><circle r="44" fill="none" stroke={gold} strokeOpacity="0.28"/><circle r="24" fill="none" stroke={gold} strokeOpacity="0.48"/><circle r="5" fill={gold}/></g>
      <rect x="35" y="35" width="205" height="58" rx="9" fill="#0b0d0e" stroke={gold} strokeOpacity="0.22"/><text x="53" y="60" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.4">THERMAL INSPECTION</text><text x="53" y="80" fill={text} fontFamily="monospace" fontSize="12">ASSET 18 · ANOMALY 02</text>
    </svg>
  )
}

function PaymentWorkVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 390" aria-hidden="true">
      <rect width="640" height="390" fill="#0c0b09"/><g transform="translate(360 48) rotate(-8 110 145)"><rect width="220" height="290" rx="28" fill="#0c0e0f" stroke="#a39b8b" strokeOpacity="0.46" strokeWidth="2"/><rect x="22" y="24" width="176" height="82" rx="12" fill="#15191a"/><text x="42" y="53" fill={muted} fontFamily="monospace" fontSize="9">STERLING PAYMENT</text><text x="42" y="79" fill={text} fontFamily="monospace" fontSize="18">₦ 2,450,000</text><path d="M42 93h115" stroke={gold} strokeWidth="3"/><g fill="#171a1b" stroke="#fff" strokeOpacity="0.06"><rect x="25" y="126" width="48" height="35" rx="8"/><rect x="86" y="126" width="48" height="35" rx="8"/><rect x="147" y="126" width="48" height="35" rx="8"/><rect x="25" y="173" width="48" height="35" rx="8"/><rect x="86" y="173" width="48" height="35" rx="8"/><rect x="147" y="173" width="48" height="35" rx="8"/><rect x="25" y="220" width="48" height="35" rx="8"/><rect x="86" y="220" width="48" height="35" rx="8"/><rect x="147" y="220" width="48" height="35" rx="8"/></g></g>
      <path d="M52 92h190M52 131h151M52 170h201M52 209h132" stroke="#fff" strokeOpacity="0.08"/><path d="M52 92h106M52 131h78M52 170h143M52 209h92" stroke={gold} strokeOpacity="0.48" strokeWidth="3"/><g fill={gold}><circle cx="250" cy="92" r="5"/><circle cx="211" cy="131" r="5"/><circle cx="262" cy="170" r="5"/></g>
      <text x="52" y="52" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.4">PAYMENT INFRASTRUCTURE</text><text x="52" y="278" fill={muted} fontFamily="monospace" fontSize="9">SUCCESS RATE</text><text x="52" y="304" fill={text} fontFamily="monospace" fontSize="20">99.98%</text><text x="172" y="278" fill={muted} fontFamily="monospace" fontSize="9">SETTLEMENT</text><text x="172" y="304" fill={goldSoft} fontFamily="monospace" fontSize="20">T+0</text>
    </svg>
  )
}

function PublicWorkVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 390" aria-hidden="true">
      <rect width="640" height="390" fill="#080909"/><path d="M342 48 401 69l35 45-9 44 38 37-17 63-48 40-69 19-61-13-49-35-19-61 8-69 37-54 55-33Z" fill={gold} fillOpacity="0.045" stroke={goldSoft} strokeOpacity="0.42" strokeWidth="2"/>
      <g stroke={gold} strokeOpacity="0.35" strokeWidth="1.5"><path d="M263 128 337 158 408 125M337 158 363 223 305 268M363 223 422 259M305 268 263 128"/></g><g fill={gold}><circle cx="263" cy="128" r="5"/><circle cx="337" cy="158" r="5"/><circle cx="408" cy="125" r="5"/><circle cx="363" cy="223" r="5"/><circle cx="305" cy="268" r="5"/><circle cx="422" cy="259" r="5"/></g>
      <g transform="translate(40 55)"><rect width="180" height="245" rx="12" fill="#0d0f10" stroke="#fff" strokeOpacity="0.1"/><text x="18" y="28" fill={goldSoft} fontFamily="monospace" fontSize="9" letterSpacing="1.4">E-MANAGEMENT</text><rect x="18" y="48" width="144" height="34" rx="7" fill="#151818"/><rect x="18" y="96" width="144" height="34" rx="7" fill="#151818"/><rect x="18" y="144" width="144" height="34" rx="7" fill="#151818"/><circle cx="34" cy="65" r="5" fill={gold}/><circle cx="34" cy="113" r="5" fill={gold}/><circle cx="34" cy="161" r="5" fill={gold}/><path d="M44 65h91M44 113h80M44 161h99" stroke="#b8b2a7" strokeOpacity="0.32"/><rect x="18" y="200" width="144" height="25" rx="7" fill={gold} fillOpacity="0.84"/><text x="58" y="217" fill="#080808" fontFamily="monospace" fontSize="9">APPROVED</text></g>
      <text x="481" y="55" fill={muted} fontFamily="monospace" fontSize="8">KADUNA</text><text x="481" y="75" fill={text} fontFamily="monospace" fontSize="13">PUBLIC OPERATIONS</text><text x="481" y="93" fill={goldSoft} fontFamily="monospace" fontSize="10">CONNECTED</text>
    </svg>
  )
}

export function WorkVisual({ kind }: { kind: WorkKind }) {
  return <VisualFrame label={`${kind} Digi02 case study illustration`}>{kind === 'thermal' ? <ThermalWorkVisual /> : kind === 'payment' ? <PaymentWorkVisual /> : <PublicWorkVisual />}</VisualFrame>
}
