import React from 'react'
import CustomTimeLine, { CustomTimelineSeparator } from '../../components/TimeLine/TimeLine';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import "./Resume.css";
import { TimelineContent, TimelineItem } from '@mui/lab';
import { FloatingLabel, Form, ProgressBar } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import { useContext } from 'react';
import { ResumeDataContext } from '../../context/resumeContext';

function Resume() {
    const { data } = useContext(ResumeDataContext);

    return (
        <div className="resume rounded-3 shadow   my-4 bg-white overflow-hidden">
            <div className="about px-3 bg-grey py-5">
                <div className="section-titlebg">
                    <h2 className="section-title mb-4">About Me</h2>
                    <div className="section-title-bg">

                    </div>
                </div>
                <p>{data?.about}</p>
            </div>
            <div className="education px-3 bg-white py-5">
                <div className="section-titlebg">
                    <h2 className="section-title mb-4">Resume</h2>
                    <div className="section-title-bg">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <CustomTimeLine title="Work Experience" icon={<WorkOutlineIcon />}>
                            {
                                data?.experiences.map((exp, idx) => (
                                    <TimelineItem key={idx}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <p className='timeline_title'>{exp.title}</p>
                                            <p className="resumedate">{exp.date}</p>
                                            <p className='timeline_desc'>{exp.desc}</p>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }
                        </CustomTimeLine>
                    </div>
                    <div className="col-md-6">
                        <CustomTimeLine title="Education History" icon={<SchoolIcon />}>
                            {
                                data?.education.map((exp, idx) => (
                                    <TimelineItem key={idx}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <p className='timeline_title'>{exp.title}</p>
                                            <p className="resumedate">{exp.date}</p>
                                            <p className='timeline_desc'>{exp.desc}</p>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }
                        </CustomTimeLine>
                    </div>
                </div>
            </div>
            <div className="skills px-3 bg-grey py-5">
                <div className="section-titlebg">
                    <h2 className="section-title mb-4">My skills</h2>
                    <div className="section-title-bg">

                    </div>
                </div>
                <div className="skills-content">
                    <div className="row">
                        {
                            data?.skills.map((skill, idx) => (
                                <div className="col-md-6 mb-3" key={idx}>
                                    <div className="item">
                                        <div className="d-flex justify-content-between ">
                                            <p className="mb-0">{skill.title}</p>
                                            <p className="mb-0">{skill.percentage}%</p>
                                        </div>
                                        <ProgressBar variant="main" now={skill.percentage} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="contact px-3 bg-white py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-titlebg">
                            <h2 className="section-title mb-4">Contact Form</h2>
                            <div className="section-title-bg">

                            </div>
                        </div>
                        <Form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Enter Name" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-item">
                                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            </div>

                            <Button text='submit' />


                        </Form>
                    </div>
                    <div className="col-md-6">
                        <div className="section-titlebg">
                            <h2 className="section-title mb-4">Contact Informations</h2>
                            <div className="section-title-bg"></div>
                        </div>
                        <div className="contact-info">
                            <p>Address: <span>{data?.address}</span></p>
                            <p>Phone: <span>{data?.phone}</span></p>
                            <p>Job: <span>{data?.title}</span></p>
                            <p>Email: <span>{data?.email}</span></p>
                            <div>
                            {data && Object.keys(data.socials).map(
                            (key,idx) =>(
                                <a  key={idx} href={data.socials[key].link} target="blank"><i className={data.socials[key].icon}></i> </a>
                            )
                        )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
