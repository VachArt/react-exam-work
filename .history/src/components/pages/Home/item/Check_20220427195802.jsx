import React from 'react'
import {BsCheck} from 'react-icons/bs'


const Check = ({isComleted}) => {
    return (
        <div className={`border-2 rounded-lg border-pink-400 ${isCompsleted ? 'bg-pink-400' : ''} w-5 h-5 mr-3`}>
            {isCompleted && <BsCheck size={24}
            className='text-gray-900'/>}
        </div>
    )
}

export default Check
