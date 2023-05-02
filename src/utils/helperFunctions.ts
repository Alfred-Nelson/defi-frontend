export const convertToINR = (data: string) => {
  const inr = (Number(data) || 0) * 80;
  const inrRound = inr.toFixed(2);
  return inrRound;
};
