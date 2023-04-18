import React from 'react';

import Section from "../Section/Section";
import Ticker from "../Ticker/Ticker";
import cl from './AboutSection.module.scss'

const AboutSection = () => {
    return (
        <Section id={'about'} title={'About'}>
            <div className={cl.about}>
                <div className={[cl.about__content, 'anim-bottom'].join(' ')}>

                    <h2 className={cl.about__title}>Hi, I&apos;m Maxim</h2>

                    <p className={cl.about__text}>
                        I have a diploma from VyatSU &quot;Informatics and Computer Engineering&quot; and more 4 years diligently studying programming.
                        <br/>
                        <br/>
                        During this time I have tested a large number of languages and technologies. For the past 3 years, I have been diving deeper into the Web. Gained experience in frontend (React) and backend (Node, java) parts.
                        <br/>
                        <br/>
                        Now I am looking for new opportunities to grow and develop myself with a new team.
                        <br/>
                        Working with me, you get a person who quickly adapts to the project, has a good learning ability and loves his job.
                    </p>

                </div>

                <div className={cl.about__ticker}>
                    <Ticker />
                </div>

            </div>
        </Section>
    );
};

export default AboutSection;