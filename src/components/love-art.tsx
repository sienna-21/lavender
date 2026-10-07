export function Bow({ className = "" }: { className?: string }) {
  return <svg className={`bow-art ${className}`} viewBox="0 0 160 115" fill="none" aria-hidden="true"><path d="M77 42C50 11 17 11 24 40c4 18 29 18 53 8M83 42c27-31 60-31 53-2-4 18-29 18-53 8" /><path d="M75 46C58 62 55 86 42 101l19-6 7 12c8-24 12-43 12-57M85 46c17 16 20 40 33 55l-19-6-7 12c-8-24-12-43-12-57" /><ellipse cx="80" cy="45" rx="8" ry="9"/><path className="bow-fold" d="M34 31l35 12m57-12L91 43M61 94l15-39m23 39L84 55" /></svg>;
}

export function Flower({ className = "" }: { className?: string }) {
  return <svg className={`flower-art ${className}`} viewBox="0 0 100 180" fill="none" aria-hidden="true"><path className="stem" d="M50 170c-4-40 7-71 1-111M50 133c-24-2-33-20-29-27 16-1 26 14 29 27m1-30c21-1 30-19 27-26-18 2-25 14-27 26"/><g className="petals"><ellipse cx="50" cy="39" rx="11" ry="21"/><ellipse cx="50" cy="39" rx="11" ry="21" transform="rotate(72 50 52)"/><ellipse cx="50" cy="39" rx="11" ry="21" transform="rotate(144 50 52)"/><ellipse cx="50" cy="39" rx="11" ry="21" transform="rotate(216 50 52)"/><ellipse cx="50" cy="39" rx="11" ry="21" transform="rotate(288 50 52)"/><circle className="flower-center" cx="50" cy="52" r="8"/></g></svg>;
}

export function BunnyPair() {
  return <svg className="bunny-art" viewBox="0 0 420 280" role="img" aria-label="Two simple little rabbits, one lavender and one blush, leaning together with tiny hearts and flowers">
    <ellipse className="bunny-ground" cx="210" cy="249" rx="132" ry="9"/>
    <g className="bunny lavender-bunny" transform="rotate(7 170 200)">
      <ellipse cx="163" cy="204" rx="49" ry="47"/><ellipse cx="141" cy="81" rx="15" ry="49" transform="rotate(-12 141 81)"/><ellipse cx="183" cy="79" rx="15" ry="48" transform="rotate(7 183 79)"/>
      <ellipse className="inner-ear" cx="141" cy="77" rx="6" ry="30" transform="rotate(-12 141 77)"/><ellipse className="inner-ear" cx="183" cy="75" rx="6" ry="29" transform="rotate(7 183 75)"/>
      <ellipse cx="165" cy="146" rx="49" ry="43"/><ellipse cx="139" cy="240" rx="23" ry="13"/><ellipse cx="189" cy="240" rx="22" ry="13"/><ellipse cx="195" cy="208" rx="13" ry="23" transform="rotate(35 195 208)"/>
      <g className="bunny-face"><circle cx="151" cy="144" r="3"/><circle cx="180" cy="144" r="3"/><path d="M161 155q4-5 8 0l-4 4Z"/><path className="mouth" d="M165 159v4m0 0q-4 4-7 0m7 0q4 4 7 0"/></g><ellipse className="cheek" cx="139" cy="157" rx="8" ry="4"/><ellipse className="cheek" cx="189" cy="157" rx="8" ry="4"/>
    </g>
    <g className="bunny pink-bunny" transform="rotate(-8 256 200)">
      <circle cx="297" cy="216" r="17"/><ellipse cx="257" cy="208" rx="45" ry="43"/><ellipse cx="237" cy="90" rx="14" ry="47" transform="rotate(-8 237 90)"/><ellipse cx="276" cy="90" rx="14" ry="44" transform="rotate(16 276 90)"/>
      <ellipse className="inner-ear" cx="237" cy="85" rx="5" ry="28" transform="rotate(-8 237 85)"/><ellipse className="inner-ear" cx="276" cy="85" rx="5" ry="26" transform="rotate(16 276 85)"/>
      <ellipse cx="256" cy="153" rx="46" ry="41"/><ellipse cx="233" cy="241" rx="22" ry="12"/><ellipse cx="278" cy="241" rx="23" ry="12"/><ellipse cx="226" cy="211" rx="12" ry="22" transform="rotate(-30 226 211)"/>
      <g className="bunny-face"><path className="mouth" d="M241 149q4-5 8 0m19 0q4-5 8 0"/><path d="M254 160q4-5 8 0l-4 4Z"/><path className="mouth" d="M258 164v3m0 0q-4 3-6 0m6 0q4 3 6 0"/></g><ellipse className="cheek" cx="231" cy="162" rx="7" ry="4"/><ellipse className="cheek" cx="281" cy="162" rx="7" ry="4"/>
    </g>
    <g className="tiny-hearts"><path d="M210 90c-20-11-11-26 0-16 11-10 20 5 0 16Z"/><path d="M100 118c-12-7-7-16 0-10 7-6 12 3 0 10Z"/><path d="M320 123c-12-7-7-16 0-10 7-6 12 3 0 10Z"/></g>
    <g className="bunny-flowers"><path className="stem" d="M80 244v-25m262 25v-20"/><path d="M80 219c-17-5-12-15-4-11-3-13 11-13 9-1 13-4 16 8 2 12-1 9-12 9-7 0m262 6c-14-5-11-13-3-10-3-11 9-11 7-1 11-3 13 7 2 10-1 8-10 8-6 1"/></g>
  </svg>;
}

export function Cloud({ className = "" }: { className?: string }) {
  return <svg className={`cloud-art ${className}`} viewBox="0 0 400 160" aria-hidden="true"><path d="M46 142C-4 135 8 79 54 82 37 32 105 12 132 49 154-13 245-3 258 57 301 20 355 59 344 94 400 85 419 140 369 146c-86 8-235 6-323-4Z"/></svg>;
}