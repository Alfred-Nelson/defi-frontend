import { atom } from "recoil";
import { TokenType } from "../types/binance.types";

export const AllTokenAtom = atom({
    key: "allTokens",
    default: null as TokenType[] | null
})

export const SelectedTokenAtom = atom({
    key: "selectedToken",
    default: null as TokenType | null
})
