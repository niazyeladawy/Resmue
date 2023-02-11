import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ResumeDataContext } from '../../context/resumeContext';
import './Footer.css'

function Footer() {
    const { data } = useContext(ResumeDataContext);

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
            <p>{data?.name}</p>
            <p>&copy;	{year} all right reserved Developed By {data?.name}, Idea by Tavonline.</p>
        </div>
    )
}

export default Footer
