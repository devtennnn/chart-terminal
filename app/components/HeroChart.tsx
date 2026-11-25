// Decorative candlestick drawing for the landing page (generated shapes, not market data).
export default function HeroChart() {
  const W = 640, H = 380, n = 46, cw = W / n;
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const bars: { o: number; c: number; h: number; l: number }[] = [];
  let p = 330;
  for (let i = 0; i < n; i++) {
    const drift = i < 14 ? 3 : i < 24 ? -2.5 : 2.6;
    const o = p, c = p - drift * (0.6 + rnd()) * 3 + (rnd() - 0.5) * 16;
    bars.push({ o, c, h: Math.min(o, c) - rnd() * 12, l: Math.max(o, c) + rnd() * 12 });
    p = c;
  }
  let e = bars[0].c;
  const ema = bars.map((b, i) => { e = i ? b.c * 0.2 + e * 0.8 : b.c; return `${i ? "L" : "M"}${(i + 0.5) * cw},${e.toFixed(1)}`; }).join("");
  const last = bars[n - 1].c;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="hero-chart" role="img" aria-label="Illustration of a rising candlestick chart">
      <defs>
        <linearGradient id="hc-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b6f05c" stopOpacity=".22" />
          <stop offset="1" stopColor="#b6f05c" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 130, 200, 270, 340].map((y) => <line key={y} x1="0" x2={W} y1={y} y2={y} stroke="#1f2a20" />)}
      <path d={`${ema}L${W},${H}L0,${H}Z`} fill="url(#hc-glow)" />
      {bars.map((b, i) => {
        const up = b.c < b.o, x = i * cw + cw / 2, col = up ? "#b6f05c" : "#ff6b5e";
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={b.h} y2={b.l} stroke={col} strokeWidth="1.4" />
            <rect x={x - cw * 0.32} y={Math.min(b.o, b.c)} width={cw * 0.64} height={Math.max(2, Math.abs(b.o - b.c))} rx="1.5" fill={col} />
          </g>
        );
      })}
      <path d={ema} fill="none" stroke="#e9f0e6" strokeOpacity=".55" strokeWidth="1.6" />
      <line x1="0" x2={W} y1={last} y2={last} stroke="#b6f05c" strokeDasharray="4 5" strokeOpacity=".7" />
      <rect x={W - 66} y={last - 13} width="66" height="26" rx="5" fill="#b6f05c" />
      <text x={W - 33} y={last + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#0a0d0b">XAUUSD</text>
    </svg>
  );
}
