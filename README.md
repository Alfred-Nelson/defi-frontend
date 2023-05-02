# Neofi frontend

## Setup project
install all deps: `npm i`
<br />
start the project: `npm run dev`


## About the project
1. Uses websocket to subscribe to trade stream in binance
2. Since the tokens should be from the binance chain and could not find a proper api for that, declared a few tokens as json in the public folder and called it axios calls.
3. Price update from USDT to INR from trade ws
4. Estimate number of token that can be bought from the entered amount calculation.
5. Search from the fetched db. ( improve: could have used react-query for cache )
6. Change the token from the search modal hence changing the subscription.
7. Basic navigation
8. Responsiveness
9. Few animation with framer motion
10. Debounced search with useDebounceFilter hook
11. Amount validation in card
12. Reusable components
13. Typescript and Tailwind implementation.
14. Toast to show if subscription was successfully connected.

