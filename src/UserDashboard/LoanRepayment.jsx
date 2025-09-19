// import { useState } from "react";
// import axios from "axios";
// import "./LoanRepayment.css"

// const LoanRepaymentPage = () => {
//   const [loanId, setLoanId] = useState("");
//   const [amount, setAmount] = useState("");
//   const [message, setMessage] = useState("");
//   const token = localStorage.getItem("Authorization");

//   const handleLoanRepayment = async () => {
//     try {
//       const response = await axios.post(
//         `http://localhost:3040/api/v1/loan/pay/${loanId}`,
//         { amount: parseFloat(amount) },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMessage(response.data.message);
//       setLoanId("");
//       setAmount("");
//     } catch (error) {
//       setMessage("Loan repayment failed. Try again.");
//     }
//   };

//   return (
//     <div className="repayment-container">
//       <h2>Repay Loan</h2>
//       <input
//         className="repay-input"
//         type="text"
//         value={loanId}
//         onChange={(e) => setLoanId(e.target.value)}
//         placeholder="Enter loan ID"
//       />
//       <input
//       className="repay-input"
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Enter repayment amount"
//       />
//       <button onClick={handleLoanRepayment}>Repay</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default LoanRepaymentPage;
