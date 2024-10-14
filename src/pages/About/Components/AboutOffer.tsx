import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";
import {Ginger, Pomegranate, Spicy, WhiteNutsAbout} from "../../../assets";

export const AboutOffer = () => {
    const style = {
        HeadingDescription: {
            marginRight: 'auto',
            marginLeft: 'auto',
            color: '#fff'
        },
    }
    return (
        <section id={'offer-section'} className={`bg-PrimaryColor py-[4.8rem] sm:py-[9.6rem]`}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem] sm:px-[9.6rem] lg:px-[20rem]`}>
                <div className={'text-center'}>
                    <MainHeadingTitle title={'The Products'} description={' We Offer Organic For You'}
                                      styleDescription={style.HeadingDescription}/>
                </div>

                <div className={`my-[3.2rem] relative`}>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8`}>
                        <div className={`bg-[#F0F0F0] rounded-[16px] text-center flex justify-center items-center h-fit`}>
                            <img src={Spicy} alt={'Spicy Image'} className={`object-cover rounded-[16px] h-[227.3px] w-full`}/>
                            <h3 className={`hidden md:block  absolute -bottom-[3.2rem] text-white text-[1.6rem] font-normal font-Roboto`}>
                                Spicy
                            </h3>
                        </div>

                        <div className={`bg-[#F0F0F0] rounded-[16px] text-center flex justify-center items-center h-fit`}>
                            <img src={WhiteNutsAbout} alt={'Spicy Image'} className={`object-cover rounded-[16px] h-[227.3px] w-full`}/>
                            <h3 className={`hidden md:block  absolute -bottom-[3.2rem] text-white text-[1.6rem] font-normal font-Roboto`}>
                                White Nuts
                            </h3>
                        </div>

                        <div className={`bg-[#F0F0F0] rounded-[16px] text-center flex justify-center items-center h-fit`}>
                            <img src={Pomegranate} alt={'Spicy Image'} className={`object-cover rounded-[16px] h-[227.3px] w-full`}/>
                            <h3 className={`hidden md:block  absolute -bottom-[3.2rem] text-white text-[1.6rem] font-normal font-Roboto`}>
                                Pomegranate
                            </h3>
                        </div>

                        <div className={` bg-[#F0F0F0] rounded-[16px] text-center flex justify-center items-center h-fit`}>
                            <img src={Ginger} alt={'Spicy Image'} className={`object-cover rounded-[16px] h-[227.3px] w-full`}/>
                            <h3 className={`hidden md:block absolute -bottom-[3.2rem] text-white text-[1.6rem] font-normal font-Roboto`}>
                                Ginger
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

