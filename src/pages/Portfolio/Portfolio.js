import { Dialog, DialogActions, DialogContent, DialogTitle, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import resumeData from '../../utils/resumeData';
import { Grow } from '@mui/material';


import "./Portfolio.css"

function Portfolio() {
    const [tabVlue, setTabVlue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false)



    return (
        <div className="portfolio p-3 rounded-3 shadow   my-4 bg-white overflow-hidden">
            <div className="section-titlebg">
                <h2 className="section-title mb-4">Portfolio</h2>
                <div className="section-title-bg"></div>
            </div>
            <div className="item">
                <Tabs value={tabVlue} indicatorColor="secondary" className="custom-tabs" onChange={(event, newValue) => setTabVlue(newValue)}>
                    <Tab label="All" value="All" className={tabVlue === "All" ? 'customTabs-item active' : 'customTabs-item'} />
                    {[...new Set(resumeData.projects.map(item => item.tag))].map((tag, idx) => (
                        <Tab key={idx} label={tag} value={tag} className={tabVlue === tag ? 'customTabs-item active' : 'customTabs-item'} />
                    ))}
                </Tabs>
            </div>
            <div className="row mt-4">
                {
                    resumeData.projects.map((project, idx) => (
                        <>
                            {tabVlue === project.tag || tabVlue === 'All' ? (
                                <div className="col-md-4 mb-3" key={idx}>
                                    <Grow in timeout={1000}>
                                        <div className="project-item  shadow rounded-3 overflow-hidden" onClick={() => setProjectDialog(project)}>
                                            <img className='w-100' src={project.image} alt={project.title} />
                                            <div className='p-3'>
                                                <h4>{project.title}</h4>
                                                <p>{project.caption}</p>
                                            </div>
                                        </div>
                                    </Grow>
                                </div>
                            ) : null}

                        </>
                    ))
                }
            </div>
            <Dialog maxWidth='lg' open={projectDialog} onClose={() => setProjectDialog(false)}>
                <DialogTitle onClose={() => setProjectDialog(false)}>
                    <h4 className="text-center">{projectDialog.title}</h4>
                </DialogTitle>
                <img src={projectDialog.image} alt={projectDialog.title} />
                <DialogContent>
                    <p>{projectDialog.description}</p>
                </DialogContent>
                <DialogActions className="projectDialogActions">
                    {projectDialog?.links?.map((link,idx) => (
                        <a key={idx} href={link.link} target="_blank">{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Portfolio
