export function HomeHeroCinematicVisual() {
  return (
    <div className="home-hero-cinematic" role="img" aria-label="Digi02 operations room overlooking a city with live national operations dashboards">
      <svg className="home-hero-cinematic__svg" viewBox="0 0 1600 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="homeHeroSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06101a" />
            <stop offset="48%" stopColor="#0b1b2c" />
            <stop offset="72%" stopColor="#11141a" />
            <stop offset="100%" stopColor="#030404" />
          </linearGradient>
          <linearGradient id="homeHeroGlass" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#091019" stopOpacity="0.08" />
            <stop offset="1" stopColor="#020304" stopOpacity="0.26" />
          </linearGradient>
          <linearGradient id="homeHeroDesk" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#111719" />
            <stop offset="1" stopColor="#030404" />
          </linearGradient>
          <radialGradient id="homeHeroGlow" cx="0.68" cy="0.56" r="0.48">
            <stop stopColor="#d9a34e" stopOpacity="0.16" />
            <stop offset="1" stopColor="#d9a34e" stopOpacity="0" />
          </radialGradient>
          <pattern id="homeHeroFineGrid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M22 0H0V22" fill="none" stroke="#9ac7d8" strokeOpacity="0.035" strokeWidth="0.8" />
          </pattern>
          <filter id="homeHeroSoftGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="homeHeroPanelClip"><rect width="236" height="174" rx="3" /></clipPath>
        </defs>

        <rect width="1600" height="720" fill="#030405" />
        <rect x="250" width="1350" height="545" fill="url(#homeHeroSky)" />
        <rect x="250" width="1350" height="545" fill="url(#homeHeroGlow)" />

        {/* distant city and horizon */}
        <path d="M250 382C404 348 532 366 675 340c142-26 274-56 410-31 126 22 282 26 515-18v254H250Z" fill="#050708" />
        <path d="M250 383c135-23 265-13 392-34 149-25 281-56 427-34 162 25 315 18 531-19" fill="none" stroke="#c9a36a" strokeOpacity="0.18" strokeWidth="1" />

        <g fill="#e6b96b" opacity="0.7">
          {Array.from({ length: 47 }).map((_, index) => {
            const x = 285 + ((index * 71) % 1210)
            const y = 394 + ((index * 37) % 118)
            const width = index % 5 === 0 ? 4 : 2.3
            return <rect key={`light-a-${index}`} x={x} y={y} width={width} height="2.2" rx="1" opacity={0.25 + (index % 7) * 0.08} />
          })}
        </g>
        <g fill="#7eb4c7" opacity="0.42">
          {Array.from({ length: 35 }).map((_, index) => {
            const x = 320 + ((index * 89) % 1160)
            const y = 408 + ((index * 29) % 103)
            return <rect key={`light-b-${index}`} x={x} y={y} width="2" height="1.8" rx="0.8" opacity={0.24 + (index % 5) * 0.08} />
          })}
        </g>

        {/* window architecture */}
        <g fill="#020304">
          <path d="M0 0H1600v56L250 106V0Z" opacity="0.94" />
          <path d="M246 57h20v489h-20zM520 76h18v470h-18zM786 82h18v464h-18zM1014 76h18v470h-18z" />
          <path d="M240 535h1360v27H240z" />
        </g>
        <g stroke="#24313a" strokeOpacity="0.48">
          <path d="M266 100v426M538 91v435M804 91v435M1032 90v436" />
        </g>
        <rect x="250" y="58" width="770" height="488" fill="url(#homeHeroGlass)" />

        {/* right-side operations wall */}
        <g transform="translate(1028 82)">
          <rect width="552" height="430" rx="5" fill="#05090c" stroke="#31424a" strokeOpacity="0.78" />
          <rect x="1" y="1" width="550" height="428" rx="4" fill="url(#homeHeroFineGrid)" opacity="0.55" />

          {/* operations overview */}
          <g transform="translate(14 14)">
            <rect width="252" height="186" rx="3" fill="#071016" stroke="#2d4651" strokeOpacity="0.72" />
            <text x="12" y="18" fill="#a8b6b9" fontFamily="monospace" fontSize="8" letterSpacing="1.1">OPERATIONS OVERVIEW</text>
            <path d="M34 53 59 37l32 8 18 23 35-7 22 22 34 4 18 24-16 24-36 6-19 25-35-2-18-22-38-2-16-29 14-22Z" fill="#07171c" stroke="#5d8b96" strokeOpacity="0.55" />
            <g stroke="#d9a34e" strokeOpacity="0.56" fill="none" strokeWidth="1">
              <path d="M58 64 90 86l46-12 35 35 30-17M90 86l-9 42 48 20 42-39M129 148l28-29" />
            </g>
            <g fill="#e3b765" filter="url(#homeHeroSoftGlow)">
              <circle cx="58" cy="64" r="2.4" /><circle cx="90" cy="86" r="3" /><circle cx="136" cy="74" r="2.4" /><circle cx="171" cy="109" r="2.8" /><circle cx="129" cy="148" r="2.4" />
            </g>
            <line x1="12" y1="160" x2="240" y2="160" stroke="#31424a" strokeOpacity="0.55" />
            <text x="14" y="176" fill="#748b92" fontFamily="monospace" fontSize="7">FLEET STATUS</text>
            <text x="96" y="176" fill="#e7ecec" fontFamily="monospace" fontSize="10">128</text>
            <text x="132" y="176" fill="#748b92" fontFamily="monospace" fontSize="7">ACTIVE</text>
            <text x="186" y="176" fill="#d9a34e" fontFamily="monospace" fontSize="10">97%</text>
          </g>

          {/* logistics map */}
          <g transform="translate(278 14)">
            <rect width="260" height="186" rx="3" fill="#071016" stroke="#2d4651" strokeOpacity="0.72" />
            <text x="12" y="18" fill="#a8b6b9" fontFamily="monospace" fontSize="8" letterSpacing="1.1">LOGISTICS MAP</text>
            <path d="M23 110c30-42 65-56 101-50 36 7 62-13 93-30 15-8 25-10 33-7" fill="none" stroke="#6c919d" strokeOpacity="0.52" />
            <path d="M33 121c32-36 57-34 90-26 36 8 65-21 102-42" fill="none" stroke="#d9a34e" strokeOpacity="0.7" strokeWidth="1.3" strokeDasharray="3 4" />
            <g fill="#d9a34e" filter="url(#homeHeroSoftGlow)">
              <circle cx="58" cy="104" r="3" /><circle cx="110" cy="94" r="3" /><circle cx="156" cy="77" r="3" /><circle cx="205" cy="55" r="3" />
            </g>
            <g fill="#c1ced0" fontFamily="monospace" fontSize="7">
              <text x="43" y="96">Lagos</text><text x="96" y="86">Abuja</text><text x="143" y="69">Kaduna</text><text x="194" y="47">Kano</text>
            </g>
            <path d="M18 148H244" stroke="#31424a" strokeOpacity="0.48" />
            <text x="18" y="166" fill="#748b92" fontFamily="monospace" fontSize="7">ROUTE INTEGRITY</text>
            <text x="106" y="166" fill="#e7ecec" fontFamily="monospace" fontSize="10">99.3%</text>
            <text x="178" y="166" fill="#7fba8e" fontFamily="monospace" fontSize="7">ONLINE</text>
          </g>

          {/* asset tracking */}
          <g transform="translate(14 212)">
            <rect width="296" height="198" rx="3" fill="#071016" stroke="#2d4651" strokeOpacity="0.72" />
            <text x="12" y="18" fill="#a8b6b9" fontFamily="monospace" fontSize="8" letterSpacing="1.1">ASSET TRACKING</text>
            <g clipPath="url(#homeHeroPanelClip)" transform="translate(12 30)">
              <path d="M0 78 42 56l41 10 33-38 49 19 25-28 47 12" fill="none" stroke="#597985" strokeOpacity="0.7" />
              <path d="M4 128c36-41 69-36 99-20 29 16 59-19 90-38 18-11 31-12 43-7" fill="none" stroke="#d9a34e" strokeOpacity="0.55" strokeDasharray="4 5" />
              <g fill="#d9a34e"><path d="m69 82 6-11 6 11-6 11Z" /><path d="m145 66 6-11 6 11-6 11Z" /><path d="m207 106 6-11 6 11-6 11Z" /></g>
              <g fill="#8ca1a7" fontFamily="monospace" fontSize="7">
                <text x="0" y="154">DRN-247</text><text x="90" y="154">EN ROUTE</text>
                <text x="0" y="168">TRK-091</text><text x="90" y="168">ONLINE</text>
              </g>
            </g>
          </g>

          {/* performance */}
          <g transform="translate(322 212)">
            <rect width="104" height="198" rx="3" fill="#071016" stroke="#2d4651" strokeOpacity="0.72" />
            <text x="10" y="18" fill="#a8b6b9" fontFamily="monospace" fontSize="7">PERFORMANCE</text>
            <text x="10" y="56" fill="#748b92" fontFamily="monospace" fontSize="6.5">ON-TIME</text>
            <text x="10" y="80" fill="#f0f2ef" fontFamily="Georgia" fontSize="25">97%</text>
            <path d="M10 138 26 128l12 5 12-22 12 7 12-27 16 9" fill="none" stroke="#4ea274" strokeWidth="1.5" />
            <path d="M10 154H92" stroke="#31424a" strokeOpacity="0.5" />
            <text x="10" y="175" fill="#7fba8e" fontFamily="monospace" fontSize="6.5">+4.8% WEEK</text>
          </g>

          {/* alerts */}
          <g transform="translate(438 212)">
            <rect width="100" height="198" rx="3" fill="#071016" stroke="#2d4651" strokeOpacity="0.72" />
            <text x="10" y="18" fill="#a8b6b9" fontFamily="monospace" fontSize="7">ALERTS</text>
            <g fill="#8ca1a7" fontFamily="monospace" fontSize="6.5">
              <text x="10" y="52">Maintenance</text><text x="84" y="52" textAnchor="end" fill="#e4e7e4">3</text>
              <text x="10" y="82">Route deviation</text><text x="84" y="82" textAnchor="end" fill="#e4e7e4">2</text>
              <text x="10" y="112">Geofence</text><text x="84" y="112" textAnchor="end" fill="#e4e7e4">1</text>
            </g>
            <path d="M10 132H90" stroke="#31424a" strokeOpacity="0.5" />
            <text x="10" y="157" fill="#78b786" fontFamily="monospace" fontSize="6.2">SYSTEM STABLE</text>
            <circle cx="81" cy="156" r="3" fill="#78b786" filter="url(#homeHeroSoftGlow)" />
          </g>
        </g>

        {/* workstation foreground */}
        <path d="M545 557H1600V720H420l68-61 57-102Z" fill="url(#homeHeroDesk)" />
        <path d="M588 585h1012" stroke="#3c4548" strokeOpacity="0.42" />
        <g transform="translate(836 492)">
          <rect width="210" height="127" rx="5" fill="#020304" stroke="#445159" strokeOpacity="0.62" />
          <rect x="10" y="10" width="190" height="102" rx="2" fill="#071016" />
          <path d="M20 91 52 72l25 8 25-36 31 18 26-29 31 13" fill="none" stroke="#d9a34e" strokeOpacity="0.58" />
          <path d="M30 36H96M30 48H78M129 72h54M129 84h44" stroke="#7a9096" strokeOpacity="0.42" />
          <path d="M98 127v28M69 155h58" stroke="#454e51" strokeWidth="4" />
        </g>
        <g transform="translate(1082 559) rotate(6)">
          <rect width="177" height="102" rx="5" fill="#020304" stroke="#3b494e" />
          <rect x="8" y="8" width="161" height="85" fill="#071016" />
          <path d="M18 74 44 61l24 5 25-29 23 13 19-21 24 8" fill="none" stroke="#d9a34e" strokeOpacity="0.62" />
        </g>
        <ellipse cx="705" cy="666" rx="88" ry="66" fill="#020303" />
        <path d="M651 650c7-67 30-104 70-111 43-8 70 24 82 105" fill="#060808" />

        {/* strong left readability gradient */}
        <rect width="1600" height="720" fill="url(#homeHeroGlass)" opacity="0.28" />
      </svg>
    </div>
  )
}
