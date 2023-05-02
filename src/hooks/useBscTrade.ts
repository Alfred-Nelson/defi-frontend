import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { SelectedTokenAtom } from "../utils/atoms";

const useBscTrade = () => {
  const [price, setPrice] = useState("0");
  const { ticker } = useRecoilValue(SelectedTokenAtom) || {};

  const convertToINR = (data: string) => {
    const inr = (Number(data) || 0) * 80;
    const inrRound = inr.toFixed(2);
    return inrRound;
  };

  useEffect(() => {
    if (!ticker) return;
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws`);
    const subReq = {
      method: "SUBSCRIBE",
      params: [`${ticker.toLowerCase()}usdt@trade`],
      id: 1,
    };

    const unsubReq = {
      method: "UNSUBSCRIBE",
      params: [`${ticker.toLowerCase()}usdt@trade`],
      id: 1,
    };

    /**
     * subscribes to trade stream
     */
    ws.onopen = () => ws.send(JSON.stringify(subReq));

    /**
     * set price from trade stream
     */
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setPrice(convertToINR(data.p));
    };

    /**
     * unsubscribes to trade stream
     */
    ws.onclose = () => {
      console.log("Hooyyyy");
      ws.send(JSON.stringify(unsubReq));
    };

    return () => ws.close();
  }, [ticker]);

  return price;
};

export default useBscTrade;
