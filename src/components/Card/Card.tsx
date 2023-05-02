import React, { Dispatch, SetStateAction, useState } from "react";
import { useRecoilValue } from "recoil";
import DownIcon from "../../assets/DownIcon";
import { SelectedTokenAtom } from "../../utils/atoms";
import { validateNumber } from "../../utils/validations";
import InputField from "../InputField";
import CardContainer from "./CardContainer";
import "../../styles/common.css";
import useBscTrade from "../../hooks/useBscTrade";

type CardPropType = {
  setOpenSearch: Dispatch<SetStateAction<boolean>>
}

const Card = ({ setOpenSearch }: CardPropType) => {
  const [investAmount, setInvestAmount] = useState("");
  const { name, ticker, icon } = useRecoilValue(SelectedTokenAtom) || {};
  const price = useBscTrade();

  return (
    <CardContainer>
      {/* current value section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="font-extralight text-xs text-grey">Current value</p>
        <p className="text-xl font-semibold text-primary">₹{price}</p>
      </div>

      {/* selected token section */}
      <button onClick={() => setOpenSearch(true)} className="w-full mt-5 bg-navy-blue py-2 px-6 rounded-xl flex justify-between items-center">
        <div className="flex items-center gap-x-[1vw] font-light">
          <img
            src={icon}
            alt={"bsc token icon"}
            className="w-7 h-7 rounded-full"
          />
          <p className="hidden sm:flex text-sm">{name}</p>
          <p className="flex sm:hidden text-sm">{ticker}</p>
        </div>
        <DownIcon />
      </button>

      {/* section to specify amount */}
      <div className="mt-8">
        <p className="font-extralight mb-3 ml-1 text-xs">
          Amount you want to invest
        </p>
        <InputField
          rightElement={<p className="font-extralight">INR</p>}
          value={investAmount}
          validation={validateNumber}
          setter={(value) => setInvestAmount(value)}
        />
      </div>

      {/* section to show estimate count */}
      <div className="mt-8">
        <p className="font-extralight mb-3 ml-1 text-sm">
          Estimate Number of {ticker} You will Get
        </p>
        <div className="mt-3 bg-navy-blue py-2.5 px-8 rounded-xl text-grey-2 text-xl font-medium flex justify-between items-center">
          {Number(price) ? (Number(investAmount) / Number(price)).toFixed(2) : "0.00"}
        </div>
      </div>

      {/* Action section */}
      <button className="mt-10 w-full animated-gradient text-xl font-medium py-2 rounded-full">
        Buy
      </button>
    </CardContainer>
  );
};

export default Card;
