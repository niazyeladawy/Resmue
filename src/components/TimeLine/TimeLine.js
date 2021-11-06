import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './TimeLine.css'

function CustomTimeLine({ title ,icon,children}) {
    return (
        <Timeline className={"timeline"}>
            {/* item header */}
            <TimelineItem className={"timeline_firstItem"}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'} >{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><p className='h6 timeline_header' >{title}</p></TimelineContent>
            </TimelineItem>
            {children}
            {/* item 1 */}
            
        </Timeline>
    )
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className='separator-padding'>
        <TimelineDot className={'timeline_dot'} />
        <TimelineConnector />
    </TimelineSeparator>
)

export default CustomTimeLine
