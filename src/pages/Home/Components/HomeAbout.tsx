import {HomeAboutIcon1, HomeAboutIcon2, HomeAboutImage} from "../../../assets";
import {HomeAboutInfoItem} from "./HomeAboutInfoItem.tsx";
import styled from "styled-components";
import {ButtonWithArrow} from "../../../shared/ButtonWithArrow.tsx";
import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";

const ButtonWithArrowStyle = styled(ButtonWithArrow) `
        color: white;
        background-color: #274c5b;
        transition: 150ms linear;
        border: 2px solid #274c5b;
        padding-right: 2.4rem;
        padding-left: 2.4rem;
        &:hover {
            color: #274c5b;
            background-color: white;
        }
    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }`;

export const HomeAbout = () => {
    return (
        <section id={'Home-About'} className={`bg-WhiteBackground`}>
            <div className={`max-w-[1400px] mx-auto py-[4.8rem]`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 justify-center items-center`}>
                    <div className={`hidden sm:block`}>
                        <img src={HomeAboutImage} alt={'Home About Image'} className={``}/>
                    </div>

                    <div className={`px-[3.2rem] sm:px-[9.6rem] md:px-[0]`}>
                        <MainHeadingTitle title={'About Us'} description={'We Believe In Organic Foods For Strong Health'} />

                        <p className={`text-ParagraphColor text-[1.2rem] font-openSans font-normal mb-[2.4rem] leading-[1.6]`}>
                            Welcome to the world of natural and organic. Here you can discover the bounty of nature.
                            We have grown on the principles of health, and care. We aim to give our customers a healthy
                            chemical-free meal for perfect nutrition.
                        </p>

                        <HomeAboutInfoItem title={'Organic Foods Only'}
                                           subTitle={'The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.'}
                                           image={`${HomeAboutIcon1}`} />

                        <HomeAboutInfoItem title={'Quality Standards'}
                                           subTitle={'Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.'}
                                           image={HomeAboutIcon2} />

                        <ButtonWithArrowStyle>Shop Now</ButtonWithArrowStyle>
                    </div>
                </div>
            </div>
        </section>
    );
};
