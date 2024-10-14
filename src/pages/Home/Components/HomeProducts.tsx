import {HomeProductItems} from "../../../constants";
import {ProductItem} from "./ProductItem";
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
        display: block;
        margin-right: auto;
        margin-left: auto;
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

export const HomeProducts = () => {
    const StyleDescription = {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
    return (
        <section id={'home-products'} className={`bg-white py-[10rem]`}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem] sm:px-[20rem]`}>
                <div className={`text-center mb-[3.2rem]`}>
                    <MainHeadingTitle styleDescription={StyleDescription} title={'Categories'} description={'Our Products'} />
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`}>
                    {
                        HomeProductItems.slice(0, 8).map((product) => (
                            <ProductItem key={product.id} {...product} />
                        ))
                    }
                </div>
                <ButtonWithArrowStyle>Load More</ButtonWithArrowStyle>
            </div>
        </section>
    );
};

