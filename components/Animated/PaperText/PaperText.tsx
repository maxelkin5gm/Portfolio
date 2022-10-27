import React, {FC} from 'react';

import cl from './PaperText.module.scss'

interface PaperTextProps {
    text: string
}

const PaperText: FC<PaperTextProps> = ({text}) => {
    return (
        <div className={cl.wrapper} translate={"no"}>
            {text.split('').map((char, i) => (
                <div key={i} className={cl.letter} style={{'--delay': `${i*0.2}s`} as any}>
                    <span className={cl.source}>{char}</span>
                    <span className={cl.shadow}>{char}</span>
                    <span className={cl.overlay}>{char}</span>
                </div>
            ))}
        </div>
    );
};

export default PaperText;