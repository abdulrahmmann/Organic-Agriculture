import {AboutVegetableImage, ChemicalIcon, TruckIcon} from "../../../assets";
import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";
import {ButtonWithArrow} from "../../../shared/ButtonWithArrow.tsx";
import styled from "styled-components";

const ButtonWithArrowStyle = styled(ButtonWithArrow) `
        color: white;
        background-color: #274c5b;
        transition: 150ms linear;
        border: 2px solid #274c5b;
        padding-right: 2.4rem;
        padding-left: 2.4rem;
        display: block;
        margin-top: 3.2rem;
        &:hover {
            color: #274c5b;
            background-color: white;
        }
    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }
    `;
export const AboutUs = () => {
    return (
        <section id={'about-section'} className={'bg-white py-[4.8rem] sm:py-[9.6rem]'}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem] ss:px-[9.6rem] lg:px-[20rem]`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                        <img src={AboutVegetableImage} alt="About Vegetable Image"/>

                    <div>
                        <MainHeadingTitle title={'Only Pure And Organic'} description={'Fresh From Farm Return To Purity'} />

                        <div>
                            <p className={`text-[1.2rem] font-openSans font-medium leading-[2] text-ParagraphColor m-0 p-0 mb-[1rem]`}>
                                Our rich experience helps us in ensuring that the products brought to you are 100%
                                chemical-free. To live a better, healthier, and wholesome life by providing them with
                                100% certified, authentic organic food.
                            </p>
                            <p className={`text-[1.2rem] font-openSans font-medium leading-[2] text-ParagraphColor m-0 p-0`}>
                                Welcome to the world of nature and organic. Here you can discover the bounty of nature.
                                We have grown on the principles of health and care. We aim to give our customers a healthy
                                chemical-free meal for perfect nutrition.
                            </p>
                        </div>

                        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[1.2rem] my-[2.4rem]`}>
                            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6`}>
                                <img src={TruckIcon} alt="Truck Icon" className={`w-[4rem] h-[4rem]`} />
                                <h3 className={`text-[1.6rem] text-PrimaryColor font-Roboto font-medium leading-[1.4]`}>
                                    Modern Agriculture <br /> Equipment
                                </h3>
                            </div>

                            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6`}>
                                <img src={ChemicalIcon} alt="Truck Icon" className={`w-[4rem] h-[4rem]`} />
                                <h3 className={`text-[1.6rem] text-PrimaryColor font-Roboto font-medium leading-[1.4]`}>
                                    No Chemicals &<br /> Hormones Are Used
                                </h3>
                            </div>
                        </div>

                        <ButtonWithArrowStyle>Explore More</ButtonWithArrowStyle>
                    </div>

                </div>
            </div>
        </section>
    );
};


