import porfileimg from "../../assets/images/pp.jpg";
import './Profile.css';
import CustomTimeLine, { CustomTimelineSeparator } from '../TimeLine/TimeLine';
import React from 'react';
import resumeData from '../../utils/resumeData';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Pdf from '../../utils/CV.pdf';


function Profile() {
    const CustomTimeLineItem = ({title,text,link})=>(
        <TimelineItem>
            <CustomTimelineSeparator/>
            <TimelineContent className='timeline_content'>
                {link ? (<p className='timeline_text'><span>{title}: </span><a href={link} target="blank">{text}</a></p>) : (<p className='timeline_text'><span>{title}: </span>{text}</p>)}
            </TimelineContent>
        </TimelineItem>
    );

    return (
        <div className="profile shadow rounded-3 bg-white">
            <div className="profile-name p-3">
                <h2 className="text-uppercase h3">{resumeData.name}</h2>
                <p className="text-muted">{resumeData.title}</p>
            </div>
            <div className="profile-img">
                <img src={porfileimg} alt="profile" className="w-100" />
            </div>
            <div className="profile-information p-3">
                <CustomTimeLine icon={<PersonOutlineIcon/>} >
                    <CustomTimeLineItem title="Name" text={resumeData.name}/>
                    <CustomTimeLineItem title="Title" text={resumeData.title}/>
                    <CustomTimeLineItem title="Email" text={resumeData.email}/>
                    
                    {Object.keys(resumeData.socials).map((key,idx)=>(
                        <CustomTimeLineItem  key={idx} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    ))}

                </CustomTimeLine >
                <br/>
                
                <a href={Pdf} target = "blank" download className="btn bg-main w-100 d-flex justify-content-between">Download CV <i className="fas fa-download"></i></a>
            </div>
        </div>
    )
}

export default Profile
