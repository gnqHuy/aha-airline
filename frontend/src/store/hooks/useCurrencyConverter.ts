import { useEffect, useState } from "react";

export const useCurrencyConverter = () => {
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
        if (!response.ok) throw new Error("Failed to fetch exchange rates");

        const data = await response.json();
        if (data.result !== "success") throw new Error("Invalid API response");

        setExchangeRates(data.conversion_rates);
      } catch (err: any) {
        setError(err.message || "Failed to load exchange rates");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleAmountChange = (value: string) => {
    setAmount(value);
    convert(value, currency, isReversed);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    convert(amount, newCurrency, isReversed);
  };

  const convert = (val: string | number, curr: string, reversed: boolean) => {
    const rate = exchangeRates[curr];
    const numericValue = parseFloat(val.toString());
    if (!isNaN(numericValue) && rate) {
      const result = reversed
        ? numericValue * rate
        : numericValue / rate;
      setConvertedAmount(result.toFixed(2));
    } else {
      setConvertedAmount("");
    }
  };

  const handleReverse = () => {
    setIsReversed((prev) => !prev);
    setAmount(0);
    setConvertedAmount(0);
  };

  return {
    amount,
    currency,
    convertedAmount,
    exchangeRates,
    loading,
    error,
    isReversed,
    handleAmountChange,
    handleCurrencyChange,
    handleReverse,
  };
};
