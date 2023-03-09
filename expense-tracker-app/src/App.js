import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.component';
import Balance from './components/Balance.component';
import AccountSummary from './components/AccountSummary.component';
import TransactionHistory from './components/TransactionHistory.component';

function App() {
  return (
    <div className="mt-20 mx-auto w-2/4 flex flex-col justify-center items-center">
     <Header />
     <div className='mt-6 w-full text-center'>
     <Balance />
     <AccountSummary />
     <TransactionHistory />
     </div>
    </div>
  );
}

export default App;
