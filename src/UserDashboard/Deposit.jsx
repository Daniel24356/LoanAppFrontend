import { useState } from "react";
import axios from "axios";
import "./Deposit.css"

const DepositPage = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("Authorization");

  const handleDeposit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3040/api/v1/login/deposit",
        { amount: parseFloat(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message);
      setAmount(""); // Reset input after successful deposit
    } catch (error) {
      setMessage("Deposit failed. Try again.");
    }
  };

  return (
    <div className="deposit-container">
      <h2>Deposit Funds</h2>
      <input
        className="deposit-input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DepositPage;
