import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"
// import { IoHomeSharp } from "react-icons/io5";
// import { FaSackDollar } from "react-icons/fa6";
// import { FiRefreshCcw } from "react-icons/fi"; 

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          ☰
        </button>
        <nav>
          <ul>
            <li><Link className="side-txt" to="/dashboard">🏠 Dashboard</Link></li>
            <li><Link className="side-txt" to="/dashboard/applyLoan">💰 Apply for Loan</Link></li>
            <li><Link className="side-txt" to="/dashboard/deposit">🔄 Deposit</Link></li>
            <li><Link className="side-txt" to="/dashboard/loanPayment">📜 Loan Repayment</Link></li>
            <li><Link className="side-txt" to="/settings">⚙️ Settings</Link></li>
            <li><Link className="side-txt" to="/settings">⚙️ Settings</Link></li>
            <li><Link className="side-txt" to="/settings">⚙️ Settings</Link></li>
          </ul>
        </nav>
      </aside>
  );
};

export default Sidebar;
