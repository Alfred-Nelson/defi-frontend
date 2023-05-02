import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { SelectedTokenAtom } from "../utils/atoms";
import { convertToINR } from "../utils/helperFunctions";

const useBscTrade = () => {
  const [price, setPrice] = useState("0.00");
  const { ticker, id, name } = useRecoilValue(SelectedTokenAtom) || {};

  /**
   * fetching the api after a successful connection to stream.
   * for certain stream of ticker the trade happens slowly
   * hence the price remains at 0 for a long time.
   * so we fetch it and show it initially.
   */
  const fetchPrice = async () => {
    const params = { symbol: `${ticker}USDT` }
    const { data: response } = await axios.get(`https://api.binance.com/api/v3/ticker/price`, { params })
    setPrice(convertToINR(response.price));
  }

  useEffect(() => {
    if (!ticker) return;
    setPrice("0.00")

    const ws = new WebSocket(`wss://stream.binance.com:9443/ws`);
    const subReq = {
      method: "SUBSCRIBE",
      params: [`${ticker.toLowerCase()}usdt@trade`],
      id,
    };

    const unsubReq = {
      method: "UNSUBSCRIBE",
      params: [`${ticker.toLowerCase()}usdt@trade`],
      id,
    };

    /**
     * subscribes to trade stream
     */
    ws.onopen = () => {
      setPrice("0.00");
      toast.success(`Successfully connected to ${name} trade stream`)
      fetchPrice();
      ws.send(JSON.stringify(subReq));
    };

    /**
     * set price from trade stream
     */
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if(!data.p) return;
      setPrice(convertToINR(data.p));
    };

    /**
     * shows error in stream
     */
    ws.onerror = (e) => {
      console.log("has error", e)
      setPrice("0.00")
    }

    /**
     * unsubscribes to trade stream
     */
    ws.onclose = () => {
      ws.send(JSON.stringify(unsubReq));
    };

    return () => {
      ws.close();
    };
  }, [ticker]);

  return price;
};

export default useBscTrade;
