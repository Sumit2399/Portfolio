import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
function Experience(props) {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                date='2015-2016'
                iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<SchoolIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                    Inspiration Senior Secondary School,Haldwani,Uttarakhand
                    </h3>
                    <p>Secondary School Certificate (Class 10th)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education'
                date='2017-2018'
                iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<SchoolIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                    Inspiration Senior Secondary School,Haldwani,Uttarakhand
                    </h3>
                    <p>Higher Secondary Certificate (Class12th)</p>
                </VerticalTimelineElement>
           

            <VerticalTimelineElement className='vertical-timeline-element--education'
                date='2019-2023'
                iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<SchoolIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                    G L Bajaj Group Of Institutions,Mathura
                    </h3>
                    <p>Bachelor Of Technology,CSE</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            
        </div>
    );
}

export default Experience;