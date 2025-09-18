import React, { useEffect, useState } from "react";
import axios from "axios";

const UserLoanManagement = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserLoans();
  }, []);

  const fetchUserLoans = async () => {
    try {
      const response = await axios.get("/api/admin/user-loans");
      setLoans(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user loans:", error);
      setLoading(false);
    }
  };

  const updateLoanStatus = async (loanId, status) => {
    try {
      await axios.put(`/api/admin/update-loan/${loanId}`, { status });
      setLoans((prevLoans) =>
        prevLoans.map((loan) =>
          loan.id === loanId ? { ...loan, status } : loan
        )
      );
    } catch (error) {
      console.error("Error updating loan status:", error);
    }
  };

  if (loading) {
    return <p>Loading loans...</p>;
  }

  return (
    <div className="container">
      <h2>User Loan Management</h2>
      <table>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.user.firstName} {loan.user.lastName}</td>
              <td>${loan.amount}</td>
              <td>{loan.status}</td>
              <td>
                <button onClick={() => updateLoanStatus(loan.id, "PAID")} className="approve">Mark as Paid</button>
                <button onClick={() => updateLoanStatus(loan.id, "DEFAULTED")} className="reject">Mark as Defaulted</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLoanManagement;
