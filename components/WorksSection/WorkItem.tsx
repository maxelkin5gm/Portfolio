import React, {FC} from 'react';

import cl from './WorksSection.module.scss'
import Image from "next/image";


export interface WorkItemProps {
    img: string
    imgPhone: string
    sideImg: 'right' | 'left'
    title: string
    stack: string
    description: string
    link?: string

}

const WorkItem: FC<WorkItemProps> = ({
                                         img,
                                         imgPhone,
                                         sideImg,
                                         title,
                                         link,
                                         stack,
                                         description
                                     }) => {

    const workImages =
        <div className={[cl.works__img, sideImg === 'left' ? 'anim-left' : 'anim-right'].join(' ')}>
            {/* this need use img for correct animations */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt="work img"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={cl.imgPhone} src={imgPhone!} alt="work img-mobile"/>
        </div>

    const workText =
        <div className={[cl.works__content, sideImg === 'left' ? 'anim-right' : 'anim-left'].join(' ')}>
            <h2 className={cl.works__title}>{title}</h2>
            <p className={cl.works__text}>
                <strong>Stack:</strong> {stack}
                <br/>
                <br/>
                {description}
            </p>
            <a className={cl.works__btn} href={link} target="_blank"
               rel='noreferrer'>View Project</a>
        </div>

    return (
        <div className={cl.works}>
            {(sideImg === 'right') && <>{workText} {workImages}</>}
            {(sideImg === 'left') && <>{workImages} {workText}</>}
        </div>
    );
};

export default WorkItem;