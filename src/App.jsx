import logo from './logo.svg'
import './App.css'
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import About from './pages/About.jsx';
import Landing from './pages/Landing.jsx';
import React,{createRef, useState} from 'react';


function App() {
  const [isVisible, setstate] = useState(false);

  const toggleVisible = () => {
    setstate(!isVisible)
  };


  return (
      <div className="text-green-400 font-semibold">
          <nav className="bg-gray-700 ">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-center">
                <div className="flex space-x-7">
                  <div class="hidden md:flex items-center space-x-1">
                    <button className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Home</button>
                    <button className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">About me</button>
                    <button className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Coding</button>
                    <button className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Projects</button>
                    <button className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Portfolio</button>
                    <button className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Contact</button>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-left" onClick={toggleVisible}>
                  <button className="outline-none">
                  <svg className=" w-6 h-6 text-white hover:text-blue-400 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  </button>
                </div>
              </div>
            </div>
                  <div className={`${isVisible ? "block" : "hidden"}`}>
              <ul className="">
                <li className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Home</li>
                <li className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">About me</li>
                <li className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Coding</li>
                <li className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Projects</li>
                <li className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Portfolio</li>
                <li className="py-4 px-2 text-green-400 hover:text-green-600 transition duration-300 text-md">Contact</li>
              </ul>
            </div>
          </nav>
          <div>
            <Landing />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Footer />
          </div>
      </div>
    );
}

export default App;
