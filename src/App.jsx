import './App.css'
import Footer from './component/Footer.jsx';
import About from './pages/About.jsx';
import Landing from './pages/Landing.jsx';
import React,{createRef, useState} from 'react';
import Coding from './pages/Coding.jsx';
import Project from './pages/Project.jsx';
import Writeup from './pages/Writeup.jsx';


function App() {
  const [isVisible, setstate] = useState(false);

  const toggleVisible = () => {
    setstate(!isVisible)
  };


  return (
      <div className="text-white font-semibold">
        <nav className="bg-gray-900">
          <div className=" flex item-center">
            <div className="">
                {/* Mobile menu button */}
              <div className="lg:hidden items-left ml-4 w-12 h-16 flex item-center" onClick={toggleVisible}>
                <button className="outline-none">
                <svg className=" w-6 h-6 text-white hover:text-yellow-400 transition duration-300"
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

              <div className="flex space-x-7 w-screen justify-center">
                <div class="hidden lg:flex relative space-x-1">
                  <a href="/" className="py-4 px-2 text-white hover:text-yellow-400 transition duration-300 text-md">Home</a>
                  <a href="#skill" className="py-4 px-2 text-white hover:text-yellow-400 transition duration-300 text-md">Coding</a>
                  <a href="#projects" className="py-4 px-2 text-white hover:text-yellow-400 transition duration-300 text-md">Projects</a>
                  <a href="#writeup" className="py-4 px-2 text-white hover:text-yellow-400 transition duration-300 text-md">Write Up</a>
                  <a href="#contact" className="py-4 px-2 text-white hover:text-yellow-400 transition duration-300 text-md">Contact</a>
                </div>
              </div>

            </div>
          </div>
                <div className={`${isVisible ? "block" : "hidden"}`}>
            <ul className="">
              <li className="py-4 px-2">
                <a href="/" className="text-white hover:text-yellow-400 transition duration-300 text-md">Home</a>
              </li>
              <li className="py-4 px-2">
                <a href="#skill" className="text-white hover:text-yellow-400 transition duration-300 text-md">Coding</a>
              </li>
              <li className="py-4 px-2">
                <a href="#projects" className="text-white hover:text-yellow-400 transition duration-300 text-md">Projects</a>
              </li>
              <li className="py-4 px-2">
                <a href="#writeup" className="text-white hover:text-yellow-400 transition duration-300 text-md">Write Up</a>
              </li>
              <li className="py-4 px-2">
                <a href="#contact" className="text-white hover:text-yellow-400 transition duration-300 text-md">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Landing />
        </div>
        <div id="skill">
          <Coding />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="writeup">
          <Writeup />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    );
}

export default App;
