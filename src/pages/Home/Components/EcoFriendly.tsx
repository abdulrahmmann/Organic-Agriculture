import {EcoFriendlyImage} from "../../../assets";

export const EcoFriendly = () => {
    return (
        <section id={'eco-friendly-section'} className={`w-full`}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 items-center relative`}>
                <img src={EcoFriendlyImage} alt="eco friendly image"
                     className={`hidden sm:block h-[100vh] object-cover`}/>

                <div className={`pr-[3.2rem] sm:pr-[10rem] pl-[3.2rem] py-[3.2rem] bg-white eco-content`}>
                    <div>
                        <h3 className={`text-SecondaryColor text-[3rem] font-yellowtail font-medium mb-2`}>
                            Eco Friendly
                        </h3>
                        <p className={`text-PrimaryColor text-[3rem] font-Roboto font-bold mb-4 leading-tight whitespace-pre-wrap`}>
                            Econis is a Friendly
                            Organic Store
                        </p>
                    </div>

                    <div className={`mb-[20px] mt-[30px]`}>
                        <h3 className={`text-PrimaryColor text-[1.8rem] font-Roboto font-[600] mb-[2px]`}>
                            Choose Your Products
                        </h3>
                        <p className={`text-ParagraphColor text-[1.2rem] font-openSans font-normal mb-[2.4rem] leading-[1.6]`}>
                            In our listing, we have several collections of organic products. This is the place where you
                            need to choose the product you want.
                        </p>
                    </div>

                    <div className={`mb-[20px]`}>
                        <h3 className={`text-PrimaryColor text-[1.8rem] font-Roboto font-[600] mb-[2px]`}>
                            Farming Strategies of Today
                        </h3>
                        <p className={`text-ParagraphColor text-[1.2rem] font-openSans font-normal mb-4 leading-loose`}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
                            laudantium. Sed ut perspiciatis. </p>
                    </div>

                    <div className={`mb-[20px]`}>
                        <h3 className={`text-PrimaryColor text-[1.8rem] font-Roboto font-[600] mb-[2px]`}>
                            Learn How to Grow Yourself

                        </h3>
                        <p className={`text-ParagraphColor text-[1.2rem] font-openSans font-normal mb-4 leading-loose`}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
                            laudantium. Sed ut perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
