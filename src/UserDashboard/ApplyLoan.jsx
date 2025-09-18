// import { useState } from "react";
// import axios from "axios";
// import "./ApplyLoan.css"

// const ApplyLoanPage = () => {
//   const [amount, setAmount] = useState("");
//   const [repaymentDate, setRepaymentDate] = useState("");
//   const [message, setMessage] = useState("");
//   const token = localStorage.getItem("Authorization");
   
//   const handleApplyLoan = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3040/api/v1/loan",
//         { amount: parseFloat(amount), repaymentDate },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMessage(response.data.message);
//       setAmount("");
//       setRepaymentDate("");
//     } catch (error) {
//       setMessage("Loan application failed. Try again.");
//     }
//   };

//   return (
//     <div className="loan-container">
//       <h2>Apply for a Loan</h2>
//       <input
//         className="apply-input"
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Enter loan amount"
//       />
//       <input
//         className="apply-input"
//         type="date"
//         value={repaymentDate}
//         onChange={(e) => setRepaymentDate(e.target.value)}
//       />
//       <button onClick={handleApplyLoan}>Apply</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ApplyLoanPage;
