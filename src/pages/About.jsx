import React from 'react'
import Myimg from '../img/download.jpg'

export default function About() {
    return (
        <div className="h-auto flex bg-gray-900 justify-center">
            <div className="w-auto mb-4">
                <div className="hidden md:flex m-12 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-4xl">About Me</h1>
                        <div className="flex justify-center">
                            <div className="bg-yellow-400 w-8 h-1"></div>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-gray-500 lg:flex m-16 h-80 drop-shadow-2xl rounded-sm">
                    <div className="my-8 w-120 h-80 justify-items-center">
                        <div className="m-16">
                            <h1 className="">
                                My name is Andrew Christian Widjojo, you can call me Andrew.
                                I'm currently an undergraduate
                                student majoring in Cyber Security. I
                                have a great curiosity and desire to
                                learn about Computer Science
                                especially about IT Security.
                            </h1>
                        </div>
                    </div>
                    <div className="w-auto h-80">
                        <img className="pl-7 h-80 w-auto" src={Myimg} alt="" />
                    </div>
                </div>
                <div className="hidden lg:hidden bg-gray-500 md:flex m-16 h-80 drop-shadow-2xl rounded-sm">
                    <div className="my-8 w-96 h-80 justify-items-center">
                        <div className="m-16 mt-6">
                            <h1>
                                My name is Andrew Christian Widjojo, you can call me Andrew.
                                I'm currently an undergraduate
                                student majoring in Cyber Security. I
                                have a great curiosity and desire to
                                learn about Computer Science
                                especially about IT Security.
                            </h1>
                        </div>
                    </div>
                    <div className="w-auto h-80">
                        <img className=" h-80 w-auto" src={Myimg} alt="" />
                    </div>
                </div>
                <div className="hidden md:hidden sm:flex m-8 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-2xl">About Me</h1>
                        <div className="flex justify-center">
                            <div className=" mt-1 bg-yellow-400 w-8 h-1"></div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:hidden sm:flex bg-gray-500 m-8 h-36 drop-shadow-2xl rounded-sm">
                    <div className=" w-96 h-36 justify-items-center">
                        <div className="m-8">
                            <h1 className="text-xs">
                                My name is Andrew Christian Widjojo, you can call me Andrew.
                                I'm currently an undergraduate
                                student majoring in Cyber Security. I
                                have a great curiosity and desire to
                                learn about Computer Science
                                especially about IT Security.
                            </h1>
                        </div>
                    </div>
                    <div className="w-auto h-72">
                        <img className=" h-36 w-auto" src={Myimg} alt="" />
                    </div>
                </div>
                <div className="sm:hidden flex m-8 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-2xl">About Me</h1>
                        <div className="flex justify-center">
                            <div className=" mt-1 bg-yellow-400 w-8 h-1"></div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden flex bg-gray-500 m-16 h-36 drop-shadow-2xl rounded-sm">
                    <div className="w-80 h-36 justify-items-center">
                        <div className="mx-8 my-4">
                            <h1 className="text-xss">
                                My name is Andrew Christian Widjojo, you can call me Andrew.
                                I'm currently an undergraduate
                                student majoring in Cyber Security. I
                                have a great curiosity and desire to
                                learn about Computer Science
                                especially about IT Security.
                            </h1>
                        </div>
                    </div>
                    <div className="w-auto h-36">
                        <img className=" h-36 w-auto" src={Myimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
