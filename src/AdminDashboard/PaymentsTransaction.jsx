import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentsTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("/api/admin/transactions");
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading transactions...</p>;
  }

  return (
    <div className="transactions-container">
      <h2>Payments & Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.user.firstName} {transaction.user.lastName}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
              <td>{new Date(transaction.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTransactions;
