import Image from "next/image";
import cl from './Prelodaer.module.scss'

const Preloader = () => {
    return (
        <div id={'preloader'} className={cl.preloader}>
            <Image src="/img/preloader.webp" alt={"preloader"} width={128} height={128}/>
        </div>
    );
};

export default Preloader;