import Head from 'next/head'

import Menu from "../components/Menu/Menu";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import AboutSection from "../components/AboutSection/AboutSection";
import WorksSection from "../components/WorksSection/WorksSection";
import ContactsSection from "../components/ContactsSection/ContactsSection";
import {WorkItemProps} from "../components/WorksSection/WorkItem";


interface HomeProps {
    works: WorkItemProps[]
}

const Home = ({works}: HomeProps) => {

    return (
        <>
            <Head>
                <title>Portfolio - Maxim Elkin</title>
            </Head>

            <Menu/>

            <main>
                <WelcomeSection/>
                <AboutSection/>
                <WorksSection works={works}/>
                <ContactsSection/>
            </main>
        </>
    )
}

Home.getInitialProps = async () => {
    try {
        const DATA_URL = process.env.DATA_URL!
        const res = await fetch(DATA_URL)
        const data: WorkItemProps[] = await res.json() as WorkItemProps[]
        return {works: data}
    } catch (e) {
        return {works: null}
    }
}

export default Home;
