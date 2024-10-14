import {HomeProductItems} from "../../../constants";
import {ProductItem} from "./ProductItem";
import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";
import styled from "styled-components";
import {ButtonWithArrow} from "../../../shared/ButtonWithArrow.tsx";

const ButtonWithArrowStyle = styled(ButtonWithArrow) `
        color: #274c5b;
        background-color: #efd372;
        transition: 150ms linear;
        border: 2px solid #efd372;
        padding-right: 2.4rem;
        padding-left: 2.4rem;
        display: block;
     &:hover {
            color: #274c5b;
            background-color: white;
        }
    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }
    `;

export const HomeOfferProducts = () => {
    const StyleDescription = {
        marginRight: 'auto',
        marginLeft: 'auto',
        color: '#ffffff'
    }

    return (
        <section id={'home-offer'} className={`w-full bg-PrimaryColor py-[10rem] relative`}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem]  sm:px-[20rem]`}>
                <div className={` mb-[3.2rem] flex justify-between items-center`}>
                    <MainHeadingTitle styleDescription={StyleDescription} title={'Offer Products'}
                                      description={'We Offer Organic For You'}/>

                    <ButtonWithArrowStyle className={`sm:block absolute bottom-[2rem] left-[50%] translate-x-[-50%]`}>View All Product</ButtonWithArrowStyle>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`}>
                    {
                        HomeProductItems.slice(0, 4).map((product) => (
                            <ProductItem key={product.id} {...product} />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

