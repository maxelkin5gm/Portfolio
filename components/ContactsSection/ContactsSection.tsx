import React from 'react';
import Section from "../Section/Section";

import cl from './ContactsSection.module.scss'
import Image from "next/image";

const ContactsSection = () => {
    return (
        <Section id={'contacts'} title={'Contacts'}>
            <div className={cl.contacts}>
                <p className={cl.contacts__email}>maxelkin5gm@icloud.com</p>

                <p className={cl.contacts__subtitle}>Social</p>

                <div className={cl.contacts__social}>
                    <a href="https://vk.com/maksidiobnimu" target="_blank" rel="noreferrer">
                        <Image src="/img/social/vk.png" alt="vk" width={60} height={60}/></a>
                    <a href="https://instagram.com/makselkin" target="_blank" rel="noreferrer">
                        <Image src="/img/social/instagram.png" alt="inst" width={60} height={60}/>
                    </a>
                    <a href="https://github.com/maxelkin5gm" target="_blank" rel="noreferrer">
                        <Image src="/img/social/github.png" alt="github" width={70} height={70}/>
                    </a>
                    <a href="https://t.me/maxelkin5gm" target="_blank" rel="noreferrer">
                        <Image src="/img/social/telegram.png" alt="github" width={56} height={56}/>
                    </a>
                    <a href="https://www.linkedin.com/in/maxelkin5gm/" target="_blank" rel="noreferrer">
                        <Image src="/img/social/linkedIn.png" alt="github" width={56} height={56}/>
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default ContactsSection;