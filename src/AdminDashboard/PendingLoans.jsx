import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchPendingLoans();
  }, []);

  const fetchPendingLoans = async () => {
    try {
      const response = await axios.get("/api/admin/loans/pending");
      setLoans(response.data);
    } catch (error) {
      console.error("Error fetching loans", error);
    }
  };

  const handleDecision = async (loanId, decision) => {
    try {
      await axios.post("/api/admin/loan/decision", { loanId, decision });
      fetchPendingLoans();
    } catch (error) {
      console.error("Error updating loan status", error);
    }
  };

  return (
    <div className="container">
      <h2>Pending Loan Applications</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Repayment Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.user.firstName} {loan.user.lastName}</td>
              <td>${loan.amount}</td>
              <td>{new Date(loan.repaymentDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDecision(loan.id, "APPROVED")}>Approve</button>
                <button onClick={() => handleDecision(loan.id, "REJECTED")} className="reject">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingLoans;
