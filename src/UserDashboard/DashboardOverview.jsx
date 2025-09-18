import { useEffect, useState } from "react";
import axios from "axios";
import "./DashboardOverview.css"

const DashboardOverview = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("Authorization"); // Assuming authentication token is stored in localStorage
   console.log(token)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3040/api/v1/loan/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data)
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <p>Loading...</p>;
  if (!user) return <p>No user data available</p>;

  return (
    <div className="dashboard-containers">
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Balance</h3>
          <p>${user.balance}</p>
        </div>
        <div className="card">
          <h3>Credit Score</h3>
          <p>{user.creditScore}</p>
        </div>
        <div className="card">
          <h3>Loans</h3>
          <p>Pending: {user.pendingLoans} | Approved: {user.approvedLoans} | Paid: {user.paidLoans}</p>
        </div>
      </div>

       <div className="dash-over">
      <h3>User Details</h3>
      <ul>
        <li><strong>Name:</strong> {user.firstName} {user.lastName}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Balance:</strong> ${user.balance}</li>
        <li><strong>Credit Score:</strong> {user.creditScore}</li>
        <li><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</li>
      </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;
