import {Rating} from "../../../assets";

type ProductItemProps = {
    id: number,
    tag: string,
    image: string,
    type: string,
    newPrice: number,
    oldPrice: number,
    rating: number
}

export const ProductItem = ({tag, image, type, newPrice, oldPrice, rating}: ProductItemProps) => {
    return (
        <div className={`bg-WhiteBackground rounded-[14px] `}>
            <div className={`py-[16px] px-[20px]`}>
                <div className={`bg-PrimaryColor rounded-[8px] px-[14px] p-[6px] inline-block`}>
                    <span className={`text-white font-openSans font-[600] text-[1.2rem] text-center inline-block`}>
                        {tag}
                    </span>
                </div>

                <img src={image} alt="Product Item Image" className={`w-full h-[200px] object-contain mix-blend-darken`} />

                <div
                    className={`text-[1.4rem] text-PrimaryColor font-Roboto font-medium border-b-[1px] border-b-GreyBackground pb-[10px] mb-[10px]`}>
                    {type}
                </div>

                <div className={`flex justify-between items-center`}>
                    <div className={`flex items-center gap-4`}>
                        <span className={`text-[1.4rem] text-DarkGrey font-openSans font-bold line-through`}>
                            ${oldPrice.toFixed(2)}
                        </span>
                        <span className={`text-[1.6rem] text-PrimaryColor font-openSans font-bold`}>
                            ${newPrice.toFixed(2)}
                        </span>
                    </div>

                    <div className={``}>
                        <img src={Rating} alt={`rating image ${rating}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

