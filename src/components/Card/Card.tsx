import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import DownIcon from "../../assets/DownIcon";
import { SelectedTokenAtom } from "../../utils/atoms";
import { validateNumber } from "../../utils/validations";
import InputField from "../InputField";
import CardContainer from "./CardContainer";
import "../../styles/common.css";
import useBscTrade from "../../hooks/useBscTrade";

const Card = () => {
  const [investAmount, setInvestAmount] = useState("");
  const { name, ticker, icon } = useRecoilValue(SelectedTokenAtom) || {};
  const price = useBscTrade();

  return (
    <CardContainer>
      {/* current value section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="font-extralight text-grey">Current value</p>
        <p className="text-2xl font-semibold text-primary">₹{price}</p>
      </div>

      {/* selected token section */}
      <button className="w-full mt-5 bg-navy-blue py-3 px-6 rounded-xl flex justify-between items-center">
        <div className="flex items-center gap-x-4 font-light">
          <img
            src={icon}
            alt={"bsc token icon"}
            className="w-8 h-8 rounded-full"
          />
          <p className="hidden sm:flex">{name}</p>
          <p className="flex sm:hidden">{ticker}</p>
        </div>
        <DownIcon />
      </button>

      {/* section to specify amount */}
      <div className="mt-12">
        <p className="font-extralight mb-5 ml-1 text-sm">
          Amount you want to invest
        </p>
        <InputField
          value={investAmount}
          validation={validateNumber}
          setter={(value) => setInvestAmount(value)}
        />
      </div>

      {/* section to show estimate count */}
      <div className="mt-12">
        <p className="font-extralight mb-3 ml-1 text-sm">
          Estimate Number of {ticker} You will Get
        </p>
        <div className="mt-5 bg-navy-blue py-2.5 px-6 rounded-xl text-grey-2 text-2xl font-medium flex justify-between items-center">
          {Number(price) ? (Number(investAmount) / Number(price)).toFixed(2) : "0.00"}
        </div>
      </div>

      {/* Action section */}
      <button className="mt-14 w-full animated-gradient text-xl font-medium py-3 rounded-full">
        Buy
      </button>
    </CardContainer>
  );
};

export default Card;
