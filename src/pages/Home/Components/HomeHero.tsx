import {ButtonWithArrow} from "../../../shared/ButtonWithArrow.tsx";
import styled from "styled-components";

const ButtonWithArrowStyle = styled(ButtonWithArrow) `
        color: #274c5b;
        background-color: #efd372;
        transition: 150ms linear;
        border: 2px solid #efd372;
        &:hover {
            background-color: white;
        }
    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }
    `;
export const HomeHero = () => {
    return (
        <section id={'home-hero-section'} className={`relative`}>
            <div className={`max-w-[1400px] mr-auto ml-auto px-[30px] ss:px-[100px] sm:px-[200px]`}>
                <div className={`py-[160px]`}>
                    <div className={`text-center sm:text-start`}>
                        <p className={`font-yellowtail font-semibold text-[3.6rem] ss:text-[4.0rem] sm:text-[3.0rem] text-SecondaryColor mb-6`}>
                            100% Natural Food
                        </p>

                        <p className={`font-Roboto font-semibold text-[3.6rem] ss:text-[4.4rem] text-PrimaryColor leading-tight mb-10`}>
                            Welcome to the <br/>
                            world of nature <br/>
                            and organic.
                        </p>
                        <ButtonWithArrowStyle>
                            Explore Now
                        </ButtonWithArrowStyle>
                    </div>
                </div>
            </div>
        </section>
    );
};
