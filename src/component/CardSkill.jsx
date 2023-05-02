import React from 'react'

const CardSkill = ({skill}) => {
    return (
        <div>
            <div className="m-4 ">
                <div className=' w-40 h-40'>
                    <div className='flex justify-center'>
                        <img src={skill.urlImg} className="w-20 h-2020" alt="broken" />
                    </div>
                    <div className="flex justify-center">
                        <div className='text-gren-400 text-2xl'>
                            {skill.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkill
