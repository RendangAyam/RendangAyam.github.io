import React, { useState } from 'react'

const Project = () => {
    const [hoveringRecipe, setHoverRecipe] = useState(false);
    const [hoveringTiming, setHoverTiming] = useState(false);
    const onHoverRecipe = () => {
        setHoverRecipe(true);
    };
    
    const onLeaveRecipe = () => {
        setHoverRecipe(false);
    };
    const onHoverTiming = () => {
        setHoverTiming(true);
    };

    const onLeaveTiming = () => {
        setHoverTiming(false);
    };

    
    return (
        <div className="bg-gray-900 h-auto flex justify-center">
            <div className="w-auto mb-4">
                <div className="flex m-12 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-4xl">My Projects</h1>
                        <div className="flex justify-center">
                            <div className="mt-4 bg-yellow-400 w-8 h-1"></div>
                        </div>
                    </div>
                </div>
                <div className="m-8">
                    <div className="flex flex-wrap justify-evenly">
                        <button className="m-8" onMouseEnter={onHoverRecipe} onMouseLeave={onLeaveRecipe}>
                            <div className='w-30 h-30 '>
                                <div className='w-80 img-back-Recipemaster rounded-lg ' >
                                    {hoveringRecipe &&
                                        <a href="https://github.com/RendangAyam/RecipeMaster" className="transition duration-300">
                                            <div className=" rounded-lg img-frame bg-black " style={{opacity: .7}}>
                                                <div className="img-frame grid justify-item-center">
                                                    <div className='text-yellow-400 text-2xl item-center mt-8'>
                                                        RecipeMaster
                                                    </div>
                                                    <div className='text-yellow-400 text-md'>
                                                        RecipeMaster is app forum for all kind of recipes.
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    }
                                </div>
                            </div>
                        </button>
                        <button className="m-8" onMouseEnter={onHoverTiming} onMouseLeave={onLeaveTiming}>
                            <div className='w-30 h-30 '>
                                <div className='w-80 img-back-Timing rounded-lg' >
                                    {hoveringTiming &&
                                        <a href="https://teaming-teal.vercel.app/dashboard">
                                            <div className=" rounded-lg img-frame bg-black" style={{opacity: .7}}>
                                                <div className="img-frame grid justify-item-center">
                                                    <div className='text-yellow-400 text-2xl item-center mt-8'>
                                                        Teaming
                                                    </div>
                                                    <div className='text-yellow-400 text-md'>
                                                        Teaming is life style app for managing your time based on your location. 
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    }
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
