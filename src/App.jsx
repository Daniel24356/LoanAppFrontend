import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from './pages/login';
import Forms from './pages/register';
import DashboardOverview from './UserDashboard/DashboardOverview';
import ApplyLoanPage from './UserDashboard/ApplyLoan';
import DepositPage from './UserDashboard/Deposit';
import LoanRepaymentPage from './UserDashboard/LoanRepayment';
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
    <>
     <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} >
          <Route index   element={<DashboardOverview />} />
          <Route path="applyLoan" element={<ApplyLoanPage/>} /> 
          <Route path="deposit" element={<DepositPage/>} />
          <Route path="loanPayment" element={<LoanRepaymentPage/>} />
          </Route>
          <Route path="/login" element={<Form/>} />
          <Route path="/register" element={<Forms/>} />
        </Routes>
      </Router> 
    </>
  )
}


export default App
