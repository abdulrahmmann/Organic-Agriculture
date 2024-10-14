import {CartIcon} from "../assets";

export const CartButton = () => {
    return (
        <div
            className={`cart-button rounded-[33px] bg-white hover:bg-SecondaryColor border-2 border-GreyBackground py-1 md:py-2 pr-[10px] ss:pr-[20px] pl-[2px] ss:pl-[6px] cursor-pointer flex items-center gap-3`}>

            <div className={`w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full bg-PrimaryColor flex justify-center items-center 
                            transition-colors`}>
                <img src={CartIcon} alt="Cart Button" className={`w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]`} />
            </div>

            <div className={`text-[1.2rem] ss:text-[1.4rem] font-Roboto font-medium text-PrimaryColor`}>
                Cart
            </div>

            <div className={`text-[1.2rem] ss:text-[1.4rem] font-Roboto font-medium text-PrimaryColor`}>
                (0)
            </div>
        </div>
    );
};

