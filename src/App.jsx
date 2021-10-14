import logo from './logo.svg'
import './App.css'
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="text-green-400 font-semibold">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
