import {HomeIntroItem} from "./HomeIntroItem.tsx";
import {BgIntro1, BgIntro2} from "../../../assets";

export const HomeIntro = () => {
    const IntroItemsStyle = {
        itemStyle1: {
            backgroundColor: '#E6E7E9',
            backgroundImage: `url(${BgIntro1})`,
            backgroundSize: 'cover',
        },
        itemStyle2: {
            backgroundColor: '#E6E7E9',
            backgroundImage: `url(${BgIntro2})`,
            backgroundSize: 'cover',
        },
        titleStyle1: {
            color: '#fff',

        },
        subTitleStyle1: {
            color: '#fff',
            whiteSpace: 'pre-line',
            lineHeight: '1.3em'
        },
        titleStyle2: {
            color: '#7eb693',

        },
        subTitleStyle2: {
            color: '#274c5b',
            whiteSpace: 'pre-line',
            lineHeight: '1.3em'
        }
    }

    return (
        <section id={'Home-Intro-section'} className={`bg-white py-[4.8rem] sm:py-[9.6rem]`}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem] ss:px-[9.6rem] sm:px-[20rem]`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-[2.4rem]`}>
                    <HomeIntroItem style={IntroItemsStyle.itemStyle1} title={'Natural!!'} titleStyle={IntroItemsStyle.titleStyle1}
                                   subTitle={'Get Garden\n Fresh Fruits'} subTitleStyle={IntroItemsStyle.subTitleStyle1} />

                    <HomeIntroItem style={IntroItemsStyle.itemStyle2} title={'Offer!!'} titleStyle={IntroItemsStyle.titleStyle2}
                                   subTitle={'Get 10% off\n on Vegetables'} subTitleStyle={IntroItemsStyle.subTitleStyle2} />
                </div>
            </div>
        </section>
    );
};
