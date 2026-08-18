type FlagshipKind = 'skygrid' | 'digivolt' | 'enterprise'
type WorkKind = 'thermal' | 'payment' | 'public'

const gold = '#d9a34e'
const goldSoft = '#efbd70'
const ink = '#070808'
const panel = '#0e1112'
const line = '#353536'
const text = '#f3efe7'
const muted = '#a49f96'

function VisualFrame({ children, label }: { children: React.ReactNode; label: string }) {
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
          <linearGradient id="hero-bg-v2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#111617" />
            <stop offset="0.58" stopColor="#070909" />
            <stop offset="1" stopColor="#030404" />
          </linearGradient>
          <linearGradient id="hero-screen-v2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#151a1b" />
            <stop offset="1" stopColor="#090b0c" />
          </linearGradient>
          <radialGradient id="hero-glow-v2" cx="0.7" cy="0.48" r="0.44">
            <stop offset="0" stopColor={gold} stopOpacity="0.22" />
            <stop offset="1" stopColor={gold} stopOpacity="0" />
          </radialGradient>
          <pattern id="hero-grid-v2" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M38 0H0V38" fill="none" stroke="#8a846f" strokeOpacity="0.085" strokeWidth="1" />
          </pattern>
          <filter id="hero-glow-filter-v2" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <rect width="920" height="620" fill="url(#hero-bg-v2)" />
        <rect width="920" height="620" fill="url(#hero-grid-v2)" />
        <rect width="920" height="620" fill="url(#hero-glow-v2)" />

        <path d="M0 458C132 421 241 447 356 427c105-18 194-74 307-63 92 9 160 55 257 32v224H0Z" fill="#050606" />
        <path d="M0 472c93-13 142-56 232-35 75 17 119 9 186-20 77-33 146-34 212-2 87 41 164 34 290 4" fill="none" stroke={gold} strokeOpacity="0.15" />

        <g opacity="0.56">
          <path d="M48 400V302h48v98M112 400V256h72v144M198 400V318h56v82M270 400V284h92v116M378 400V230h60v170" fill="#0d1011" stroke="#202525" />
          <path d="M56 322h31M56 341h31M56 360h31M123 282h50M123 306h50M123 330h50M211 338h31M211 359h31M286 309h60M286 333h60M286 356h60M390 255h36M390 281h36M390 307h36" stroke="#bdb7a8" strokeOpacity="0.12" />
        </g>

        <g transform="translate(494 64)">
          <rect width="382" height="234" rx="12" fill="url(#hero-screen-v2)" stroke={gold} strokeOpacity="0.26" />
          <path d="M24 48H358M24 88H358M24 128H358M24 168H358" stroke="#fff" strokeOpacity="0.045" />
          <path d="M76 20V214M132 20V214M188 20V214M244 20V214M300 20V214" stroke="#fff" strokeOpacity="0.045" />
          <path d="M38 174 84 136l44 21 54-62 52 28 52-54 61 22" fill="none" stroke={gold} strokeWidth="2.3" />
          <path d="M38 174 84 136l44 21 54-62 52 28 52-54 61 22" fill="none" stroke={goldSoft} strokeOpacity="0.26" strokeWidth="8" filter="url(#hero-glow-filter-v2)" />
          <circle cx="84" cy="136" r="4.5" fill={gold} />
          <circle cx="182" cy="95" r="4.5" fill={gold} />
          <circle cx="286" cy="69" r="4.5" fill={gold} />
          <g transform="translate(256 146)">
            <circle r="27" fill="none" stroke={gold} strokeOpacity="0.34" />
            <circle r="16" fill="none" stroke={gold} strokeOpacity="0.62" />
            <path d="M0-13V13M-13 0H13" stroke={goldSoft} strokeOpacity="0.7" />
          </g>
          <text x="24" y="29" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="2">NATIONAL OPERATIONS GRID</text>
          <text x="24" y="211" fill={muted} fontFamily="monospace" fontSize="9" letterSpacing="1.4">LIVE ROUTING · ANALYTICS · FIELD TELEMETRY</text>
        </g>

        <g transform="translate(562 328)">
          <rect width="314" height="180" rx="12" fill="#0a0c0d" stroke="#ffffff" strokeOpacity="0.12" />
          <rect x="18" y="18" width="96" height="144" rx="8" fill="#0d1112" stroke={gold} strokeOpacity="0.24" />
          <circle cx="66" cy="72" r="30" fill="none" stroke={gold} strokeOpacity="0.28" />
          <circle cx="66" cy="72" r="19" fill="none" stroke={gold} strokeOpacity="0.5" />
          <path d="M66 42v60M36 72h60" stroke={goldSoft} strokeOpacity="0.46" />
          <text x="37" y="135" fill={text} fontFamily="monospace" fontSize="10">UAV-02</text>
          <text x="37" y="150" fill={gold} fontFamily="monospace" fontSize="8">ACTIVE</text>
          <g transform="translate(135 24)">
            <text y="10" fill={muted} fontFamily="monospace" fontSize="8" letterSpacing="1">FIELD TELEMETRY</text>
            <text y="42" fill={text} fontFamily="monospace" fontSize="11">ALTITUDE</text>
            <text x="100" y="42" fill={goldSoft} fontFamily="monospace" fontSize="11">120 M</text>
            <text y="72" fill={text} fontFamily="monospace" fontSize="11">SPEED</text>
            <text x="100" y="72" fill={goldSoft} fontFamily="monospace" fontSize="11">45 KM/H</text>
            <text y="102" fill={text} fontFamily="monospace" fontSize="11">BATTERY</text>
            <text x="100" y="102" fill={goldSoft} fontFamily="monospace" fontSize="11">87%</text>
            <path d="M0 122h142" stroke="#fff" strokeOpacity="0.09" />
            <path d="M0 140h104" stroke={gold} strokeOpacity="0.46" strokeWidth="3" />
          </g>
        </g>

        <g transform="translate(438 308)" stroke={goldSoft} fill="none" strokeWidth="2">
          <path d="M-32 0h26l8-8 8 8h26M0-26v18M-14-22h28M-42-10l10 10M42-10 32 0" />
          <circle cx="-42" cy="-10" r="6" /><circle cx="42" cy="-10" r="6" />
        </g>
        <path d="M444 307c31-51 63-78 111-93 55-18 89-1 135-41" fill="none" stroke={goldSoft} strokeOpacity="0.36" strokeWidth="1.4" strokeDasharray="6 8" />
        <circle cx="690" cy="173" r="5" fill={gold} />
      </svg>
    </VisualFrame>
  )
}

function SkyGridVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 400" aria-hidden="true">
      <defs>
        <linearGradient id="skygrid-bg-v2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#111617"/><stop offset="1" stopColor="#050606"/></linearGradient>
        <pattern id="skygrid-grid-v2" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#fff" strokeOpacity="0.055"/></pattern>
      </defs>
      <rect width="640" height="400" fill="url(#skygrid-bg-v2)"/>
      <rect width="640" height="400" fill="url(#skygrid-grid-v2)"/>
      <path d="M0 313c86-41 162-10 236-43 76-34 121-95 220-75 67 14 116 49 184 35v170H0Z" fill="#090b0c"/>
      <path d="M24 307c75-36 142-10 216-43 69-31 117-83 198-69 64 11 116 49 178 30" fill="none" stroke={gold} strokeOpacity="0.28"/>
      <path d="M80 224c94-52 149-30 232-102 52-45 103-39 174-14" fill="none" stroke={goldSoft} strokeOpacity="0.42" strokeWidth="2" strokeDasharray="8 10"/>
      <g transform="translate(316 109)" stroke={goldSoft} fill="none" strokeWidth="3">
        <path d="M-46 0h37l9-10 9 10h37M0-34v24M-18-29h36M-58-12l12 12M58-12 46 0"/>
        <circle cx="-58" cy="-12" r="8"/><circle cx="58" cy="-12" r="8"/>
      </g>
      <g transform="translate(430 212)">
        <circle r="49" fill="none" stroke={gold} strokeOpacity="0.22"/>
        <circle r="30" fill="none" stroke={gold} strokeOpacity="0.48"/>
        <circle r="5" fill={gold}/>
        <path d="M-49 0H49M0-49V49" stroke={gold} strokeOpacity="0.2"/>
      </g>
      <rect x="34" y="34" width="170" height="70" rx="9" fill="#080a0b" stroke={gold} strokeOpacity="0.26"/>
      <text x="52" y="59" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.5">SKYGRID / INSPECTION</text>
      <text x="52" y="82" fill={text} fontFamily="monospace" fontSize="13">MISSION 024 · LIVE</text>
      <text x="52" y="98" fill={muted} fontFamily="monospace" fontSize="9">AI ROUTE · RTK · THERMAL</text>
      <g transform="translate(474 304)">
        <rect width="132" height="56" rx="8" fill="#080a0b" stroke="#fff" strokeOpacity="0.1"/>
        <text x="14" y="22" fill={muted} fontFamily="monospace" fontSize="8">SITE COVERAGE</text>
        <text x="14" y="42" fill={goldSoft} fontFamily="monospace" fontSize="15">94.8%</text>
      </g>
    </svg>
  )
}

function DigiVoltVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 400" aria-hidden="true">
      <defs><linearGradient id="dv-bg-v2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#12120f"/><stop offset="1" stopColor="#050606"/></linearGradient></defs>
      <rect width="640" height="400" fill="url(#dv-bg-v2)"/>
      <path d="M42 293H598" stroke="#fff" strokeOpacity="0.08"/>
      <path d="M110 281c30-54 78-86 152-91l112-4c58-2 100 19 142 64l32 31H110Z" fill="#0b0d0e" stroke="#6f6d67" strokeOpacity="0.58" strokeWidth="2"/>
      <path d="M205 196c31-45 70-67 116-69 51-2 99 14 143 57" fill="none" stroke={goldSoft} strokeOpacity="0.62" strokeWidth="2"/>
      <path d="M245 191 307 137l62-3 63 51" fill="#101314" stroke="#595a58"/>
      <circle cx="193" cy="281" r="37" fill="#060707" stroke="#848078" strokeOpacity="0.56" strokeWidth="3"/>
      <circle cx="193" cy="281" r="16" fill="#111313" stroke={gold} strokeOpacity="0.34"/>
      <circle cx="463" cy="281" r="37" fill="#060707" stroke="#848078" strokeOpacity="0.56" strokeWidth="3"/>
      <circle cx="463" cy="281" r="16" fill="#111313" stroke={gold} strokeOpacity="0.34"/>
      <g transform="translate(512 72)">
        <rect width="74" height="132" rx="11" fill="#0c0f10" stroke={gold} strokeOpacity="0.4"/>
        <rect x="13" y="16" width="48" height="42" rx="5" fill="#15191a" stroke="#fff" strokeOpacity="0.08"/>
        <path d="M30 92h18M39 64v28" stroke={goldSoft} strokeWidth="3"/>
        <path d="M62 104c38 0 32 62-18 62" fill="none" stroke={gold} strokeOpacity="0.38" strokeWidth="2"/>
      </g>
      <path d="M64 92c84-31 170-35 257-9 81 25 141 20 220-17" fill="none" stroke={gold} strokeOpacity="0.3" strokeDasharray="7 9"/>
      <circle cx="64" cy="92" r="4" fill={gold}/><circle cx="321" cy="83" r="4" fill={gold}/><circle cx="541" cy="66" r="4" fill={gold}/>
      <text x="38" y="48" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.5">DIGIVOLT / MOBILITY NETWORK</text>
      <text x="38" y="70" fill={text} fontFamily="monospace" fontSize="13">SMART CHARGING · GRID INTELLIGENCE</text>
      <g transform="translate(38 322)">
        <text fill={muted} fontFamily="monospace" fontSize="8">RANGE</text><text x="76" fill={goldSoft} fontFamily="monospace" fontSize="12">412 KM</text>
        <text x="160" fill={muted} fontFamily="monospace" fontSize="8">BATTERY</text><text x="236" fill={goldSoft} fontFamily="monospace" fontSize="12">82%</text>
        <text x="320" fill={muted} fontFamily="monospace" fontSize="8">CHARGE</text><text x="391" fill={goldSoft} fontFamily="monospace" fontSize="12">24 MIN</text>
      </g>
    </svg>
  )
}

function EnterpriseVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 400" aria-hidden="true">
      <defs><linearGradient id="ent-bg-v2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#111313"/><stop offset="1" stopColor="#050606"/></linearGradient></defs>
      <rect width="640" height="400" fill="url(#ent-bg-v2)"/>
      <rect x="42" y="47" width="418" height="274" rx="12" fill="#0a0c0d" stroke="#fff" strokeOpacity="0.1"/>
      <rect x="42" y="47" width="418" height="38" rx="12" fill="#121516"/>
      <circle cx="65" cy="66" r="4" fill={gold}/><circle cx="80" cy="66" r="4" fill="#4a4c4c"/><circle cx="95" cy="66" r="4" fill="#4a4c4c"/>
      <rect x="64" y="105" width="84" height="194" rx="8" fill="#0d1011"/>
      <path d="M78 129h52M78 151h38M78 173h46M78 215h52M78 237h40" stroke="#8f8b82" strokeOpacity="0.32"/>
      <rect x="169" y="105" width="124" height="64" rx="8" fill="#0d1011" stroke={gold} strokeOpacity="0.18"/>
      <rect x="309" y="105" width="125" height="64" rx="8" fill="#0d1011" stroke="#fff" strokeOpacity="0.06"/>
      <rect x="169" y="187" width="265" height="112" rx="8" fill="#0d1011"/>
      <path d="M187 269 221 235l36 18 39-46 39 27 43-50 39 29" fill="none" stroke={goldSoft} strokeWidth="2"/>
      <path d="M188 215h231M188 239h231M188 263h231" stroke="#fff" strokeOpacity="0.045"/>
      <text x="184" y="128" fill={muted} fontFamily="monospace" fontSize="8">ACTIVE USERS</text><text x="184" y="152" fill={text} fontFamily="monospace" fontSize="18">2,418</text>
      <text x="324" y="128" fill={muted} fontFamily="monospace" fontSize="8">OPERATIONS</text><text x="324" y="152" fill={goldSoft} fontFamily="monospace" fontSize="18">98.6%</text>
      <g transform="translate(480 112)">
        <rect width="118" height="205" rx="18" fill="#0b0d0e" stroke={gold} strokeOpacity="0.28"/>
        <rect x="13" y="20" width="92" height="48" rx="8" fill="#131617"/>
        <rect x="13" y="81" width="92" height="18" rx="5" fill="#151819"/>
        <rect x="13" y="110" width="72" height="18" rx="5" fill="#151819"/>
        <rect x="13" y="153" width="92" height="32" rx="8" fill={gold} fillOpacity="0.82"/>
        <text x="34" y="173" fill="#090909" fontFamily="monospace" fontSize="9">APPROVE</text>
      </g>
      <text x="42" y="29" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.5">ENTERPRISE / COMMAND LAYER</text>
      <text x="454" y="349" textAnchor="end" fill={muted} fontFamily="monospace" fontSize="9">ERP · POS · HR · PAYROLL · REPORTING</text>
    </svg>
  )
}

export function FlagshipVisual({ kind }: { kind: FlagshipKind }) {
  return (
    <VisualFrame label={`${kind} Digi02 technology illustration`}>
      {kind === 'skygrid' ? <SkyGridVisual /> : kind === 'digivolt' ? <DigiVoltVisual /> : <EnterpriseVisual />}
    </VisualFrame>
  )
}

function ThermalWorkVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 390" aria-hidden="true">
      <rect width="640" height="390" fill="#080a0a"/>
      <path d="M0 304c95-38 165-12 243-53 73-38 142-104 242-65 70 28 105 39 155 18v186H0Z" fill="#0d1010"/>
      <path d="M34 306c84-35 152-8 230-51 70-38 127-90 213-64 67 20 99 39 137 22" fill="none" stroke={gold} strokeOpacity="0.32"/>
      <g transform="translate(176 156)" stroke={goldSoft} fill="none" strokeWidth="3"><path d="M-38 0h31l7-8 7 8h31M0-28v20M-16-24h32M-50-10l12 10M50-10 38 0"/><circle cx="-50" cy="-10" r="7"/><circle cx="50" cy="-10" r="7"/></g>
      <path d="M189 159c76-47 139-37 215 4" fill="none" stroke={goldSoft} strokeOpacity="0.42" strokeDasharray="7 9"/>
      <g transform="translate(432 179)"><circle r="64" fill="none" stroke={gold} strokeOpacity="0.17"/><circle r="44" fill="none" stroke={gold} strokeOpacity="0.28"/><circle r="24" fill="none" stroke={gold} strokeOpacity="0.48"/><circle r="5" fill={gold}/></g>
      <rect x="35" y="35" width="205" height="58" rx="9" fill="#0b0d0e" stroke={gold} strokeOpacity="0.22"/>
      <text x="53" y="60" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.4">THERMAL INSPECTION</text>
      <text x="53" y="80" fill={text} fontFamily="monospace" fontSize="12">ASSET 18 · ANOMALY 02</text>
    </svg>
  )
}

function PaymentWorkVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 390" aria-hidden="true">
      <defs><linearGradient id="pay-bg-v2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#13110d"/><stop offset="1" stopColor="#070808"/></linearGradient></defs>
      <rect width="640" height="390" fill="url(#pay-bg-v2)"/>
      <g transform="translate(360 48) rotate(-8 110 145)">
        <rect width="220" height="290" rx="28" fill="#0c0e0f" stroke="#a39b8b" strokeOpacity="0.46" strokeWidth="2"/>
        <rect x="22" y="24" width="176" height="82" rx="12" fill="#15191a"/>
        <text x="42" y="53" fill={muted} fontFamily="monospace" fontSize="9">STERLING PAYMENT</text>
        <text x="42" y="79" fill={text} fontFamily="monospace" fontSize="18">₦ 2,450,000</text>
        <path d="M42 93h115" stroke={gold} strokeWidth="3"/>
        <g fill="#171a1b" stroke="#fff" strokeOpacity="0.06"><rect x="25" y="126" width="48" height="35" rx="8"/><rect x="86" y="126" width="48" height="35" rx="8"/><rect x="147" y="126" width="48" height="35" rx="8"/><rect x="25" y="173" width="48" height="35" rx="8"/><rect x="86" y="173" width="48" height="35" rx="8"/><rect x="147" y="173" width="48" height="35" rx="8"/><rect x="25" y="220" width="48" height="35" rx="8"/><rect x="86" y="220" width="48" height="35" rx="8"/><rect x="147" y="220" width="48" height="35" rx="8"/></g>
      </g>
      <path d="M52 92h190M52 131h151M52 170h201M52 209h132" stroke="#fff" strokeOpacity="0.08"/>
      <path d="M52 92h106M52 131h78M52 170h143M52 209h92" stroke={gold} strokeOpacity="0.48" strokeWidth="3"/>
      <circle cx="250" cy="92" r="5" fill={gold}/><circle cx="211" cy="131" r="5" fill={gold}/><circle cx="262" cy="170" r="5" fill={gold}/>
      <text x="52" y="52" fill={goldSoft} fontFamily="monospace" fontSize="10" letterSpacing="1.4">PAYMENT INFRASTRUCTURE</text>
      <text x="52" y="278" fill={muted} fontFamily="monospace" fontSize="9">SUCCESS RATE</text><text x="52" y="304" fill={text} fontFamily="monospace" fontSize="20">99.98%</text>
      <text x="172" y="278" fill={muted} fontFamily="monospace" fontSize="9">SETTLEMENT</text><text x="172" y="304" fill={goldSoft} fontFamily="monospace" fontSize="20">T+0</text>
    </svg>
  )
}

function PublicWorkVisual() {
  return (
    <svg className="home-vector-visual__svg" viewBox="0 0 640 390" aria-hidden="true">
      <rect width="640" height="390" fill="#080909"/>
      <path d="M342 48 401 69l35 45-9 44 38 37-17 63-48 40-69 19-61-13-49-35-19-61 8-69 37-54 55-33Z" fill={gold} fillOpacity="0.045" stroke={goldSoft} strokeOpacity="0.42" strokeWidth="2"/>
      <g stroke={gold} strokeOpacity="0.35" strokeWidth="1.5"><path d="M263 128 337 158 408 125M337 158 363 223 305 268M363 223 422 259M305 268 263 128"/></g>
      <g fill={gold}><circle cx="263" cy="128" r="5"/><circle cx="337" cy="158" r="5"/><circle cx="408" cy="125" r="5"/><circle cx="363" cy="223" r="5"/><circle cx="305" cy="268" r="5"/><circle cx="422" cy="259" r="5"/></g>
      <g transform="translate(40 55)">
        <rect width="180" height="245" rx="12" fill="#0d0f10" stroke="#fff" strokeOpacity="0.1"/>
        <text x="18" y="28" fill={goldSoft} fontFamily="monospace" fontSize="9" letterSpacing="1.4">E-MANAGEMENT</text>
        <rect x="18" y="48" width="144" height="34" rx="7" fill="#151818"/><rect x="18" y="96" width="144" height="34" rx="7" fill="#151818"/><rect x="18" y="144" width="144" height="34" rx="7" fill="#151818"/>
        <circle cx="34" cy="65" r="5" fill={gold}/><circle cx="34" cy="113" r="5" fill={gold}/><circle cx="34" cy="161" r="5" fill={gold}/>
        <path d="M44 65h91M44 113h80M44 161h99" stroke="#b8b2a7" strokeOpacity="0.32"/>
        <rect x="18" y="200" width="144" height="25" rx="7" fill={gold} fillOpacity="0.84"/>
        <text x="58" y="217" fill="#080808" fontFamily="monospace" fontSize="9">APPROVED</text>
      </g>
      <text x="481" y="55" fill={muted} fontFamily="monospace" fontSize="8">KADUNA</text>
      <text x="481" y="75" fill={text} fontFamily="monospace" fontSize="13">PUBLIC OPERATIONS</text>
      <text x="481" y="93" fill={goldSoft} fontFamily="monospace" fontSize="10">CONNECTED</text>
    </svg>
  )
}

export function WorkVisual({ kind }: { kind: WorkKind }) {
  return (
    <VisualFrame label={`${kind} Digi02 case study illustration`}>
      {kind === 'thermal' ? <ThermalWorkVisual /> : kind === 'payment' ? <PaymentWorkVisual /> : <PublicWorkVisual />}
    </VisualFrame>
  )
}
