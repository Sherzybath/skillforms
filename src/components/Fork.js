import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Fork({onSubmit}) {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption) {
        onSubmit(selectedOption);
        } else {
        alert('Please select an option.');
        }
    };
    const handleDivClick = (value) => {
        setSelectedOption(value)
    };
  return (
    <div className='Fork'>
        <span>Join as a Freelancer or Client</span>
        <div className='liner'>
            <div className='box' onClick={() => handleDivClick('A')} style={{
            border: selectedOption === 'A' ? ' #44375f solid 2px' : '#a596c4 solid 2px',
            }}>
                <FontAwesomeIcon icon={faUser} className='icons'/>
                <span>I’m a client, hiring for a project</span>
            </div>
            <div className='box' onClick={() => handleDivClick('B')} style={{
            border: selectedOption === 'B' ? '#44375f solid 2px' : '#a596c4 solid 2px',
            }}>
                <FontAwesomeIcon icon={faUser} className='icons'/>   
                <span>I’m a freelancer, looking for work</span>
            </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Fork