import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { AllTokenAtom, SelectedTokenAtom } from "../utils/atoms";

const Home = () => {
  const setAllTokens = useSetRecoilState(AllTokenAtom);
  const [selectedToken, setSelectedToken] = useRecoilState(SelectedTokenAtom);

  const fetchAllTokens = async () => {
    const { data: tokens } = await axios.get("/bsc-tokens.json");
    setAllTokens(tokens);
    setSelectedToken(tokens[7]);
  };

  useEffect(() => {
    fetchAllTokens();
  }, []);

  if (!selectedToken) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card />
    </div>
  );
};

export default Home;
