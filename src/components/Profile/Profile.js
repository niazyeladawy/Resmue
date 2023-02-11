import porfileimg from "../../assets/images/pp.jpg";
import './Profile.css';
import CustomTimeLine, { CustomTimelineSeparator } from '../TimeLine/TimeLine';
import React from 'react';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ResumeDataContext } from "../../context/resumeContext";
import { useContext } from "react";



function Profile() {
    const { data } = useContext(ResumeDataContext);

    const CustomTimeLineItem = ({ title, text, link }) => (
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline_content'>
                {title === 'Email' ? (<p className='timeline_text'><span>{title}: </span><a href={`mailto: ${text}`} target="blank">{text}</a></p>) : (link ? (<p className='timeline_text'><span>{title}: </span><a href={link} target="blank">{text}</a></p>) : (<p className='timeline_text'><span>{title}: </span>{text}</p>))}

            </TimelineContent>
        </TimelineItem>
    );

    return (
        <div className="profile shadow rounded-3 bg-white">
            <div className="profile-name p-3">
                <h2 className="text-uppercase h3">{data?.name}</h2>
                <p className="text-muted">{data?.title}</p>
            </div>
            <div className="profile-img">
                <img src={porfileimg} alt="profile" className="w-100" />
            </div>
            <div className="profile-information p-3">
                <CustomTimeLine icon={<PersonOutlineIcon />} >
                    <CustomTimeLineItem title="Name" text={data?.name} />
                    <CustomTimeLineItem title="Title" text={data?.title} />
                    <CustomTimeLineItem title="Email" text={data?.email} />

                    {data && Object.keys(data.socials).map((key, idx) => (
                        <CustomTimeLineItem key={idx} title={key} text={data.socials[key].text} link={data.socials[key].link} />
                    ))}

                </CustomTimeLine >
                <br />

                <a href='https://drive.google.com/file/d/19Y0Mu1Djyhb9yKBBIh_CapxLM3c3JL4M/view?usp=sharing' target="blank" className="btn bg-main w-100 d-flex justify-content-between">Download CV <i className="fas fa-download"></i></a>
            </div>
        </div>
    )
}

export default Profile
