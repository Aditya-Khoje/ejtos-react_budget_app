// CurrencyDropdown.js
import React from "react";

const CurrencyDropdown = ({ setSelectedCurrency }) => {
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="dropdown">
      <select
        className="btn-green"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        // id="currency"
        onChange={handleCurrencyChange}
      >
        <option value="$">Currency ($ Dollar)</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
