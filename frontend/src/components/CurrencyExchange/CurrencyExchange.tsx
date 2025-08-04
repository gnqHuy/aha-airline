import React from "react";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { useCurrencyConverter } from "../../store/hooks/useCurrencyConverter";

const CurrencyConverter: React.FC = () => {
  const {
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
  } = useCurrencyConverter();

  const renderSelect = (isForCurrency: boolean) => (
    <select
      value={isForCurrency ? currency : "VND"}
      onChange={(e) => isForCurrency && handleCurrencyChange(e.target.value)}
      className="p-2 text-lg border-none focus:outline-none"
    >
      {isForCurrency
        ? Object.keys(exchangeRates).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))
        : <option>VND</option>}
    </select>
  );

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
