"use client";
import { useEffect, useRef, memo } from "react";

type Props = { src: string; config: Record<string, unknown> };

// Loads one official TradingView widget script into its container.
function TradingViewWidget({ src, config }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    if (!box) return;
    box.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    const s = document.createElement("script");
    s.src = src;
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = JSON.stringify(config);
    box.appendChild(s);
    return () => { box.innerHTML = ""; };
  }, [src, config]);

  return <div className="tradingview-widget-container" ref={ref} />;
}

export default memo(TradingViewWidget);
