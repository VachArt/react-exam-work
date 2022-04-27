import React from 'react'
import {BsCheck} from 'react-icons/bs'


const Check = ({isComleted}) => {
    return (
        <div className='borer'>
            {isComleted &&
            <BsCheck size={24} className='text-gray-900'/>
            }
        </div>
    )
}

export default Check
