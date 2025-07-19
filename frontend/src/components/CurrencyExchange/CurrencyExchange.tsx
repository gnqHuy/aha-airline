import React, { useState, useEffect } from "react";
import { MdOutlineCurrencyExchange } from "react-icons/md";

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [currency, setCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState<number | string>("");
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReversed, setIsReversed] = useState(false); 

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://v6.exchangerate-api.com/v6/2db1473f36cb4db8815a577c/latest/VND");
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.json();
        if (data.result !== "success") {
          throw new Error("Invalid API response");
        }
        setExchangeRates(data.conversion_rates);
      } catch (err: any) {
        setError(err.message || "Failed to load exchange rates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleAmountChange = (value: string) => {
    setAmount(value);

    const rate = exchangeRates[currency];
    const numericValue = parseFloat(value);

    if (!isNaN(numericValue) && rate) {
      setConvertedAmount(
        isReversed
          ? (numericValue * rate).toFixed(2) 
          : (numericValue / rate).toFixed(2)
      );
    } else {
      setConvertedAmount("");
    }
  };

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);

    const rate = exchangeRates[newCurrency];
    const numericValue = parseFloat(amount.toString());

    if (!isNaN(numericValue) && rate) {
      setConvertedAmount(
        isReversed
          ? (numericValue * rate).toFixed(2)
          : (numericValue / rate).toFixed(2)
      );
    } else {
      setConvertedAmount("");
    }
  };

  const handleReverse = () => {
    setIsReversed((prev) => !prev); 
    setAmount(0);
    setConvertedAmount(0);
  };

  const renderSelect = (isForCurrency: boolean) => {
    if (isForCurrency) {
      return (
        <select
          value={currency}
          onChange={(e) => handleCurrencyChange(e.target.value)}
          className="p-2 text-lg border-none focus:outline-none"
        >
          {Object.keys(exchangeRates).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select className="p-2 text-lg border-none focus:outline-none">
          <option>VND</option>
        </select>
      );
    }
  };

  return (
    <div className="currency-converter p-4 my-10 max-w-3xl bg-gray-100 shadow rounded">
      <p className="text-2xl font-semibold m-0 mb-4 text-ahaAmber-2">Currency Conversation</p>
      {loading ? (
        <p>Loading exchange rates...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="relative flex w-full">
          <div className="flex items-center w-full bg-white">
            <input
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              placeholder="0"
              className="w-full text-base p-1 border-none focus:outline-none"
            />
            {isReversed ? renderSelect(false) : renderSelect(true)}
          </div>

          <MdOutlineCurrencyExchange
            onClick={handleReverse}
            className="text-3xl text-ahaAmber-2 hover:text-ahaAmber-1 py-2 px-4 w-1/4"
          />

          <div className="flex items-center w-full bg-white">
            <input
              type="text"
              value={convertedAmount}
              readOnly
              placeholder="0"
              className="w-full text-base p-1 border-none focus:outline-none"
            />
            {isReversed ? renderSelect(true) : renderSelect(false)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
