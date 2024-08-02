import React from 'react'
import './Programs.css'
import program_1 from '../../Assets/program-1.png'
import program_2 from '../../Assets/program-2.png'
import program_3 from '../../Assets/program-3.png'
import program_icon_1 from '../../Assets/program-icon-1.png'
import program_icon_2 from '../../Assets/program-icon-2.png'
import program_icon_3 from '../../Assets/program-icon-3.png'

const Programs = () => {
  return ( 
    <div className='Programs'>
        <div className='program1'>
            <img src={program_1} alt='' />
                <div className='caption'>
                    <img src={program_icon_1} alt='' ></img>
                    <p>Graduation Degree</p>
                </div>
        </div>

        <div className='program2'>
            <img src={program_2} alt='' />
                <div className='caption'>
                    <img src={program_icon_2} alt='' ></img>
                    <p>Master Degree</p>
                </div>
        </div>

        <div className='program3'>
            <img src={program_3} alt='' />
            <div className='caption'>
                <img src={program_icon_3} alt='' ></img>
                <p>Post Graduation </p>
            </div>
        </div>


    </div>
  )
}

export default Programs