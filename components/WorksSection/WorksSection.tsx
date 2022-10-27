import React, {FC} from 'react';
import Section from "../Section/Section";
import WorkItem, {WorkItemProps} from "./WorkItem";

interface WorksSectionProps {
    works: WorkItemProps[]
}

const WorksSection: FC<WorksSectionProps> = ({works}) => {
    return (
        <Section id={'works'} title={'My works'}>

            {works && works.map((work, i) => <WorkItem key={i} {...work} />)}

        </Section>
    );
};

export default WorksSection;