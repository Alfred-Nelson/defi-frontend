import React from "react";
import { useRecoilValue } from "recoil";
import { SelectedTokenAtom } from "../../utils/atoms";
import "../../styles/card.css";

type CardContainerPropType = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: CardContainerPropType) => {
  const { icon } = useRecoilValue(SelectedTokenAtom) || {};

  return (
    <div className="relative flex flex-col items-center w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[30vw] py-[4vh]">
      
      {/* Icon section with curved sides */}
      <div className="flex items-end relative top-[12px] w-full px-[1px]">
        <div className="shadow-[0_0_0_1px_#46425E] -mr-[2px] bg-primary-bg rounded-t-3xl w-full h-8"></div>

        <div
          style={{
            background:
              "linear-gradient(to bottom, #000000 40%, #46425E 94%, #46425E 100%)",
          }}
          className="relative top-[13px] z-20 h-[76px] w-[76px] min-w-[76px] rounded-full flex justify-center items-center"
        >
          <img
            src={icon}
            alt={"bsc token icon"}
            className="icon w-[53px] h-[53px] rounded-full object-contain"
          />
        </div>

        <div className="shadow-[0_0_0_1px_#46425E] -ml-[2px] bg-primary-bg rounded-t-3xl w-full h-8"></div>
      </div>

      {/* The section that shows the card items */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #46425E 1%, #46425E 60%, #0000 100%)",
        }}
        className="px-[1px] w-full"
      >
        <div className="relative z-10 rounded-b-3xl bg-primary-bg min-h-[30vh] w-full pt-12 px-10 pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
