import React from "react";
import PropTypes from "prop-types";

import classes from "./TransactionHistory.module.scss";

const TransactionHistory = ({ items }) => {
  const Trow = items.map((item) => {
    const { id, type, amount, currency } = item;
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={classes["transaction-history"]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{Trow}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
