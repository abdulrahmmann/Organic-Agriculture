import {Navbar} from "../../shared/Navbar.tsx";
import {AboutHero} from "./Components/AboutHero.tsx";
import {AboutUs} from "./Components/AboutUs.tsx";
import {AboutChoose} from "./Components/AboutChoose.tsx";
import {AboutTeam} from "./Components/AboutTeam.tsx";
import {Subscribe} from "../../shared/Subscribe.tsx";
import {Footer} from "../../shared/Footer.tsx";
import {AboutOffer} from "./Components/AboutOffer.tsx";

export const AboutPage = () => {
    return (
        <section id={'about-page'}>
            <Navbar />
            <AboutHero />
            <AboutUs />
            <AboutChoose />
            <AboutTeam />
            <AboutOffer />
            <Subscribe />
            <Footer />
        </section>
    );
};
