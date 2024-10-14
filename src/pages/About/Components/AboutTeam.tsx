import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";
import {OurTeamItem} from "../../../shared/OurTeamItem.tsx";
import {OurTeam1, OurTeam2, OurTeam3} from "../../../assets";

export const AboutTeam = () => {
    const style = {
        HeadingDescription: {
            marginRight: 'auto',
            marginLeft: 'auto',
        }
    }
    return (
        <section id={'team-section'} className={'bg-white py-[4.8rem] sm:py-[9.6rem]'}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem] sm:px-[9.6rem] lg:px-[20rem]`}>

                <div className={'text-center'}>
                    <MainHeadingTitle title={'The Team'} description={'Our Organic Experts'}
                                      styleDescription={style.HeadingDescription} />
                    <p className={`text-[1.4rem] text-ParagraphColor font-normal font-openSans leading-[1.8] p-0 mb-[4.4rem]`}>
                        We have grown on the principles of health, ecology, and care. We aim to give our <br />
                        customers a healthy chemical-free meal for perfect nutrition.
                    </p>
                </div>

                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'}>
                    <OurTeamItem name={'Shane Watson'} job={'Financier'} image={OurTeam1} instagramAccount={'s'} facebookAccount={'5'} twitterAccount={'8'} />
                    <OurTeamItem name={'Maria Thomas'} job={'Marketer'} image={OurTeam2} instagramAccount={'s'} facebookAccount={'5'} twitterAccount={'8'} />
                    <OurTeamItem name={'Angeline flora'} job={'Farmer'} image={OurTeam3} instagramAccount={'s'} facebookAccount={'5'} twitterAccount={'8'} />
                </div>


            </div>
        </section>
    );
};

