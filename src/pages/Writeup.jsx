import React from 'react'

const Writeup = () => {
    return (
        <div className="bg-gray-800 h-auto flex justify-center">
            <div className="w-auto mb-4">
                <div className="hidden md:flex m-12 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-4xl">My Write Up</h1>
                        <div className="flex justify-center">
                            <div className="mt-4 bg-yellow-400 w-8 h-1"></div>
                        </div>
                    </div>
                </div>
                <div className="m-8 mb-12">
                    <div className="w-108 flex justify-center hover:text-yellow-400 transition duration-300">
                        <a href="https://docs.google.com/document/d/1n31PhCIXDgvPnNXfLiQYeRLja4UfD4AA/edit?usp=sharing&ouid=104861427052187344220&rtpof=true&sd=true" className="text-xl">
                            <div>
                                CTF Kompetisi Komunitas Siber TNI-AD 2021
                            </div>
                            <div className="text-sm text-gray-400 ml-12">
                                Category Undergraduate
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writeup
