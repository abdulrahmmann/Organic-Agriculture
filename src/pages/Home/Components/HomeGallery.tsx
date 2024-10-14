import {HomeGallery1, HomeGallery2, HomeGallery3} from "../../../assets";
import {HomeGalleryItem} from "./HomeGalleryItem.tsx";

export const HomeGallery = () => {
    const style = {
        item1: {
            backgroundImage: `url(${HomeGallery1})`,
            backgroundSize: 'cover'
        },
        item2: {
            backgroundImage: `url(${HomeGallery2})`,
            backgroundSize: 'cover'
        },
        item3: {
            backgroundImage: `url(${HomeGallery3})`,
            backgroundSize: 'cover'
        }
    }
    return (
        <section id={'gallery-section'} className={`w-full bg-[#F1F8F4]`}>
            <div className={`py-[10rem] px-[3.2rem]`}> {/*   sm:px-0   */}
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8`}>
                    <HomeGalleryItem key={1} style={style.item1} buttonTitle={'Organic Juice'}/>
                    <HomeGalleryItem key={2} style={style.item2} buttonTitle={'Organic Food'}/>
                    <HomeGalleryItem key={3} style={style.item3} buttonTitle={'Nuts Cookies'}/>
                </div>
            </div>
        </section>
    );
};
