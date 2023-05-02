import React from 'react'
import CardSkill from '../component/CardSkill'


const Coding = () => {
    const C = {
        name: 'C++',
        urlImg: 'https://cdn-icons-png.flaticon.com/512/919/919841.png'
    }
    const Java = {
        name: 'Java',
        urlImg: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
    }
    const Python = {
        name: 'Python',
        urlImg: 'https://cdn-icons-png.flaticon.com/512/919/919852.png'
    }
    const Html = {
        name: 'Html',
        urlImg: 'https://cdn-icons-png.flaticon.com/512/888/888859.png'
    }
    const PHP = {
        name: 'PHP',
        urlImg: 'https://cdn-icons-png.flaticon.com/512/528/528261.png'
    }
    const React = {
        name: 'React',
        urlImg: 'https://cdn-icons-png.flaticon.com/512/919/919851.png'
    }
    const Laravel = {
        name: 'Laravel',
        urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/500px-Laravel.svg.png'
    }
    const VScode = {
        name: 'Visual Studio',
        urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/500px-Visual_Studio_Code_1.35_icon.svg.png'
    }

    return (
        <div className="bg-gray-900 flex h-auto justify-center">
            <div className="">
                <div className="flex m-12 justify-center">
                    <div className="flex-col ">
                        <h1 className="text-4xl">Coding Skills</h1>
                        <div className="flex justify-center">
                            <div className="mt-4 bg-yellow-400 w-8 h-1"></div>
                        </div>
                    </div>
                </div>
                <div className="m-8 mx-48">
                    <div className="flex flex-wrap justify-evenly ">
                        <CardSkill skill={C}/>
                        <CardSkill skill={Java}/>
                        <CardSkill skill={Python}/>
                        <CardSkill skill={Html}/>
                        <CardSkill skill={PHP}/>
                        <CardSkill skill={React}/>
                        <CardSkill skill={Laravel}/>
                        <CardSkill skill={VScode}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coding
