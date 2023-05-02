import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SearchIcon from "../assets/SearchIcon";
import TickIcon from "../assets/TickIcon";
import Card from "../components/Card";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import useDebounceFilter from "../hooks/useDebounceFilter";
import { TokenType } from "../types/binance.types";
import { AllTokenAtom, SelectedTokenAtom } from "../utils/atoms";

const Home = () => {
  const [openSeach, setOpenSearch] = useState(false);
  const [allTokens, setAllTokens] = useRecoilState(AllTokenAtom);
  const [selectedToken, setSelectedToken] = useRecoilState(SelectedTokenAtom);

  const fetchAllTokens = async () => {
    const { data: tokens } = await axios.get("/bsc-tokens.json");
    setAllTokens(tokens);
    setSelectedToken(tokens[0]);
  };

  /**
   *
   * @param eachData each token
   * @param searchVal search string
   * @returns a boolean that shows whether the name or ticker of the token has the search string
   */
  const filterTokens = (eachData: TokenType, searchVal: string) =>
    eachData.name.toLowerCase().includes(searchVal.toLowerCase()) ||
    eachData.ticker.toLowerCase().includes(searchVal.toLowerCase());

  useEffect(() => {
    fetchAllTokens();
  }, []);

  const { search, setSearch, filteredData } = useDebounceFilter({
    data: allTokens || [],
    filterFunction: filterTokens,
  });

  if (!selectedToken) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card setOpenSearch={setOpenSearch} />
      <AnimatePresence>
        {openSeach && (
          <Modal onClose={() => setOpenSearch(false)}>
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-base font-medium text-white dark:text-white"
              leftElement={<SearchIcon />}
              placeholder="Search token"
            />
            <div className="mt-8 h-[41vh] overflow-y-auto">
              {filteredData.map((each) => (
                <button
                  onClick={() => {
                    setSelectedToken(each)
                    setOpenSearch(false)
                  }}
                  className="w-full py-5 px-3 list-none flex items-center justify-between hover:bg-[#1B192D] rounded-md transition ease-in-out"
                  key={each.ticker}
                >
                  <div className="flex items-center gap-x-4">
                    <img
                      src={each.icon}
                      alt="token icon"
                      className="w-5 h-5 rounded-full"
                    />
                    {each.name}
                  </div>
                  {selectedToken.ticker === each.ticker && <TickIcon />}
                </button>
              ))}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
