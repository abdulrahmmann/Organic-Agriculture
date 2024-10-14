import {Logo, SocialFacebook, SocialInstagram, SocialPintrest, SocialTwitter} from "../assets";

export const Footer = () => {
    return (
        <section id={'footer-section'}>
            <div className={`w-full bg-white pt-[10rem] pb-10`}>
                <div className={`max-w-[1400px] mx-auto px-[1.6rem] ss:px-[3.2rem] lg:px-[20rem] gap-4`}>
                    <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-[4.4rem]`}>
                        {/* First Column */}
                        <div
                            className={`text-start flex flex-col gap-3 border-solid lg:border-r-[1px] border-GreyBackground`}>
                            <h3 className={`text-[2rem] font-semibold font-Roboto text-PrimaryColor mb-[1.6rem] leading-[1.6`}>
                                Contact Us
                            </h3>
                            <div className={`mb-[2rem]`}>
                                <h3 className={`text-[1.2rem] text-ParagraphColor font-semibold mb-[1rem] leading-[1.6`}>
                                    Email
                                </h3>
                                <p className={`text-[1.2rem] text-ParagraphColor font-medium leading-[1.6`}>
                                    needhelp@Organia.com
                                </p>
                            </div>
                            <div className={`mb-[2rem]`}>
                                <h3 className={`text-[1.2rem] text-ParagraphColor font-semibold mb-[1rem] leading-[1.6`}>
                                    Phone
                                </h3>
                                <p className={`text-[1.2rem] text-ParagraphColor font-medium leading-[1.6`}>
                                    666 888 888
                                </p>
                            </div>
                            <div className={`mb-[2rem]`}>
                                <h3 className={`text-[1.2rem] text-ParagraphColor font-semibold mb-[1rem] leading-[1.6`}>
                                    Address
                                </h3>
                                <p className={`text-[1.2rem] text-ParagraphColor font-medium leading-[1.6]`}>
                                    88 road, borklyn street, USA
                                </p>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className={`col-span-2 px-10 text-center border-solid lg:border-r-[1px] border-GreyBackground t`}>
                            <img src={Logo} alt="Organick Logo" className={`h-[4.4rem] mb-[2rem]`}/>
                            <p className={`text-[1.4rem] text-ParagraphColor font-medium font-openSans leading-[1.6] mb-[3.2rem]`}>
                                We are a popular and farming company aspiring to be a leader in the Organic food
                                industry.
                            </p>
                            <div className={``}>
                                <img src={SocialInstagram} alt="Social Instagram Image"
                                     className={`inline-block mr-[1rem] w-[45px] h-[45px]`}/>
                                <img src={SocialFacebook} alt="Social Facebook Image"
                                     className={`inline-block mr-[1rem] w-[45px] h-[45px]`}/>
                                <img src={SocialTwitter} alt="Social Twitter Image"
                                     className={`inline-block mr-[1rem] w-[45px] h-[45px]`}/>
                                <img src={SocialPintrest} alt="Social Pintrest Image" className={`inline-block w-[45px] h-[45px]`}/>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className={`text-start`}>
                            <ul className={`flex flex-col gap-3`}>
                                <li className={`text-[2rem] font-semibold font-Roboto text-PrimaryColor mb-[1.6rem] leading-[1.6 `}>
                                    Utility Pages
                                </li>
                                <li className={`text-[1.2rem] text-ParagraphColor font-medium mb-[3rem] leading-[1.6`}>
                                    Style Guide
                                </li>
                                <li className={`text-[1.2rem] text-ParagraphColor font-medium mb-[3rem] leading-[1.6`}>
                                    404 Not Found
                                </li>
                                <li className={`text-[1.2rem] text-ParagraphColor font-medium mb-[3rem] leading-[1.6`}>
                                    Licences
                                </li>
                                <li className={`text-[1.2rem] text-ParagraphColor font-medium leading-[1.6`}>
                                    Changelog
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`text-[1.2rem] text-ParagraphColor font-openSans font-medium text-center leading-[1.6] pt-[1.6rem] border-t-[1px] border-solid border-GreyBackground`}>
                    Copyright © Organick| Designed by <span className={`font-semibold`}>VictorFlow</span> Templates -
                    Powered by <span className={`font-semibold`}>Webflow</span>
                </div>
            </div>
        </section>
    );
};

