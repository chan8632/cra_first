import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [coinCount, setCoinCount] = useState(0);
  const [selectedCoinValue, setSelectedCoinValue] = useState(0);

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
    const match = data.match(/\$(\d+)\./);
    if (match) {
      const coinValue = parseInt(match[1], 10);
      setSelectedCoinValue(coinValue);
    }
  };

  // dollar 또는 선택된 코인 가격이 바뀔 때마다 재계산
  useEffect(() => {
    if (selectedCoinValue && dollar) {
      const count = Math.floor(dollar / selectedCoinValue);
      setCoinCount(count);
    } else {
      setCoinCount(0);
    }
  }, [dollar, selectedCoinValue]);

  return (
    <div>
      <h1>The Coins! {loading ? null : coins.length}</h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <select onChange={coinSelect} defaultValue="">
          <option value="" disabled>
            코인을 선택하세요
          </option>
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
