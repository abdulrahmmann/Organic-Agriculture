import {BgSubscribe} from "../assets";
import styled from "styled-components";
import {SimpleButton} from "./SimpleButton.tsx";

const ButtonWithArrowStyle = styled(SimpleButton)`
    color: white;
    background-color: #274c5b;
    transition: 150ms linear;
    border: 2px solid #274c5b;
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    display: block;

    &:hover {
        color: #274c5b;
        background-color: transparent;
    }

    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }
`;

export const Subscribe = () => {
    const style = {
        backgroundImage: `url(${BgSubscribe})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100%',
        borderRadius: '20px',
    }
    return (
        <section id={'subscribe-section'} className={`pt-[10rem]`}>
            <div className={`max-w-[1400px] mx-auto px-[1.6rem] ss:px-[3.2rem] lg:px-[20rem]`}>
                <div style={style} className={`px-[3rem] md:px-[7rem] py-[6rem]`}>
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-center`}>

                        <h3 className={`text-white text-center md:text-start mx-auto md:mx-0 text-[3.2rem] font-Roboto font-bold capitalize mb-0 p-0 w-fit leading-[1.4]`}>
                            Subscribe to <br/>
                            our Newsletter
                        </h3>

                        <form className={`col-span-2 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4`}>
                            <input type={"text"} placeholder={'Your Email Address'} className={`w-full sm:w-fit flex-grow-1 sm:flex-grow-[0.3] px-[2.4rem] py-[2rem] rounded-[11px] font-normal font-Roboto text-PrimaryColor text-[1.2rem] border-none outline-none`}/>
                            <ButtonWithArrowStyle className={`w-full sm:w-fit`}>Subscribe</ButtonWithArrowStyle>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

// <div className={`justify-start w-fit`}>
//     <h3 className={`text-white text-center sm:text-start text-[3.2rem] font-Roboto font-bold capitalize mb-0 p-0 w-fit leading-[1.2]`}>
//         Subscribe to <br/>
//         our Newsletter
//     </h3>
// </div>
// <div className={`flex justify-end`}>
//     <form className={`flex flex-col sm:flex-row gap-4 justify-center items-center`}>
//         <input placeholder={'Your Email Address'} type={'text'}
//                className={`text-left rounded-[11px] border-none outline-none px-[1.6rem] py-[2.1rem] h-[7.3rem] sm:py-0 w-full mx-auto text-[1.4rem] font-normal italic font-Roboto`}/>
//         <ButtonWithArrowStyle className={`justify-self-end`}>Subscribe</ButtonWithArrowStyle>
//     </form>
// </div>