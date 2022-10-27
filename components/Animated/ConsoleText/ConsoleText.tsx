import React, {FC} from 'react';

import cl from './ConsoleText.module.scss'

interface ConsoleTextProps {
    text: string
}

const ConsoleText: FC<ConsoleTextProps> = ({text}) => {
    return (
        <div className={cl.wrapper} >
            <span>{text}</span>
        </div>
    );
};

export default ConsoleText;