import React, {FC} from 'react';

import cl from './Section.module.scss'

interface SectionProps {
    id: string,
    title: string
    children: React.ReactNode
}

const Section: FC<SectionProps> = ({id, title, children}) => {
    return (
        <section id={id} className={cl.section}>
            <div className="container">

                <h1 className={cl.section__title}>{title}</h1>
                {children}

            </div>
        </section>
    );
};

export default Section;