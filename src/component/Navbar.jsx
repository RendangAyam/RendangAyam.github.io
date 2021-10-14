import React from 'react'
import { useState } from "react"

const Navbar = () => {
	const [isVisible, setstate] = useState(false)

    const toggleVisible = () => {
        setstate(!isVisible)
    }
	
    return (
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
					<div className="md:hidden flex items-left left-0" onClick={toggleVisible}>
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
    )
}

export default Navbar
