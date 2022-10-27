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
                        More than 4 years diligently studying programming.
                        <br/>
                        I have a diploma from VyatSU &quot;Informatics and Computer Engineering&quot;, now I am studying at the master&apos;s program at BMSTU (iu7).
                        During this time I have tested a large number of languages and technologies.
                        I studied in depth everything related to the WEB and created several projects.
                        <br/>
                        <br/>
                        I currently live in Moscow and am ready to consider job offers.
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