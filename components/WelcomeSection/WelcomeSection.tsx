import React from 'react';

import cl from './WelcomeSection.module.scss'
import ConsoleText from "../Animated/ConsoleText/ConsoleText";
import AnimatedLine from "../Animated/AnimatedLine/AnimatedLine";
import PaperText from "../Animated/PaperText/PaperText";

const WelcomeSection = () => {
    return (
        <section id="home" className={cl.welcome}>
            <AnimatedLine/>
            <div className={[cl.welcome__container, 'container'].join(' ')}>



                <div className={cl.welcome__title}>
                    <h1><ConsoleText text={"Welcome to my"}/><br/><ConsoleText text={"portfolio"} /></h1>
                </div>

                <div className={cl.welcome__subtitle}>
                    <h2>
                        <span>Crafted by</span>
                        <a href="https://vk.com/maksidiobnimu" target="_blank" rel="noreferrer">
                            <PaperText text={"Maxim  Elkin"}/>
                        </a>
                    </h2>
                </div>

                <div className={cl.welcome__see}>
                    <a href="#about">
                        <span>See my portfolio</span>
                        <br/>
                        <i></i>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WelcomeSection;