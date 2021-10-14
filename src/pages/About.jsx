import React from 'react'
import Myimg from '../img/download.jpg'

export default function About() {
    return (
        <div className="h-auto flex bg-gray-600 justify-center">
            <div className="w-auto ">
                <div className="flex m-12 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-4xl">About Me</h1>
                        <div className="ml-16 mt-3 bg-green-600 w-8 h-1"></div>
                    </div>
                </div>
                <div className="bg-gray-500 flex m-16 h-80 drop-shadow-2xl rounded-sm">
                    <div className="my-8 w-120 h-80 justify-items-center">
                        <div className="m-16">
                            <h1>
                                My name is Andrew Christian Widjojo, people call me Andrew.
                                I'm currently an undergraduate
                                student majoring in Cyber Security. I
                                have a great curiosity and desire to
                                learn about Computer Science
                                especially about IT Security.
                            </h1>
                        </div>
                    </div>
                    <div className="w-auto h-80">
                        <img className="pl-7 h-80" src={Myimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
