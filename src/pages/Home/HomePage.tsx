import {Navbar} from "../../shared/Navbar.tsx";
import {HomeHero} from "./Components/HomeHero.tsx";
import {HomeIntro} from "./Components/HomeIntro.tsx";
import {HomeAbout} from "./Components/HomeAbout.tsx";
import {HomeProducts} from "./Components/HomeProducts.tsx";
import {HomeTestimonial} from "./Components/HomeTestimonial.tsx";
import {HomeOfferProducts} from "./Components/HomeOfferProducts.tsx";
import {EcoFriendly} from "./Components/EcoFriendly.tsx";
import {HomeGallery} from "./Components/HomeGallery.tsx";
import {HomeNews} from "./Components/HomeNews.tsx";
import {Subscribe} from "../../shared/Subscribe.tsx";
import {Footer} from "../../shared/Footer.tsx";

export const HomePage = () => {
    return (
        <section id={'HomePage'}>
            <Navbar />
            <HomeHero />
            <HomeIntro />
            <HomeAbout />
            <HomeProducts />
            <HomeTestimonial />
            <HomeOfferProducts />
            <EcoFriendly />
            <HomeGallery />
            <HomeNews />
            <Subscribe />
            <Footer />
        </section>
    );
};

