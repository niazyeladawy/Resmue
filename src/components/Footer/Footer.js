import React, { useEffect, useState } from 'react';
import resumeData from '../../utils/resumeData';
import './Footer.css'

function Footer() {
    const [year, setYear] = useState('');
    function getYear(){
        let date = new Date().getFullYear();
        setYear(date);
    }
    useEffect(() => {
        getYear();
    }, [])
    
    return (
        <div className="footer bg-dark rounded-3 text-white d-flex justify-content-between p-4">
            <p>{resumeData.name}</p>
            <p>&copy;	{year} all right reserved Developed By {resumeData.name}, Idea by Tavonline.</p>
        </div>
    )
}

export default Footer
