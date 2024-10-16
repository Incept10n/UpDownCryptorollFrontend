import { useEffect, useRef, memo, useContext } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);

    const { currentGame } = useContext(ApplicationContext)!;

    useEffect(() => {
        const symbol =
            currentGame === GameCoice.Btc
                ? "OKX:BTCUSDT"
                : currentGame === GameCoice.Eth
                  ? "OKX:ETHUSDT"
                  : currentGame === GameCoice.Ton
                    ? "TONUSDT"
                    : "OKX:BTCUSDT";

        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: symbol,
            interval: "240",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            hide_side_toolbar: false,
            allow_symbol_change: true,
            calendar: false,
            support_host: "https://www.tradingview.com",
        });

        if (container.current) {
            container.current.appendChild(script);
        }

        return () => {
            if (container.current) {
                container.current.innerHTML = "";
            }
        };
    }, [currentGame]);

    return (
        <div
            className="tradingview-widget-container z-[10]"
            ref={container}
            style={{ height: "100%", width: "100%" }}
        >
            <div
                className="tradingview-widget-container__widget"
                style={{ height: "calc(100% - 32px)", width: "100%" }}
            ></div>
        </div>
    );
}

export default memo(TradingViewWidget);
