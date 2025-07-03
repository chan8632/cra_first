import { use, useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  // 코인들 정보
  const [coins, setCoins] = useState([]);
  // 달러 state
  const [dollar, setDollar] = useState(0);
  // 코인 몇 개 살 수 있냐.
  const [coinCount, setCoinCount] = useState(0);
  // 코인 가치
  const [coinValue, setCoinValue] = useState(0);
  // 코인 정보 가져오고 coin state에 정보 가져오기
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const dollarChange = (event) => {
    setDollar(event.target.value);
  };
  const coinSelect = (event) => {
    const data = event.target.value;
    const selectedCoinValue = parseInt(data.match(/\$(\d+)\./)[1], 10);
    setCoinValue(selectedCoinValue);
  };
  useEffect(() => {
    const selectedCoinCount = Math.floor(dollar / coinValue);
    setCoinCount(selectedCoinCount);
  }, [dollar, coinValue])
  return (
    <div>
      <h1>The Coins! {loading ? null : coins.length}</h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <select onChange={coinSelect}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <input
        onChange={dollarChange}
        value={dollar}
        type="number"
        placeholder="달러를 작성하세요"
      />
      <span>$</span>
      <div>{coinCount}개 살 수 있습니다.</div>
    </div>
  );
}

export default App;
