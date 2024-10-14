import {BuyIcon, CardSecurityIcon, GreenVegetableImage, NaturalFoodIcon, PhoneTimerIcon} from "../../../assets";
import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";
import {ChoseItem} from "./ChoseItem.tsx";
import {ChooseFeatureItem} from "./ChooseFeatureItem.tsx";

export const AboutChoose = () => {
    return (
        <section id={'choose-section'} className={'bg-WhiteBackground py-[4.8rem] sm:py-[9.6rem]'}>
            <div className={`max-w-[1400px] mx-auto px-[3.2rem] lg:px-[9.6rem] xl:px-[20rem]`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10`}>
                    <div>
                        <MainHeadingTitle title={'Why Choose us?'}
                                          description={'We Cultivating The Chemical  & Fertilizer Free Products'}/>

                        <p className={`text-[1.2rem] font-normal font-openSans leading-[1.8] text-ParagraphColor p-0 mb-p[1.6rem]`}>
                            After a lot of struggles in our lives, we now are popular and now we are producing the best
                            organic
                            products. Initially.
                        </p>


                        <div className={``}>
                            <ChoseItem title={'100% Natural Product'}
                                       description={'In our listing, we have several collections of organic products and place where you need to choose the product you want.'}/>
                            <ChoseItem title={'Same Day Delivery'}
                                       description={'If you are not comfortable going to the nearby market place we also will deliver your product to your doorstep.'}/>
                        </div>
                    </div>

                    <div>
                        <img src={GreenVegetableImage} alt="Green Vegetable Image" className={`rounded-[16px]`}/>
                    </div>
                </div>

                <div className={`my-[4.4rem] md:my-[9.6rem] mx-0 md:mx-[8rem]`}>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto`}>
                        <ChooseFeatureItem title={'Return Policy'} description={'If the product having any issues you can return the product.'}
                                           icon={BuyIcon} />

                        <ChooseFeatureItem title={'100% Fresh'} description={'Fully organic and fresh products are delivered at door step.'}
                                           icon={NaturalFoodIcon} />

                        <ChooseFeatureItem title={'Support 24/7'} description={'Our support team is available for take care the customers.'}
                                           icon={PhoneTimerIcon} />

                        <ChooseFeatureItem title={'Secured Payment'} description={'Fully secured payment methods are used for buying product.'}
                                           icon={CardSecurityIcon} />
                    </div>
                </div>

            </div>
        </section>
    );
};

